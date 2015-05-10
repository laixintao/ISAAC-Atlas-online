xmlDoc=loadXMLDoc("/source/active_tools.xml");
document.write("xmlDoc is loaded, ready for use");

dom_atlas = xmlDoc.getElementByTagName("atlas");

for(x in dom_atlas){
	document.write(x);
}