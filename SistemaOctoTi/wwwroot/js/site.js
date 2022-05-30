// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.onload = AtualizarLabelOnLoad;

function AtualizarLabelOnLoad() {
    if (sltCPF_CNPJ.value == 1) {
        /*SE FOR CPF: */
        lblCPF_CNPJ.textContent = "CPF:";
        txtCPF_CNPJ.setAttribute('placeholder', '000.000.000-00');
        txtCPF_CNPJ.setAttribute('maxlength', '14');
        lblData.textContent = "Data de Nascimento";

        lblDocumento.textContent = "RG:";
        txtDocumento.setAttribute('placeholder', '00.000.000-0');
        divEstado.setAttribute('style', 'display: none');



    } else {
        /*SE FOR CNPJ: */
        lblCPF_CNPJ.textContent = "CNPJ:";
        txtCPF_CNPJ.setAttribute('placeholder', '00.000.000/0001-00');
        txtCPF_CNPJ.setAttribute('maxlength', '18');
        lblData.textContent = "Data de Fundação";

        lblDocumento.textContent = "IE:";
        divEstado.setAttribute('style', 'display: block');
    }
}

var divEstado = document.querySelector('#divEstado');

var lblCPF_CNPJ = document.querySelector('#lblCPF_CNPJ');
var txtCPF_CNPJ = document.querySelector('#txtCPF_CNPJ');

var txtData = document.querySelector('#txtData');
var lblData = document.querySelector('#lblData');

var txtDocumento = document.querySelector('#txtDocumento');
var lblDocumento = document.querySelector('#lblDocumento');

var sltEstado = document.querySelector('#sltEstado');

function atualizarLabel() {
    if (sltCPF_CNPJ.value == 1) {
        /*SE FOR CPF: */
        lblCPF_CNPJ.textContent = "CPF:";
        txtCPF_CNPJ.setAttribute('placeholder', '000.000.000-00');
        txtCPF_CNPJ.setAttribute('maxlength', '14');
        txtCPF_CNPJ.value = "";
        txtDocumento.value = "";
        lblData.textContent = "Data de Nascimento"; 

        lblDocumento.textContent = "RG:";
        txtDocumento.setAttribute('placeholder', '00.000.000-0');
        divEstado.setAttribute('style', 'display: none');

        
        
    } else {
        /*SE FOR CNPJ: */
        lblCPF_CNPJ.textContent = "CNPJ:";
        txtCPF_CNPJ.setAttribute('placeholder', '00.000.000/0001-00');
        txtCPF_CNPJ.setAttribute('maxlength', '18');
        txtCPF_CNPJ.value = "";
        txtDocumento.value = "";
        lblData.textContent = "Data de Fundação";    

        lblDocumento.textContent = "IE:";
        divEstado.setAttribute('style', 'display: block');
    }
}

function cpf_cnpjMask() {
    if (sltCPF_CNPJ.value == 1) {

        if (txtCPF_CNPJ.value.length == 3) {
            txtCPF_CNPJ.value += ".";
        } else if (txtCPF_CNPJ.value.length == 7) {
            txtCPF_CNPJ.value += ".";
        } else if (txtCPF_CNPJ.value.length == 11) {
            txtCPF_CNPJ.value += "-";
        }

    } else {

        if (txtCPF_CNPJ.value.length == 2) {
            txtCPF_CNPJ.value += ".";
        } else if (txtCPF_CNPJ.value.length == 6) {
            txtCPF_CNPJ.value += ".";
        } else if (txtCPF_CNPJ.value.length == 10) {
            txtCPF_CNPJ.value += "/";
        } else if (txtCPF_CNPJ.value.length == 15) {
            txtCPF_CNPJ.value += "-";
        }
    }
}

sltCPF_CNPJ.addEventListener('onload', atualizarLabel); /*Attempt*/
sltCPF_CNPJ.addEventListener('change', atualizarLabel);

txtCPF_CNPJ.addEventListener('keypress', cpf_cnpjMask);


txtDocumento.addEventListener('keypress', rgMask);

txtDocumento.addEventListener('keypress', ieMask);

function rgMask() {

    if (sltCPF_CNPJ.value == 1) {
        if (txtDocumento.value.length == 2) {
            txtDocumento.value += ".";
        } else if (txtDocumento.value.length == 6) {
            txtDocumento.value += ".";
        } else if (txtDocumento.value.length == 10) {
            txtDocumento.value += "-";
        }
    }  
}

function ieMask() {

    if (sltCPF_CNPJ.value == 2) {    

        ie = document.querySelector('#txtDocumento');
        /*AC*/
        if (sltEstado.value == 1) {

            if (ie.value.length == 2) {
                ie.value += ".";
            } else if (ie.value.length == 6) {
                ie.value += ".";
            } else if (ie.value.length == 10) {
                ie.value += "/";
            } else if (ie.value.length == 14) {
                ie.value += "-";
            }

        } else

            if (sltEstado.value == 4) {
                if (ie.value.length == 2) {
                    ie.value += ".";
                } else if (ie.value.length == 6) {
                    ie.value += ".";
                } else if (ie.value.length == 10) {
                    ie.value += "-";
                }
            } else

                if (sltEstado.value == 5) {
                    if (ie.value.length == 6) {
                        ie.value += "-";
                    }
                } else

                    if (sltEstado.value == 6) {
                        if (ie.value.length == 8) {
                            ie.value += "-";
                        }
                    } else

                        if (sltEstado.value == 7) {
                            if (ie.value.length == 11) {
                                ie.value += "-";
                            }
                        } else

                            if (sltEstado.value == 8) {
                                if (ie.value.length == 8) {
                                    ie.value += "-";
                                }
                            } else
                                    if (sltEstado.value == 9) {
                                        if (ie.value.length == 2) {
                                            ie.value += ".";
                                        } else if (ie.value.length == 6) {
                                            ie.value += ".";
                                        } else if (ie.value.length == 10) {
                                            ie.value += "-";
                                        }
                                    }

        if (sltEstado.value == 10) {
            if (ie.value.length == 8) {
                ie.value += "-";
            }
        } else

            if (sltEstado.value == 11) {
                if (ie.value.length == 10) {
                    ie.value += "-";
                }
            } else

                if (sltEstado.value == 12) {
                    if (ie.value.length == 8) {
                        ie.value += "-";
                    }
                }
                else if (sltEstado.value == 13) {
                    if (ie.value.length == 3) {
                        ie.value += ".";
                    } else if (ie.value.length == 7) {
                        ie.value += ".";
                    } else if (ie.value.length == 11) {
                        ie.value += "/";
                    }
                } else if (sltEstado.value == 14) {
                    if (ie.value.length == 2) {
                        ie.value += "-";
                    } else if (ie.value.length == 9) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 15) {
                    if (ie.value.length == 8) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 16) {
                    if (ie.value.length == 3) {
                        ie.value += ".";
                    } else if (ie.value.length == 9) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 17) {
                    if (ie.value.length == 7) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 18) {
                    if (ie.value.length == 8) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 19) {
                    if (ie.value.length == 2) {
                        ie.value += ".";
                    } else if (ie.value.length == 6) {
                        ie.value += ".";
                    } else if (ie.value.length == 9) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 20) {
                    if (ie.value.length == 2) {
                        ie.value += ".";
                    } else if (ie.value.length == 6) {
                        ie.value += ".";
                    } else if (ie.value.length == 10) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 21) {
                    if (ie.value.length == 3) {
                        ie.value += "/";
                    }
                } else if (sltEstado.value == 22) {
                    if (ie.value.length == 13) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 23) {
                    if (ie.value.length == 8) {
                        ie.value += "-";
                    }
                } else if (sltEstado.value == 24) {
                    if (ie.value.length == 3) {
                        ie.value += ".";
                    } else if (ie.value.length == 7) {
                        ie.value += ".";
                    } else if (ie.value.length == 11) {
                        ie.value += ".";
                    }
                } else if (sltEstado.value == 25) {
                    if (ie.value.length == 3) {
                        ie.value += ".";
                    } else if (ie.value.length == 7) {
                        ie.value += ".";
                    }
                } else if (sltEstado.value == 26) {
                    if (ie.value.length == 8) {
                        ie.value += "-";
                    }
                }
    }    

}

sltEstado.addEventListener('change', sltEstadoMask);

function sltEstadoMask() {

    if (sltCPF_CNPJ.value == 2) {
             
        ie = document.querySelector('#txtDocumento');

        if (sltEstado.value == 1) {
            ie.value = "";
            ie.setAttribute('placeholder', '00.000.000/000-00');
            ie.setAttribute('maxlength', '17');
        } else
            if (sltEstado.value == 2) {
                ie.value = "";
                ie.setAttribute('placeholder', '000000000');
                ie.setAttribute('maxlength', '9');
            } else
                if (sltEstado.value == 3) {
                    ie.value = "";
                    ie.setAttribute('placeholder', '0000000000');
                    ie.setAttribute('maxlength', '10');
                } else
                    if (sltEstado.value == 4) {
                        ie.value = "";
                        ie.setAttribute('placeholder', '00.000.000-0');
                        ie.setAttribute('maxlength', '12');
                    } else
                        if (sltEstado.value == 5) {
                            ie.value = "";
                            ie.setAttribute('placeholder', '000000-00');
                            ie.setAttribute('maxlength', '9');
                        } else
                            if (sltEstado.value == 6) {
                                ie.value = "";
                                ie.setAttribute('placeholder', '00000000-0');
                                ie.setAttribute('maxlength', '10');
                            } else
                                if (sltEstado.value == 7) {
                                    ie.value = "";
                                    ie.setAttribute('placeholder', '00000000000-00');
                                    ie.setAttribute('maxlength', '14');
                                } else
                                    if (sltEstado.value == 8) {
                                        ie.value = "";
                                        ie.setAttribute('placeholder', '00000000-0');
                                        ie.setAttribute('maxlength', '10');
                                    } else
                                        if (sltEstado.value == 9) {
                                            ie.value = "";
                                            ie.setAttribute('placeholder', '00.000.000-0');
                                            ie.setAttribute('maxlength', '12');
                                        } else
                                            if (sltEstado.value == 10) {
                                                ie.value = "";
                                                ie.setAttribute('placeholder', '00000000-0');
                                                ie.setAttribute('maxlength', '10');
                                            } else
                                                if (sltEstado.value == 11) {
                                                    ie.value = "";
                                                    ie.setAttribute('placeholder', '0000000000-0');
                                                    ie.setAttribute('maxlength', '12');
                                                } else
                                                    if (sltEstado.value == 12) {
                                                        ie.value = "";
                                                        ie.setAttribute('placeholder', '00000000-0');
                                                        ie.setAttribute('maxlength', '10');
                                                    } else
                                                        if (sltEstado.value == 13) {
                                                            ie.value = "";
                                                            ie.setAttribute('placeholder', '000.000.000/0000');
                                                            ie.setAttribute('maxlength', '16');
                                                        } else
                                                            if (sltEstado.value == 14) {
                                                                ie.value = "";
                                                                ie.setAttribute('placeholder', '00-000000-0');
                                                                ie.setAttribute('maxlength', '11');
                                                            } else
                                                                if (sltEstado.value == 15) {
                                                                    ie.value = "";
                                                                    ie.setAttribute('placeholder', '00000000-0');
                                                                    ie.setAttribute('maxlength', '10');
                                                                } else
                                                                    if (sltEstado.value == 16) {
                                                                        ie.value = "";
                                                                        ie.setAttribute('placeholder', '000-00000-00');
                                                                        ie.setAttribute('maxlength', '12');
                                                                    } else
                                                                        if (sltEstado.value == 17) {
                                                                            ie.value = "";
                                                                            ie.setAttribute('placeholder', '0000000-00');
                                                                            ie.setAttribute('maxlength', '10');
                                                                        } else
                                                                            if (sltEstado.value == 18) {
                                                                                ie.value = "";
                                                                                ie.setAttribute('placeholder', '00000000-0');
                                                                                ie.setAttribute('maxlength', '10');
                                                                            } else
                                                                                if (sltEstado.value == 19) {
                                                                                    ie.value = "";
                                                                                    ie.setAttribute('placeholder', '00.000.00-0');
                                                                                    ie.setAttribute('maxlength', '11');
                                                                                } else
                                                                                    if (sltEstado.value == 20) {
                                                                                        ie.value = "";
                                                                                        ie.setAttribute('placeholder', '000000000000');
                                                                                        ie.setAttribute('maxlength', '12');
                                                                                    } else
                                                                                        if (sltEstado.value == 21) {
                                                                                            ie.value = "";
                                                                                            ie.setAttribute('placeholder', '000/0000000');
                                                                                            ie.setAttribute('maxlength', '11');
                                                                                        } else
                                                                                            if (sltEstado.value == 22) {
                                                                                                ie.value = "";
                                                                                                ie.setAttribute('placeholder', '0000000000000-0');
                                                                                                ie.setAttribute('maxlength', '15');
                                                                                            } else
                                                                                                if (sltEstado.value == 23) {
                                                                                                    ie.value = "";
                                                                                                    ie.setAttribute('placeholder', '00000000-0');
                                                                                                    ie.setAttribute('maxlength', '10');
                                                                                                } else
                                                                                                    if (sltEstado.value == 24) {
                                                                                                        ie.value = "";
                                                                                                        ie.setAttribute('placeholder', '000.000.000.000');
                                                                                                        ie.setAttribute('maxlength', '15');
                                                                                                    } else
                                                                                                        if (sltEstado.value == 25) {
                                                                                                            ie.value = "";
                                                                                                            ie.setAttribute('placeholder', '000.000.000');
                                                                                                            ie.setAttribute('maxlength', '11');
                                                                                                        } else
                                                                                                            if (sltEstado.value == 26) {
                                                                                                                ie.value = "";
                                                                                                                ie.setAttribute('placeholder', '00000000-0');
                                                                                                                ie.setAttribute('maxlength', '10');
                                                                                                            } else
                                                                                                                if (sltEstado.value == 27) {
                                                                                                                    ie.value = "";
                                                                                                                    ie.setAttribute('placeholder', '00000000-0');
                                                                                                                    ie.setAttribute('maxlength', '12');
                                                                                                                }
    }
    
}


