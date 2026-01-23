const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://fvawakrizcmgkkoqdjer.supabase.co',
  'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async function handler(req, res) {
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

    // Check if email already exists (use maybeSingle to avoid error when not found)
    const { data: existing, error: selectError } = await supabase
      .from('email_subscribers')
      .select('id')
      .eq('email', email.toLowerCase())
      .maybeSingle();

    if (existing) {
      return res.status(200).json({ message: 'Already subscribed', alreadyExists: true });
    }

    // Insert new subscriber
    const { error: insertError } = await supabase
      .from('email_subscribers')
      .insert({
        email: email.toLowerCase(),
        source: source || 'homepage'
      });

    if (insertError) {
      console.error('Insert error:', insertError);
      return res.status(500).json({ error: 'Failed to subscribe', details: insertError.message });
    }

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Email signup error:', error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
}
