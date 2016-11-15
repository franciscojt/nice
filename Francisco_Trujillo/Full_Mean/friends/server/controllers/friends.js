console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
	  Friend.find({}, function(err, results){
		  
		  res.json(results)
		  
	  });
  };
  this.create = function(req,res){
	  Friend.create(req.body, function(err,result){
		  
		  if(err){
			  console.log(err)
		  }
		  else{
		  	res.json(result);}
	  });
    //your code here
   
  };
  this.update = function(req,res){
    //your code here
	  Friend.findOne({_id:req.params.id}, function(err, friend){
		  if (err){
			  console.log(err);
		  }else{
			  friend.fname = req.body.fname;
			  friend.lname = req.body.lname;
			  friend.birthday = req.body.birthday;
			  friend.save(function(err, updatedFriend){
				  if(err){
					  console.log(err);
				  }
				  else{res.json(updatedFriend);}
			  });
		  }
	  });
    
  };
  this.delete = function(req,res){
	  Friend.remove({_id:req.params.id}, function(err){
		  if(err){
			  console.log('friends was not deleted', err);
		  }
		  else{res.json({message:'delete'});
	  }
  });
    //your code here
   
  };
  this.show = function(req,res){
	  
	  Friend.findOne({_id:req.params.id}, function(err, result){
		  if(err){
			  console.log('cannot fund user', err);
		  }else{res.json(result);}
	  })
    //your code here
 
  };
}
module.exports = new FriendsController(); // what does this export?