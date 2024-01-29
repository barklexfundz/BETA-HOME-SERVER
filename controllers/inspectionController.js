const Inspections = require('../models/inspection')

//create inspection
const createInspection = async (req,res) => {
    res.send("create inspection");
};

//get all inspection
const getAllInspections = async (req,res) => {
    res.send("get all inspection");
}

module.exports ={createInspection, getAllInspections}