const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://fvawakrizcmgkkoqdjer.supabase.co',
    'sb_publishable__TpEKk1ZW535Q7hzK5vTpg_JcfpPzpd'
);

module.exports = async (req, res) => {
    const { vrm } = req.query;
    
    if (!vrm) {
        return res.status(400).json({ error: 'VRM required' });
    }
    
    const cleanVrm = vrm.toUpperCase().replace(/\s/g, '');
    
    try {
        // Check cache first
        const { data: cached } = await supabase
            .from('vehicles')
            .select('*')
            .eq('vrm', cleanVrm)
            .single();
        
        if (cached) {
            return res.json({
                vrm: cached.vrm,
                make: cached.make,
                model: cached.model,
                year: cached.year,
                engineSize: cached.engine_size,
                fuelType: cached.fuel_type,
                cached: true
            });
        }
        
        // TODO: Replace with real UKVD API call
        const mockVehicle = {
            vrm: cleanVrm,
            make: 'Ford',
            model: 'Focus',
            year: 2018,
            engineSize: '1.5',
            fuelType: 'Petrol'
        };
        
        // Cache the result
        await supabase.from('vehicles').insert({
            vrm: cleanVrm,
            make: mockVehicle.make,
            model: mockVehicle.model,
            year: mockVehicle.year,
            engine_size: mockVehicle.engineSize,
            fuel_type: mockVehicle.fuelType
        });
        
        res.json(mockVehicle);
    } catch (error) {
        console.error('VRM lookup error:', error);
        res.status(500).json({ error: 'Failed to lookup vehicle' });
    }
};
