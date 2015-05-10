$().ready(function(){
	
	var active_tools = get_active_tools_atlas();
	display_photo(active_tools);
});

function display_photo(all){
	for(var i=0;i<all.length;i++){
		console.log(all[i]);
	}


	for(var i in all){
		console.log(i);
		//console.log(i.id+i.en_name);
		var photo = "<img src='graphics/active_tools/"+i+".png' />";
		//console.log(photo);
		$("#active").append(photo);
	}
}


