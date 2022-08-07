const csvtojson = require('csvtojson')
const fs = require('fs')
const multer = require('multer')
const express = require('express')
const app = express()

const fileStoreEngine = multer.diskStorage({
    destination:(req, res, cb) => {
        cb(null, "./csv")
    },
    filename:(req, file, cb) => {
        cb(null, Date.now()+"--"+ file.originalname)
    }
})


const upload = multer({storage: fileStoreEngine})



app.post("/single",upload.single("csvs"),(req, res)=> {
    console.log(req.file)
    res.send("SINGLE FILE UPLOAD SUCCESS")
})


// const csvfilepath = "Book1.csv"
// csvtojson()
// .fromFile(csvfilepath)
// .then((json) => {
//     console.log(json)

//     fs.writeFileSync('output.json', JSON.stringify(json),"utf-8", (err) => {
//        if(err) console.log(err)
//     })
// })

app.listen(3000, () =>{
    console.log("running")
})