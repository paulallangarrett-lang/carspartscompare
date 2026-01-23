const fs = require('fs');

const DISCLAIMER = `
<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:1rem;margin:1.5rem 0;font-size:.85rem;">
<strong>⚠️ Important:</strong> Always verify part compatibility with your exact vehicle before purchasing. Parts fitment can vary by engine code, build date, and specification. Check with the retailer and cross-reference your vehicle registration (VRM) on the retailer's website to confirm exact fitment. CarPartsCompare.co.uk provides price comparisons only and is not responsible for incorrect part purchases. All trademarks belong to their respective owners.
</div>
<div style="background:#e8f4fd;border:1px solid #0066cc;border-radius:8px;padding:0.75rem;margin:1rem 0;font-size:.8rem;">
<strong>💡 Affiliate Disclosure:</strong> We may earn a commission when you click retailer links and make a purchase. This doesn't affect the price you pay. <a href="/terms.html">Learn more</a>
</div>`;

let count = 0;
let skipped = 0;

const skipFiles = ['index.html', 'about.html', 'contact.html', 'privacy.html', 'terms.html', 'cookies.html', 'admin.html'];

fs.readdirSync('.').filter(f => f.endsWith('.html') && !skipFiles.includes(f)).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if already has disclaimer
  if (content.includes('Always verify part compatibility')) {
    skipped++;
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
console.log('Skipped ' + skipped + ' files (already had disclaimer)');
