const fs = require('fs');

// Rich content templates for different part categories
const partContent = {
  'brake-pads': {
    guide: 'Brake pads are a critical safety component that should be replaced every 25,000-70,000 miles depending on driving style. Signs of worn brake pads include squealing noises, longer stopping distances, and a vibrating brake pedal.',
    tips: ['Check brake pad thickness during every service', 'Replace pads in pairs (both front or both rear)', 'Consider upgrading to performance pads for spirited driving', 'Ceramic pads produce less dust but cost more'],
    warning: 'Always replace brake pads before they wear completely - metal-on-metal contact can damage expensive brake discs.',
    lifespan: '25,000 - 70,000 miles'
  },
  'brake-discs': {
    guide: 'Brake discs (rotors) work with brake pads to slow your vehicle. They typically last 50,000-70,000 miles but should be inspected regularly for scoring, warping, or minimum thickness.',
    tips: ['Measure disc thickness with a micrometer', 'Look for scoring or grooves on the surface', 'Warped discs cause vibration when braking', 'Always replace discs in pairs'],
    warning: 'Never fit new brake pads to worn discs - this reduces braking efficiency and causes premature pad wear.',
    lifespan: '50,000 - 70,000 miles'
  },
  'oil-filter': {
    guide: 'Oil filters remove contaminants from engine oil, protecting vital engine components. They should be replaced at every oil change - typically every 10,000-15,000 miles or annually.',
    tips: ['Always use the correct filter for your engine', 'Apply a thin layer of oil to the rubber gasket before fitting', 'Hand-tighten only - do not use tools', 'Dispose of old filters responsibly at a recycling centre'],
    warning: 'A clogged oil filter restricts oil flow and can cause catastrophic engine damage.',
    lifespan: '10,000 - 15,000 miles'
  },
  'air-filter': {
    guide: 'The engine air filter prevents dust and debris entering the engine. A clean air filter improves fuel economy and engine performance. Replace every 15,000-30,000 miles.',
    tips: ['Check air filter condition at every service', 'Dusty environments require more frequent changes', 'Performance filters can be cleaned and reused', 'A dirty filter can reduce fuel economy by up to 10%'],
    warning: 'Never run the engine without an air filter - even small particles can cause internal engine damage.',
    lifespan: '15,000 - 30,000 miles'
  },
  'cabin-filter': {
    guide: 'The cabin filter (pollen filter) cleans air entering the passenger compartment. It removes dust, pollen, and pollutants. Replace every 15,000-20,000 miles or annually.',
    tips: ['Essential for allergy sufferers', 'Activated carbon filters also remove odours', 'A blocked filter reduces heater and AC efficiency', 'Usually located behind the glovebox'],
    warning: 'A dirty cabin filter can cause unpleasant smells and reduced airflow from vents.',
    lifespan: '15,000 - 20,000 miles'
  },
  'spark-plugs': {
    guide: 'Spark plugs ignite the fuel-air mixture in petrol engines. Worn plugs cause misfires, poor fuel economy, and difficulty starting. Replace every 20,000-60,000 miles depending on type.',
    tips: ['Iridium and platinum plugs last longer than copper', 'Always use the correct heat range for your engine', 'Gap plugs to manufacturer specification', 'Replace all plugs at once for even performance'],
    warning: 'Worn spark plugs can damage the catalytic converter due to unburnt fuel.',
    lifespan: '20,000 - 60,000 miles'
  },
  'clutch-kit': {
    guide: 'A clutch kit typically includes the friction plate, pressure plate, and release bearing. Clutches last 60,000-100,000 miles depending on driving style. City driving and towing reduce clutch life.',
    tips: ['Avoid riding the clutch in traffic', 'Slipping or juddering indicates wear', 'Consider replacing the flywheel at the same time', 'Professional fitting recommended due to complexity'],
    warning: 'A failing clutch can leave you stranded - replace at first signs of slipping.',
    lifespan: '60,000 - 100,000 miles'
  },
  'timing-belt-kit': {
    guide: 'The timing belt synchronises engine components and is critical for engine operation. Failure causes catastrophic engine damage. Replace every 60,000-100,000 miles or 5 years.',
    tips: ['Always replace the water pump and tensioners at the same time', 'Check your service book for exact intervals', 'Timing chains last longer but still need inspection', 'This is a complex job - professional fitting recommended'],
    warning: 'Timing belt failure in an interference engine will cause pistons to hit valves, destroying the engine.',
    lifespan: '60,000 - 100,000 miles or 5 years'
  },
  'water-pump': {
    guide: 'The water pump circulates coolant through the engine and radiator. Failure causes overheating and potential engine damage. Usually replaced with the timing belt.',
    tips: ['Listen for bearing noise or whining', 'Check for coolant leaks around the pump', 'Replace coolant when fitting a new pump', 'OEM quality pumps are worth the extra cost'],
    warning: 'A leaking water pump can cause sudden overheating and head gasket failure.',
    lifespan: '60,000 - 100,000 miles'
  },
  'alternator': {
    guide: 'The alternator charges the battery and powers electrical systems while the engine runs. Signs of failure include dim lights, battery warning light, and electrical issues.',
    tips: ['Test alternator output with a multimeter (13.5-14.5V)', 'Squealing noise may indicate a worn belt', 'Check connections for corrosion', 'Refurbished alternators offer good value'],
    warning: 'A failing alternator will eventually drain the battery completely, leaving you stranded.',
    lifespan: '100,000 - 150,000 miles'
  },
  'starter-motor': {
    guide: 'The starter motor cranks the engine to begin combustion. Symptoms of failure include clicking sounds, slow cranking, or no response when turning the key.',
    tips: ['Check battery condition first - weak batteries cause similar symptoms', 'Tapping the starter can temporarily fix a stuck solenoid', 'Refurbished units are often as reliable as new', 'Ensure correct fitment for your engine variant'],
    warning: 'Grinding noises indicate the starter gear is not engaging properly and can damage the flywheel.',
    lifespan: '100,000 - 150,000 miles'
  },
  'battery': {
    guide: 'Car batteries typically last 3-5 years. Cold weather, short journeys, and age reduce battery life. Signs of a failing battery include slow cranking and electrical issues.',
    tips: ['Check battery age - most have a date code', 'Ensure correct size and terminal position', 'Higher cold cranking amps (CCA) is better for UK winters', 'Keep terminals clean and tight'],
    warning: 'A weak battery puts extra strain on the alternator and starter motor.',
    lifespan: '3 - 5 years'
  },
  'shock-absorbers': {
    guide: 'Shock absorbers (dampers) control spring movement and maintain tyre contact with the road. Worn shocks increase stopping distances and reduce handling. Replace every 50,000-100,000 miles.',
    tips: ['Test by pushing down on each corner - it should bounce once only', 'Look for oil leaks on the shock body', 'Replace in pairs (both front or both rear)', 'Consider uprated shocks for improved handling'],
    warning: 'Worn shock absorbers can increase braking distances by up to 20%.',
    lifespan: '50,000 - 100,000 miles'
  },
  'coil-springs': {
    guide: 'Coil springs support vehicle weight and absorb road imperfections. They can sag or break over time, causing uneven ride height and poor handling.',
    tips: ['Check for visible cracks or breaks', 'Sagging springs cause uneven tyre wear', 'Always replace in pairs', 'Consider uprated springs for heavy loads or towing'],
    warning: 'Broken springs can puncture tyres or cause loss of control.',
    lifespan: '50,000 - 100,000 miles'
  },
  'wheel-bearing': {
    guide: 'Wheel bearings allow smooth wheel rotation. Symptoms of wear include humming or growling noises that change with speed, and play in the wheel.',
    tips: ['Noise often gets louder when turning', 'Check for play by rocking the wheel top to bottom', 'Replace the entire hub assembly if bearings are integrated', 'Use quality bearings - cheap ones fail quickly'],
    warning: 'A seized wheel bearing can cause the wheel to lock or detach.',
    lifespan: '85,000 - 100,000 miles'
  },
  'egr-valve': {
    guide: 'The EGR valve recirculates exhaust gases to reduce emissions. They commonly clog with carbon, causing rough running, poor fuel economy, and the engine management light.',
    tips: ['Symptoms include rough idle and hesitation', 'Carbon cleaning can extend life', 'Blanking plates are illegal for road use', 'Diesel engines are more prone to EGR issues'],
    warning: 'A stuck EGR valve can cause MOT failure and increased emissions.',
    lifespan: '80,000 - 100,000 miles'
  },
  'turbo': {
    guide: 'Turbochargers increase engine power by forcing more air into the cylinders. They spin at up to 250,000 RPM and require good oil supply. Signs of failure include blue smoke and power loss.',
    tips: ['Let the engine idle before switching off to cool the turbo', 'Use quality oil and change frequently', 'Whistling or whining indicates bearing wear', 'Check for play in the turbo shaft'],
    warning: 'Running low on oil can destroy a turbo within seconds.',
    lifespan: '100,000 - 150,000 miles'
  },
  'radiator': {
    guide: 'The radiator cools engine coolant using airflow. Leaks, blockages, or damaged fins reduce cooling efficiency and can cause overheating.',
    tips: ['Check for visible leaks and corrosion', 'Flush the cooling system when replacing', 'Inspect radiator hoses at the same time', 'Ensure the cooling fan operates correctly'],
    warning: 'A blocked radiator causes overheating which can warp the cylinder head.',
    lifespan: '80,000 - 150,000 miles'
  },
  'thermostat': {
    guide: 'The thermostat regulates coolant flow to maintain optimal engine temperature. A stuck thermostat causes overheating (stuck closed) or poor heating/fuel economy (stuck open).',
    tips: ['Usually a cheap and easy fix', 'Replace coolant when fitting', 'Symptoms include fluctuating temperature gauge', 'Consider replacing the housing at the same time'],
    warning: 'Overheating from a stuck thermostat can cause head gasket failure.',
    lifespan: '100,000+ miles'
  },
  'wiper-blades': {
    guide: 'Wiper blades should be replaced every 6-12 months as rubber degrades from UV exposure and use. Streaking, smearing, or squeaking indicates replacement is needed.',
    tips: ['Clean blades regularly to extend life', 'Lift blades away from screen in freezing weather', 'Flat blades work better than traditional types', 'Replace both blades at the same time'],
    warning: 'Poor visibility from worn wipers is an MOT failure and safety hazard.',
    lifespan: '6 - 12 months'
  }
};

// Default content for parts not in the list
const defaultContent = {
  guide: 'This is an important component for your vehicle. Quality parts ensure reliability and safety. We compare prices from leading UK retailers to help you find the best deal.',
  tips: ['Always verify fitment using your registration number', 'OEM (Original Equipment Manufacturer) parts offer guaranteed compatibility', 'Check warranty terms before purchasing', 'Consider fitting costs when comparing prices'],
  warning: 'Always ensure parts are compatible with your specific vehicle variant before purchasing.',
  lifespan: 'Varies by component'
};

function getPartContent(slug) {
  for (const [key, content] of Object.entries(partContent)) {
    if (slug.includes(key)) {
      return content;
    }
  }
  return defaultContent;
}

function generateRichContent(vehicle, part, slug) {
  const content = getPartContent(slug);
  
  return `
<section class="info-section" style="background:#fff;border-radius:8px;padding:1.5rem;margin-top:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1);">
<h2 style="font-size:1.25rem;margin-bottom:1rem;color:#1a1a2e;">Buying Guide: ${vehicle} ${part}</h2>
<p style="margin-bottom:1rem;">${content.guide}</p>

<h3 style="font-size:1.1rem;margin:1.25rem 0 0.75rem;color:#1a1a2e;">💡 Top Tips</h3>
<ul style="margin:0 0 1rem 1.5rem;">
${content.tips.map(tip => `<li style="margin-bottom:0.5rem;">${tip}</li>`).join('\n')}
</ul>

<div style="background:#fff3cd;border-left:4px solid #ffc107;padding:1rem;margin:1rem 0;border-radius:0 4px 4px 0;">
<strong>⚠️ Important:</strong> ${content.warning}
</div>

<h3 style="font-size:1.1rem;margin:1.25rem 0 0.75rem;color:#1a1a2e;">📊 Expected Lifespan</h3>
<p>Typical replacement interval: <strong>${content.lifespan}</strong></p>
<p style="font-size:0.9rem;color:#666;margin-top:0.5rem;">This can vary based on driving conditions, vehicle use, and part quality.</p>
</section>

<section class="faq-section" style="background:#fff;border-radius:8px;padding:1.5rem;margin-top:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1);">
<h2 style="font-size:1.25rem;margin-bottom:1rem;color:#1a1a2e;">Frequently Asked Questions</h2>

<details style="margin-bottom:1rem;border-bottom:1px solid #eee;padding-bottom:1rem;">
<summary style="cursor:pointer;font-weight:600;color:#1a1a2e;">How do I know if my ${vehicle} needs new ${part.toLowerCase()}?</summary>
<p style="margin-top:0.75rem;color:#555;">Common signs include unusual noises, warning lights, reduced performance, or visible wear. Check your vehicle handbook for service intervals and have components inspected during routine servicing.</p>
</details>

<details style="margin-bottom:1rem;border-bottom:1px solid #eee;padding-bottom:1rem;">
<summary style="cursor:pointer;font-weight:600;color:#1a1a2e;">Should I use OEM or aftermarket ${part.toLowerCase()}?</summary>
<p style="margin-top:0.75rem;color:#555;">OEM (Original Equipment) parts are made by or for the vehicle manufacturer and guarantee fit. Quality aftermarket parts from brands like Bosch, Brembo, or Sachs often match OEM quality at lower prices. Avoid cheap unbranded parts for safety-critical components.</p>
</details>

<details style="margin-bottom:1rem;border-bottom:1px solid #eee;padding-bottom:1rem;">
<summary style="cursor:pointer;font-weight:600;color:#1a1a2e;">Can I fit ${part.toLowerCase()} myself?</summary>
<p style="margin-top:0.75rem;color:#555;">This depends on the component and your mechanical experience. Some parts like filters and wiper blades are straightforward DIY jobs. Others like clutches and timing belts require specialist tools and expertise. When in doubt, consult a professional mechanic.</p>
</details>

<details style="margin-bottom:1rem;">
<summary style="cursor:pointer;font-weight:600;color:#1a1a2e;">Why do prices vary so much between retailers?</summary>
<p style="margin-top:0.75rem;color:#555;">Price differences come from various factors: buying power, overhead costs, brand partnerships, and promotional offers. Some retailers focus on premium brands while others stock budget options. Always check the brand and specifications to ensure you're comparing like-for-like.</p>
</details>
</section>

<section class="related-section" style="background:#fff;border-radius:8px;padding:1.5rem;margin-top:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1);">
<h2 style="font-size:1.25rem;margin-bottom:1rem;color:#1a1a2e;">About the ${vehicle}</h2>
<p>The ${vehicle} is one of the most popular vehicles on UK roads, known for its reliability and practicality. Whether you're doing routine maintenance or repairs, using quality parts ensures your vehicle continues to perform at its best.</p>
<p style="margin-top:0.75rem;">Regular servicing and timely replacement of wear items not only keeps your ${vehicle} running smoothly but can also improve fuel economy, safety, and resale value.</p>
</section>`;
}

let count = 0;
let skipped = 0;

const skipFiles = ['index.html', 'about.html', 'contact.html', 'privacy.html', 'terms.html', 'cookies.html', 'admin.html'];

fs.readdirSync('.').filter(f => f.endsWith('.html') && !skipFiles.includes(f)).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if already has rich content
  if (content.includes('Buying Guide:')) {
    skipped++;
    return;
  }
  
  // Extract vehicle and part from filename
  const slug = file.replace('.html', '');
  const parts = slug.split('-');
  
  // Try to identify vehicle and part from slug
  let vehicle = '';
  let part = '';
  
  // Common patterns: ford-fiesta-brake-pads, bmw-3-series-oil-filter
  if (slug.includes('ford-')) vehicle = 'Ford ' + capitalise(parts[1]);
  else if (slug.includes('vauxhall-')) vehicle = 'Vauxhall ' + capitalise(parts[1]);
  else if (slug.includes('vw-')) vehicle = 'Volkswagen ' + capitalise(parts[1]);
  else if (slug.includes('bmw-')) vehicle = 'BMW ' + capitalise(parts[1] + ' ' + (parts[2] || ''));
  else if (slug.includes('mercedes-')) vehicle = 'Mercedes ' + capitalise(parts[1] + '-' + (parts[2] || ''));
  else if (slug.includes('audi-')) vehicle = 'Audi ' + capitalise(parts[1]);
  else if (slug.includes('toyota-')) vehicle = 'Toyota ' + capitalise(parts[1]);
  else if (slug.includes('nissan-')) vehicle = 'Nissan ' + capitalise(parts[1]);
  else if (slug.includes('honda-')) vehicle = 'Honda ' + capitalise(parts[1]);
  else if (slug.includes('hyundai-')) vehicle = 'Hyundai ' + capitalise(parts[1]);
  else if (slug.includes('kia-')) vehicle = 'Kia ' + capitalise(parts[1]);
  else if (slug.includes('peugeot-')) vehicle = 'Peugeot ' + capitalise(parts[1]);
  else if (slug.includes('renault-')) vehicle = 'Renault ' + capitalise(parts[1]);
  else if (slug.includes('skoda-')) vehicle = 'Skoda ' + capitalise(parts[1]);
  else if (slug.includes('seat-')) vehicle = 'SEAT ' + capitalise(parts[1]);
  else if (slug.includes('volvo-')) vehicle = 'Volvo ' + capitalise(parts[1]);
  else if (slug.includes('mini-')) vehicle = 'Mini ' + capitalise(parts[1]);
  else if (slug.includes('fiat-')) vehicle = 'Fiat ' + capitalise(parts[1]);
  else if (slug.includes('citroen-')) vehicle = 'Citroen ' + capitalise(parts[1]);
  else if (slug.includes('mazda-')) vehicle = 'Mazda ' + capitalise(parts[1]);
  else if (slug.includes('suzuki-')) vehicle = 'Suzuki ' + capitalise(parts[1]);
  else if (slug.includes('alfa-romeo-')) vehicle = 'Alfa Romeo ' + capitalise(parts[2]);
  else if (slug.includes('land-rover-') || slug.includes('range-rover')) vehicle = 'Land Rover ' + capitalise(parts.slice(0, 3).join(' '));
  else if (slug.includes('jaguar-')) vehicle = 'Jaguar ' + capitalise(parts[1]);
  else vehicle = capitalise(parts.slice(0, 2).join(' '));
  
  // Extract part name (usually last 1-3 words)
  const partWords = [];
  const partKeywords = ['pads', 'discs', 'filter', 'plugs', 'kit', 'pump', 'motor', 'bearing', 'valve', 'sensor', 'alternator', 'battery', 'clutch', 'turbo', 'radiator', 'thermostat', 'blades', 'mirror', 'spring', 'absorber', 'arm', 'joint', 'mount', 'gasket', 'belt', 'chain', 'hose', 'light', 'lamp'];
  
  for (let i = parts.length - 1; i >= 0; i--) {
    partWords.unshift(parts[i]);
    if (partKeywords.some(kw => parts[i].includes(kw)) || partWords.length >= 3) break;
  }
  part = capitalise(partWords.join(' '));
  
  // Generate and insert rich content before closing main tag
  const richContent = generateRichContent(vehicle, part, slug);
  
  if (content.includes('</main>')) {
    content = content.replace('</main>', richContent + '\n</main>');
    fs.writeFileSync(file, content);
    count++;
  }
});

function capitalise(str) {
  return str.split(/[-\s]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log('Added rich content to ' + count + ' files');
console.log('Skipped ' + skipped + ' files (already had content)');
