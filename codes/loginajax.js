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
            $("#logintag").html(response.username);
            alert("Logged in Successfully");
            $("#username").val("");
            $("#pass").val("");
        },   
        error:function(response){
            alert("Failed to login, check username/password");
        }
    });
}