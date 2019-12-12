window.onload = function(){
	function $id(id){
		return document.getElementById(id);
	}
	var unameInp = $id('username');        //用户名框
	var pwInp = $id('password');           //密码框
	var btn = $id('btn');      		  	   //登录
	btn.onclick = function(){
		// 创建ajax对象
		var xhr = new XMLHttpRequest;
		//发送ajax请求
		xhr.open('get','http://127.0.0.1/liangcang/liangcanglogin.php?username='+unameInp.value+'&password='+pwInp.value);
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.status==200&&xhr.readyState==4){
				if(xhr.response==1){
					alert("登录成功")
					window.location.href = 'http://www.baidu.com'
				}else{
					alert("登录失败");
				}
			}
		}
	}
}