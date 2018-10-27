const http = require('http')
const url = require('url')

const server = http.createServer((req,res) => {

    const parsedUrl = url.parse(req.url, true)

    const pathname = parsedUrl.pathname

    const trimmedPath = pathname.replace(/^\/+|\/+$/g,'')

    res.end('Hello world')

    console.log('Requested url path: ' + trimmedPath)
})

server.listen(8080, () => console.log('Server running on port 8080'))

//replace(/^\/+|\/+$/g,'')