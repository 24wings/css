import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
var app = express();
app.use(bodyParser());
app.use(methodOverride());


// public作为静态文件服务器
app.use(express.static(__dirname+'/public'));
app.get('/test',(req,res,next)=>{
    // res.json({name:'hello world'});
    res.end('hello world');
 
});



// app.use('*',(req,res,next)=>{
//         res.redirect('404.html');
// });

app.listen(4000,()=>{
    console.log(`服务器运行在4000端口`);
})