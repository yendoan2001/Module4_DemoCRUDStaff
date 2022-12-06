const express = require('express');
const StaffController = require("../controllers/staff.controller");
const multer = require("multer");
const routerWeb = express.Router();
const staffController = new StaffController();

routerWeb.get('/staffs', (req, res) => {
    staffController.index(req, res).catch((err) => {
        console.log(err);
    })
});
routerWeb.get('/staffs/:id/delete', (req, res) => {
    staffController.deleteStaff(req, res).catch((err) => {
        console.log(err);
    })
});
routerWeb.get('/staffs/:id/edit', (req, res) => {
    staffController.showFormEdit(req, res).catch((err)=>{
        console.log(err);
    });
});
routerWeb.get('/staffs/create',(req, res)=>{
    staffController.showFormCreate(req, res);

})
routerWeb.post('/staffs/create',(req, res)=>{
    staffController.createStaff(req, res).catch((err) => {
        console.log(err);
    })
})

module.exports = routerWeb;