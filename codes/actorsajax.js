$(function(){
    loadactorlist();
});


function loadactorlist() {
    $.ajax({
        url:"http://localhost:3000/api/films/",
        method:"GET",
        success:function(response){
            console.log(response);
            var actorlist = $("#actorlist");
            actorlist.empty();
            for(var i=0;i<response.length;i++)
            {
                if(response[i].type==="film")
                {
                    var actor = response[i];
                    actorlist.append(`
                        <div id="${actor._id}" class="actorlistcontainer">
                            <h5>${actor.cast[1]}</h5>
                        </div>
                    `);
                }
            }
        }
    });
}