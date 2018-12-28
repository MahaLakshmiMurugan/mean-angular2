var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var postSchema = new Schema({
    title: {type: String, require: true},
    content: {type: String, require: true},
    imagePath: {type: String, require: true}
});
 module.exports = mongoose.model('Post', postSchema); 