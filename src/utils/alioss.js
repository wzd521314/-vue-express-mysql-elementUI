// 引入ali-oss
let OSS = require('ali-oss')

/**
 *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
 *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
 *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
 *  [region] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
 */

let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAI4G5LZjAaSq5dsZcuoCkV' ,
  accessKeySecret: 'uGbRsAP2S5TsQ7Nm2hgxLMMfZg7hvS',
  bucket: 'kugoublogs' 
}) 


export function blogBucket() {
  return client
}


let guid = ()=>{
  let S4 = ()=>{
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

/** 
* 修改文件名字
*/
export function changeFileName (filename) {
  let arr = filename.split(".");
  var uuid = "oss"+guid();
  if(arr.length>1){
      return uuid+'.'+arr[arr.length-1];
  }else{
      return uuid;
  }
}

