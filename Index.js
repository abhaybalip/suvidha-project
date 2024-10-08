// 
const print = (data) => console.log(data)

const express = require('express')

function Main(params) {
    const app = express()
    app.use(express.static(__dirname + '/build'))

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/build/index.html')
    })

    app.listen(1000, function (err) {
        if (err) {
            print('Error Occured')
        }
    })
}
// Main()