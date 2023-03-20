import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://gmqjledurmvdfwuatfpl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcWpsZWR1cm12ZGZ3dWF0ZnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMTM0NTMsImV4cCI6MTk5NDc4OTQ1M30.q1lbDn5XZNdznaiA4uLQpun-wDTHzPOPj2eSvYdqK4I')

export default supabase;