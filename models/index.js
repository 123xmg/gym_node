// mysql 连接配置
const mysql = require("mysql");

const pool = mysql.createPool({ // 数据库配置
  protocol: "mysql",
  host: "127.0.0.1",
  database: "jianshen",
  user: "root",
  password: "123456",
  port: 3306,
  multipleStatements: true
});

module.exports = {
  connect: (sql, options, callback) => {
    pool.getConnection((error, connection) => { // 连接
      if(error) return console.log("mysql 连接失败：", error);
      console.log('shujukuchenggong');
      connection.query(sql, options, (err, result) => {
        connection.release(); // 释放连接池
        callback(err, result);
      });
    });
  }
}