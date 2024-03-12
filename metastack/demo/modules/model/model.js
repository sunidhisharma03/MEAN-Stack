//required, exports  models, __dirname, __filename

// console.log(__dirname)
// console.log(__filename)
let names = ['Jill', 'Lynn', 'Mike']
let scores = [100,90,89]

//module.exports = names // here the names is attached to export 
//To attach both name and sorces we do this
module.exports.names = names // here you can just use exports.name, .name is important
module.exports.scores = scores
exports.data = [1,2,3]
// module.exports.data="apple" //simply overwritting as in apple will be attached to the module 
console.log(module)