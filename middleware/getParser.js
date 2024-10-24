const Datauri = require('datauri/parser.js')
const path = require('path')

const getParser = function(file){
    const parser = new Datauri()
    const ext = path.extname(file.originalname)
    return parser.format(ext,file.buffer).content
}

module.exports = getParser