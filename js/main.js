$(document).ready(function () {
})

$('form').on('submit', function (e){
    e.preventDefault();
    const adicionarTarefa = $('#aTarefa').val();
    const novaTarefa = $('<li></li>');
    $(adicionarTarefa).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    
})

