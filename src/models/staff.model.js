const BaseModel = require('./base.model');

class StaffModel extends BaseModel {
    async getAllStaffs() {
        const sql = `SELECT *
                     FROM Staffs`;
        return await this.querySQL(sql);
    }

    async delete(id) {
        const sql = `DELETE
                     FROM Staffs
                     WHERE ID = ${id}`;
        return await this.querySQL(sql);
    }

    async getStaffById(id) {
        const sql = `select *
                     FROM Staffs
                     WHERE ID = ${id}`;
        return await this.querySQL(sql);
    }

    async create(staff) {
        const sql = `INSERT INTO Staffs (Name, Age, Address, Email) values ("${staff.name}", "${staff.age}", "${staff.address}", "${staff.email}")`;
        return await this.querySQL(sql);
    }
}

module.exports = StaffModel;