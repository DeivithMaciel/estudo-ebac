$(document).ready(function() {

    $('#voltar').click(function() {
        $('form').slideUp();
    });

    $('#criar').click(function() {
        $('form').slideDown();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNova = $('#tarefa').val();
        const importanciaNova = $('#importancia').val();
        const novoBloco = $('<li style="display: none"></li>');
        $(`<h2>${importanciaNova}</h2>
            <h3>${tarefaNova}</h3>
            <button class="feito">Feito(a)</button>`).appendTo(novoBloco);
        $(novoBloco).appendTo('ul');
        $(novoBloco).fadeIn(1000);
    });

    $(document).on('click', '.feito', function() {
        $(this).parent().addClass('riscado');
    });
});
