const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('categories')
            .select('id, name, slug, icon, sort_order')
            .eq('active', true)
            .order('sort_order');
        
        if (error) throw error;
        res.json(data);
    } catch (error) {
        console.error('Categories error:', error);
        res.status(500).json({ error: 'Failed to load categories' });
    }
};
