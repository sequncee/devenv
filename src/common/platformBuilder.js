const Commons = require("../common.json");


// 0 - 000 - 00 - 6bit 
// {0} 1bit 
// 000 3bit platform code
// 00  2bit version code

// 000-"Centos",
// 001-"Debian"

// 返回 包管理器方法
function Planteform(params) {
let pack = ""
    if (PlanteformCheck(params)) {
        switch (parseInt(params)) {
            case 0:
                pack="yum"
                break;
            case 1:
                pack="apt"
                break;
            case 2:
                pack="apt"
                break;        
            default:
                break;
        }

    }else{return "type error"}
   const pf= Commons.Platform[parseInt(params)]
    console.log(pack);
   return pf
}


function PlanteformCheck(params) {
    const pfnum= parseInt(params);
    let flag = false
    if (pfnum <= Commons.Platform.length) {   
        flag = true
    }
    return flag
 }
 

// console.log(Planteform("001"));