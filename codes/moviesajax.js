$(function(){
    loadmovielist();
    $("#movielist").on("click",".upvote",incscore);
    $("#movielist").on("click",".downvote",decscore);
});

function incscore() {
    //var a = $("#teama").val();
    var th = $(this);
    var parentdiv = th.closest(".movielistcontainer");
    let id = parentdiv.attr("id");
    var thisscore = th.closest(".score");
    let score = thisscore.text();
    var totalscore = th.closest(".totalscore");
    let total = totalscore.text();
    console.log(id);
    total++;
    score++;
    $.ajax({
        url:"http://localhost:3000/api/film/"+id,
        method:"PUT",
        data: { score,total },
        success:function(response){
            console.log(response);
        }
    });
    loadmovielist();
}

function decscore() {
    //var a = $("#teama").val();
    var th = $(this);
    var parentdiv = th.closest(".movielistcontainer");
    let id = parentdiv.attr("id");
    var thisscore = th.closest(".score");
    let score = thisscore.text();
    var totalscore = th.closest(".totalscore");
    let total = totalscore.text();
    score--;
    total++;
    $.ajax({
        url:"http://localhost:3000/api/film/"+id,
        method:"PUT",
        data: { score,total },
        success:function(response){
            console.log(response);
        }
    });
    loadmovielist();
}


function loadmovielist() {
    $.ajax({
        url:"http://localhost:3000/api/films/",
        method:"GET",
        success:function(response){
            console.log(response);
            var movielist = $("#movielist");
            movielist.empty();
            for(var i=0;i<response.length;i++)
            {
                if(response[i].type==="film")
                {
                    var movie = response[i];
                    movielist.append(`
                        <div id="${movie._id}" class="movielistcontainer">
                            <div class="movieposter">
                                <img src="${movie.image}">
                            </div>
                            <div class="movietitle">
                                <h1>${movie.name}</h1>
                                <h5>${movie.director}</h5>
                                <div class="reactions">
                                    <button class="downvote"><i class="fas fa-poo"></i></button>
                                    <div class="score">
                                        ${movie.score}
                                    </div>
                                    <button class="upvote"><i class="fas fa-heart"></i></button>
                                    <h9 class="totalscore">${movie.total}</h9>
                                </div>
                            </div>
                        </div>
                    `);
                }
            }
        }
    });
}