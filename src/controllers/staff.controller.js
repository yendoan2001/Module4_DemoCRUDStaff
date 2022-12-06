const StaffModel = require('../models/staff.model');

class StaffController {
    constructor() {
        this.staffModel = new StaffModel();
    }

    showFormCreate(req, res) {
        res.render('admin/staffs/create');
    }

    async createStaff(req, res) {
        console.log(req.body);
        const staff = {
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            email: req.body.email
        }
        console.log(staff);

        await this.staffModel.create(staff);
        res.redirected('/staffs');
    }

    async showFormEdit(req, res) {
        let id = req.params.id;
        let staff = await this.staffModel.getStaffById(id);
        res.render('admin/staffs/edit', {staff: staff});
    }

    async index(req, res) {
        let staffs = await this.staffModel.getAllStaffs();
        res.render('admin/staffs/list', {data: staffs})
    }

    async deleteStaff(req, res) {
        let id = req.params.id;
        await this.staffModel.delete(id);
        res.redirect('/staffs')
    }
}

module.exports = StaffController;