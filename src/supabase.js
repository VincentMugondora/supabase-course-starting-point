
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://silaaiszcrounenhaogi.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbGFhaXN6Y3JvdW5lbmhhb2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NjE1MzEsImV4cCI6MjA2ODIzNzUzMX0.g6LV_4N3UMCU1SfqLf6F0Z42ewDssKbH80IQc0XEcuQ
const supabase = createClient(supabaseUrl, supabaseKey)
