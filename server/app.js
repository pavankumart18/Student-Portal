const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bodyParser=require('body-parser');
const Student =require("./models/Student")
const File=require('./models/file');
const path=require('path');
const multer=require('multer');
const Sems=require('./models/newfile');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.get("/hello",(req,res)=>{
    res.send("hello world")
})

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://pavankumart:13a14as1@cluster0.b6dce5l.mongodb.net/SW',()=>{
    console.log("connected")
})
app.post('/api/student',async(req,res)=>{
    Student.findOne({username:req.body.username,password:req.body.password},(error,data)=>{
        if(error){
            console.log(error)
        }else{
            const token=jwt.sign({
                id:data._id,
                name:data.name,
                rollno:data.rollno,
                branch:data.branch,
                phoneno:data.phoneno,
                username:data.username,  
            },'secret123')
            res.json({status:'ok',user:token})
        }
    })
})
app.post('/api/registerstudent',async(req,res)=>{
    console.log(req.body)
    const a= await Student.create(req.body);
    res.json(a)
})
app.get("/api/Student/:id",async(req,res)=>{
    Student.findById({_id:req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }else{
                    res.json(data)
                    console.log(data)
            }
})})
app.use(express.static(path.join(__dirname,'..','build')))
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './files/');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
  }),
  limits: {
    fileSize: 1024*1024*5 // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true); // continue with upload
  }
});

app.post('/upload',upload.single('file'),async (req,res)=>{
    try{
        const {subject,date,day}=req.body;
        const {path,mimetype}=req.file;
        console.log(req.body)
        const file=new File({
            subject:subject,
            date:date,
            day:day,
            file_path:path,
            file_mimetype:mimetype
        });
        await file.save();
        res.send('fileuploaded succesfully')
    }catch(error){
        res.status(400).send('error while uploading file.try again later');
    }
},
(error,req,res,next)=>{
    if(error){
        res.status(500).send(error.message);
    }
}
)
app.post(
    '/upload/sem',
    upload.single('file'),
    async (req, res) => {
      try {
        const { title, description } = req.body;
        const { path, mimetype } = req.file;
        const sems = new Sems({
          title:title,
          description:description,
          file_path: path,
          file_mimetype: mimetype
        });
        await sems.save();
        res.send('file uploaded successfully.');
      } catch (error) {
        res.status(400).send('Error while uploading file. Try again later.');
      }
    },
    (error, req, res, next) => {
      if (error) {
        res.status(500).send(error.message);
      }
    }
  );
app.get('/getAllFiles',async (req,res)=>{
    try{
        const files=await File.find({});
        const sortedByCreationDate=files.sort(
            (a,b)=> b.createdAt-a.createdAt
        );
        res.send(sortedByCreationDate);
    }catch(error){
        res.status(400).send('Error while getting list of files.');
    }
});
app.get('/getAllFiles/sem',async (req,res)=>{
    try{
        const files=await Sems.find({});
        const sortedByCreationDate=files.sort(
            (a,b)=> b.createdAt-a.createdAt
        );
        res.send(sortedByCreationDate);
    }catch(error){
        res.status(400).send('Error while getting list of files.');
    }
});
app.get('/downloadsem/:id', async (req, res) => {
    try {
      const file = await Sems.findById(req.params.id);
      res.set({
        'Content-Type': file.file_mimetype
      });
      res.sendFile(path.join(__dirname, '/server/','..',file.file_path));
    } catch (error) {
      res.status(400).send('Error while downloading file. Try again later.');
    }
  });

app.get('/download/:id', async (req, res) => {
    try {
      const file = await File.findById(req.params.id);
      res.set({
        'Content-Type': file.file_mimetype
      });
      res.sendFile(path.join(__dirname, '/server1/','..',file.file_path));
    } catch (error) {
      res.status(400).send('Error while downloading file. Try again later.');
    }
  });

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','build','index.html'))
})
app.listen(9000,()=>{
    console.log("connected to 9000 port")
})