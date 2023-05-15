let count = 0;
const viewCount = (req, res, next) =>{
count++;
console.log(count);
// res.send('tools count is now')
next();

};

module.exports = viewCount;