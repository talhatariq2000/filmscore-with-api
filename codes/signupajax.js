$(function(){
    $("#signupbutton").click(signuphandle);
});

function signuphandle() {
    var name = $("#username").val();
    var email = $("#email").val();
    var password = $("#pass").val();

    $.ajax({
        url:"http://localhost:3000/api/users/signup",
        method:"POST",
        data: { name, email, password},
        success:function(response){
            console.log(response);
            alert("New User created");
        },
        error: function(response){
            alert("Failed to login, check username/email/password");
        }   
        
    });
}
