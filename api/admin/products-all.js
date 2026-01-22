const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('products')
            .select(`*, retailers (name), categories (name)`)
            .order('id', { ascending: false });
        
        if (error) throw error;
        
        const products = data.map(p => ({
            ...p,
            retailer_name: p.retailers?.name,
            category_name: p.categories?.name
        }));
        
        res.json(products);
    } catch (error) {
        console.error('All products error:', error);
        res.status(500).json({ error: 'Failed to load products' });
    }
};
