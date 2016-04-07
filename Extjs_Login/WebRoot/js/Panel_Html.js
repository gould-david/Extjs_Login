Ext.onReady(function(){
	var _html = [
		'<table>',
			'<tr><td>序号</td><td>姓名</td></tr>',
			'<tr><td>0</td><td>张三</td></tr>',
			'<tr><td>1</td><td>李三</td></tr>',
			'<tr><td>1</td><td>李三</td></tr>',
			'<tr><td>1</td><td>李三</td></tr>',
		'</table>'
	];
	Ext.create('Ext.panel.Panel',{
		title:'使用Html配置项自定义面板高度',
		height:150,
		width:300,
		frame:true,
		collapsible:true,
		autoScroll:true,
		renderTo:'form',
		bodyPadding:5,
		bodyStyle:'background-color:#000FFF',
		html:_html.join()
	});
	
	
})