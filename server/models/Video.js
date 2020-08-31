//video collection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
   writer:{
       type:mongoose.Schema.Types.ObjectId, //User.js 의 모든정보를 긁어온다
       ref:'User'
   },
   title:{
       type:String,
       maxlength:50
   },
   description : {
       type:String
   },
   privacy:{
       type:Number
   },
   filePath:{
       type:String
   },
   category:{
       type:String
   },
   views:{
       type:Number,
       default:0
   },
   duration:{
    type:String
   },
   thumbnail:{
    type:String
   }
}, {timestampds:true})

const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }