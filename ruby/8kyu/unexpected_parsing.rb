# Find and fix the bug

def get_status(is_busy)
  status = is_busy ? "busy" : "available"
  { 'status' => status }
end

p get_status(true)
# "busy"

p get_status(false)
# "available"