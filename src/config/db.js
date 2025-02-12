import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://knvzyvyxgebojcytuldr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtudnp5dnl4Z2Vib2pjeXR1bGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMjM0MjAsImV4cCI6MjA1NDc5OTQyMH0.mm6ZRtpDdihbc5zMQYHSV6n-tlGP99Hi7HW0S350t0g';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
});

export default supabase;

