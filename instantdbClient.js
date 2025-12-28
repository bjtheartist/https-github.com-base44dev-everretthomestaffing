import { init } from '@instantdb/react';

const APP_ID = import.meta.env.VITE_INSTANTDB_APP_ID;

export const db = init({ appId: APP_ID });
