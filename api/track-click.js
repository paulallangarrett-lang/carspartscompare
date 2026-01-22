const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { product_id, retailer_id, vrm, category_slug } = req.body;
    
    try {
        await supabase.from('clicks').insert({
            product_id,
            retailer_id,
            vrm,
            category_slug,
            ip_address: req.headers['x-forwarded-for'] || 'unknown',
            user_agent: req.headers['user-agent'],
            referrer: req.headers['referer']
        });
        
        res.json({ success: true });
    } catch (error) {
        console.error('Click tracking error:', error);
        res.json({ success: false });
    }
};
