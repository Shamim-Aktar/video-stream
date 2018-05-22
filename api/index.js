const http=require('http');
const bodyParser=require('body-parser');
const express=require('express');
const _=require('lodash');
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
const PORT=3001;

app.server=http.createServer(app);

app.get('/api',(req, res)=>{
    return res.json({version:'1.0'})
})

app.post('/api/on-live-auth', (req, res, next)=>{

    const streamInfo=req.body;
    const streamSecretKey=_.get(streamInfo, 'name')
    console.log(streamInfo)

    return res.status(200).json({verified:true,})
})



app.post('/api/on-live-done',(req, res, next)=>{
   const streamingKey=_.get(req, 'body.name');
    console.log('user finishing streaming camera',streamingKey)
    return res.json({
        done:true
    })
})

//start server
app.server.listen(PORT, ()=>{
    console.log(`server is running on: http:localhost:${PORT}`);
})
