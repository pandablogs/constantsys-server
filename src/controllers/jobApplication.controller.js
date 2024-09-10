const jobApplicationModel = require("../models/proposals.model");

async function saveProposals(req,res){
    try {
        const {fullName,contact,email,experience,linkedInProfile,description} = req.body;
        const file = req.file;

        const collection = await jobApplicationModel.create({
            fullName:fullName,
            contact:contact,
            email:email,
            experience:experience,
            linkedInProfile:linkedInProfile,
            description:description,
            resumeFile:file.path
        });


        const result = await collection.save();
        res.json({
          status: true,
          message: 'Application Submitted Successfully !',
          data: result
        });
    } catch (error) {
        console.log("Proposal Save Error : ",error)
    }
}

async function getJobApplications(req,res){
    try {
        const page = parseInt(req.query.page) || 1;
        const pageLimit = parseInt(req.query.pageLimit) || 10;

        const skip = (page - 1) * pageLimit;
        const list = await jobApplicationModel.find({}).skip(skip).limit(pageLimit);

        const totalItems = await jobApplicationModel.countDocuments();

        res.json({
            status: true,
            message: "All Applications Fetched Successfully",
            data: list,
            pagination: {
                currentPage: page,
                pageLimit: pageLimit,
                totalPages: Math.ceil(totalItems / pageLimit),
                totalItems: totalItems
            }
        });
    } catch (error) {
        res.status(500).json({ status: false, message: "Error fetching users", error: error.message });
    }
}


module.exports = {saveProposals,getJobApplications};