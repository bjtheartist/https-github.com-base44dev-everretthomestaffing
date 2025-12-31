import { init } from '@instantdb/react';

const APP_ID = import.meta.env.VITE_INSTANTDB_APP_ID;

// Only initialize if APP_ID is provided
export const db = APP_ID ? init({ appId: APP_ID }) : null;
