Ext.onReady(function(){
	
	Ext.apply(Ext.form.field.VTypes,{
		phone:function(v){
			//规定区(3-4位数字)-电话号码(7-8位数字)
			return /^(\d{3}-|\d{4}-)?(\d{8}|\d{7})$/.test(v);
		},
		phoneText:'请输入正确的号码',
		phoneMask:/[\d-]/i  //只允许输入数字和-号
	});
	Ext.QuickTips.init();
	Ext.create('Ext.form.Panel',{
		title:'Vtype自定义设置验证 ---号码验证',
		frame:true,
		width:500,
		fieldDefaults:{
			labelSepartor:':',
			labelWidth:80,
			width:270,
			msgTarget:'side'
		},
		defaultType:'textfield',
		bodyPadding:5,
		renderTo:'form',
		items:[
			{
				fieldLabel:'住宅号码',
				vtype:'phone'
			}
		]
	})
	
})