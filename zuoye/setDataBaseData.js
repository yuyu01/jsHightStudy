const mysql2 = require("mysql2");
let data = require("./data/data.json");
const connection = mysql2.createConnection({
    host: 'localhost',
    user:'root',
    password:'csj123',
    database:'js001'
});
console.log("1111111")
data.forEach(async (v) => {
    const [rows] = await connection.promise().query("INSERT INTO news(title,imgUrl,`form`,newTime) values(?,?,?,?)",[v.title,v.imgUrl,v.form,v.newTime]);
    // console.log(rows);
});