const mongoose = require('mongoose');

const jobApplication = new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    experience:{type:String,required:true},
    linkedInProfile:{type:String,default:null},
    resumeFile : {type:String,default:null},
    description : {type:String,required:true}
});


const jobApplicationModel = mongoose.model('jobapplications',jobApplication);

module.exports = jobApplicationModel;