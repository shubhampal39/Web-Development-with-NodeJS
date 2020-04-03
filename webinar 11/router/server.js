const express=require('express')
 const srv=express()

const teacherRoute=require('./routes/teacher')
const studentRoute=require('./routes/student')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/student',studentRoute)
srv.use('/teacher',teacherRoute)


srv.use((req, res) => res.send("<h2>404 not found</h2>"))

srv.listen(8888)