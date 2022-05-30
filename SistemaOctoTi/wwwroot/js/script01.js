var tipoTelefone = document.querySelector('#sltTelefone');
var valorzin = document.querySelector('#txtValor');

var txtNumeroTelefone = document.querySelector('#txtNumeroTelefone');
var lblNumeroTelefone = document.querySelector('#lblNumeroTelefone');

var txtCEP = document.querySelector('#txtCEP');

tipoTelefone.addEventListener('change', atualizarTelefone);

function atualizarTelefone() {

    if (tipoTelefone.value == 1) {

        lblNumeroTelefone.textContent = "Celular:";
        txtNumeroTelefone.setAttribute('placeholder', '00000-0000');
        txtNumeroTelefone.setAttribute('maxlength', '10');
   
               
    } else if (tipoTelefone.value == 2) {

        lblNumeroTelefone.textContent = "Residencial:";
        txtNumeroTelefone.setAttribute('placeholder', '0000-0000');
        txtNumeroTelefone.setAttribute('maxlength', '9');


       
    } else if (tipoTelefone.value == 3) {
    
        lblNumeroTelefone.textContent = "Comercial:";
        txtNumeroTelefone.setAttribute('placeholder', '0000-0000');
        txtNumeroTelefone.setAttribute('maxlength', '9');
    }
}


txtNumeroTelefone.addEventListener('keypress', telefoneMask);


function telefoneMask() {
    if (tipoTelefone.value == 1) {
        if (txtNumeroTelefone.value.length == 5) {
            txtNumeroTelefone.value += "-";
        }
    } else if (tipoTelefone.value == 2) {
        if (txtNumeroTelefone.value.length == 4) {
            txtNumeroTelefone.value += "-";
        }
    } else if (tipoTelefone.value == 3) {
        if (txtNumeroTelefone.value.length == 4) {
            txtNumeroTelefone.value += "-";
        }
    }
}


txtCEP.addEventListener('keypress', cepMask);

function cepMask() {
    if (txtCEP.value.length == 5) {
        txtCEP.value += "-";
    }
}