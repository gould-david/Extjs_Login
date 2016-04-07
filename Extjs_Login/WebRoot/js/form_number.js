Ext.onReady(function(){
	Ext.QuickTips.init();
	var form = new Ext.form.Panel({
		title:'Ext.form.field.Number示例',
		bodyStyle:'padding:5,5,5,5',
		renderTo:'form',
		frame:true,
		height:200,
		width:300,
		defaults:{
			xtype:'numberfield',
			allowBlank:false,
			labelSeparator:':',
			labelWidth:80,
			width:200,
			labelAlign:'left',
			msgTarget:'side'
		},
		items:[
			{	
				fieldLabel:'整数',
				hideTrigger:true,
				allowDecimals:false,
				nanText:'只能为整数'
			},
			{
				fieldLabel:'小数',
				allowDecimals:true,
				decimalPrecision:2,
				nanText:'仅保存两位小数'
			},
			{
				fieldLabel:'仅能输入123这几个数字',
				baseChars:'123',
				nanText:'输入不合规范'
			},
			{
				fieldLabel:'范围限制(40-100)',
				maxValue:100,
				minValue:40
			}
		]
	});
});