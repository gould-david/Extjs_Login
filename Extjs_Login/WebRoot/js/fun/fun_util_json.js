Ext.onReady(function(){
	var _json = "{name:'the json',value:'json value'}";
	var _obj = Ext.JSON.decode(_json);//形成一个json对象
	
	var g='g',h='h',e=[g,h],f='f',d=[e,f],a=[d,'c'];
	
	var _str = Ext.JSON.encode(a);
	
	Ext.Msg.alert('提示',"解析成json对象为："+_obj+"<br/>"+"解析成String的json:"+_str)
	
})