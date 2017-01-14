// 创建
var xmlhttp;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}


// 发送请求
xmlhttp.open('GET', 'test.txt', true);

xmlhttp.send();

// 当ajax任务状态改变时的回调函数
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = xmlhttp.responseText;
        try {
            result = JSON.parse(result);

        } catch (e) {
            result = xmlhttp.responseText;
        }
        console.log(typeof result);



    }
}