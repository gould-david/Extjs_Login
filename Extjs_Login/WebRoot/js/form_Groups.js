Ext.onReady(function(){
	Ext.QuickTips.init();
	
	var checkBoxGroups = new Ext.form.Panel({
		title:'Ext.form.checkGroup和Ext.form.RadioGroup',
		bodyStyle:'padding:5,5,5,5',
		frame:true,
		height:150,
		width:350,
		renderTo:'form',
		defaults:{
			labelSeparator:':',
			labelWidth:50,
			width:280,
			labelAlign:'left'
		},
		items:[
			{
				id:'sex',
				xtype:'radiogroup',
				fieldLabel:'性别',
				columns:2,
				name:'sex',
				items:[
					{boxLabel:'男',name:'sex',id:'id_boy',inputValue:'boy'},
					{boxLabel:'女',name:'sex',id:'id_girl',inputValue:'girl'}
				]
			},
			{
				id:'love',
				xtype:'checkboxgroup',
				fieldLabel:'爱好',
				columns:3,
				items:[
					{boxLabel:'游泳',name:'swim',id:'id_swim'},
					{boxLabel:'跑步',name:'walk',id:'id_walk'},
					{boxLabel:'篮球',name:'basketball',id:'id_basketball'}
				]
			}
		],
		buttons:[
			{text:'性别',handler:btnSex},
			{text:'爱好',handler:btnLove}
		]
	});
	function btnSex(){
		//alert(box.id);
		//var p_sex = checkBoxGroups.getForm().findField("sex");
		//var p_love = checkBoxGroups.getForm().findField("love");
		var p_sex = Ext.getCmp("sex").getChecked()[0].boxLabel;
		alert('你选择了'+p_sex);
	}
	function btnLove(){
		var p_love = Ext.getCmp("love").getChecked();
		var love_info='';
		Ext.Array.forEach(p_love,function(item_love){
			love_info+=item_love.boxLabel;
			//love_info+=item_love.id;
		});
		alert('你的爱好:'+love_info);
	}
});