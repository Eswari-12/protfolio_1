/*
# Create contact_messages table

1. New Tables
   - `contact_messages`
     - `id` (uuid, primary key)
     - `name` (text, not null)
     - `email` (text, not null)
     - `message` (text, not null)
     - `created_at` (timestamp)

2. Security
   - Enable RLS on `contact_messages`.
   - Allow anon + authenticated to INSERT (anyone can submit the contact form).
   - No SELECT policy for public — only accessible via service role or admin.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
