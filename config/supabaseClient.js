// supabaseClient.js
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.NEXT_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { supabase };
