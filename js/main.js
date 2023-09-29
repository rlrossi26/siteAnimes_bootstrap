$('document').ready(function() {


    $('#telefone').mask('(00) 00000-0000');


    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            email: {
                required: true,
            }
        },

        messages: {
            nome: 'Por favor, Digite seu nome!',
            email: 'Por favor, Digite seu E-mail!',
            mensagem: 'Por favor, Digite sua Mensagem!'
        },
        
    })
});