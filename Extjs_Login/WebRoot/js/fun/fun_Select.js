Ext.onReady(function(){
	//http://www.studyofnet.com/news/386.html  教学示例
	
	Ext.create('Ext.panel.Panel',{
		title:'SELECT示例',
		renderTo:'sub1',
		width:400,
		html:"<div id = 'div1' class='cls1' style = 'height:400px;background-color:red'>ID为3</div>"
		
	});
	Ext.create('Ext.panel.Panel',{
		title:'SELECT示例',
		renderTo:'sub2',
		width:400,
		html:"<div id = 'div2' class='cls2'style = 'height:400px;background-color:blue'>ID为3</div>"
	});
	Ext.create('Ext.panel.Panel',{
		title:'SELECT示例',
		renderTo:'sub3',
		width:400,
		html:"<div id = 'div3' class='cls2'style = 'height:400px;background-color:white'>ID为3</div>"
	});
	var e1 = Ext.select('div.cls2[id=div3]',true);//获取Div且类样式是cls2,ID为div3的元素
	//var e1 = Ext.select(["div2"],true);//获取元素ID为Div2
	e1.on("click",function(){
		Ext.Msg.alert("提示","点击了ID为DIV");
	})
	
})