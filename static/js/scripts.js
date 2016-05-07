
/* Valida Formulário */
	$("#frm-contract").submit(function(event){
	   event.preventDefault();
	});
	$('#frm-contract').validate({
	    rules: {
	        nome: {
	            required: true,
	            minlength: 5
	        },
	        nasc: {
	        	required: true,
	        	minlength: 10,
	        	maxlength: 10
	        },
	        cpf: {
	        	required: true,
	        	minlength: 11,
        		maxlength: 11
        	},
        	ddd: {
	        	required: true,
	        	minlength: 3,
        		maxlength: 3
        	},
        	tel: {
	        	required: true,
	        	minlength: 8,
        		maxlength: 9
        	},
        	email: {
	        	required: true,
      			email: true
        	},
        	nomemae: {
	        	required: true,
      			minlength: 5
        	}

	    },
	    messages: {
	        nome: {
	            required: "Favor digitar seu nome.",
	            minlength: "O Nome deve ter no mínimo 5 caracteres"
	        },
	        nasc: {
	        	required: "Digite a data",
	        	minlength: "Formato errado",
	        	maxlength: "Formato errado"
	        },
	        cpf: {
	        	required: "Digite seu CPF",
	        	minlength: "CPF errado",
        		maxlength: "CPF errado"
        	},
        	ddd: {
	        	required: "Digite o DDD",
	        	minlength: "Ex. 021",
        		maxlength: "Ex. 021"
        	},
        	tel: {
	        	required: "Digite o telefone",
	        	minlength: "Tel inválido",
        		maxlength: "Tel inválido"
        	},
        	email: {
	        	required: "Digite seu e-mail",
      			email: "Seu e-mail deve ser no formato nome@dominio.com"
        	},
        	nomemae: {
	        	required: "Digite o nome da mãe",
      			minlength: "O nome deve ter no mínimo 5 caracteres"
        	}
	    }
	});


/* Função Abrir Modal */
function openModal(){
	$('.modal').fadeIn('fast');
}
/* Função Fechar Modal */
function closeModal(){
	$('.modal').fadeOut('fast');
}

/* Fechar contrato */
$('.close').on("click", function(e){
	e.preventDefault();
	closeModal();
});
/* Escolher Plano */
$('.jcontrata').on("click", function(e){
	e.preventDefault();
	openModal();
	var plano = $(this).parents('.list-item').attr('data-plano');
	$('.plano-escolhido').attr('data-plano', plano);
	$('.plano-escolhido .plano').text("Celular Direto Controle "+plano);
});

/* Contratar */
$('').on('click', function(){
	var elemento = $(this).parents('.form-contrato');
	var plano = elemento.find('.plano-escolhido').attr('data-plano');
});