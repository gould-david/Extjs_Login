Ext.onReady(function(){
	Ext.QuickTips.init();
	var labelTest = new Ext.form.Panel({
		id:'labelTest',
		title:'Ext.form.Label示例',
		width:500,
		height:200,
		frame:true,
		renderTo:Ext.getBody(),
		bodyStyle:'padding:5,5,5,5',
		items:[
		{
			xtype:'textfield',
			fieldLabel:'传统方式的文本型',
			name:'username',
			id:'_uname',
			width:200,
			height:30,
			labelWidth:70
		},{
			xtype:'label',
			forId:'_psd',
			text:'用户名',
			width:70
		},{
			xtype:'textfield',
			id:'_psd',
			name:'password',
			inputType:'password',
			hideLabel:true
		}
		],
		buttons:[
			{text:'确定',handler:showIdValue}
		]
	});
	function showIdValue(){
		var flag_psd = Ext.getCmp('_psd').getValue();
		var flag_uname = Ext.getCmp('_uname').getValue();
		var _idValue;
		if(flag_psd.length > flag_uname.length){
			_idValue = labelTest.getForm().findField('_uname');
		}
		else{
			_idValue = labelTest.getForm().findField('_psd');
		}
		alert(_idValue.value);
	}
})