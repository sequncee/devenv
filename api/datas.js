const data = require("../src/common.json")
require("dotenv").config();


module.exports = async (req, res) => {
//     const {
//     Commons,
//     platformversion,
//   } = req.query;


  res.json({
    // body: req.body,
    data
    // cookies: req.cookies,
  }) 
  // 返回raw
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
  
}