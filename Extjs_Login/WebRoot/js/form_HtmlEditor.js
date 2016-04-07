Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.field.HtmlEditor组件',
		width:630,
		frame:true,
		renderTo:'form',
		bodyPadding:5,
		items:[
		{
			fieldLabel:'HTML编辑器',
			xtype:'htmleditor',
			height:150,
			width:600,
			value:'请在此进行编辑',
			labelWidth:70,
			labelSeparator:':',
			createLinkText:'创建超链接',
			defaultLinkValue:'http://www.',
			enableAlignments:true,
			enableColors:true,
			enableFont:true,
			enableFormat:true,
			enableLinks:true,
			enableLists:true,
			enableSourcesEdit:true,
			fontFamilies:['宋体','楷体','黑体','微软雅黑']
		}
		]
		
	})
})