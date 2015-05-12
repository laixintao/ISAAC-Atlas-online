//如果添加新道具，需要修改：

var num_active_tools = 74;
var num_Accessories = 267;

//**************************************

function creat_active_tools_atlas(id,type,en_name,ch_name,charge_time,effect,unlock){
	var active_tools_atlas = new Object();
	active_tools_atlas.id = id;
	active_tools_atlas.atype=type;
	active_tools_atlas.en_name=en_name;
	active_tools_atlas.ch_name=ch_name;
	active_tools_atlas.charge_time=charge_time;
	active_tools_atlas.effect=effect;
	active_tools_atlas.unlock=unlock;
	return active_tools_atlas;
}

function get_active_tools_atlas(){
	var all_atlas = new Array();

	for(var i=0;i<num_active_tools;i++){
		var temp = "atlas.active_tools#at"+i;
		var id = i;
		var ch_name = $(temp+" > ch_name").text();
		var type = $(temp+" > type").text();
		var en_name = $(temp+" > en_name").text();
		var charge_time = $(temp+" > charge_time").text();
		var effect = $(temp+" > effect").text();
		var unlock = $(temp+" > unlock").text();
		all_atlas.push(creat_active_tools_atlas(id,type,en_name,ch_name,charge_time,effect,unlock));
	}
	return all_atlas;
}



function creat_Accessories(id,type,en_name,ch_name,effect,unlock){
	var active_tools_atlas = new Object();
	active_tools_atlas.id = id;
	active_tools_atlas.atype=type;
	active_tools_atlas.en_name=en_name;
	active_tools_atlas.ch_name=ch_name;
	active_tools_atlas.effect=effect;
	active_tools_atlas.unlock=unlock;
	return active_tools_atlas;
}


function get_Accessories(){
	var all_atlas = new Array();

	for(var i=0;i<num_Accessories;i++){
		var temp = "atlas.Accessories#at"+i;
		var id = i;
		var ch_name = $(temp+" > ch_name").text();
		var type = $(temp+" > type").text();
		var en_name = $(temp+" > en_name").text();
		var effect = $(temp+" > effect").text();
		var unlock = $(temp+" > unlock").text();
		all_atlas.push(creat_Accessories(id,type,en_name,ch_name,effect,unlock));
	}
	return all_atlas;
}