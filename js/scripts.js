document.addEventListener('DOMContentLoaded', () => {

    // Atualiza anos do rodapé
    const year = new Date().getFullYear();
    document.getElementById('year')?.textContent = year;
    document.getElementById('year2')?.textContent = year;
    document.getElementById('year3')?.textContent = year;

    // Máscaras de CPF, telefone e CEP
    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    function aplicarMascara(input, mascara){
        if(!input) return;
        input.addEventListener('input', () => {
            let valor = input.value.replace(/\D/g,'');
            let resultado = '';
            let pos = 0;

            for(let i=0; i<mascara.length; i++){
                if(mascara[i] === '#'){
                if(valor[pos]) resultado += valor[pos++];
                } else {
                resultado += mascara[i];
                }
            }
            input.value = resultado;
        });
    }

    aplicarMascara(cpfInput, '###.###.###-##');
    aplicarMascara(telInput, '(##) #####-####');
    aplicarMascara(cepInput, '#####-###');

    // Formulário
    const form = document.getElementById('cadastroForm');
    if(form){
        const inputs = form.querySelectorAll('input');

        function validarCampo(input){
            if(input.checkValidity()){
                input.classList.remove('invalido');
                input.classList.add('valido');
            } else {
                input.classList.remove('valido');
                input.classList.add('invalido');
            }
        }

        inputs.forEach(input => {
            input.addEventListener('input', () => validarCampo(input));
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formValido = true;
            inputs.forEach(input => {
                validarCampo(input);
                if(!input.checkValidity()) formValido = false;
            });

            if(formValido){
                alert('✅ Cadastro enviado com sucesso!');
                form.reset();
                inputs.forEach(input => input.classList.remove('valido','invalido'));
            } else {
                alert('⚠️ Por favor, preencha todos os campos corretamente.');
            }
        });
    }

    // Botões Voluntário / Doador
    const btnVoluntario = document.getElementById('btnVoluntario');
    const btnDoador = document.getElementById('btnDoador');

    if(btnVoluntario && btnDoador){
        btnVoluntario.addEventListener('click', () => {
            btnVoluntario.classList.add('selecionado');
            btnDoador.classList.remove('selecionado');
        });

        btnDoador.addEventListener('click', () => {
            btnDoador.classList.add('selecionado');
            btnVoluntario.classList.remove('selecionado');
        });
    }

});
