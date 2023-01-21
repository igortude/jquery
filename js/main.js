$(document).ready(function () {
})

$('form').on('submit', function (e){
    e.preventDefault();
        const adicionarTarefa = $('#aTarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${adicionarTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#aTarefa').val("");

        $('li').on('click', function(){
            $(this).addClass("riscado");
        })
})
