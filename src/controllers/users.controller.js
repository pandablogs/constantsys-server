const userModel = require("../models/users.model");


async function saveUserQuotes(req,res){
    try {
        const {fullName,contact,email,fullAddress,message} = req.body;

        if(fullName && contact && email && fullAddress && message){
            const collection = await userModel.create({fullName,contact,email,fullAddress,message});
            const result = await collection.save();
            res.send({status:true,message:"Data Saved Successfully !",data:result});
        }else{
            res.json({status:false,message:"All Fields are required !"});
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "Error in Save users", error: error.message });
        console.error("Save User Error : ",error);
    }
}

async function getAllUserQuotes(req,res){
    try {
        const page = parseInt(req.query.page) || 1;
        const pageLimit = parseInt(req.query.pageLimit) || 10;

        const skip = (page - 1) * pageLimit;
        const list = await userModel.find({}).skip(skip).limit(pageLimit);

        const totalItems = await userModel.countDocuments();

        res.json({
            status: true,
            message: "All User Fetched Successfully",
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

module.exports = {
    saveUserQuotes,
    getAllUserQuotes
};