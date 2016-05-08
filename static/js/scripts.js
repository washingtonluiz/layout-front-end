function openModal(){$(".modal").fadeIn("fast"),$(".form-contrato").fadeIn("fast")}function closeModal(){$(".modal").fadeOut("fast"),$(".box-sucesso").fadeOut("fast"),$(".form-contrato input").val(""),$(".form-contrato label.error").hide()}$("#frm-contract").submit(function(e){e.preventDefault()}),$("#frm-contract").validate({rules:{nome:{required:!0,minlength:5},nasc:{required:!0,minlength:10,maxlength:10},cpf:{required:!0,minlength:11,maxlength:11},ddd:{required:!0,minlength:2,maxlength:2},tel:{required:!0,minlength:8,maxlength:9},email:{required:!0,email:!0},nomemae:{required:!0,minlength:5}},messages:{nome:{required:"Favor digitar seu nome.",minlength:"O Nome deve ter no mínimo 5 caracteres"},nasc:{required:"Digite a data",minlength:"Formato errado",maxlength:"Formato errado"},cpf:{required:"Digite seu CPF",minlength:"CPF errado",maxlength:"CPF errado"},ddd:{required:"Digite o DDD",minlength:"Ex. 21",maxlength:"Ex. 21"},tel:{required:"Digite o telefone",minlength:"Tel inválido",maxlength:"Tel inválido"},email:{required:"Digite seu e-mail",email:"Seu e-mail deve ser no formato nome@dominio.com"},nomemae:{required:"Digite o nome da mãe",minlength:"O nome deve ter no mínimo 5 caracteres"}}}),$(".close").on("click",function(e){e.preventDefault(),closeModal()}),$(".jcontrata").on("click",function(e){openModal();var t=$(this).parents(".list-item").attr("data-plano"),n=$(this).parents(".list-item").attr("data-valor");$(".plano-escolhido").attr("data-valor",n),$(".plano-escolhido").attr("data-plano",t),$(".plano-escolhido .plano").text("Celular Direto Controle "+t),e.preventDefault()}),$(document.body).on({click:function(e){var t=$(".box-sucesso"),n=$(this).parents(".form-contrato"),a=n.find(".plano-escolhido").attr("data-plano"),o=n.find(".plano-escolhido").attr("data-valor"),i=!0,d=n.find("input"),r=n.find("form .nome").val(),l=n.find("form .n-cpf").val(),m=n.find("form .n-ddd").val(),f=n.find("form .n-tel").val();$(d).each(function(){""==$(this).val()&&(i=!1)}),1==i&&(n.fadeOut("fast"),t.fadeIn("fast"),t.find(".desc-plano").text(a),t.find(".desc-ddd").text(m),t.find(".desc-tel").text(f),t.find(".dado-nome").text(r),t.find(".dado-plano").text(a),t.find(".dado-cpf").text(l),t.find(".dado-valor").text("R$ "+o+" /mês"))}},".jcontinuar"),$(".jok").on("click",function(e){e.preventDefault(),closeModal()});