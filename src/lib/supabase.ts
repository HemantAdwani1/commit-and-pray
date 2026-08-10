import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

// This client is safe to expose in the browser bundle: it is initialized
// with the public anon key only, which is restricted by Row Level Security
// policies defined in supabase/migrations. Never place the service role
// key in frontend code or environment variables prefixed with VITE_.
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false },
      })
    : null;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
