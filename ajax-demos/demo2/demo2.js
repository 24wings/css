$(function() {


    // 全局ajax成功监听  
    /*
    $(document)
        .ajaxStart(function() {
            console.log('开始发送ajax');
        })
        .ajaxSend(function() {
            console.log('已经发送完了ajax');
        })
        .ajaxComplete(function() {
            console.log('接收ajax返回结果');
        }).ajaxSuccess(function() {
            console.log('返回结果正确');
        }).ajaxError(function() {
            console.log('返回结果错误');
        }).ajaxStop(function() {
            console.log('停止ajax请求');
        });
*/

    $.get('test.json', { name: 'yangjie' }).done(function() {
        console.log('成功了');
    }).fail(function() {
        console.log('失败了');
    }).always(function() {
        console.log('无论成功失败总会执行');
    });






});

function login() {

    $.ajax('test.json', {
        method: 'GET',
        beforeSend: function(jqXHR, setings) {
            // 发送之前停止ajax请求
            if ($('.username').val() == '123' && $('.password').val() == '123') {
                return true;
            } else {
                alert('用户名或者密码错误')
                return false;
            }

        }
    });



}