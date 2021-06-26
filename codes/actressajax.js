$(function(){
    loadactorlist();
});


function loadactorlist() {
    $.ajax({
        url:"http://localhost:3000/api/actors/",
        method:"GET",
        success:function(response){
            console.log(response);
            var actresslist = $("#actresslist");
            actresslist.empty();
            for(var i=0;i<response.length;i++)
            {
                if(response[i].type==="actress")
                {
                    var actor = response[i];
                    actresslist.append(`
                        <div id="${actor._id}" class="actresslistcontainer">
                            <h5>${actor.name}</h5>
                        </div>
                    `);
                }
            }
        }
    });
}