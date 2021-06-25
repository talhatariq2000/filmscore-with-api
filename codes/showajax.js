$(function(){
    loadshowlist();
});


function loadshowlist() {
    $.ajax({
        url:"http://localhost:3000/api/films/",
        method:"GET",
        success:function(response){
            console.log(response);
            var showlist = $("#showlist");
            showlist.empty();
            for(var i=0;i<response.length;i++)
            {
                if(response[i].type==="show")
                {
                    var show = response[i];
                    showlist.append(`
                        <div id="${show._id}" class="showlistcontainer">
                            <div class="showposter">
                                <img src="${show.image}">
                            </div>
                            <div class="showtitle">
                                <h1>${show.name}</h1>
                                <h5>${show.director}</h5>
                                <div class="reactions">
                                    <button id="downvote"><i class="fas fa-poo"></i></button>
                                    <div class="score">
                                        ${show.score}
                                    </div>
                                    <button id="upvote"><i class="fas fa-heart"></i></button>
                                    <h9 class="totalscore">${show.total}</h9>
                                </div>
                            </div>
                        </div>
                    `);
                }
            }
        }
    });
}