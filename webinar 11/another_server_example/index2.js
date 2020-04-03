const express = require('express')
const server = express();

const m1 = function (req, res, next) {
    console.log("We are in middleware 1")
    next()
}
const m2 = function (req, res, next) {
    console.log("We are in middleware 2")
    next()
}
const m3 = function (req, res, next) {
    console.log("We are in middleware 3")
    next()
}


const m4 = function (req, res, next) {
    console.log("We are in middleware 3")
    next()
}

const m5 = function (req, res, next) {
    console.log("We are in middleware 3")
    next()
}

server.use(m1)

server.use('/a', m2)

server.get('/a', function (req, res, next) {
    res.send("Hello World")
})

server.use(m3)

server.use(m4)

server.get('/b', function (req, res, next) {
    res.send("Hello World")
})


server.get('/k', function (req, res, next) {
    res.send("Hello World")
})


server.use(m5)

server.listen(3232)