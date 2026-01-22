const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

const AWIN_PUBLISHER_ID = '2741130';
const AWIN_ADVERTISERS = {
    'eurocarparts': '',
    'gsf': '',
    'carparts4less': '',
    'autodoc': ''
};

function generateAffiliateLink(retailerSlug, productUrl) {
    const advertiserId = AWIN_ADVERTISERS[retailerSlug];
    if (advertiserId && AWIN_PUBLISHER_ID) {
        const encodedUrl = encodeURIComponent(productUrl);
        return `https://www.awin1.com/cread.php?awinmid=${advertiserId}&awinaffid=${AWIN_PUBLISHER_ID}&ued=${encodedUrl}`;
    }
    return productUrl;
}

module.exports = async (req, res) => {
    const { category, make, model, year } = req.query;
    
    if (!category) {
        return res.status(400).json({ error: 'Category is required' });
    }
    
    try {
        const { data: cat } = await supabase
            .from('categories')
            .select('id')
            .eq('slug', category)
            .single();
        
        if (!cat) {
            return res.status(404).json({ error: 'Category not found' });
        }
        
        const { data: products, error } = await supabase
            .from('products')
            .select(`
                id, name, description, price, original_price, url, image_url, brand, part_number, in_stock,
                retailers (id, name, slug, website, affiliate_id)
            `)
            .eq('category_id', cat.id)
            .eq('active', true);
        
        if (error) throw error;
        
        let filteredProducts = products;
        if (make && model) {
            const productIds = products.map(p => p.id);
            
            const { data: compatProducts } = await supabase
                .from('product_vehicles')
                .select('product_id')
                .in('product_id', productIds)
                .eq('make', make)
                .eq('model', model);
            
            if (compatProducts && compatProducts.length > 0) {
                const compatIds = compatProducts.map(c => c.product_id);
                filteredProducts = products.filter(p => compatIds.includes(p.id));
            }
        }
        
        const grouped = {};
        filteredProducts.forEach(p => {
            const key = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (!grouped[key]) {
                grouped[key] = {
                    name: p.name,
                    brand: p.brand,
                    part_number: p.part_number,
                    prices: []
                };
            }
            
            const affiliateUrl = generateAffiliateLink(p.retailers.slug, p.url);
            
            grouped[key].prices.push({
                product_id: p.id,
                retailer: p.retailers.name,
                retailer_slug: p.retailers.slug,
                price: parseFloat(p.price),
                original_price: p.original_price ? parseFloat(p.original_price) : null,
                url: affiliateUrl,
                direct_url: p.url,
                in_stock: p.in_stock
            });
        });
        
        const result = Object.values(grouped).map(item => {
            item.prices.sort((a, b) => a.price - b.price);
            return item;
        });
        
        res.json(result);
    } catch (error) {
        console.error('Products error:', error);
        res.status(500).json({ error: 'Failed to load products' });
    }
};
