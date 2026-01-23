const fs = require('fs');

const ADSENSE = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3599505006694500" crossorigin="anonymous"></script>';

let count = 0;

fs.readdirSync('.').filter(f => f.endsWith('.html')).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('ca-pub-359')) {
    content = content.replace('</head>', ADSENSE + '\n</head>');
    fs.writeFileSync(file, content);
    count++;
  }
});

console.log('Added AdSense to ' + count + ' files');
