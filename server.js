 const eventEmitter = require('events');
 const fs = require('fs');
 const http = require('http');

 const server = http.createServer();
 const PORT = 2000;

 server.on('request', (req,res) => {
//    fs.readFile('input.txt',  (err, data) =>{
//      if (err) return console.error(err);
//      res.end(data.toString());
//    });
   const readStream = fs.createReadStream('inputs.txt')

   readStream.on('data', (chunkData) => {
    res.write(chunkData);
   });

   readStream.on('end',() => {
       res.end();
   })

   readStream.on('error', (err) => {
       res.end('Sorry page couldnot find.')
   })
 });


 server.listen(PORT, () => {
   console.log(`listening at port ${PORT}`)
 });