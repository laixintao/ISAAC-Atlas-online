var active_tools;
var passive_tools;

$().ready(function(){
	
	active_tools = get_active_tools_atlas();
	passive_tools = get_passive_tools_atlas();
	add_Listener();
});

function add_Listener(){
	$(".active_tools").click(function(){
	on_Click_Listener(this);
	});

	$("#passive-tools-div > img").click(function(){
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
		"英文名："+active_tools[click_id].en_name+"<br />"
		+"充能时间："+active_tools[click_id].charge_time+"<br />"+
		"效果："+active_tools[click_id].effect+"</p>";
	}else if(this_class==="passive_tools"){
		str = "<p>中文名："+passive_tools[click_id].ch_name+"<br />"+
		"英文名："+passive_tools[click_id].en_name+"<br />"
		+
		"效果："+passive_tools[click_id].effect+"</p>";
	}
	

	$("#display > p").detach();  //先移除之前的元素，在添加新的
	$("#display").append(str);
}


// //设置监听，显示查询的主动道具的内容
// $(document).delegate("img.active_tools","click",function(){
// 	var click_id=this.id;
// 	click_id = click_id.replace("img","");

// 	var str = "<p>中文名："+active_tools[click_id].ch_name+"<br />"+
// 	"英文名："+active_tools[click_id].en_name+"<br />"
// 	+"充能时间："+active_tools[click_id].charge_time+"<br />"+
// 	"效果："+active_tools[click_id].effect+"</p>";
	
// 	$("#display > p").detach();  //先移除之前的元素，在添加新的
// 	$("#display").append(str);
// });


// //设置监听，显示查询的主动道具的内容
// $(document).delegate("img.passive_tools","click",function(){
// 	var click_id=this.id;
// 	click_id = click_id.replace("img","");

// 	var str = "<p>中文名："+passive_tools[click_id].ch_name+"<br />"+
// 	"英文名："+passive_tools[click_id].en_name+"<br />"
// 	+
// 	"效果："+passive_tools[click_id].effect+"</p>";
	
// 	$("#display > p").detach();  //先移除之前的元素，在添加新的
// 	$("#display").append(str);
// });

