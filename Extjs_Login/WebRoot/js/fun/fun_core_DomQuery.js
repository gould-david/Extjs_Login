Ext.onReady(function(){
	var panel = new Ext.Panel({
		title:'Ext.core.DomQuery方法示例',
		width:400,
		height:250,
		renderTo:Ext.getBody(),
		frame:true,
		html:"<div id='div0' style='background-color:green;'>" +
				"<div id='div1' style='background-color:red;'>div1内容</div>"
				+"<div id='div2' style='background-color:yellow;'>" +
						"<div id='div3' style='background-color:gray'>div3内容</div>" +
				 "</div>"+ 
			 "</div>"
	});
	
	var tarArry = Ext.query('#div0 div');
	//获取父节点id为div0的div
	var _except = Ext.core.DomQuery.filter(tarArry,"#div1",true);
	//获取不包含id为div1的节点
	var _include = Ext.core.DomQuery.filter(tarArry,"#div1",false);
	//获取包含id为div1的节点，且返回值为HTMLElement
	var isInclude = Ext.core.DomQuery.is(_except,'#div0');
	//判断_except中是否有id为div0的选择器
	var selectNode = Ext.core.DomQuery.selectNode("#div0 #div2 div");
	//选中父节点为div0中第一个子节点的div
	function retStr(array){
		var str = "";
		for(var i=0;i<array.length;i++){
			str +=array[i].id;
		}
		return str;
	}
	Ext.Msg.alert('返回结果',"不包含id为'div1'的所有div的id为："+retStr(_except)+
			"<br/>获取包含id为div1的节点的id:"+retStr(_include)+
			"<br/>不包含id为div1的节点中有没有div0:"+isInclude+
			"<br/>选中父节点为div0中子节点div2子节点下面的首个div:"+selectNode.id
	);
})