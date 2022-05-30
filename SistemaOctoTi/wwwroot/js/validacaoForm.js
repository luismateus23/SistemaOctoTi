var txtNome = document.getElementById('txtNome');
var txtEmail = document.getElementById('txtEmail');

var tipoCliente = document.querySelector('#sltCPF_CNPJ');
var txtCPF_CNPJ = document.querySelector('#txtCPF_CNPJ');

var txtDocumento = document.querySelector('#txtDocumento');
var txtData = document.querySelector('#txtData');

var sltTelefone = document.querySelector('#sltTelefone');
var txtTelefone = document.querySelector('#txtNumeroTelefone');

var txtDDD = document.querySelector('#txtDDD');

var txtLogradouro = document.querySelector('#txtLogradouro');
var txtNumero = document.querySelector('#txtNumero');
var txtCidade = document.querySelector('#txtCidade');
var txtCEP = document.querySelector('#txtCEP');
var txtComplemento = document.querySelector('#txtComplemento');
var txtBairro = document.querySelector('#txtBairro');

function validar() {

    if (txtNome.value.length <= 4) {
        alert('Preencha o campo [Nome] corretamente!');
        return false;
    }

    if (txtEmail.value.length <= 5) {
        alert('Preencha o campo [E-mail] corretamente!');
        return false;
    }

    if (txtCPF_CNPJ.value.length <= 13 && tipoCliente.value == 1) {
        alert('Preencha o campo [CPF] corretamente!');
        return false;
    }

    if (txtCPF_CNPJ.value.length <= 17 && tipoCliente.value == 2) {
        alert('Preencha o campo [CNPJ] corretamente!');
        return false;
    }

    if (txtDocumento.value.length <= 11 && tipoCliente.value == 1) {
        alert('Preencha o campo [RG] corretamente!');
        return false;
    }

    if (txtDocumento.value.length <= 11 && tipoCliente.value == 1) {
        alert('Preencha o campo [RG] corretamente!');
        return false;
    }

    if (txtDocumento.value.length < txtDocumento.getAttribute('maxlength') && tipoCliente.value == 2) {
        alert('Preencha o campo [IE] corretamente!');
        return false;
    }

    if (txtData.value.length != 10 && tipoCliente.value == 1) {
        alert('Preencha o campo [Data de Nascimento] corretamente!');
        return false;
    }

    if (txtData.value.length != 10 && tipoCliente.value == 2) {
        alert('Preencha o campo [Data de Fundação] corretamente!');
        return false;
    }

    if (txtTelefone.value.length < 10 && sltTelefone.value == 1) {
        alert('Preencha o campo [Celular] corretamente!');
        return false;
    }

    if (txtTelefone.value.length < 9 && sltTelefone.value == 2) {
        alert('Preencha o campo [Residencial] corretamente!');
        return false;
    }

    if (txtTelefone.value.length < 9 && sltTelefone.value == 3) {
        alert('Preencha o campo [Comercial] corretamente!');
        return false;
    }

    if (txtDDD.value.length < 2 || txtDDD.value.length > 3) {
        alert('Preencha o campo [DDD] corretamente!');
        return false;
    }
        /*Verificação Fraca*/
    if (txtLogradouro.value.length <= 5) {
        alert('Preencha o campo [Logradouro] corretamente!');
        return false;
    }
        /*Verificação Fraca*/
    if (txtNumero.value.length <= 0) {
        alert('Preencha o campo [Número] corretamente!');
        return false;
    }
        /*Verificação Fraca*/
    if (txtCidade.value.length <= 2) {
        alert('Preencha o campo [Cidade] corretamente!');
        return false;
    }
    
    if (txtCEP.value.length < 9) {
        alert('Preencha o campo [CEP] corretamente!');
        return false;
    }
        /*Verificação Fraca*/
    if (txtBairro.value.length <= 4) {
        alert('Preencha o campo [Bairro] corretamente!');
        return false;
    }


}