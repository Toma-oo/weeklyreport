const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, '..', 'index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(htmlContent);
};
