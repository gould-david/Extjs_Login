Ext.onReady(function(){
	Ext.QuickTips.init();
	var textArea = new Ext.form.Panel({
		id:'testForTextArea',
		title:'TextArea示例',
		bodyStyle:'padding:5,5,5,5',
		frame:true,
		width:250,
		height:150,
		renderTo:'form',
		items:[
			{
				xtype:'textarea',
				fieldLabel:'备注',
				name:'beizhu',
				id:'memo',
				laberSeparator:'：',
				laberWidth:50,
				width:200
			}
		],
		buttons:[
			{text:'确定',handler:showValue}
		]
	});
	function showValue(){
		var memo = textArea.getForm().findField('memo');
		alert(memo.getValue());
	}
});