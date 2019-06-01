$.getJSON('https://api.stackexchange.com/2.2/questions?order=desc&min=10&sort=votes&tagged=php&site=stackoverflow',
    function (data) {
        for (let index = 0; index < data.items.length; index++) {
            console.log("JSON Data: " + data.items[index].owner.reputation);
            $("div.row").append('<div class="col-6 col-sm-5 title">' + data.items[index].title + '</div>');
            $("div.row").append('<div class="col-6 col-sm-2 name">' + data.items[index].owner.display_name + '</div>');
            $("div.row").append('<div class="col-6 col-sm-1 votos">' + data.items[index].score + '</div>');
            $("div.row").append('<div class="col-6 col-sm-3"><button class="button' + index + '">Visualizar Pergunta</button></div><br>');
            $("div.row").append('<br>')

            $(document).ready(function () {
                $(".button" + index).click(function () {
                    window.location = ('https://stackoverflow.com/questions/' + data.items[index].question_id + '/');
                    alert("redirecionando!");

                })
            });
        }
    });