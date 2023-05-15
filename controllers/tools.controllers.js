let tools = [
    {id: 1, name: 'hmm1'},
    {id: 2, name: 'hmm2'},
    {id: 3, name: 'hmm3'}
];


module.exports.getAllTools = (req, res, next) =>{
    // const {ip, query, params, body, headers} = req;
    // console.log(ip, query, params, body, headers);
    // // res.download(__dirname + "/tools.controllers.js");
    // // res.json({"name": "getAllTools"})
    // // res.redirect("/login")
    // res.send("ok")
    const {limit, page} = req.query;
    console.log(limit, page);
    res.json(tools.slice(0, limit))
};

module.exports.saveATool = (req, res, next) =>{
    console.log(req.query)
    tools.push(req.body)
    res.send(tools)
    
};

module.exports.getToolDetail = (req, res) =>{
const {id} = req.params;
console.log(id);
const foundTool = tools.find(tool => tool.id === Number(id));
res.send(foundTool);
};

module.exports.updateTool = (req, res) =>{
    // const newData = req.body;
    const {id} = req.params;
    const filter = {_id: id};
    const newData = tools.find(tool => tool.id ===Number(id));
    newData.id = id;
    newData.name = req.body.name;
    res.send(newData);
};

module.exports.deleteTool = (req, res) =>{
    const { id } = req.params;
    const filter = { _id: id };

   tools = tools.filter(tool => tool.id !== Number(id))

   res.send(tools)



};


// module.exports = {
//     getAllTools
// }