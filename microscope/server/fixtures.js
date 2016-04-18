if(Posts.find().count() === 0){
	Posts.insert({
		title : 'first post',
		url : 'bluestring.cc'
	});
	Posts.insert({
		title : 'second post',
		url : 'bluestring.cc'
	});
	Posts.insert({
		title : 'third post',
		url : 'bluestring.cc'
	});	
}