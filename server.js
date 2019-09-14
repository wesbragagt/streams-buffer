const fs = require('fs')
const express = require('express')
const app = express()


// var data = [{name: 'john'}, {name:'michael'}]

// for (let index = 0; index < 1000; index++) {
//     data.push({name: `dle${Math.random()}`})
    
// }

// fs.writeFileSync('names.json', JSON.stringify(data), function(err, result){
//     try{
//         console.log(result)
//     } catch(err){
//         console.log(err)
//     }
// })
 
app.get('/', function (req, res) {
    var readStream = fs.createReadStream(__dirname + '/names.json')
    readStream.pipe(res)
    readStream.on(row => console.log(row))
})
 
app.listen(3000, console.log('listening...'))
