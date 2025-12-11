import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://woylmwohzztknqnrcyyn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndveWxtd29oenp0a25xbnJjcnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzOTk3MTQsImV4cCI6MjA4MDk3NTcxNH0.XYaCsWJlo91D0cnCnMZON0N-FdYfiQFwDuKoEBt41GI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
