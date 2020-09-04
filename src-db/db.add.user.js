const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const datacon = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'brs',
}

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(datacon);
    await connection.connectAsync();

    let sql = "SELECT * FROM user_details  WHERE email_id=? AND password=?";
    const results = await connection.queryAsync(sql, [
        input.email_id,
        input.password,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let adduser = async (input) => {

    const con = mysql.createConnection(datacon);
    await con.connectAsync();
    let sql = "INSERT INTO user_details (first_name,email_id,password,contact_no) VALUES(?,?,?,?)"
    await con.queryAsync(sql, [
        input.first_name,
        // input.last_name,
        input.email_id,
        input.password,
        input.contact_no,
    ]);
    await con.endAsync();
};

let updateuser = async (input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "UPDATE user_details set password=? WHERE email_id=?"

    let results = await con.queryAsync(sql, [input.password, input.email_id]);

    await con.endAsync();

    return results;
}


module.exports = { authenticateUser, adduser, updateuser };