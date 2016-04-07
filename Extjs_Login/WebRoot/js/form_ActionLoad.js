Ext.onReady(function(){
	//form.Load的异步传输
	Ext.QuickTips.init();
	var productForm = Ext.create('Ext.form.Panel',{
		title:'表单字段加载数据示例',
		frame:true,
		bodyPadding:5,
		width:500,
		renderTo:'form',
		fieldDefaults:{
			labelSeparator:':',
			labelWidth:70,
			width:260,
			msgTarget:'side'
		},
		items:[
			{
				fieldLabel:'产品名称',
				xtype:'textfield',
				name:'productName',
				value:'U盘'
			},{
				fieldLabel:'金额',
				xtype:'textfield',
				name:'price',
				value:100
			},{
				fieldLabel:'出产日期',
				xtype:'datefield',
				format:'Y年m月d日',
				name:'date',
				value:new Date()
			},{
				xtype:'hidden',
				name:'productId',
				value:'001'
			},{
				//此处是进行异步加载
				fieldLabel:'产品简介',
				name:'introduction',
				xtype:'textarea'
			}
		],
		buttons:[
			{
				text:'加载简介',
				handler:loadIntroduction
			}
		]
	});
	
	function loadIntroduction(){
		var _params = productForm.getForm().getValues();//加载所有属性
		
		productForm.getForm().load({
			params:_params,//传递参数
			url:'Test/getProductIntroduction.action',
			method:'GET',
			success:function(form,action){
				Ext.Msg.alert('提示','产品简介加载成功');
			},
			failure:function(form,action){					   
				Ext.Msg.alert('提示','失败原因<h4>'+action.result.errorMessage+'</h4>')
			}
		});
	}
})