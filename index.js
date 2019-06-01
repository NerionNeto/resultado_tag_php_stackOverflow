$.getJSON('https://api.stackexchange.com/2.2/questions?page=1&pagesize=3&fromdate=1554076800&todate=1559347200&order=asc&min=10&sort=votes&tagged=php&site=stackoverflow',
    function (data) {
        for (let index = 0; index < data.items.length; index++) {
            $("div.row").append('<div class="col-6 col-sm-4 title">' + data.items[index].title + '</div>');
            $("div.row").append('<div class="col-6 col-sm-2 name">' + data.items[index].owner.display_name + '</div>');
            $("div.row").append('<div class="col-6 col-sm-2"><button class="perfil' + index + '">link do perfil</button></div><br>');
            $("div.row").append('<div class="col-6 col-sm-1 votos">' + data.items[index].score + '</div>');
            $("div.row").append('<div class="col-6 col-sm-3"><button class="pergunta' + index + '">Visualizar Pergunta</button></div><br>');
            $("div.row").append('<br>')


            $(document).ready(function () {
                $(".perfil" + index).click(function () {
                    window.location = (data.items[index].owner.link + '/');
                    alert("Redirecionando ao Perfil!");

                })
            });

            $(document).ready(function () {
                $(".pergunta" + index).click(function () {
                    window.location = ('https://stackoverflow.com/questions/' + data.items[index].question_id + '/');
                    alert("Redirecionando a Página!");

                })
            });
        }
    });