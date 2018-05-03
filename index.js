const requestIp = require('request-ip')
const express = require('express')
const app = express()

const styles = require('./styles')

const PORT = 3000

const html = ip => `
<!DOCTYPE html>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>What is My IP Address?</title>
  <meta name="description" content="Quickly find you IP Address and copy paste it!">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>${styles()}</style>
<html>
<body>

<svg height="1024" width="896" xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <defs>
    <symbol id="icon-clippy" viewBox="0 0 1024 1024">
      <path d="M128 768h256v64H128v-64z m320-384H128v64h320v-64z m128 192V448L384 640l192 192V704h320V576H576z m-288-64H128v64h160v-64zM128 704h160v-64H128v64z m576 64h64v128c-1 18-7 33-19 45s-27 18-45 19H64c-35 0-64-29-64-64V192c0-35 29-64 64-64h192C256 57 313 0 384 0s128 57 128 128h192c35 0 64 29 64 64v320h-64V320H64v576h640V768zM128 256h512c0-35-29-64-64-64h-64c-35 0-64-29-64-64s-29-64-64-64-64 29-64 64-29 64-64 64h-64c-35 0-64 29-64 64z" />
    </symbol>
  </defs>  
</svg>

<div class="container">
  <input id="ip" value="${ip}">
  <button class="btn" data-clipboard-target="#ip">
    <svg class="icon icon-clippy">
      <title>Copy to clipboard</title>
      <use xlink:href="#icon-clippy"></use>
    </svg>
  </button>
<div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>
<script>
  new ClipboardJS('.btn');
</script>

</html>
`

app.get('/', async (req, res) => {
  const clientIp = requestIp.getClientIp(req)
  return res.send(html(clientIp))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
