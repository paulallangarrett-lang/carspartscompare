const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    try {
        const [products, retailers, categories, vehicles] = await Promise.all([
            supabase.from('products').select('id', { count: 'exact', head: true }).eq('active', true),
            supabase.from('retailers').select('id', { count: 'exact', head: true }).eq('active', true),
            supabase.from('categories').select('id', { count: 'exact', head: true }).eq('active', true),
            supabase.from('vehicles').select('id', { count: 'exact', head: true })
        ]);
        
        res.json({
            products: products.count || 0,
            retailers: retailers.count || 0,
            categories: categories.count || 0,
            vehicles: vehicles.count || 0
        });
    } catch (error) {
        console.error('Stats error:', error);
        res.status(500).json({ error: 'Failed to load stats' });
    }
};
