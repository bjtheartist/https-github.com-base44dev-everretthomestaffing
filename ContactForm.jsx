import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { db } from './instantdbClient';
import { id as generateId } from '@instantdb/react';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Label } from './label';
import { useLocation } from 'react-router-dom';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const location = useLocation();

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    defaultValues: {
      subject: 'Service Inquiry'
    }
  });

  // Update subject based on URL parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setValue('subject', subjectParam);
    }
  }, [location.search, setValue]);

  const submitMutation = useMutation({
    mutationFn: async (data) => {
      // 1. Create InstantDB record
      const contactId = generateId();
      await db.transact([
        db.tx.ContactRequests[contactId].update({
          ...data,
          createdAt: Date.now(),
        })
      ]);

      // 2. Send email via Netlify function
      const emailResponse = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!emailResponse.ok) {
        throw new Error('Failed to send email notification');
      }

      return { id: contactId };
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
    },
  });

  const onSubmit = (data) => {
    submitMutation.mutate({ ...data, status: 'new' });
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-everett-cream">
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-everett-cream text-everett-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-everett-green mb-4">Message Sent!</h3>
          <p className="text-everett-green/70 mb-8 font-sans">Thank you for reaching out. We will be in touch shortly.</p>
          <Button onClick={() => setIsSuccess(false)} variant="outline_everett" className="rounded-full">Send Another Message</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="text-2xl font-serif font-medium text-everett-green mb-2">Send a Message</h3>
            <p className="text-everett-green/60 mb-6 font-sans">Tell us a little about your situation or inquiry.</p>
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-everett-green">Your Name</Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="rounded-xl bg-everett-cream/50 border-everett-grid h-12 focus:ring-everett-clay focus:border-everett-clay font-sans"
                  placeholder="Jane Doe"
                />
                {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-everett-green">Phone Number</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  className="rounded-xl bg-everett-cream/50 border-everett-grid h-12 focus:ring-everett-clay focus:border-everett-clay font-sans"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-everett-green">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="rounded-xl bg-everett-cream/50 border-everett-grid h-12 focus:ring-everett-clay focus:border-everett-clay font-sans"
                  placeholder="jane@example.com"
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-everett-green">Subject</Label>
                <select
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full rounded-xl bg-everett-cream/50 border-everett-grid h-12 px-3 text-sm focus:ring-everett-clay focus:border-everett-clay outline-none ring-offset-2 focus:ring-2 transition-all font-sans text-everett-green"
                >
                  <option value="Service Inquiry">Service Inquiry (Looking for Care)</option>
                  <option value="Job Application">Job Application (I want to work)</option>
                  <option value="General Question">General Question</option>
                  <option value="Partnership">Partnership Opportunity</option>
                </select>
                {errors.subject && <span className="text-sm text-red-500">{errors.subject.message}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-everett-green">Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                className="rounded-xl bg-everett-cream/50 border-everett-grid min-h-[150px] focus:ring-everett-clay focus:border-everett-clay font-sans"
                placeholder="How can we help you?"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={submitMutation.isPending}
            className="w-full h-14 bg-everett-clay hover:bg-everett-terracotta text-white rounded-full text-lg font-medium font-sans shadow-lg hover:shadow-xl transition-all"
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}