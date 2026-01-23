const fs = require('fs');

// The manual lookup HTML to insert after the VRM form
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
<option value="dacia">Dacia</option>
<option value="fiat">Fiat</option>
<option value="ford">Ford</option>
<option value="honda">Honda</option>
<option value="hyundai">Hyundai</option>
<option value="jaguar">Jaguar</option>
<option value="kia">Kia</option>
<option value="land-rover">Land Rover</option>
<option value="lexus">Lexus</option>
<option value="mazda">Mazda</option>
<option value="mercedes">Mercedes-Benz</option>
<option value="mg">MG</option>
<option value="mini">Mini</option>
<option value="nissan">Nissan</option>
<option value="peugeot">Peugeot</option>
<option value="renault">Renault</option>
<option value="seat">SEAT</option>
<option value="skoda">Skoda</option>
<option value="suzuki">Suzuki</option>
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
<option value="brake-pads">Brake Pads</option>
<option value="brake-discs">Brake Discs</option>
<option value="oil-filter">Oil Filter</option>
<option value="air-filter">Air Filter</option>
<option value="cabin-filter">Cabin Filter</option>
<option value="spark-plugs">Spark Plugs</option>
<option value="clutch-kit">Clutch Kit</option>
<option value="timing-belt-kit">Timing Belt Kit</option>
<option value="water-pump">Water Pump</option>
<option value="alternator">Alternator</option>
<option value="starter-motor">Starter Motor</option>
<option value="battery">Battery</option>
<option value="shock-absorbers">Shock Absorbers</option>
<option value="coil-springs">Coil Springs</option>
<option value="wheel-bearing">Wheel Bearing</option>
<option value="egr-valve">EGR Valve</option>
<option value="turbo">Turbo</option>
<option value="radiator">Radiator</option>
<option value="thermostat">Thermostat</option>
<option value="wiper-blades">Wiper Blades</option>
</select>
<button onclick="goToComparison()" style="padding:.5rem 1rem;background:#1a1a2e;color:#fff;border:none;border-radius:4px;cursor:pointer;">Find Parts</button>
</div>
</div>
</div>
<script>
const models={
'alfa-romeo':['Giulia','Giulietta','Stelvio'],
'audi':['A1','A3','A4','A5','A6','Q2','Q3','Q5','Q7','TT'],
'bmw':['1-Series','2-Series','3-Series','4-Series','5-Series','X1','X3','X5'],
'citroen':['Berlingo','C1','C3','C4','C5','DS3','DS4'],
'dacia':['Duster','Logan','Sandero'],
'fiat':['500','Panda','Punto','Tipo'],
'ford':['EcoSport','Fiesta','Focus','Galaxy','Kuga','Mondeo','Puma','S-Max','Transit','Transit-Custom'],
'honda':['Civic','CR-V','HR-V','Jazz'],
'hyundai':['i10','i20','i30','i40','Kona','Santa-Fe','Tucson'],
'jaguar':['E-Pace','F-Pace','XE','XF'],
'kia':['Ceed','Niro','Picanto','Rio','Sorento','Sportage','Stonic'],
'land-rover':['Defender','Discovery','Discovery-Sport','Range-Rover','Range-Rover-Evoque','Range-Rover-Sport','Range-Rover-Velar'],
'lexus':['CT','IS','NX','RX','UX'],
'mazda':['2','3','6','CX-3','CX-30','CX-5','MX-5'],
'mercedes':['A-Class','B-Class','C-Class','E-Class','GLA','GLC','GLE','Sprinter','Vito'],
'mg':['3','HS','ZS'],
'mini':['Clubman','Countryman','Hatch'],
'nissan':['Juke','Leaf','Micra','Note','Qashqai','X-Trail'],
'peugeot':['108','208','308','2008','3008','5008','Partner','Rifter'],
'renault':['Captur','Clio','Kadjar','Kangoo','Megane','Scenic','Zoe'],
'seat':['Arona','Ateca','Ibiza','Leon','Tarraco'],
'skoda':['Fabia','Kamiq','Karoq','Kodiaq','Octavia','Scala','Superb'],
'suzuki':['Ignis','Jimny','Swift','Vitara'],
'toyota':['Auris','Aygo','C-HR','Corolla','Hilux','Land-Cruiser','Prius','RAV4','Yaris'],
'vauxhall':['Adam','Astra','Combo','Corsa','Crossland','Grandland','Insignia','Mokka','Vivaro','Zafira'],
'volkswagen':['Arteon','Caddy','Golf','ID3','ID4','Passat','Polo','T-Cross','T-Roc','Tiguan','Touareg','Touran','Transporter','Up'],
'volvo':['S60','S90','V40','V60','V90','XC40','XC60','XC90']
};
function updateModels(){
const make=document.getElementById('select-make').value;
const modelSelect=document.getElementById('select-model');
modelSelect.innerHTML='<option value="">Select Model</option>';
if(make&&models[make]){
models[make].forEach(m=>{
const opt=document.createElement('option');
opt.value=m.toLowerCase().replace(/ /g,'-');
opt.textContent=m;
modelSelect.appendChild(opt);
});
}
}
function goToComparison(){
const make=document.getElementById('select-make').value;
const model=document.getElementById('select-model').value;
const part=document.getElementById('select-part').value;
if(make&&model&&part){
const slug=make+'-'+model+'-'+part;
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
  
  // Skip if already has manual lookup
  if (content.includes('I don\'t know my registration')) {
    skipped++;
    return;
  }
  
  // Add after the VRM form closing div
  if (content.includes('</form>') && content.includes('vrm-form')) {
    content = content.replace('</form>\n</div>', '</form>' + MANUAL_LOOKUP + '\n</div>');
    fs.writeFileSync(file, content);
    count++;
  }
});

console.log('Added manual lookup to ' + count + ' files');
console.log('Skipped ' + skipped + ' files (already had it)');
