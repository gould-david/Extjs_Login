Ext.onReady(function(){
	var _cardLayout = Ext.create('Ext.panel.Panel',{
		title:'Ext.layout.container.card示例',
		layout:'card',
		width:300,
		height:200,
		bodyPadding:5,
		bodyStyle:'background-color:#FF0F00',
		frame:true,
		collapsible:true,
		autoScroll:true,
		renderTo:Ext.getBody(),
		items:[
			{
				title:'嵌套面板1',
				html:'说明',
				id:'p1'
			},{
				title:'嵌套面板2',
				html:'说明',
				id:'p2'
			},{
				title:'嵌套面板3',
				html:'说明',
				id:'p3'
			},{
				title:'嵌套面板4',
				html:'说明',
				id:'p4'
			}
		],
		buttons:[
			{
				text:'上一页',
				handler:changePage
			},{
				text:'下一页',
				handler:changePage
			}
		]
		
	});
	function changePage(b){
		var _page = Number(_cardLayout.layout.activeItem.id.substring(1));//取出位置为1以后的字符串，并进行类型转换
		var length = _cardLayout.items.length;//获取组件数量
		if(b.text == '上一页'){
			_page -= 1;
			if(_page < 1){
				_page = 1;
			}
		}
		else{
			_page += 1;
			if(_page > length){
				_page = 4;
			}
		}
		_cardLayout.layout.setActiveItem('p'+_page);
	}
	
})