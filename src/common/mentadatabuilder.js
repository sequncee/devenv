// 0 - 000 - 00 - 6bit 
// {0} 1bit 
// 000 3bit platform code
// 00  2bit version code

function metaunzip(params) {
    // {0} 1bit 验证位

const zeropoint=params.substr(0,1)
// platform
const platform=params.slice(1,4)
// version code
const version=params.slice(4,6)

// const version=params.slice(4,6)

console.log(version);
return "h9"
}

console.log(metaunzip("0001016789"));