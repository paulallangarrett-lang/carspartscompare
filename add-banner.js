const fs = require('fs');

const BANNER = `
<div style="background:#1a1a2e;color:#ffd700;padding:10px 0;overflow:hidden;position:relative;">
<div style="display:inline-block;white-space:nowrap;animation:scroll 20s linear infinite;">
<span style="padding:0 50px;">🚧 Site Under Construction - We're adding new features daily! 🚧</span>
<span style="padding:0 50px;">🔧 Compare prices across UK car parts retailers 🔧</span>
<span style="padding:0 50px;">🚗 More vehicles and parts being added soon! 🚗</span>
<span style="padding:0 50px;">🚧 Site Under Construction - We're adding new features daily! 🚧</span>
<span style="padding:0 50px;">🔧 Compare prices across UK car parts retailers 🔧</span>
<span style="padding:0 50px;">🚗 More vehicles and parts being added soon! 🚗</span>
</div>
<style>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
</div>`;

// Read index.html
let content = fs.readFileSync('index.html', 'utf8');

// Check if banner already exists
if (content.includes('Site Under Construction')) {
  console.log('Banner already exists on homepage');
  process.exit(0);
}

// Add banner right after opening body tag
content = content.replace('<body>', '<body>' + BANNER);

fs.writeFileSync('index.html', content);
console.log('Added construction banner to homepage');
