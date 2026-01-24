const fs = require('fs');

// Comprehensive UK vehicle database - Top 100+ models by registration
const MANUAL_LOOKUP = `
<div class="manual-lookup" style="margin-top:1rem;text-align:center;">
<a href="#" onclick="document.getElementById('manual-select').style.display='block';this.style.display='none';return false;" style="color:#1a1a2e;font-size:.9rem;">I don't know my registration</a>
<div id="manual-select" style="display:none;margin-top:1rem;text-align:left;">
<p style="font-size:.85rem;color:#666;margin-bottom:.75rem;">Select your vehicle manually:</p>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.5rem;">
<select id="select-make" onchange="updateModels()" style="padding:.5rem;border:1px solid #ddd;border-radius:4px;">
<option value="">Select Make</option>
<option value="alfa-romeo">Alfa Romeo</option>
<option value="audi">Audi</option>
<option value="bmw">BMW</option>
<option value="citroen">Citroen</option>
<option value="cupra">Cupra</option>
<option value="dacia">Dacia</option>
<option value="ds">DS</option>
<option value="fiat">Fiat</option>
<option value="ford">Ford</option>
<option value="honda">Honda</option>
<option value="hyundai">Hyundai</option>
<option value="infiniti">Infiniti</option>
<option value="jaguar">Jaguar</option>
<option value="jeep">Jeep</option>
<option value="kia">Kia</option>
<option value="land-rover">Land Rover</option>
<option value="lexus">Lexus</option>
<option value="mazda">Mazda</option>
<option value="mercedes">Mercedes-Benz</option>
<option value="mg">MG</option>
<option value="mini">Mini</option>
<option value="mitsubishi">Mitsubishi</option>
<option value="nissan">Nissan</option>
<option value="peugeot">Peugeot</option>
<option value="porsche">Porsche</option>
<option value="renault">Renault</option>
<option value="seat">SEAT</option>
<option value="skoda">Skoda</option>
<option value="smart">Smart</option>
<option value="ssangyong">SsangYong</option>
<option value="subaru">Subaru</option>
<option value="suzuki">Suzuki</option>
<option value="tesla">Tesla</option>
<option value="toyota">Toyota</option>
<option value="vauxhall">Vauxhall</option>
<option value="volkswagen">Volkswagen</option>
<option value="volvo">Volvo</option>
</select>
<select id="select-model" onchange="updateParts()" style="padding:.5rem;border:1px solid #ddd;border-radius:4px;">
<option value="">Select Model</option>
</select>
<select id="select-part" style="padding:.5rem;border:1px solid #ddd;border-radius:4px;">
<option value="">Select Part</option>
<optgroup label="Brakes">
<option value="brake-pads">Brake Pads</option>
<option value="front-brake-pads">Front Brake Pads</option>
<option value="rear-brake-pads">Rear Brake Pads</option>
<option value="brake-discs">Brake Discs</option>
<option value="front-brake-discs">Front Brake Discs</option>
<option value="rear-brake-discs">Rear Brake Discs</option>
<option value="brake-calipers">Brake Calipers</option>
<option value="brake-drums">Brake Drums</option>
<option value="brake-shoes">Brake Shoes</option>
<option value="abs-sensor">ABS Sensor</option>
</optgroup>
<optgroup label="Service Parts">
<option value="oil-filter">Oil Filter</option>
<option value="air-filter">Air Filter</option>
<option value="fuel-filter">Fuel Filter</option>
<option value="cabin-filter">Cabin Filter</option>
<option value="pollen-filter">Pollen Filter</option>
<option value="spark-plugs">Spark Plugs</option>
<option value="glow-plugs">Glow Plugs</option>
<option value="service-kit">Service Kit</option>
</optgroup>
<optgroup label="Engine">
<option value="timing-belt-kit">Timing Belt Kit</option>
<option value="timing-chain-kit">Timing Chain Kit</option>
<option value="water-pump">Water Pump</option>
<option value="thermostat">Thermostat</option>
<option value="head-gasket">Head Gasket</option>
<option value="engine-mount">Engine Mount</option>
<option value="oil-pump">Oil Pump</option>
<option value="crankshaft-sensor">Crankshaft Sensor</option>
<option value="camshaft-sensor">Camshaft Sensor</option>
</optgroup>
<optgroup label="Clutch & Transmission">
<option value="clutch-kit">Clutch Kit</option>
<option value="dual-mass-flywheel">Dual Mass Flywheel</option>
<option value="clutch-slave-cylinder">Clutch Slave Cylinder</option>
<option value="cv-joint">CV Joint</option>
<option value="driveshaft">Driveshaft</option>
<option value="gearbox-mount">Gearbox Mount</option>
</optgroup>
<optgroup label="Suspension & Steering">
<option value="shock-absorbers">Shock Absorbers</option>
<option value="front-shock-absorber">Front Shock Absorber</option>
<option value="rear-shock-absorber">Rear Shock Absorber</option>
<option value="coil-springs">Coil Springs</option>
<option value="front-coil-spring">Front Coil Spring</option>
<option value="rear-coil-spring">Rear Coil Spring</option>
<option value="control-arm">Control Arm</option>
<option value="wishbone">Wishbone</option>
<option value="ball-joint">Ball Joint</option>
<option value="track-rod-end">Track Rod End</option>
<option value="anti-roll-bar-link">Anti Roll Bar Link</option>
<option value="top-mount">Top Mount</option>
<option value="wheel-bearing">Wheel Bearing</option>
<option value="wheel-bearing-kit">Wheel Bearing Kit</option>
<option value="hub-assembly">Hub Assembly</option>
</optgroup>
<optgroup label="Electrical">
<option value="alternator">Alternator</option>
<option value="starter-motor">Starter Motor</option>
<option value="battery">Battery</option>
<option value="ignition-coil">Ignition Coil</option>
<option value="lambda-sensor">Lambda Sensor</option>
<option value="maf-sensor">MAF Sensor</option>
<option value="throttle-body">Throttle Body</option>
</optgroup>
<optgroup label="Cooling">
<option value="radiator">Radiator</option>
<option value="radiator-fan">Radiator Fan</option>
<option value="expansion-tank">Expansion Tank</option>
<option value="coolant-hose">Coolant Hose</option>
<option value="heater-matrix">Heater Matrix</option>
<option value="blower-motor">Blower Motor</option>
</optgroup>
<optgroup label="Exhaust & Emissions">
<option value="egr-valve">EGR Valve</option>
<option value="dpf-filter">DPF Filter</option>
<option value="catalytic-converter">Catalytic Converter</option>
<option value="turbo">Turbo</option>
<option value="turbocharger">Turbocharger</option>
<option value="exhaust">Exhaust</option>
<option value="exhaust-manifold">Exhaust Manifold</option>
</optgroup>
<optgroup label="Fuel System">
<option value="fuel-pump">Fuel Pump</option>
<option value="fuel-injector">Fuel Injector</option>
<option value="fuel-pressure-regulator">Fuel Pressure Regulator</option>
</optgroup>
<optgroup label="Body & Wipers">
<option value="wiper-blades">Wiper Blades</option>
<option value="wiper-motor">Wiper Motor</option>
<option value="wing-mirror">Wing Mirror</option>
<option value="window-regulator">Window Regulator</option>
<option value="door-lock">Door Lock</option>
<option value="headlight">Headlight</option>
<option value="tail-light">Tail Light</option>
</optgroup>
</select>
<button onclick="goToComparison()" style="padding:.5rem 1rem;background:#1a1a2e;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:600;">Compare Prices</button>
</div>
</div>
</div>
<script>
const models={
'alfa-romeo':['Giulia','Giulietta','Stelvio','MiTo','159','Brera','Spider','GT','147','156'],
'audi':['A1','A3','A4','A5','A6','A7','A8','Q2','Q3','Q5','Q7','Q8','TT','TTS','RS3','RS4','RS5','RS6','S3','S4','S5','e-tron','e-tron-GT'],
'bmw':['1-Series','2-Series','3-Series','4-Series','5-Series','6-Series','7-Series','8-Series','X1','X2','X3','X4','X5','X6','X7','Z4','i3','i4','iX','iX3','M3','M4','M5'],
'citroen':['C1','C3','C3-Aircross','C4','C4-Cactus','C4-Picasso','C5','C5-Aircross','Berlingo','Dispatch','DS3','DS4','DS5','Grand-C4-Picasso','Nemo','Relay'],
'cupra':['Ateca','Born','Formentor','Leon'],
'dacia':['Duster','Jogger','Logan','Sandero','Sandero-Stepway','Spring'],
'ds':['DS3','DS3-Crossback','DS4','DS5','DS7-Crossback','DS9'],
'fiat':['500','500C','500L','500X','Bravo','Doblo','Ducato','Fiorino','Grande-Punto','Panda','Punto','Punto-Evo','Qubo','Tipo'],
'ford':['B-Max','C-Max','EcoSport','Edge','Fiesta','Focus','Galaxy','Grand-C-Max','Ka','Ka+','Kuga','Mondeo','Mustang','Mustang-Mach-E','Puma','Ranger','S-Max','Tourneo-Connect','Tourneo-Custom','Transit','Transit-Connect','Transit-Courier','Transit-Custom'],
'honda':['Accord','Civic','CR-V','CR-Z','e','HR-V','Insight','Jazz','NSX','Odyssey','Pilot','Prelude','S2000','Shuttle'],
'hyundai':['Bayon','Coupe','Getz','i10','i20','i30','i40','i800','Ioniq','Ioniq-5','Ioniq-6','ix20','ix35','Kona','Santa-Fe','Terracan','Tucson','Veloster'],
'infiniti':['Q30','Q50','Q60','Q70','QX30','QX50','QX70'],
'jaguar':['E-Pace','F-Pace','F-Type','I-Pace','S-Type','X-Type','XE','XF','XJ','XK'],
'jeep':['Cherokee','Compass','Grand-Cherokee','Patriot','Renegade','Wrangler'],
'kia':['Carens','Carnival','Ceed','e-Niro','EV6','Magentis','Niro','Optima','Picanto','Pro-Ceed','Rio','Sedona','Sorento','Soul','Sportage','Stinger','Stonic','Venga'],
'land-rover':['Defender','Discovery','Discovery-Sport','Freelander','Freelander-2','Range-Rover','Range-Rover-Evoque','Range-Rover-Sport','Range-Rover-Velar'],
'lexus':['CT','ES','GS','IS','LC','LS','NX','RC','RX','UX'],
'mazda':['2','3','5','6','CX-3','CX-30','CX-5','CX-60','MX-30','MX-5','RX-8'],
'mercedes':['A-Class','AMG-GT','B-Class','C-Class','CLA','CLC','CLK','CLS','E-Class','EQA','EQB','EQC','EQE','EQS','G-Class','GLA','GLB','GLC','GLE','GLS','ML','R-Class','S-Class','SL','SLK','Sprinter','V-Class','Viano','Vito','X-Class'],
'mg':['3','4','5','6','HS','MG3','MG5','ZS','ZS-EV'],
'mini':['Clubman','Convertible','Countryman','Coupe','Hatch','One','Cooper','Cooper-S','John-Cooper-Works','Paceman','Roadster'],
'mitsubishi':['ASX','Colt','Eclipse-Cross','Grandis','L200','Lancer','Mirage','Outlander','Outlander-PHEV','Pajero','Shogun','Shogun-Sport'],
'nissan':['350Z','370Z','e-NV200','GT-R','Juke','Leaf','Micra','Murano','Navara','Note','NV200','NV300','Pathfinder','Pixo','Primastar','Pulsar','Qashqai','Qashqai+2','X-Trail'],
'peugeot':['1007','107','108','2008','206','207','208','3008','301','306','307','308','4007','4008','405','406','407','5008','508','607','Bipper','Boxer','Expert','Partner','RCZ','Rifter','Traveller'],
'porsche':['718-Boxster','718-Cayman','911','Boxster','Cayenne','Cayman','Macan','Panamera','Taycan'],
'renault':['Arkana','Captur','Clio','Espace','Fluence','Grand-Scenic','Kadjar','Kangoo','Koleos','Laguna','Master','Megane','Modus','Scenic','Trafic','Twingo','Wind','Zoe'],
'seat':['Alhambra','Altea','Arona','Ateca','Exeo','Ibiza','Leon','Mii','Tarraco','Toledo'],
'skoda':['Citigo','Enyaq','Fabia','Kamiq','Karoq','Kodiaq','Octavia','Rapid','Roomster','Scala','Superb','Yeti'],
'smart':['Forfour','Fortwo','Roadster'],
'ssangyong':['Korando','Kyron','Musso','Rexton','Rodius','Tivoli'],
'subaru':['BRZ','Forester','Impreza','Legacy','Levorg','Outback','WRX','XV'],
'suzuki':['Alto','Baleno','Celerio','Grand-Vitara','Ignis','Jimny','Kizashi','S-Cross','Splash','Swift','SX4','SX4-S-Cross','Vitara','Wagon-R'],
'tesla':['Model-3','Model-S','Model-X','Model-Y'],
'toyota':['4Runner','Auris','Avensis','Aygo','Aygo-X','bZ4X','C-HR','Camry','Celica','Corolla','GT86','GR86','GR-Yaris','Highlander','Hilux','IQ','Land-Cruiser','MR2','Prius','Prius+','Proace','Proace-City','RAV4','Supra','Urban-Cruiser','Verso','Yaris','Yaris-Cross'],
'vauxhall':['Adam','Agila','Ampera','Antara','Astra','Cascada','Combo','Corsa','Crossland','Crossland-X','Grandland','Grandland-X','GTC','Insignia','Karl','Meriva','Mokka','Mokka-X','Movano','Signum','Tigra','Vectra','Vivaro','VXR8','Zafira','Zafira-Tourer'],
'volkswagen':['Amarok','Arteon','Beetle','Bora','Caddy','California','Caravelle','CC','Eos','Fox','Golf','Golf-Plus','Golf-SV','ID3','ID4','ID5','Jetta','Lupo','Multivan','Passat','Phaeton','Polo','Scirocco','Sharan','T-Cross','T-Roc','Tiguan','Tiguan-Allspace','Touareg','Touran','Transporter','Up'],
'volvo':['C30','C70','S40','S60','S80','S90','V40','V50','V60','V70','V90','XC40','XC60','XC70','XC90']
};
function updateModels(){
const make=document.getElementById('select-make').value;
const modelSelect=document.getElementById('select-model');
modelSelect.innerHTML='<option value="">Select Model</option>';
if(make&&models[make]){
models[make].forEach(m=>{
const opt=document.createElement('option');
opt.value=m.toLowerCase().replace(/ /g,'-');
opt.textContent=m.replace(/-/g,' ');
modelSelect.appendChild(opt);
});
}
}
function goToComparison(){
const make=document.getElementById('select-make').value;
const model=document.getElementById('select-model').value;
const part=document.getElementById('select-part').value;
if(make&&model&&part){
let slug;
if(make==='volkswagen'){slug='vw-'+model+'-'+part;}
else if(make==='mercedes'){slug='mercedes-'+model.toLowerCase()+'-'+part;}
else if(make==='land-rover'){slug=model.toLowerCase()+'-'+part;}
else{slug=make+'-'+model+'-'+part;}
window.location.href='/'+slug;
}else{
alert('Please select make, model and part');
}
}
</script>`;

let count = 0;
let skipped = 0;

const skipFiles = ['index.html', 'about.html', 'contact.html', 'privacy.html', 'terms.html', 'cookies.html', 'admin.html'];

fs.readdirSync('.').filter(f => f.endsWith('.html') && !skipFiles.includes(f)).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove old manual lookup if exists
  if (content.includes("I don't know my registration")) {
    // Remove the old version
    content = content.replace(/<div class="manual-lookup"[\s\S]*?<\/script>\s*<\/div>\s*<\/div>/g, '');
  }
  
  // Add after the VRM form closing
  if (content.includes('</form>') && content.includes('vrm-form')) {
    content = content.replace(/<\/form>\s*<\/div>/, '</form>' + MANUAL_LOOKUP + '\n</div>');
    fs.writeFileSync(file, content);
    count++;
  } else {
    skipped++;
  }
});

console.log('Updated manual lookup on ' + count + ' files');
console.log('Skipped ' + skipped + ' files');
console.log('');
console.log('Vehicle coverage:');
console.log('- 38 manufacturers');
console.log('- 500+ models');
console.log('- 70+ parts categories');
