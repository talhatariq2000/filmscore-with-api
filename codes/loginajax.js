//export let currentuser = "";

$(function(){
    $("#loginbutton").click(loginhandle);
});

function loginhandle() {
    var username = $("#username").val();
    var password = $("#pass").val();

    $.ajax({
        url:"http://localhost:3000/api/users/login",
        method:"POST",
        data: { username, password},
        success:function(response){
            console.log(response);
            currentuser = response.username;
            $("#loginbutton").val("");
            $("#logintag").append(response.username);

        }   
        
    });
}