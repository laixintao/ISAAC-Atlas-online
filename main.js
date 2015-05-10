$().ready(function(){
	
	var active_tools = get_active_tools_atlas();
	display_photo(active_tools);

});

function display_photo(all){
	for(var i=0;i<all.length;i++){
		var photo = "<img class='active_tools'  id='img"+all[i].id+"' src='graphics/active_tools/"+(all[i].id+1)+".png' />";
		$("#active").append(photo);
	}
};
