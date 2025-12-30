module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
<!DOCTYPE html>
<html>
<head><title>Test Page</title></head>
<body>
<h1>✅ 终极测试成功！</h1>
<p>来自 api/index.js 函数的直接响应。</p>
<p>部署通道完全正常。</p>
</body>
</html>
  `);
};
