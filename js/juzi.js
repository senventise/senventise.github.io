function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			j = JSON.parse(xmlhttp.responseText);
			j= JSON.parse(j);
			document.getElementById("juzi").innerHTML=j.sentense;
		}
	}
	xmlhttp.open("GET","https://service-2crsqjrb-1256129046.ap-shanghai.apigateway.myqcloud.com/release/juzi",true);
	xmlhttp.send();
}
