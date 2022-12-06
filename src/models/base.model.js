const DBConnection = require("../databases/DBConnect");

class BaseModel {
    querySQL(sql) {
        return new Promise(function (resolve, reject) {
            DBConnection.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}

module.exports = BaseModel;