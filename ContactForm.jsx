import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { db } from './instantdbClient';
import { id as generateId } from '@instantdb/react';
import { useMutation } from '@tanstack/react-query';
import { CheckCircle, Spinner, ArrowUpRight } from '@phosphor-icons/react';
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

  // Premium input styling
  const inputBaseClass = `
    w-full
    bg-elite-beige/50
    border-0
    border-b
    border-elite-sage/40
    rounded-none
    px-0
    py-4
    text-elite-navy
    text-base
    font-sans
    placeholder:text-elite-taupe/60
    focus:outline-none
    focus:border-elite-navy
    focus:bg-transparent
    transition-all
    duration-300
  `;

  const labelClass = `
    block
    font-heading
    text-sm
    text-elite-charcoal
    mb-2
    tracking-wide
  `;

  return (
    <div>
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-elite-sage/30 text-elite-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} weight="thin" />
          </div>
          <h3 className="text-2xl font-display font-light text-elite-navy mb-4">Message Sent</h3>
          <p className="text-elite-charcoal mb-8">Thank you for reaching out. We will be in touch shortly.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-elite-navy text-[13px] font-medium uppercase tracking-[0.08em] border-b border-elite-navy pb-1 hover:text-elite-charcoal hover:border-elite-charcoal transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Form Header */}
          <div className="mb-10">
            <h3 className="text-2xl font-display font-light text-elite-navy mb-3">Send a Message</h3>
            <p className="text-elite-charcoal text-[15px]">Tell us a little about your situation or inquiry.</p>
          </div>

          {/* Name & Phone Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className={labelClass}>Your Name</label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={inputBaseClass}
                placeholder="Jane Doe"
              />
              {errors.name && <span className="text-sm text-elite-rose mt-2 block">{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input
                id="phone"
                {...register("phone")}
                className={inputBaseClass}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Email & Subject Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className={inputBaseClass}
                placeholder="jane@example.com"
              />
              {errors.email && <span className="text-sm text-elite-rose mt-2 block">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="subject" className={labelClass}>Subject</label>
              <select
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className={`${inputBaseClass} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%239e8a78%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0_center]`}
              >
                <option value="Service Inquiry">Service Inquiry (Looking for Care)</option>
                <option value="Job Application">Job Application (I want to work)</option>
                <option value="General Question">General Question</option>
                <option value="Partnership">Partnership Opportunity</option>
              </select>
              {errors.subject && <span className="text-sm text-elite-rose mt-2 block">{errors.subject.message}</span>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea
              id="message"
              {...register("message")}
              className={`${inputBaseClass} min-h-[140px] resize-none`}
              placeholder="How can we help you?"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="group w-full flex items-center justify-center gap-2 bg-elite-navy text-elite-cream px-8 py-5 text-[13px] font-medium uppercase tracking-[0.08em] rounded-[2px] hover:bg-elite-charcoal transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-elite-navy/15"
            >
              {submitMutation.isPending ? (
                <>
                  <Spinner size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
