$(function(){
    $("#signupbutton").click(signuphandle);
});

function signuphandle() {
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#pass").val();

    $.ajax({
        url:"http://localhost:3000/api/users/signup",
        method:"POST",
        data: { username, email, password},
        success:function(response){
            console.log(response);
        }   
        
    });
}
