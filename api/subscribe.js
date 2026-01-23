import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://fvawakrizcmgkkoqdjer.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2YXdha3JpemNtZ2trb3FkamVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Njg4NjcsImV4cCI6MjA2MzI0NDg2N30.Ej8pGTdNeaEbay_kkC_RGYwPv5V06UlSKOnMESDs5Tw'
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, source } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('email_subscribers')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      return res.status(200).json({ message: 'Already subscribed', alreadyExists: true });
    }

    // Insert new subscriber
    const { error } = await supabase
      .from('email_subscribers')
      .insert({
        email: email.toLowerCase(),
        source: source || 'homepage',
        subscribed_at: new Date().toISOString()
      });

    if (error) throw error;

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Email signup error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
