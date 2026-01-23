const fs = require('fs');

const DISCLAIMER = `
<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:1rem;margin:1.5rem 0;font-size:.85rem;">
<strong>⚠️ Important:</strong> Always verify part compatibility with your exact vehicle before purchasing. Parts fitment can vary by engine code, build date, and specification. Check with the retailer and cross-reference your vehicle registration (VRM) on the retailer's website to confirm exact fitment. CarPartsCompare.co.uk provides price comparisons only and is not responsible for incorrect purchases.
</div>`;

let count = 0;

fs.readdirSync('.').filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'about.html' && f !== 'contact.html' && f !== 'privacy.html' && f !== 'terms.html').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if already has disclaimer
  if (content.includes('Always verify part compatibility')) {
    return;
  }
  
  // Add disclaimer after the results section (before info-section)
  if (content.includes('<section class="info-section">')) {
    content = content.replace('<section class="info-section">', DISCLAIMER + '\n<section class="info-section">');
    fs.writeFileSync(file, content);
    count++;
  }
});

console.log('Added disclaimer to ' + count + ' files');
