Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'Ext.util.MixedCollection示例的Each方法',
		frame:true,
		width:400,
		height:200,
		renderTo:Ext.getBody(),
		html:"<div id='div1'>DIV内容</div>"
		
	});
	
	var item = new Ext.util.MixedCollection();
	
	var obj1 = {name:'aaaa'};
	
	item.add('obj1',obj1);
	
	item.add('obj2',{name:'bbbbb',space:'empty'});
	
	item.each(function(temp){
		temp.name = 'zq';
		Ext.core.DomHelper.insertHtml("afterBegin",document.getElementById("div1"),"<h1>"+temp.name+"</h1>");
		
	});
	
	
})