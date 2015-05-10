
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
	// $("atlas").each(function(){
	// 	all_atlas.push(this.contents().text());
	// });

	// //console.log(all_atlas);

	// for(var i in all_atlas[0]){
	// 	if(all_atlas[0].hasOwnProperty(i))
	// 		console.log(i);
	// }

	// for(var i in all_atlas){
	// 	var co = i.contents();
	// 	id=co.add("id").text();
	// 	type=co.add("type").text();
	// 	en_name=co.add("en_name").text();
	// 	ch_name=co.add("ch_name").text();
	// 	charge_time=co.add("charge_time").text();
	// 	effect=co.add("effect").text();

	// 	var o = creat_active_tools_atlas(id,type,en_name,ch_name,charge_time,effect);
	// 	var p =counter+" "+ get_text(o);
	// 	console.log(p);
	// };

	for(var i=0;i<73;i++){
		var temp = "atlas#at"+i;
		var str = $(temp+" > ch_name").text();
		console.log(i+" "+str);
	}
	return all_atlas;
}