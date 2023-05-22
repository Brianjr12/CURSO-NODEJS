const path = require('path');

const filePath = path.join('public', 'main.css', 'index.html');
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
