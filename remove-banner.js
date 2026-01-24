const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Remove the banner div and its styles
content = content.replace(/<div style="background:#1a1a2e;color:#ffd700;padding:10px 0;overflow:hidden;position:relative;">[\s\S]*?<\/style>\s*<\/div>/g, '');

fs.writeFileSync('index.html', content);
console.log('Removed construction banner from homepage');
