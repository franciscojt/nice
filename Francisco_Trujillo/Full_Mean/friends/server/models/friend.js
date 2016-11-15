console.log('friends model');
var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	birthday: Date
},{timestamps:true});
mongoose.model('Friend', FriendSchema);
// build your friend schema and add it to the mongoose.models