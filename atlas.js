
function creat_active_tools_atlas(id,type,en_name,ch_name,charge_time,effect){
	var active_tools_atlas = new Object();
	active_tools_atlas.id = id;
	active_tools_atlas.type=type;
	active_tools_atlas.en_name=en_name;
	active_tools_atlas.ch_name=ch_name;
	active_tools_atlas.charge_time=charge_time;
	active_tools_atlas.effect=effect;
	return active_tools_atlas;
}

function get_text(o){
	var str = o.id+" "+o.type+" "+o.en_name+" "+o.ch_name+" "+charge_time+" "+effect;
	return str;
}

function get_active_tools_atlas(){
	var all_atlas = new Array();

	for(var i=0;i<73;i++){
		var temp = "atlas#at"+i;
		var id = i;
		var ch_name = $(temp+" > ch_name").text();
		var type = $(temp+" > type").text();
		var en_name = $(temp+" > en_name").text();
		var charge_time = $(temp+" > charge_time").text();
		var effect = $(temp+" > effect").text();
		all_atlas.push(creat_active_tools_atlas(id,type,en_name,ch_name,charge_time,effect));
	}
	return all_atlas;
}