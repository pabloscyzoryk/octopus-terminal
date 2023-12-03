// imports
import { createClient } from '@supabase/supabase-js';
import findConfig from 'find-config';
import * as dotenv from 'dotenv';

// env init
dotenv.config({ path: findConfig('.env') });

// supabase init
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;
