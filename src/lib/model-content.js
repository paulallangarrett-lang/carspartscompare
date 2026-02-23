// src/lib/model-content.js
// Unique editorial content per model to address AdSense "low value content" rejection.
// Each entry provides genuinely useful, model-specific information for car owners.

const MODEL_CONTENT = {
  // ─── FORD ───────────────────────────────────────────────
  'ford-focus': {
    yearRange: '2004–2025',
    intro: 'The Ford Focus has been one of the UK\'s best-selling cars for over two decades, known for sharp handling and affordable running costs.',
    commonIssues: [
      { issue: 'DMF (dual mass flywheel) failure', detail: 'Particularly affects 1.6 and 2.0 TDCi diesel models from 2005–2014. Symptoms include rattling at idle and juddering when pulling away. Budget £400–700 for a clutch and flywheel kit.', categories: ['clutch-kits', 'flywheels'] },
      { issue: 'EGR valve clogging', detail: 'Common on 1.6 TDCi engines. Causes rough idling, loss of power, and the engine management light. Cleaning can work temporarily but replacement is often needed.', categories: ['sensors'] },
      { issue: 'Rear suspension knocking', detail: 'The rear trailing arm bushes wear out, especially on Mk2 and Mk3 models. Often misdiagnosed as shock absorbers — check bushes first before replacing shocks.', categories: ['shock-absorbers', 'suspension-arms'] },
      { issue: 'Power steering rack leak', detail: 'Mk2 Focus (2004–2011) models with electric power steering can develop steering column issues. Mk3 models occasionally leak from the steering rack.', categories: ['tie-rod-ends'] },
      { issue: 'Thermostat housing cracking', detail: 'The plastic thermostat housing on 1.6 and 2.0 petrol engines can crack and leak coolant. Relatively cheap part but overheating risk if ignored.', categories: ['thermostats', 'water-pumps'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles / 24 months',
      sparkPlugs: '37,500 miles / 36 months (petrol)',
      brakeFluid: 'Every 2 years',
      coolant: 'Every 10 years / 150,000 miles',
      timingBelt: '125,000 miles / 10 years (diesel only — petrols use a chain)',
    },
    quickFacts: [
      'Mk2 (2004–2011) and Mk3 (2011–2018) are the most common on UK roads',
      '1.0 EcoBoost engine won International Engine of the Year 6 times in a row',
      'ST and RS variants use different brake and suspension components — always check with your reg',
      'Mk4 (2018+) shares the C2 platform with the Kuga and uses more expensive parts',
    ],
    partsTip: 'The Focus shares many components with the C-Max and Kuga, so parts availability is excellent and prices are competitive. Generic aftermarket parts work well for routine servicing.',
  },

  'ford-fiesta': {
    yearRange: '2002–2023',
    intro: 'The UK\'s best-selling car for over a decade, the Ford Fiesta is cheap to run and well-supported by the aftermarket parts industry.',
    commonIssues: [
      { issue: 'Clutch cable snapping', detail: 'Mk6 (2002–2008) models use a clutch cable rather than hydraulic system. These can snap without warning — carry a spare if doing high mileage.', categories: ['clutch-kits'] },
      { issue: 'Rear wheel bearing noise', detail: 'A common MOT failure point. The rear wheel bearings wear out around 60,000–80,000 miles. Listen for a humming noise that changes with speed.', categories: ['wheel-bearings'] },
      { issue: 'Coil spring snapping', detail: 'The front coil springs on Mk7 (2008–2017) can snap, particularly in cold weather. There was a recall for some models — check if yours is affected.', categories: ['coil-springs', 'shock-absorbers'] },
      { issue: 'Door lock actuator failure', detail: 'Central locking stops working on one or more doors. The actuator motor inside the door fails. A common issue on Mk7 and Mk7.5 models.', categories: ['sensors'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '18,750 miles / 18 months',
      sparkPlugs: '37,500 miles / 36 months',
      brakeFluid: 'Every 2 years',
      timingBelt: '125,000 miles / 10 years (1.4/1.6 TDCi diesel — EcoBoost petrols use a chain)',
    },
    quickFacts: [
      'Production ended in 2023 — parts remain widely available from breakers and aftermarket suppliers',
      'The 1.0 EcoBoost engine is shared with the Focus and Puma — timing belt not required (uses chain)',
      'ST models use larger brake discs and uprated suspension — standard parts won\'t fit',
      'Mk7 sold over 500,000 units in the UK, making it one of the best-supported cars for parts',
    ],
    partsTip: 'Fiesta parts are among the cheapest in the UK due to the sheer volume sold. Always compare prices — the difference between premium and budget brands can be significant.',
  },

  'ford-kuga': {
    yearRange: '2008–2025',
    intro: 'Ford\'s mid-size SUV has grown in popularity since 2008. The Kuga shares its platform with the Focus, keeping parts costs reasonable for an SUV.',
    commonIssues: [
      { issue: 'Tailgate wiring loom failure', detail: 'The wiring harness running into the tailgate can break due to repeated opening/closing. Causes rear wiper, wash, and sometimes rear light failures.', categories: ['bulbs', 'sensors'] },
      { issue: 'Turbo failure on 2.0 TDCi', detail: 'The turbo on early 2.0 diesel models can fail around 80,000–120,000 miles. Symptoms include blue/black smoke and loss of power. Ensure oil changes are done on schedule.', categories: ['turbo-parts'] },
      { issue: 'Anti-roll bar link wear', detail: 'Clicks and clunks over bumps, especially at low speeds. The drop links wear quickly on UK roads. A cheap fix at around £20–40 for a pair.', categories: ['anti-roll-bar-links'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles / 24 months',
      timingBelt: '125,000 miles / 10 years (2.0 TDCi — 1.5 EcoBoost uses a chain)',
    },
    quickFacts: [
      'Mk1 (2008–2012) and Mk2 (2013–2019) are the most common on UK roads',
      'Shares front suspension with the Focus — parts are interchangeable',
      'The PHEV version (2020+) has different brake components due to regenerative braking',
    ],
    partsTip: 'Being based on the Focus platform, most Kuga service parts are the same as the Focus equivalents and priced accordingly. Always cross-reference part numbers.',
  },

  // ─── VAUXHALL ───────────────────────────────────────────
  'vauxhall-corsa': {
    yearRange: '2006–2025',
    intro: 'A UK staple for new drivers and city motoring, the Vauxhall Corsa is cheap to insure, easy to maintain, and parts are readily available.',
    commonIssues: [
      { issue: 'Timing chain stretch', detail: 'The 1.0, 1.2, and 1.4 petrol engines in the Corsa D and E are notorious for timing chain stretch. Listen for a rattling noise on cold starts. If caught early, a new chain kit (£200–400) avoids catastrophic engine damage.', categories: ['timing-belts'] },
      { issue: 'Coil pack failure', detail: 'Ignition coil packs fail frequently on the 1.2 and 1.4 Twinport engines, causing misfires and rough running. Often only one pack fails at a time.', categories: ['ignition-coils', 'spark-plugs'] },
      { issue: 'Front suspension clunking', detail: 'The front anti-roll bar links and drop links wear quickly. If you hear clunking over bumps, these are the first things to check — cheap to replace.', categories: ['anti-roll-bar-links', 'shock-absorbers'] },
      { issue: 'Rear brake drum seizure', detail: 'The rear drums can seize if the car sits unused. The handbrake sticks and the drums need freeing or replacing. Common after winter storage.', categories: ['brake-drums', 'brake-shoes'] },
    ],
    serviceIntervals: {
      oilChange: '20,000 miles / 12 months',
      airFilter: '40,000 miles / 24 months',
      sparkPlugs: '40,000 miles / 48 months',
      brakeFluid: 'Every 2 years',
      timingChain: 'No scheduled interval — replace if rattling',
    },
    quickFacts: [
      'Corsa D (2006–2014) and Corsa E (2014–2019) are the most common on UK roads',
      'The latest Corsa F (2019+) sits on a Peugeot/PSA platform — parts are different from older models',
      'Rear brakes are drums on most models, not discs — this keeps costs down',
      'One of the cheapest cars to get through an MOT due to widely available parts',
    ],
    partsTip: 'The Corsa D and E share the same engine family (A-series) with the ADAM and Mokka. The Corsa F uses PSA engines shared with the Peugeot 208.',
  },

  'vauxhall-astra': {
    yearRange: '2004–2025',
    intro: 'The Vauxhall Astra competes directly with the Ford Focus and VW Golf in the UK. Parts availability is excellent and servicing costs are moderate.',
    commonIssues: [
      { issue: 'Rear coil spring failure', detail: 'Astra H (2004–2010) models are particularly prone to rear coil spring snapping. Vauxhall issued a recall for some models. Always replace in pairs.', categories: ['coil-springs'] },
      { issue: 'Electronic power steering failure', detail: 'The electric power steering column can fail on Astra H models. Replacement is expensive (£400+) but refurbished units are available.', categories: ['sensors'] },
      { issue: 'Turbo wastegate rattle', detail: 'The 1.4 Turbo in the Astra J makes a rattling sound under load. Usually the turbo wastegate actuator rather than the turbo itself.', categories: ['turbo-parts'] },
      { issue: 'Water pump failure', detail: 'The water pump on 1.6 and 1.8 petrol Z-series engines can fail around 60,000–80,000 miles. Look for coolant leaks and overheating.', categories: ['water-pumps', 'thermostats'] },
    ],
    serviceIntervals: {
      oilChange: '20,000 miles / 12 months',
      airFilter: '40,000 miles / 24 months',
      sparkPlugs: '40,000 miles / 48 months',
      brakeFluid: 'Every 2 years',
      timingBelt: '100,000 miles / 10 years (1.7 CDTi diesel — petrols use a chain)',
    },
    quickFacts: [
      'Astra H shares its platform with the Zafira B — many parts interchange',
      'The 1.9 CDTi diesel engine is a Fiat unit also found in the Saab 9-3 and Alfa Romeo 159',
      'Astra K (2015+) uses a much newer platform and parts are not backwards-compatible',
    ],
    partsTip: 'GM/Opel parts are widely available from aftermarket suppliers. The Astra H is particularly well-served by budget brands offering good quality at low prices.',
  },

  'vauxhall-mokka': {
    yearRange: '2012–2025',
    intro: 'Vauxhall\'s compact SUV has been a strong seller in the UK. The original Mokka uses GM platforms while the Mokka-e (2021+) moved to PSA architecture.',
    commonIssues: [
      { issue: 'Timing chain issues on 1.4 Turbo', detail: 'The 1.4 Turbo petrol engine shares the timing chain issues seen in the Corsa and Astra. Listen for rattling on startup.', categories: ['timing-belts'] },
      { issue: 'Front suspension wear', detail: 'The raised ride height puts extra stress on front suspension components. Bushes and ball joints wear faster than on a standard hatchback.', categories: ['suspension-arms', 'anti-roll-bar-links'] },
      { issue: 'Rear wiper motor failure', detail: 'The rear wiper motor can fail, usually due to water ingress. Check the seal around the motor housing.', categories: ['sensors'] },
    ],
    serviceIntervals: {
      oilChange: '20,000 miles / 12 months',
      airFilter: '40,000 miles / 24 months',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Original Mokka (2012–2019) uses the same 1.4 Turbo as the Astra J',
      'Mokka-e (2021+) sits on a totally different PSA platform — parts don\'t interchange',
      'AWD versions have additional drivetrain components not found on FWD models',
    ],
    partsTip: 'The original Mokka shares many engine and brake components with the Astra J, so parts are plentiful. The new Mokka-e uses Peugeot 2008 platform parts.',
  },

  // ─── VOLKSWAGEN ─────────────────────────────────────────
  'volkswagen-golf': {
    yearRange: '2003–2025',
    intro: 'The benchmark for hatchbacks in the UK, the Golf offers solid build quality but parts tend to cost more than Ford or Vauxhall equivalents.',
    commonIssues: [
      { issue: 'DSG gearbox mechatronic unit', detail: 'The 7-speed DSG (DQ200) fitted to many Mk6 and Mk7 Golfs can develop mechatronic unit failures. Symptoms include jerky gear changes and loss of drive. Budget £500–1,500+ for repair.', categories: ['gearbox-mounts'] },
      { issue: 'Water pump failure', detail: 'The plastic water pump impeller on TSI engines (particularly 1.4 and 1.8 TSI) can break apart, leading to sudden overheating. Aftermarket metal impeller replacements are available.', categories: ['water-pumps', 'thermostats'] },
      { issue: 'Coil spring snapping', detail: 'The front coil springs on Mk5 and Mk6 Golf can snap, especially the lower section. Replace in pairs and consider uprated springs.', categories: ['coil-springs'] },
      { issue: 'EGR and DPF issues on 2.0 TDI', detail: 'Short journey driving causes DPF blockage and EGR valve clogging on diesel models. Regular longer runs help prevent expensive repairs.', categories: ['sensors'] },
    ],
    serviceIntervals: {
      oilChange: 'Variable (condition-based) — typically 10,000 miles / 12 months for UK driving',
      airFilter: '40,000 miles',
      sparkPlugs: '40,000–60,000 miles',
      brakeFluid: 'Every 2 years',
      timingBelt: 'Chain on most TSI petrols; 130,000 miles on 2.0 TDI (check specific engine)',
    },
    quickFacts: [
      'The Golf shares its MQB platform with the Audi A3, SEAT Leon, and Skoda Octavia',
      'GTI and R models use larger brakes and uprated suspension — standard parts won\'t fit',
      'VW long-life servicing assumes motorway driving; for UK mixed driving, halve the intervals',
      'Genuine VW parts cost 30–50% more than OEM-equivalent aftermarket brands like Meyle and Febi',
    ],
    partsTip: 'The VW Group platform sharing means Golf parts are identical to Audi A3, SEAT Leon, and Skoda Octavia equivalents — shop around across all four brands for the best price.',
  },

  'volkswagen-polo': {
    yearRange: '2002–2025',
    intro: 'VW\'s supermini offers a premium feel but parts cost more than a Fiesta or Corsa. The Polo shares many components with the SEAT Ibiza and Skoda Fabia.',
    commonIssues: [
      { issue: 'Coil pack failure', detail: 'The 1.2 and 1.4 petrol engines are known for ignition coil failures, causing misfires and the engine light. A common and cheap fix.', categories: ['ignition-coils', 'spark-plugs'] },
      { issue: 'Window regulator failure', detail: 'The electric window mechanisms can fail, particularly on Mk4 (2002–2009) models. The cable inside the door snaps.', categories: ['sensors'] },
      { issue: 'Rear brake drum binding', detail: 'Base models use rear drum brakes that can seize, particularly after periods of inactivity.', categories: ['brake-drums', 'brake-shoes'] },
    ],
    serviceIntervals: {
      oilChange: '10,000 miles / 12 months',
      airFilter: '40,000 miles',
      sparkPlugs: '40,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Mk5 (2009–2017) and Mk6 (2017+) are the most popular on UK roads',
      'The 1.0 TSI engine in the Mk6 is the same unit used in the Golf and T-Cross',
      'GTI models use a different braking system with ventilated front discs',
    ],
    partsTip: 'Cross-reference with SEAT Ibiza and Skoda Fabia parts — they\'re mechanically identical and sometimes cheaper under different branding.',
  },

  'volkswagen-tiguan': {
    yearRange: '2007–2025',
    intro: 'VW\'s family SUV sits on the same MQB platform as the Golf, making parts more accessible than you might expect for an SUV.',
    commonIssues: [
      { issue: 'Water pump and thermostat failure', detail: 'The 2.0 TSI petrol engine uses a plastic water pump housing that can crack. Replace with an updated metal version when servicing.', categories: ['water-pumps', 'thermostats'] },
      { issue: 'DSG gearbox issues', detail: 'Same DQ381 wet-clutch DSG as the Golf — generally more reliable than the dry-clutch DQ200 but still needs regular fluid changes.', categories: ['gearbox-mounts'] },
      { issue: 'Front lower arm bush wear', detail: 'The front suspension lower arm bushes wear out relatively quickly, causing vague steering and uneven tyre wear.', categories: ['suspension-arms', 'tie-rod-ends'] },
    ],
    serviceIntervals: {
      oilChange: '10,000–15,000 miles / 12 months',
      airFilter: '40,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Shares nearly all service parts with the Golf, Audi Q3, and Skoda Karoq',
      'The 2.0 TDI 150 is the most popular UK engine — parts are widely available',
      '4Motion AWD models have a Haldex coupling that needs fluid changes every 40,000 miles',
    ],
    partsTip: 'Tiguan service parts are Golf parts in an SUV body. Shop for Golf equivalents if Tiguan-branded parts seem expensive.',
  },

  // ─── BMW ────────────────────────────────────────────────
  'bmw-3-series': {
    yearRange: '2005–2025',
    intro: 'The 3 Series is BMW\'s core model and the UK\'s most popular premium saloon. Parts are more expensive than mainstream rivals but quality is generally high.',
    commonIssues: [
      { issue: 'VANOS solenoid failure', detail: 'The variable valve timing solenoids on N52, N53 and N54 engines can fail or clog. Symptoms include rough idle and loss of power. Clean or replace the solenoids.', categories: ['sensors'] },
      { issue: 'Cooling system fragility', detail: 'The expansion tank, thermostat housing, and water pump on N-series engines are made of plastic and can crack without warning. Budget for preventive replacement around 80,000 miles.', categories: ['water-pumps', 'thermostats', 'radiators'] },
      { issue: 'Rear shock absorber mounts', detail: 'The rear shock absorber top mounts wear out, causing knocking over bumps. An MOT-relevant item that\'s relatively cheap to fix.', categories: ['shock-absorbers'] },
      { issue: 'Swirl flap failure (diesel)', detail: 'N47 diesel engines can suffer swirl flap failures, potentially causing catastrophic engine damage. Many owners delete them preventively.', categories: ['engine-mounts'] },
    ],
    serviceIntervals: {
      oilChange: 'Condition-based — typically 12,000–15,000 miles / 12 months',
      airFilter: '50,000 miles / 48 months',
      sparkPlugs: '60,000 miles (petrol)',
      brakeFluid: 'Every 2 years',
      timingChain: 'No fixed interval — N47 chains should be inspected from 60,000 miles',
    },
    quickFacts: [
      'E90 (2005–2013), F30 (2012–2019), and G20 (2019+) are the main generations on UK roads',
      'xDrive AWD models have additional transfer case and propshaft components',
      'M Sport suspension is different from standard — affects shock absorbers, springs, and anti-roll bars',
      'The N47 diesel timing chain issue was subject to a class action but not a formal recall',
    ],
    partsTip: 'BMW genuine parts carry a premium but brands like Lemförder (suspension), Mahle (filters), and Brembo (brakes) supply OEM-quality parts at lower prices. These brands actually manufacture parts for BMW.',
  },

  'bmw-1-series': {
    yearRange: '2004–2025',
    intro: 'BMW\'s entry-level model switched from rear-wheel drive (E87/F20) to front-wheel drive (F40, 2019+). Parts costs sit between mainstream and premium.',
    commonIssues: [
      { issue: 'Timing chain failure on N47 diesel', detail: 'The chain runs at the rear of the engine on N47 2.0 diesel models. Stretch and eventual failure can cause total engine destruction. Listen for rattling on start-up.', categories: ['timing-belts'] },
      { issue: 'Rear subframe mounting cracks', detail: 'E87 models can develop rear subframe cracks around the mounting points, causing handling issues and MOT failures.', categories: ['suspension-arms'] },
      { issue: 'Injector sealing washers', detail: 'Diesel injector copper washers can fail, causing a ticking noise and fuel smell. Cheap to fix if caught early.', categories: ['gaskets-seals'] },
    ],
    serviceIntervals: {
      oilChange: '15,000 miles / 24 months (condition-based)',
      airFilter: '50,000 miles',
      sparkPlugs: '60,000 miles (petrol)',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'E87 (2004–2013) is rear-wheel drive; F20 (2011–2019) is rear-wheel drive; F40 (2019+) is front-wheel drive',
      'The F40 shares its UKL platform with the MINI Countryman — some parts cross over',
      'M135i/M140i models use significantly different drivetrain and brake components',
    ],
    partsTip: 'The 1 Series shares many service parts with the 3 Series. Filter kits, brake pads, and suspension components are often identical — compare prices across both model ranges.',
  },

  // ─── AUDI ───────────────────────────────────────────────
  'audi-a3': {
    yearRange: '2003–2025',
    intro: 'The Audi A3 is mechanically identical to the VW Golf underneath. This means Golf-equivalent parts fit and cost significantly less than Audi-branded items.',
    commonIssues: [
      { issue: 'DSG gearbox issues', detail: 'Same S-tronic (DSG) gearbox as the VW Golf. The 7-speed DQ200 in 1.4 TFSI models is the most troublesome. Regular fluid changes help.', categories: ['gearbox-mounts'] },
      { issue: 'Water pump failure', detail: 'The 2.0 TFSI water pump can fail suddenly. The plastic impeller breaks apart, causing rapid overheating.', categories: ['water-pumps'] },
      { issue: 'Front lower arm bush wear', detail: 'The front wishbone bushes wear out, especially on UK roads. Causes clunking and vague steering. An annual MOT concern.', categories: ['suspension-arms'] },
    ],
    serviceIntervals: {
      oilChange: 'Variable servicing — typically 10,000 miles / 12 months for UK mixed driving',
      airFilter: '40,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'The A3 8P (2003–2013), 8V (2012–2020), and 8Y (2020+) share platforms with the Golf Mk5/6, Mk7, and Mk8 respectively',
      'S3 and RS3 models use unique high-performance components — standard parts won\'t fit',
      'Quattro (AWD) models add Haldex coupling maintenance every 40,000 miles',
    ],
    partsTip: 'Audi branded parts carry a 40–60% markup over identical VW parts. Always search for the VW part number — the same component is often available under the Golf listing for less.',
  },

  // ─── TOYOTA ─────────────────────────────────────────────
  'toyota-yaris': {
    yearRange: '2006–2025',
    intro: 'Known for exceptional reliability, the Toyota Yaris has some of the lowest maintenance costs of any car in the UK. Breakdowns are rare.',
    commonIssues: [
      { issue: 'Very few common faults', detail: 'The Yaris is consistently rated as one of the most reliable cars in the UK. The most common issues are wear items like brake pads, wiper blades, and batteries.', categories: ['brake-pads', 'wiper-blades', 'batteries'] },
      { issue: 'Hybrid battery degradation (Mk3/Mk4)', detail: 'Hybrid models may see battery capacity reduce over time, though Toyota\'s warranty covers this for 10 years. Individual cell replacement is possible rather than the whole pack.', categories: ['batteries'] },
      { issue: 'Rear brake drum adjustment', detail: 'Rear drums on non-hybrid models can need manual adjustment if the handbrake travel becomes excessive.', categories: ['brake-drums', 'brake-shoes'] },
    ],
    serviceIntervals: {
      oilChange: '10,000 miles / 12 months',
      airFilter: '20,000 miles / 24 months',
      sparkPlugs: '60,000 miles',
      brakeFluid: 'Every 2 years',
      coolant: 'First at 100,000 miles, then every 40,000 miles',
    },
    quickFacts: [
      'The Mk4 hybrid (2020+) is one of the most fuel-efficient non-EV cars in the UK',
      'Toyota\'s service plan prices are very competitive compared to European brands',
      'The 1.5 Hybrid system uses Atkinson-cycle technology — spark plugs are iridium and last longer',
    ],
    partsTip: 'Toyota parts prices are mid-range. The Yaris doesn\'t break often, so when it does need parts, genuine Toyota items offer good value for the quality.',
  },

  'toyota-corolla': {
    yearRange: '2019–2025',
    intro: 'The Corolla returned to the UK in 2019 as a hybrid-only model. It replaced the Auris and offers excellent fuel economy with Toyota\'s legendary reliability.',
    commonIssues: [
      { issue: 'Minimal reported issues', detail: 'Being relatively new and hybrid-only, the Corolla has very few reported common faults. Brake pad wear is reduced by regenerative braking.', categories: ['brake-pads'] },
      { issue: 'CVT gearbox behaviour', detail: 'Not a fault per se, but the e-CVT gearbox can feel unusual to drivers used to conventional automatics. Engine revs rise before speed catches up.', categories: [] },
    ],
    serviceIntervals: {
      oilChange: '10,000 miles / 12 months',
      airFilter: '20,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Available in hatchback, saloon, and Touring Sports (estate) body styles',
      'The hybrid system means brake pads can last 50,000+ miles due to regenerative braking',
      'Shares its TNGA-C platform with the C-HR — many parts cross over',
    ],
    partsTip: 'As a relatively new model, aftermarket parts availability is still growing. Genuine Toyota parts are reasonably priced for the quality.',
  },

  // ─── NISSAN ─────────────────────────────────────────────
  'nissan-qashqai': {
    yearRange: '2007–2025',
    intro: 'The car that created the crossover segment in the UK, the Qashqai has been a massive seller. Built in Sunderland, parts supply is excellent.',
    commonIssues: [
      { issue: 'CVT gearbox judder (Mk1)', detail: 'The Jatco CVT gearbox in early automatics can judder and overheat. Regular transmission fluid changes help, but some units need replacement.', categories: ['gearbox-mounts'] },
      { issue: 'Diesel DPF problems', detail: '1.5 dCi diesel models suffer DPF blockages with short-journey driving. The engine needs regular motorway runs to regenerate.', categories: ['sensors'] },
      { issue: 'Front lower arm bush wear', detail: 'The front wishbone bushes wear out around 50,000–70,000 miles. Causes knocking and can lead to MOT failure.', categories: ['suspension-arms'] },
      { issue: 'Turbo actuator sticking', detail: 'The variable geometry turbo actuator on 1.5 and 1.6 dCi engines can stick, causing limp mode.', categories: ['turbo-parts'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '37,500 miles',
      sparkPlugs: '37,500 miles (petrol)',
      brakeFluid: 'Every 2 years',
      timingBelt: '75,000 miles / 5 years (Renault K9K diesel); chain on 1.2 DIG-T petrol',
    },
    quickFacts: [
      'Built at Nissan\'s Sunderland plant — the UK\'s most-produced car for many years',
      'Mk1 (2007–2013) and Mk2 (2014–2021) diesel engines are Renault units',
      'Mk3 (2021+) uses a new e-POWER hybrid system with totally different components',
      'The 1.5 dCi engine is shared with the Renault Kadjar and Dacia Duster',
    ],
    partsTip: 'The Qashqai uses Renault engines in many variants, so filter and service kits branded for Renault fit perfectly and often cost less.',
  },

  'nissan-juke': {
    yearRange: '2010–2025',
    intro: 'The quirky Nissan Juke popularised the small crossover segment in the UK. The Mk1 uses Nissan/Renault running gear while the Mk2 switched to the Renault-Nissan CMF-B platform.',
    commonIssues: [
      { issue: 'Turbo failure on 1.6 DIG-T', detail: 'The turbocharged 1.6 petrol in Mk1 Nismo and high-spec models can suffer turbo failures at higher mileages. Regular oil changes are essential.', categories: ['turbo-parts'] },
      { issue: 'CVT gearbox issues', detail: 'Mk1 automatic models use a Jatco CVT that can judder and overheat, particularly in the 1.6 DIG-T variant.', categories: ['gearbox-mounts'] },
      { issue: 'Clutch wear on manual', detail: 'The 1.5 dCi manual gearbox has a relatively light clutch that wears out around 70,000–90,000 miles.', categories: ['clutch-kits'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '37,500 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Mk1 (2010–2019) was built in Sunderland; Mk2 (2019+) is built in the UK too',
      'The Mk2 shares its platform with the Renault Captur and Clio',
      'AWD was available on Mk1 but dropped for Mk2',
    ],
    partsTip: 'Mk2 Juke parts cross-reference with Renault Captur and Clio V items. The 1.0 DIG-T engine is shared across multiple Nissan and Renault models.',
  },

  // ─── HYUNDAI ────────────────────────────────────────────
  'hyundai-tucson': {
    yearRange: '2015–2025',
    intro: 'The Tucson has become Hyundai\'s best-selling model in the UK. Backed by a 5-year warranty and increasingly competitive parts pricing.',
    commonIssues: [
      { issue: 'Diesel DPF issues', detail: 'The 1.7 and 2.0 CRDi diesels can suffer DPF blockages with urban driving. Regular longer runs are needed.', categories: ['sensors'] },
      { issue: 'Dual clutch transmission hesitancy', detail: 'The 7-speed DCT gearbox in some Mk3 models can hesitate at low speeds. Software updates help but don\'t fully resolve the issue.', categories: ['clutch-kits'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      sparkPlugs: '25,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'The Mk4 (2020+) shares its platform with the Kia Sportage — most parts interchange',
      'Hybrid and PHEV versions have different brake specifications due to regenerative braking',
      'Hyundai\'s 5-year unlimited mileage warranty covers most issues — check coverage before buying parts',
    ],
    partsTip: 'Hyundai and Kia share platforms and parts. Always search for both the Tucson and Kia Sportage part number — one may be cheaper than the other.',
  },

  // ─── KIA ────────────────────────────────────────────────
  'kia-sportage': {
    yearRange: '2010–2025',
    intro: 'Kia\'s mid-size SUV has grown significantly in popularity, backed by the industry-leading 7-year warranty. Shares its platform with the Hyundai Tucson.',
    commonIssues: [
      { issue: 'Rear trailing arm bush wear', detail: 'The rear suspension bushes can wear, causing a clunking noise from the back over rough roads.', categories: ['suspension-arms'] },
      { issue: 'Diesel injector issues', detail: 'Some 2.0 CRDi engines have experienced injector failures. Symptoms include rough running and excessive smoke.', categories: ['sensors'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      sparkPlugs: '25,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'The 7-year warranty is transferable to new owners — a strong selling point',
      'Mk5 (2021+) shares its N3 platform with the Hyundai Tucson Mk4',
      'GT-Line models have cosmetic differences but use the same mechanical parts as standard',
    ],
    partsTip: 'Cross-reference every part with the equivalent Hyundai Tucson listing. They\'re mechanically identical and prices can vary significantly between Kia and Hyundai branding.',
  },

  // ─── MERCEDES-BENZ ──────────────────────────────────────
  'mercedes-benz-c-class': {
    yearRange: '2007–2025',
    intro: 'The C-Class is Mercedes\' best-selling model in the UK. Service and parts costs are the highest of any mainstream model, but quality is generally very good.',
    commonIssues: [
      { issue: 'Balance shaft wear (M272 engine)', detail: 'The M272 V6 petrol engine in W204 (2007–2014) models can suffer balance shaft and timing chain issues. An expensive repair (£2,000+) if not caught early.', categories: ['timing-belts'] },
      { issue: 'Airmatic suspension failure (if equipped)', detail: 'Air suspension struts can leak over time, causing one corner to drop overnight. Replacement struts are expensive but aftermarket options exist.', categories: ['shock-absorbers'] },
      { issue: 'Glow plug and injector issues', detail: 'OM651 diesel engines can suffer from glow plug tip swelling, making removal difficult. Injector seal failures cause black carbon build-up.', categories: ['glow-plugs', 'gaskets-seals'] },
    ],
    serviceIntervals: {
      oilChange: 'Flexible (ASSYST) — typically 10,000 miles / 12 months',
      airFilter: '40,000 miles',
      sparkPlugs: '50,000 miles (petrol)',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'W204 (2007–2014) and W205 (2014–2021) are the most common generations on UK roads',
      'AMG models use completely different braking and suspension — standard parts don\'t fit',
      'Mercedes Service Plans are expensive but can be worth it for inclusion of genuine parts',
    ],
    partsTip: 'Aftermarket brands like Meyle, TRW, and Sachs manufacture OE parts for Mercedes. Buying these brands direct saves 40–60% over Mercedes-branded packaging.',
  },

  // ─── HONDA ──────────────────────────────────────────────
  'honda-civic': {
    yearRange: '2006–2025',
    intro: 'The Honda Civic is one of the most reliable cars in the UK market. It costs very little to maintain and parts are well-priced.',
    commonIssues: [
      { issue: 'Air conditioning compressor failure', detail: 'The AC compressor can fail on Mk8 (2006–2011) and Mk9 (2012–2016) models. Symptoms include no cold air and a clicking noise from the engine bay.', categories: ['drive-belts'] },
      { issue: 'Very few mechanical issues', detail: 'Honda engines are renowned for reliability. The 1.8 i-VTEC petrol and 2.2 i-CTDi diesel rarely develop faults beyond normal wear items.', categories: ['brake-pads', 'wiper-blades'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      sparkPlugs: '75,000 miles (petrol — uses long-life iridium plugs)',
      brakeFluid: 'Every 3 years',
      timingChain: 'Chain — no replacement interval',
    },
    quickFacts: [
      'The Mk8 1.8 i-VTEC engine is one of the most reliable engines ever sold in the UK',
      'Mk10 (2017+) uses a 1.0 or 1.5 VTEC Turbo — these are still relatively new',
      'Honda parts pricing sits between mainstream and premium — very fair for the quality',
      'Type R models use Brembo brakes and different suspension — standard parts don\'t fit',
    ],
    partsTip: 'Honda genuine parts are competitively priced compared to other Japanese brands. Aftermarket options exist but the genuine parts are often worth the small premium for Honda.',
  },

  // ─── RENAULT ────────────────────────────────────────────
  'renault-clio': {
    yearRange: '2005–2025',
    intro: 'One of France\'s greatest exports, the Renault Clio is cheap to buy, insure, and maintain. Parts availability is excellent in the UK.',
    commonIssues: [
      { issue: 'Coil pack failure (1.2 TCe)', detail: 'The 1.2 TCe turbocharged engine suffers from coil pack failures and misfires. A common and cheap fix.', categories: ['ignition-coils', 'spark-plugs'] },
      { issue: 'Steering column lock failure', detail: 'Mk3 and Mk4 Clios with keyless entry can suffer from steering column lock failures, preventing the car from starting.', categories: ['sensors'] },
      { issue: 'Fuel filler cap seal', detail: 'A cracked or worn fuel filler cap seal can trigger the engine management light due to an EVAP leak.', categories: ['gaskets-seals'] },
    ],
    serviceIntervals: {
      oilChange: '12,000 miles / 12 months',
      airFilter: '24,000 miles',
      sparkPlugs: '24,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Mk4 (2012–2019) and Mk5 (2019+) are the most common on UK roads',
      'The 0.9 TCe engine is shared with the Dacia Sandero — parts cross-reference',
      'Renault Sport (RS) models use completely different brakes and suspension',
    ],
    partsTip: 'Renault parts are among the cheapest in the UK market. The Clio shares engines with the Nissan Juke and Dacia range — always check cross-compatibility for the best prices.',
  },

  // ─── SEAT ───────────────────────────────────────────────
  'seat-leon': {
    yearRange: '2005–2025',
    intro: 'The SEAT Leon is a VW Golf with Spanish flair and a lower price tag. Mechanically identical to the Golf, parts are interchangeable and often cheaper.',
    commonIssues: [
      { issue: 'Same as VW Golf', detail: 'Being built on the same MQB platform, the Leon shares virtually all mechanical issues with the Golf: DSG gearbox concerns, water pump failures on TSI engines, and timing chain issues on older TDI units.', categories: ['water-pumps', 'timing-belts'] },
      { issue: 'Rear trailing arm bush wear', detail: 'The rear suspension bushes wear faster on UK roads than in southern Europe. Check for knocking and vague handling.', categories: ['suspension-arms'] },
    ],
    serviceIntervals: {
      oilChange: '10,000 miles / 12 months',
      airFilter: '40,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Mk3 (2012–2020) and Mk4 (2020+) share platforms with Golf Mk7 and Mk8',
      'Cupra Leon models use uprated brakes and suspension — not standard fitment',
      'SEAT service costs are typically 10–20% less than VW for the same work',
    ],
    partsTip: 'Every SEAT Leon part has a VW Golf, Audi A3, or Skoda Octavia equivalent. Search all four makes to find the best price — the part is physically identical.',
  },

  // ─── SKODA ──────────────────────────────────────────────
  'skoda-octavia': {
    yearRange: '2004–2025',
    intro: 'The Skoda Octavia offers more space than a Golf for less money, using the same VW Group mechanicals. Outstanding value for parts and servicing.',
    commonIssues: [
      { issue: 'DSG gearbox mechatronic issues', detail: 'Same 7-speed DQ200 DSG concerns as the Golf and A3. Affects 1.4 TSI models in particular.', categories: ['gearbox-mounts'] },
      { issue: 'Rear wiper motor failure', detail: 'The estate (Combi) rear wiper motor can fail due to water ingress around the rear seal.', categories: ['sensors'] },
      { issue: 'Front suspension wear', detail: 'Being slightly heavier than the Golf (particularly the estate), front suspension components can wear faster.', categories: ['suspension-arms', 'anti-roll-bar-links'] },
    ],
    serviceIntervals: {
      oilChange: '10,000–15,000 miles / 12 months',
      airFilter: '40,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'The Octavia is one of the best-selling Skoda models in the UK',
      'Mk3 (2013–2020) and Mk4 (2020+) share VW MQB platforms',
      'The estate is one of the most practical cars in the segment with 640 litres of boot space',
      'vRS models use uprated brakes and suspension components',
    ],
    partsTip: 'Skoda parts are the cheapest way to buy VW Group components. The Octavia uses the same parts as the Golf, A3, and Leon — Skoda-branded versions are often the lowest priced.',
  },

  // ─── CITROEN ────────────────────────────────────────────
  'citroen-c3': {
    yearRange: '2009–2025',
    intro: 'Citroën\'s supermini offers a comfortable ride and quirky styling. Shares its platform with the Peugeot 208 and DS 3 Crossback.',
    commonIssues: [
      { issue: 'PureTech engine timing chain', detail: 'The 1.2 PureTech 3-cylinder engine used from 2012 onwards has a well-documented timing chain issue. A chain stretch kit recall was issued — check if your vehicle is covered.', categories: ['timing-belts'] },
      { issue: 'Clutch actuator failure (EGS/ETG gearbox)', detail: 'The automated manual gearbox uses a clutch actuator that frequently fails. Many owners switch to manual or replace with aftermarket actuators.', categories: ['clutch-kits'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      sparkPlugs: '37,500 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'The 1.2 PureTech engine is shared across the entire PSA range (Peugeot, DS, Vauxhall)',
      'Parts cross-reference with the Peugeot 208 and Vauxhall Corsa F',
      'Airbump panels on the Mk3 are unique to Citroën and can be expensive to replace',
    ],
    partsTip: 'PSA (Stellantis) platform sharing means C3 parts are identical to Peugeot 208, DS 3, and even the new Vauxhall Corsa. Compare across all brands for the best deal.',
  },

  // ─── PEUGEOT ────────────────────────────────────────────
  'peugeot-308': {
    yearRange: '2007–2025',
    intro: 'The Peugeot 308 won European Car of the Year and offers strong diesel economy. Parts are well-priced and the PSA platform means good cross-compatibility.',
    commonIssues: [
      { issue: 'PureTech timing chain (1.2)', detail: 'Same well-documented issue as the C3 and 208. The timing chain on 1.2 PureTech engines can stretch prematurely. Check recall status.', categories: ['timing-belts'] },
      { issue: 'DPF problems on 1.6 HDi', detail: 'The 1.6 BlueHDi diesel DPF can block with urban driving. AdBlue system faults also occur on newer models.', categories: ['sensors'] },
      { issue: 'Electric parking brake issues', detail: 'The electronic parking brake can develop faults, sometimes requiring dealer-level diagnostics to reset.', categories: ['brake-pads', 'brake-discs'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      sparkPlugs: '37,500 miles',
      brakeFluid: 'Every 2 years',
      timingBelt: '100,000 miles / 10 years (1.6 HDi diesel)',
    },
    quickFacts: [
      'The Mk2 (2013–2021) shares its EMP2 platform with the Citroën C4 and DS 4',
      'The 1.2 PureTech 130 won International Engine of the Year multiple times',
      'GT and GTi models have different suspension setups',
    ],
    partsTip: 'Peugeot parts are competitively priced. Cross-reference with Citroën C4 and DS 4 parts for the best deal — they use identical components.',
  },

  'peugeot-2008': {
    yearRange: '2013–2025',
    intro: 'Peugeot\'s small crossover has been a strong UK seller, sitting on the same CMP platform as the 208 and Citroën C3.',
    commonIssues: [
      { issue: 'PureTech timing chain', detail: 'Same 1.2 PureTech issue as the 308 and 208. Check recall status.', categories: ['timing-belts'] },
      { issue: 'Infotainment system freezing', detail: 'Not a parts issue, but the touchscreen can freeze. Software updates are available from Peugeot dealers.', categories: [] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'The Mk2 (2019+) is available as a full electric e-2008 with a 50kWh battery',
      'Shares its platform with the Vauxhall Mokka-e and DS 3 Crossback',
      'Grip Control versions have additional traction aids but no mechanical AWD',
    ],
    partsTip: 'Almost every part on the 2008 has a 208 or C3 equivalent. The crossover premium is largely cosmetic — service parts are shared.',
  },

  // ─── LAND ROVER ─────────────────────────────────────────
  'land-rover-discovery-sport': {
    yearRange: '2015–2025',
    intro: 'Land Rover\'s compact SUV is popular with UK families. Running costs are higher than mainstream rivals but lower than the full-size Discovery.',
    commonIssues: [
      { issue: 'Ingenium diesel DPF issues', detail: 'The 2.0 Ingenium diesel can suffer DPF blockages with urban driving. The AdBlue system can also throw faults.', categories: ['sensors'] },
      { issue: 'Rear differential mount cracking', detail: 'The rear subframe can develop stress cracks around the differential mounting points.', categories: ['engine-mounts'] },
      { issue: 'Water ingress to electronics', detail: 'Various electrical gremlins caused by water getting into wiring connectors, particularly in the rear of the vehicle.', categories: ['sensors', 'bulbs'] },
    ],
    serviceIntervals: {
      oilChange: '21,000 miles / 12 months',
      airFilter: '42,000 miles',
      brakeFluid: 'Every 3 years',
    },
    quickFacts: [
      'Shares its platform with the Range Rover Evoque — many parts cross over',
      'AWD system adds significant running costs: transfer case and rear diff fluid changes needed',
      'Genuine Land Rover parts are expensive — aftermarket brands like Britpart offer alternatives',
    ],
    partsTip: 'Britpart and Allmakes are the main aftermarket suppliers for Land Rover. Parts are the same as Range Rover Evoque in many cases — compare across both models.',
  },

  // ─── MINI ───────────────────────────────────────────────
  'mini-hatch': {
    yearRange: '2006–2025',
    intro: 'The MINI Hatch is fun to drive but parts and servicing lean towards BMW pricing. It shares its platform and engines with BMW models.',
    commonIssues: [
      { issue: 'Timing chain failure (N14/N18 engines)', detail: 'Early turbocharged Cooper S models with the N14 engine are notorious for timing chain failures. The N18 engine (2010+) is significantly more reliable.', categories: ['timing-belts'] },
      { issue: 'Thermostat and water pump failure', detail: 'The electric water pump and thermostat on turbo models can fail. Symptoms include overheating and the temperature gauge fluctuating.', categories: ['water-pumps', 'thermostats'] },
      { issue: 'Clutch slave cylinder failure', detail: 'The hydraulic clutch slave cylinder can fail on manual models, causing a spongy clutch pedal or loss of clutch operation.', categories: ['clutch-kits'] },
    ],
    serviceIntervals: {
      oilChange: 'Condition-based — typically 12,000 miles / 12 months',
      airFilter: '50,000 miles',
      sparkPlugs: '60,000 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'R56 (2006–2013) and F56 (2014+) are the main generations on UK roads',
      'The Cooper S and JCW use different turbo and braking components from the standard Cooper',
      'F56 models use BMW B38/B48 engines — shared with the 1 Series and 2 Series',
    ],
    partsTip: 'MINI parts are BMW parts in different packaging. Cross-reference with BMW 1 Series and 2 Series part numbers for potentially lower prices.',
  },

  // ─── MAZDA ──────────────────────────────────────────────
  'mazda-cx-5': {
    yearRange: '2012–2025',
    intro: 'Mazda\'s mid-size SUV is one of the most reliable in its class. Build quality is excellent and parts costs are moderate.',
    commonIssues: [
      { issue: 'Diesel DPF warning', detail: 'The 2.2 SkyActiv-D diesel can trigger DPF warnings with urban driving, though less frequently than competitors.', categories: ['sensors'] },
      { issue: 'Rear brake calliper seizing', detail: 'The rear brake callipers can seize, particularly on cars that sit unused for periods. Causes uneven pad wear and pulling under braking.', categories: ['brake-calipers', 'brake-pads'] },
    ],
    serviceIntervals: {
      oilChange: '12,500 miles / 12 months',
      airFilter: '25,000 miles',
      sparkPlugs: '37,500 miles',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'SkyActiv technology prioritises efficiency without turbocharging (petrol models)',
      'The 2.0 SkyActiv-G petrol uses a high 14:1 compression ratio for better fuel economy',
      'Parts pricing sits between mainstream and premium — fair value for the quality',
    ],
    partsTip: 'Mazda genuine parts are well-priced. Aftermarket options exist but the price difference is smaller than with European brands.',
  },

  // ─── VOLVO ──────────────────────────────────────────────
  'volvo-xc60': {
    yearRange: '2008–2025',
    intro: 'Volvo\'s best-selling SUV worldwide, the XC60 combines Scandinavian safety with decent practicality. Running costs are in line with German premium rivals.',
    commonIssues: [
      { issue: 'Oil trap/PCV system failure', detail: 'The positive crankcase ventilation system on older 5-cylinder engines can fail, causing oil leaks and rough running.', categories: ['gaskets-seals'] },
      { issue: 'Front lower arm bush wear', detail: 'The front suspension bushes wear on UK roads, causing clunking and vague steering. A common MOT advisory.', categories: ['suspension-arms'] },
    ],
    serviceIntervals: {
      oilChange: '18,000 miles / 12 months',
      airFilter: '36,000 miles',
      sparkPlugs: '54,000 miles (petrol)',
      brakeFluid: 'Every 2 years',
    },
    quickFacts: [
      'Mk1 (2008–2017) uses Ford-era platforms; Mk2 (2017+) uses Volvo\'s own SPA platform',
      'All Mk2 engines are 2.0 litre 4-cylinder (B4/B5/B6) — gone are the 5-cylinder and 6-cylinder options',
      'Hybrid T8 models have different brake specifications due to regenerative braking',
    ],
    partsTip: 'Mk1 XC60 shares many components with the Ford Mondeo and S-Max (Ford-era platform). Mk2 parts are unique to Volvo\'s SPA platform.',
  },
};

// Category-specific content that adds unique information to every category page
const CATEGORY_CONTENT = {
  'brake-pads': {
    whatTheyDo: 'Brake pads create the friction that stops your car when you press the brake pedal. They press against the brake disc and convert kinetic energy into heat.',
    whenToReplace: 'Most brake pads last 25,000–50,000 miles depending on driving style, but urban stop-start driving wears them faster. Many cars have a brake pad wear sensor that triggers a dashboard warning light. You can also check pad thickness visually through the wheel spokes — they should be at least 3mm thick.',
    brandGuide: 'Premium brands like Brembo, ATE, and EBC offer superior stopping performance and fade resistance. OEM-quality brands like TRW, Bosch, and Mintex match manufacturer specifications at lower prices. Budget brands like Pagid and Blueprint work fine for normal road use.',
    topTip: 'Always replace brake pads in axle pairs (both fronts or both rears) to ensure even braking. Fitting pads on just one side can cause the car to pull under braking and will fail the MOT.',
  },
  'brake-discs': {
    whatTheyDo: 'Brake discs (rotors) work with brake pads to stop your car. The pads clamp onto the spinning disc to slow the wheel. Front discs do most of the work and wear faster than rears.',
    whenToReplace: 'Brake discs typically last 50,000–80,000 miles. Signs of wear include a lip around the outer edge, visible scoring or grooves on the surface, vibration through the brake pedal, and the car pulling to one side under braking. Minimum thickness is stamped on the disc — measure with a micrometer.',
    brandGuide: 'Brembo and ATE are the top choices for performance. Bosch, TRW, and Mintex offer OEM-equivalent quality. Budget options from Blue Print and Pagid are suitable for standard road use.',
    topTip: 'When fitting new discs, always fit new pads at the same time. Old pads have worn to match the old disc surface and won\'t bed in properly against new discs, causing noise and uneven wear.',
  },
  'oil-filters': {
    whatTheyDo: 'The oil filter removes metal particles, dirt, and combustion byproducts from your engine oil. Without it, contaminated oil would damage engine bearings and accelerate wear.',
    whenToReplace: 'Replace the oil filter at every oil change — typically every 10,000–15,000 miles or annually. Never reuse an old filter with fresh oil as the trapped contaminants will immediately contaminate the new oil.',
    brandGuide: 'MANN-FILTER and Mahle are the largest OEM filter suppliers — they make filters for BMW, VW, Audi, and Mercedes. Bosch is another reliable choice. Budget brand Purflux supplies Peugeot, Citroën, and Renault as OEM.',
    topTip: 'When comparing prices, check whether the filter is a spin-on canister or a cartridge (insert) type. Some cars use cartridge filters that are cheaper but require a special removal tool (often just a socket).',
  },
  'air-filters': {
    whatTheyDo: 'The air filter prevents dust, pollen, insects, and debris from entering your engine. A clean air filter ensures the correct air-fuel mixture for efficient combustion and protects internal engine components.',
    whenToReplace: 'Every 15,000–25,000 miles or sooner if you drive on dusty roads. A clogged air filter reduces fuel economy and can cause sluggish performance. You can often see the contamination by holding the filter up to light — if no light passes through, it\'s time to replace.',
    brandGuide: 'MANN-FILTER, Mahle, and Bosch are the main OEM suppliers. K&N offers reusable cotton-gauze filters that can be cleaned and re-oiled rather than replaced, though these are more expensive upfront.',
    topTip: 'Air filter replacement is one of the easiest DIY jobs on most cars. The filter housing is usually accessible without tools — just unclip and swap. It takes under 5 minutes.',
  },
  'spark-plugs': {
    whatTheyDo: 'Spark plugs ignite the air-fuel mixture in petrol engines. They fire thousands of times per minute and endure extreme heat and pressure. Diesel engines don\'t use spark plugs — they use glow plugs for cold starting.',
    whenToReplace: 'Standard copper plugs last 20,000–30,000 miles. Iridium and platinum plugs last 60,000–100,000 miles. Signs of worn plugs include rough idle, misfires, poor fuel economy, and difficulty starting.',
    brandGuide: 'NGK and Denso supply spark plugs to most car manufacturers as OEM. Bosch is also widely used. Always match the exact plug specification (heat range, gap, thread size) for your engine.',
    topTip: 'When buying spark plugs, your vehicle registration lookup will give you the exact specification. Using the wrong heat range or gap can cause misfires, detonation, or even engine damage.',
  },
  'glow-plugs': {
    whatTheyDo: 'Glow plugs heat the combustion chamber in diesel engines to help the fuel ignite during cold starts. Modern diesel engines rely on glow plugs for clean starting and reduced emissions during warm-up.',
    whenToReplace: 'Glow plugs typically last 60,000–100,000 miles. Symptoms of failure include longer cranking before starting (especially in cold weather), rough running for the first few minutes, white or grey exhaust smoke on startup, and the glow plug warning light staying on.',
    brandGuide: 'Bosch, Beru, and NGK are the main OEM suppliers. Cheap glow plugs can swell and seize in the cylinder head, making removal extremely expensive — stick to quality brands.',
    topTip: 'If a glow plug seizes, don\'t force it. Specialist removal tools and techniques exist that cost far less than a damaged cylinder head. Many garages specialise in seized glow plug extraction.',
  },
  'wiper-blades': {
    whatTheyDo: 'Wiper blades clear rain, snow, and debris from your windscreen for clear visibility. They\'re a safety-critical item and an MOT failure point if they leave smears or miss areas of the screen.',
    whenToReplace: 'Every 12–18 months, or when they start to streak, skip, or squeak. UV exposure and temperature changes degrade the rubber over time, even if the wipers aren\'t used frequently. Replace before winter for the best visibility in harsh conditions.',
    brandGuide: 'Bosch Aerotwin and Valeo Silencio are the top flat-blade brands. Traditional hook-fit wipers from brands like Trico and Lucas are cheaper but may not give the same clean sweep.',
    topTip: 'Check which fitting type your car uses before buying. Modern cars use various proprietary fittings (push-button, pinch tab, bayonet, top-lock) rather than the traditional hook. Your reg plate lookup will confirm the correct type.',
  },
  'batteries': {
    whatTheyDo: 'The car battery provides the electrical energy to start the engine and powers all electrical systems when the engine is off. Modern cars with stop-start systems need AGM or EFB batteries designed for frequent cycling.',
    whenToReplace: 'Most car batteries last 3–5 years. Symptoms of a failing battery include slow cranking, dim lights, electrical system resets, and the battery warning light. Cold weather puts extra strain on batteries — failures peak in autumn and winter.',
    brandGuide: 'Bosch, Varta, and Yuasa are the premium choices. Lion and Halfords branded batteries offer good value. If your car has stop-start, you must fit an AGM or EFB battery — a standard flooded battery won\'t work.',
    topTip: 'Check the battery dimensions (length, width, height), terminal positions (left or right positive), and CCA (cold cranking amps) rating before buying. Getting these wrong means the battery won\'t fit or won\'t start the car.',
  },
  'timing-belts': {
    whatTheyDo: 'The timing belt (or chain) synchronises the rotation of the crankshaft and camshaft, ensuring the valves open and close at the correct time. If a timing belt snaps on an interference engine, the pistons hit the valves, causing catastrophic engine damage.',
    whenToReplace: 'Follow your manufacturer\'s interval precisely — typically 40,000–125,000 miles or 4–10 years, whichever comes first. Age is as important as mileage because the rubber degrades over time. This is not a job to postpone.',
    brandGuide: 'Gates, Dayco, and Continental are the main OEM timing belt manufacturers. Always buy a complete kit including the belt, tensioner, idler pulleys, and water pump (if driven by the timing belt).',
    topTip: 'Many water pumps are driven by the timing belt. It\'s strongly recommended to replace the water pump at the same time as the belt, because if the water pump seizes later, it will destroy the new belt.',
  },
  'clutch-kits': {
    whatTheyDo: 'The clutch transfers drive from the engine to the gearbox in manual cars. It consists of a friction plate, pressure plate, and release bearing. Many modern cars also use a dual mass flywheel (DMF) which absorbs engine vibrations.',
    whenToReplace: 'Clutch life varies enormously — 60,000 to 120,000+ miles depending on driving style. Symptoms of a worn clutch include slipping (engine revs rise without acceleration), juddering on pull-away, a high biting point, and difficulty selecting gears.',
    brandGuide: 'LuK, Sachs, and Valeo are the three main OEM clutch suppliers. A complete kit (friction plate, pressure plate, release bearing, and sometimes DMF) is cheaper than buying components individually.',
    topTip: 'If your car has a dual mass flywheel, always check it when replacing the clutch. A worn DMF will destroy a new clutch within months. Replacement adds cost but prevents repeat failures.',
  },
  'shock-absorbers': {
    whatTheyDo: 'Shock absorbers (dampers) control the movement of the springs to keep the tyres in contact with the road. Worn shocks increase braking distances, reduce grip, and can cause the car to fail the MOT bounce test.',
    whenToReplace: 'Every 50,000–80,000 miles, or sooner if you notice excessive bouncing, nose-diving under braking, uneven tyre wear, or oil leaking from the shock body. Always replace in pairs (both fronts or both rears).',
    brandGuide: 'Bilstein, Sachs, and KYB are the top OEM shock absorber brands. Monroe offers good mid-range options. Avoid unbranded budget shocks — they can drastically affect handling and safety.',
    topTip: 'When replacing shock absorbers, inspect the top mounts, bump stops, and dust covers. These rubber components wear out at a similar rate and are cheap to replace at the same time.',
  },
  'coil-springs': {
    whatTheyDo: 'Coil springs support the weight of the car and absorb road impacts. They work with shock absorbers to provide ride comfort and handling. Broken springs are an instant MOT failure.',
    whenToReplace: 'Springs can last the lifetime of the car, but corrosion and fatigue from UK road conditions cause snapping. Symptoms include the car sitting lower on one side, clunking over bumps, and visible cracks in the spring coils. Always replace in pairs.',
    brandGuide: 'Eibach, Lesjöfors, and Kilen are respected spring manufacturers. Sachs and Bilstein also supply OEM springs. Avoid the cheapest options — a snapped spring at speed is dangerous.',
    topTip: 'Springs commonly snap in cold weather when the metal is more brittle. If you notice your car sitting lower on one corner, check for a broken spring before driving — it can damage the tyre and is illegal.',
  },
  'suspension-arms': {
    whatTheyDo: 'Suspension arms (wishbones, control arms) connect the wheel hub to the car\'s body and control wheel movement. The rubber bushes in the arms are usually the first part to wear, causing play and knocking.',
    whenToReplace: 'Bushes typically last 60,000–100,000 miles. Symptoms include clunking over bumps, vague steering, uneven tyre wear, and play when the car is jacked up. Bushes can often be replaced separately, but some arms require complete replacement.',
    brandGuide: 'Lemförder (TRW) is the top OEM supplier for European cars. Meyle and Febi offer good quality aftermarket options. For BMW and Mercedes, always use at least OEM-equivalent quality.',
    topTip: 'After replacing suspension arms, always get a four-wheel alignment done. The new components will change the geometry, and incorrect alignment causes rapid tyre wear.',
  },
  'wheel-bearings': {
    whatTheyDo: 'Wheel bearings allow the wheel to spin freely on the axle with minimal friction. They support the entire weight of the vehicle at each corner and endure constant road impacts.',
    whenToReplace: 'Wheel bearings typically last 80,000–120,000 miles. A failed bearing makes a humming or growling noise that changes with speed and gets louder when turning in one direction. A severely worn bearing will have visible play — the wheel will wobble when grabbed at 12 and 6 o\'clock.',
    brandGuide: 'SKF and FAG are the main OEM bearing manufacturers. NTN-SNR is also widely used. Wheel bearings are safety-critical — don\'t fit unbranded budget items.',
    topTip: 'If replacing a front wheel bearing, check whether your car uses a press-fit bearing or a bolt-on hub assembly. Hub assemblies are easier to fit at home; press-fit bearings need a hydraulic press.',
  },
  'anti-roll-bar-links': {
    whatTheyDo: 'Anti-roll bar links (drop links) connect the anti-roll bar to the suspension struts. They reduce body roll when cornering and help keep the car level. They\'re one of the most frequently replaced suspension components.',
    whenToReplace: 'Every 30,000–60,000 miles on typical UK roads. They\'re cheap and wear out quickly. Symptoms include clunking and rattling over bumps, especially at low speeds. An MOT failure if there\'s excessive play in the ball joints.',
    brandGuide: 'Lemförder, Meyle, and TRW all make quality drop links. This is a component where budget brands are acceptable — the design is simple and even cheap links work well.',
    topTip: 'Anti-roll bar links are one of the cheapest and easiest suspension repairs. They can be replaced with basic tools in under 30 minutes per side. A pair typically costs £15–40.',
  },
  'fuel-filters': {
    whatTheyDo: 'The fuel filter removes impurities and water from fuel before it reaches the engine. Diesel fuel filters are particularly important because diesel injectors are extremely sensitive to contamination.',
    whenToReplace: 'Every 20,000–40,000 miles for diesel engines. Petrol fuel filters last longer (often 50,000+ miles) and some are a lifetime fit located inside the fuel tank. Symptoms of a clogged fuel filter include poor acceleration, stalling, and difficulty starting.',
    brandGuide: 'MANN-FILTER, Bosch, and Mahle are the main OEM fuel filter suppliers. Diesel filters must be high-quality to protect the injectors — a cheap filter is a false economy.',
    topTip: 'When replacing a diesel fuel filter, prime it with fresh diesel before fitting. An air lock in the fuel system can prevent the engine from starting and potentially damage the fuel pump.',
  },
  'cabin-filters': {
    whatTheyDo: 'The cabin (pollen) filter cleans the air entering the passenger compartment through the ventilation system. It traps pollen, dust, exhaust particles, and bacteria to keep the air inside the car clean.',
    whenToReplace: 'Every 15,000–20,000 miles or annually. A clogged cabin filter reduces airflow from the vents, causes musty smells when the heater is on, and can mist up the windscreen due to poor air circulation.',
    brandGuide: 'MANN-FILTER, Mahle, and Bosch offer both standard particle filters and activated carbon filters. Carbon filters are slightly more expensive but also remove odours and harmful gases.',
    topTip: 'Cabin filter replacement is usually a 5-minute DIY job. Most are located behind the glovebox — drop the glovebox down, slide the old filter out, and slot the new one in. No tools needed on many cars.',
  },
  'water-pumps': {
    whatTheyDo: 'The water pump circulates coolant through the engine and radiator to maintain the correct operating temperature. A failed water pump causes rapid overheating which can warp the cylinder head or blow the head gasket.',
    whenToReplace: 'If driven by the timing belt, replace at the same time as the belt (every 60,000–125,000 miles). Electric water pumps typically last longer but can fail suddenly. Symptoms include overheating, coolant leaks from the pump weep hole, and a whining noise.',
    brandGuide: 'SKF, Gates, and Dayco supply OEM water pumps. Many timing belt kits include a water pump. For cars with known plastic impeller issues (e.g. BMW, VW), aftermarket metal impeller pumps are available.',
    topTip: 'Always replace the coolant and thermostat when fitting a new water pump. Old coolant may have lost its anti-corrosion properties, and a sticking thermostat can put extra strain on the new pump.',
  },
  'thermostats': {
    whatTheyDo: 'The thermostat controls the flow of coolant through the engine. It stays closed when the engine is cold to allow faster warm-up, then opens at operating temperature to allow coolant to flow through the radiator.',
    whenToReplace: 'Thermostats can fail stuck open (engine never reaches temperature, poor heating, increased fuel consumption) or stuck closed (overheating). Replace when symptoms appear or preventively when replacing the water pump.',
    brandGuide: 'Wahler, Mahle, and Gates are the main OEM thermostat suppliers. Some thermostats come as a complete housing assembly while others are just the thermostat element.',
    topTip: 'If your engine takes a long time to warm up or the temperature gauge sits lower than normal, the thermostat is likely stuck open. This increases fuel consumption by 5–10% and should be addressed.',
  },
  'alternators': {
    whatTheyDo: 'The alternator charges the battery and powers the electrical system while the engine is running. Modern cars with heated seats, screens, and multiple electronics put high demands on the alternator.',
    whenToReplace: 'Alternators typically last 100,000–150,000 miles. Symptoms of failure include the battery warning light, dim headlights, electrical system malfunctions, and a dead battery despite being recently charged. A whining noise from the engine bay can indicate a worn alternator bearing.',
    brandGuide: 'Bosch, Valeo, and Denso are the main OEM alternator manufacturers. Remanufactured (reconditioned) alternators offer significant savings over new units and often carry a comparable warranty.',
    topTip: 'Before replacing the alternator, test it properly. A simple multimeter test should show 13.8–14.4 volts at the battery with the engine running. Sometimes the issue is just a worn drive belt slipping on the alternator pulley.',
  },
  'starter-motors': {
    whatTheyDo: 'The starter motor cranks the engine to start it. It engages with the flywheel ring gear momentarily when you turn the key or press the start button. Stop-start systems use enhanced starter motors designed for thousands of daily cycles.',
    whenToReplace: 'Starter motors typically last 80,000–150,000 miles. Symptoms include slow cranking, clicking sounds with no cranking, intermittent starting failure, and the starter staying engaged after the engine starts (grinding noise).',
    brandGuide: 'Bosch, Valeo, and Denso supply OEM starter motors. Remanufactured units offer good value. Cars with stop-start need the correct enhanced starter motor — a standard unit won\'t last.',
    topTip: 'Intermittent starting problems can be caused by poor electrical connections rather than a faulty starter motor. Check the battery terminals, earth strap, and starter motor connections before replacing the unit.',
  },
  'radiators': {
    whatTheyDo: 'The radiator dissipates heat from the engine coolant into the air. It\'s the largest component of the cooling system and critical for preventing engine overheating.',
    whenToReplace: 'Radiators can last 10+ years but eventually develop leaks, usually from the end tanks or core. Symptoms include visible coolant leaks, overheating, coolant level dropping, and a sweet smell from the engine bay.',
    brandGuide: 'Nissens, Hella, and Valeo are respected OEM radiator suppliers. NRF is another good option. Avoid the cheapest aluminium radiators — poor quality can cause premature failure.',
    topTip: 'When replacing a radiator, flush the entire cooling system and fit a new thermostat and coolant. Old scale and debris in the system can block the new radiator.',
  },
  'ignition-coils': {
    whatTheyDo: 'Ignition coils convert the 12V battery voltage into the 20,000–40,000 volts needed to create a spark at the spark plug. Modern engines use one coil per cylinder (coil-on-plug) rather than a single coil and distributor.',
    whenToReplace: 'When they fail — there\'s no fixed replacement interval. Symptoms include misfires, rough idle, the engine management light flashing, reduced power, and poor fuel economy. Failure of one coil doesn\'t mean all need replacing, but they often fail in sequence.',
    brandGuide: 'Bosch, Denso, and NGK are the top brands. Delphi and Beru also supply OEM coils. Cheap coils can cause misfires and damage the catalytic converter.',
    topTip: 'If one coil fails, swap it with a coil from another cylinder. If the misfire follows the coil, you\'ve confirmed the diagnosis. This simple swap test avoids unnecessary replacement.',
  },
  'tie-rod-ends': {
    whatTheyDo: 'Tie rod ends connect the steering rack to the steering knuckle. They transmit the steering input from the steering wheel to the wheels. Worn tie rod ends cause vague steering and uneven tyre wear.',
    whenToReplace: 'When wear is detected — typically 60,000–100,000 miles. Signs include excessive play in the steering, the car wandering at speed, and knocking when turning. An MOT failure if there\'s excessive play in the ball joint.',
    brandGuide: 'Lemförder and TRW are the top OEM tie rod end manufacturers. Meyle and Febi offer good aftermarket alternatives. Tie rod ends are safety-critical — use reputable brands.',
    topTip: 'Always get a wheel alignment after replacing tie rod ends. The new components will change the toe angle, which affects tyre wear and straight-line tracking.',
  },
};

module.exports = { MODEL_CONTENT, CATEGORY_CONTENT };
