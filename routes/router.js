//set paths for each request
const express=require('express')

const { employeeRegister, getAllEmployees, getEmployee,removeEmployee, editEmployee } = require('../controllers/logic')
const upload=require('../multerconfig/storageConf')
//create an object for router class in express
const router=new express.Router()

//register employee -post
router.post('/employees/register',upload.single('user_profile'),employeeRegister)

//get all employee
router.get('/employees/getEmployees',getAllEmployees)

//get single employee details
router.get('/employees/getEmployee/:id',getEmployee)

//delete employee
router.delete('/employees/removeEmployee/:id',removeEmployee)

//edit employee
router.put('/employees/updateEmployee/:id',upload.single('user_profile'),editEmployee)


module.exports=router
