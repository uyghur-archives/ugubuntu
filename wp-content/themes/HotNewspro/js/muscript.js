
function initrequest(url){
	var http_request = false;
	//initialize vars
	var email=document.wr.email.value;
	var name=document.wr.name.value;
	var message=document.wr.message.value;
	var website=document.wr.website.value;
	var hint="";
	var msg="姓名: "+name+" \n网址: "+website+" \n邮箱: "+email+"\n\n"+"\n"+"邮件内容:\n"+message;
   	
	var passData="email="+email+"&name="+name+"&message="+msg;

	if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        http_request = new XMLHttpRequest();
            if (http_request.overrideMimeType) {
                http_request.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) { // IE
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
        if (!http_request) {
            alert('Error: Unable to initialize class');
            return false;
        }
        http_request.onreadystatechange = function() { sendrequest(http_request); };
        http_request.open('POST', url, true);
       	http_request.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
		if (email && name && message)
		{
			http_request.send(passData);

		}else 
		{
			if (!email)
			{
				hint+="ئېلخەت ئادىرسىڭىزنى تولدۇرۇڭ<br />";			
			}
			if (!name)
			{
				hint+="ئىسمىڭىزنى تولدۇرۇڭ<br />";			
			}
			if (!message)
			{
				hint+="قالدۇرماقچى بولغان سۆزىڭىزنى تولدۇرۇڭ<br />";			
			}
			
			document.getElementById('hint').innerHTML=hint;	
			
		}
		
}

function sendrequest(http_request) {
		if (http_request.readyState == 4) {
            if (http_request.status == 200) {
				document.getElementById('hint').innerHTML = http_request.responseText;	
				document.getElementById('form_name').value = '';
				document.getElementById('form_email').value = '';
				document.getElementById('form_website').value = '';
				document.getElementById('form_message').value = '';
			} 
			else {
				HideIndicator()
                document.getElementById('hint').innerHTML = 'مەغلۇپ بولدىڭىز، بىر ئازدىن كىيىن قايتا ئېۋەتىڭ!';
            }
        }
}

