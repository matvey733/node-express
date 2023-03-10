const Task = require("../models/Task");
// async wrapper to eliminate trycatch blocks everywhere
const async = require("../middleware/asyncWrapper");


const getAllTasks = async(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
})


const postTask = async(async (req, res) => {
    const data = req.body;
    const task = await Task.create(data);
    res.status(201).json(task);
})


const getTask = async(async (req, res) => {
    const { taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    
    if (!task) {
        return res.status(404).json(null);
    }
    
    res.status(200);
    res.json(task);
})


const patchTask = async(async (req, res) => {
    const { taskID } = req.params;
    const task = await Task.findOneAndUpdate(
        { _id: taskID },
        req.body,
        { new: true }
    )
    
    if (!task) {
        return res.status(404).json(null);
    }
    
    res.status(200);
    res.json(task);
}) 
  




const deleteTask = async(async (req, res) => {
    const { taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    
    if (!task) {
        return res.status(404).json(null);
    }
    
    res.status(200);
    res.json(task);
})


module.exports = {
    getAllTasks,
    postTask,
    getTask,
    patchTask,
    deleteTask
}