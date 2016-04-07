Ext.onReady(function(){
	var _theme = [
		{theme:'默认',css:'ext-all.css'},
		{theme:'ACCESS风格',css:'ext-all-access.css'},
		{theme:'灰色风格',css:'ext-all-gray.css'}
	];
	
	//创建数据模型
	Ext.regModel('Theme',{
		fields:['theme','css']
	});
	
	//创建主题数据源,即将_theme变量按数据模型标准导入，作为数据源
	var themeStore = Ext.create('Ext.data.Store',{
		model:'Theme',
		data:_theme
	});
	
	var themeChange = new Ext.form.ComboBox({
		id:'id_theme',
		title:"主题变换",
		frame:true,
		width:300,
		labelWidth:80,
		labelSeparator:':',
		fieldLabel:'样式选择',
		triggerAction:'all',
		displayField:'theme',
		valueField:'css',
		store:themeStore,
		queryMode:'local',
		value:'ext-all.css',
		listeners:{
			'collapse':function(){
				Ext.util.CSS.swapStyleSheet('one',"extjs/resources/css/"+this.getValue());
			}
		}
	});
	
	Ext.create('Ext.panel.Panel',{
		title:'主题变换示例',
		renderTo:Ext.getBody(),
		bodySpacing:5,
		frame:true,
		width:500,
		height:350,
		items:themeChange
	})
})