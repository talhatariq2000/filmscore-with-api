$(function(){
    loadactorlist();
});


function loadactorlist() {
    $.ajax({
        url:"http://localhost:3000/api/actors/",
        method:"GET",
        success:function(response){
            console.log(response);
            var actorlist = $("#actorlist");
            actorlist.empty();
            for(var i=0;i<response.length;i++)
            {
                if(response[i].type==="actor")
                {
                    var actor = response[i];
                    actorlist.append(`
                        <div id="${actor._id}" class="actorlistcontainer">
                            <h5>${actor.name}</h5>
                        </div>
                    `);
                }
            }
        }
    });
}