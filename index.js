console.log('hello world')

console.log(Date);
console.log(Math);

//1.txt中内容为1234567890
let fs = require('fs');
let rs = fs.createReadStream('./1.txt',{
    highWaterMark:3, //文件一次读多少字节,默认 64*1024
    flags:'r', //默认 'r'
    autoClose:true, //默认读取完毕后自动关闭
    start:0, //读取文件开始位置
    end:10, //流是闭合区间 包含start也含end
    encoding:'utf8' //默认null
});
rs.on("open",()=>{
   console.log("文件打开")
});
//疯狂触发data事件 直到读取完毕
rs.on('data',(data)=>{
    console.log(data); //共读4个字节，但是highWaterMark为3，所以触发2次data事件，分别打印123  4
});
