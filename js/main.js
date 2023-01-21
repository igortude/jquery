$(document).ready(function () {
})

$('form').on('submit', function (e){
    e.preventDefault();
        const adicionarTarefa = $('#aTarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${adicionarTarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(adicionarTarefa) = ' ';
})

$('.teste').click(function (){
    $('li').css("text-decoration", "line-through");
})