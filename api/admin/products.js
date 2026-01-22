const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { retailer_id, category_id, name, price, brand, part_number, url, image_url, compatibility } = req.body;
        
        try {
            const { data: product, error } = await supabase
                .from('products')
                .insert({
                    retailer_id,
                    category_id,
                    name,
                    price,
                    brand,
                    part_number,
                    url,
                    image_url
                })
                .select()
                .single();
            
            if (error) throw error;
            
            if (compatibility && Array.isArray(compatibility) && compatibility.length > 0) {
                const compatData = compatibility.map(c => ({
                    product_id: product.id,
                    make: c.make,
                    model: c.model,
                    year_from: c.year_from,
                    year_to: c.year_to
                }));
                
                await supabase.from('product_vehicles').insert(compatData);
            }
            
            res.json({ success: true, id: product.id });
        } catch (error) {
            console.error('Add product error:', error);
            res.status(500).json({ error: error.message });
        }
    } else {
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
            console.error('Products error:', error);
            res.status(500).json({ error: 'Failed to load products' });
        }
    }
};
