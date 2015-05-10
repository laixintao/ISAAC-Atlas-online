
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

function get_active_tools_atlas(){
	$("atlas").each(function(){
		
		var co = $(this).contents();
		id=co.add("id").text();
		type=co.add("type").text;
		en_name=co.add("en_name").text();
		ch_name=co.add("ch_name").text();
		charge_time=co.add("charge_time").text();
		effect=co.add("effect").text();

		var o = creat_active_tools_atlas(id,type,en_name,ch_name,charge_time,effect)
		console.log(o);
	});
}