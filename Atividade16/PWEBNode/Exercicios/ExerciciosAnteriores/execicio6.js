var http = require("http")

var server =http.createServer(function(reg,res){
    res.end("<html><body>Site Fatec Sorocaba</body></html>")
})
server.listen(3000)