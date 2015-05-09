function loadXML(){
	xmlDoc=loadXMLDoc("/source/active_tools.xml");
	//xmlDoc=loadXMLDoc("/source/passive_tools.xml");
	x=xmlDoc.getElementsByTagName("type");
	//document.write(x[2].childNodes[0].nodeValue);
	alert(x);
}