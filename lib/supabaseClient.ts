// lib/supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined.');
}

if (!supabaseKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined.');
}

console.log(supabaseUrl);

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);