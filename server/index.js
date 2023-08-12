const express = require("express")
const app = express()
const cors= require('cors')
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
// const PORT = "https://practical-backend-h29g.onrender.com"
const PORT = 9000

const fs = require("fs");
const path = require("path");

app.use(cors())
app.use(express.json());
let classNo,name,roll_no,batch,experiment,token

app.get('/api',(req,res)=>{
    res.send(`
    <p>name: ${name}  </p>
    <p>roll_no: ${roll_no}  </p>
    <p>class: ${classNo} </p>
    <p>batch: ${batch}  </p>
    <p>experiment: ${experiment}</p>
     `)
    })
    
    app.post("/api",(req,res)=>{
        name = req.body.name
        roll_no = req.body.roll_no
        batch = req.body.batch
        experiment = req.body.experiment
        classNo = req.body.class
        const filePath = path.join(__dirname,'/data')
        
        
                const content = fs.readFileSync(
                path.resolve(filePath, `${experiment}.docx`),
                "binary"
            );
        
            const zip = new PizZip(content);
        
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });
        
            // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
            doc.render({
                name: name,
                roll_no: roll_no,
                experiment:experiment,
                classNo:classNo,
                batch:batch
            });
        
            const buf = doc.getZip().generate({
                type: "nodebuffer",
                // compression: DEFLATE adds a compression step.
                // For a 50MB output document, expect 500ms additional CPU time
                compression: "DEFLATE",
            });
        
            // buf is a nodejs Buffer, you can either write it to a
            // file or res.send it with express for example.
            fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
    })
    

app.get("/download",(req,res)=>{

    setTimeout(()=>{
        res.download("output.docx",()=>{
            fs.unlinkSync("output.docx")
        })
    },5000)


})





app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`)
})