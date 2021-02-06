const express=require('express');
const app=express();

app.use(express.static(__dirname+'/dist/SapientProject'));
app.all('*',(request,response)=>{
    response.status(200).sendFile(__dirname+'/dist/SapientProject/index.html')
});

app.listen(process.env.PORT || 8080);