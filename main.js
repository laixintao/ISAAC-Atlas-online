var active_tools;
var Accessories;

$().ready(function(){
	
	active_tools = get_active_tools_atlas();
	Accessories = get_Accessories();
	add_Listener();
});

function add_Listener(){
	$("#active-tools-div > img").click(function(){
	on_Click_Listener(this);
	});

	$("#Accessories > img").click(function(){
	on_Click_Listener(this);
	});
}

function on_Click_Listener(myclick){
	var click_id=myclick.id;
	click_id = click_id.replace("img","");
	var str;
	var this_class = $(myclick).attr("class");
	if(this_class==="active_tools"){
		str = "<p>中文名："+active_tools[click_id].ch_name+"<br />"+
		"英文名："+active_tools[click_id].en_name+"<br />"+
		//"类型"+ctive_tools[click_id].type+"<br />"+
		"充能时间："+active_tools[click_id].charge_time+"<br />"+
		"效果："+active_tools[click_id].effect+"</p>";
	}else if(this_class==="Accessories"){
		str = "<p>中文名："+Accessories[click_id].ch_name+"<br />"+
		"英文名："+Accessories[click_id].en_name+"<br />"
		+
		"效果："+Accessories[click_id].effect+"</p>";
	}
	

	$("#display > p").detach();  //先移除之前的元素，在添加新的
	$("#display").append(str);
}



