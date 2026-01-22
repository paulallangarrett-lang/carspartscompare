const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { products } = req.body;
    
    if (!products || !Array.isArray(products)) {
        return res.status(400).json({ error: 'Products array required' });
    }
    
    try {
        let imported = 0;
        
        for (const p of products) {
            const { data, error } = await supabase
                .from('products')
                .insert({
                    retailer_id: p.retailer_id,
                    category_id: p.category_id,
                    external_id: p.external_id,
                    name: p.name,
                    price: p.price,
                    brand: p.brand,
                    part_number: p.part_number,
                    url: p.url,
                    image_url: p.image_url
                })
                .select()
                .single();
            
            if (!error && data) {
                imported++;
                
                if (p.make && p.model) {
                    await supabase.from('product_vehicles').insert({
                        product_id: data.id,
                        make: p.make,
                        model: p.model,
                        year_from: p.year_from,
                        year_to: p.year_to
                    });
                }
            }
        }
        
        res.json({ success: true, imported });
    } catch (error) {
        console.error('Import error:', error);
        res.status(500).json({ error: error.message });
    }
};
