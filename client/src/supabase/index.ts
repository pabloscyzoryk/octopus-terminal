// imports
import envSetupForCompilation from '../utils/envSetupForCompilation';
import { createClient } from '@supabase/supabase-js';
import findConfig from 'find-config';
import * as dotenv from 'dotenv';

// env init
if (envSetupForCompilation.SUPABASE_KEY && envSetupForCompilation.SUPABASE_URL) {
  process.env.SUPABASE_KEY = envSetupForCompilation.SUPABASE_KEY;
  process.env.SUPABASE_URL = envSetupForCompilation.SUPABASE_URL;
} else {
  dotenv.config({ path: findConfig('.env') });
}

// supabase init
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;
