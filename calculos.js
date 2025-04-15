function atualizarDisplay(NovoDisplay) {
    document.getElementById("Display").innerHTML = stringMatematica;
}

function processar_input(input) {
    let forbiden = ["ce", "C", "=", "d", "_", "decbin", "bindec"];
    let bool = false;

    for (let i = 0; i < forbiden.length; i++) {
        if (forbiden[i] == input) {
            bool = true;
        }
    }

    if (bool) {
        if (input == forbiden[0]) {
            stringMatematica = "";
        } else if (input == forbiden[1]) {
            stringMatematica = "0";
        } else if (input == forbiden[2]) {
            stringMatematica = evalvular(stringMatematica);
        } else if (input == forbiden[3]) {
             //Se for true, apaga 2, false apaga uma vez
            if (stringMatematica.charAt(stringMatematica.length - 1) == " ") {
                stringMatematica = stringMatematica.slice(0, -1); 
            }
            stringMatematica = stringMatematica.slice(0, -1);
        } else if (input == forbiden[4]) {
            stringMatematica += "-";
        } else if (input == forbiden[5]) {
            stringMatematica = dectobin(stringMatematica);
        } else if (input == forbiden[6]) {
            stringMatematica = bindec(stringMatematica);
        }
    } else {
        stringMatematica = construir_string(input, stringMatematica);
    }

    atualizarDisplay(stringMatematica);
}

function construir_string(item, string) {
    return string += item;
}

function evalvular(expressao) {
    try {
        return eval(expressao);
    } catch (e) {
        return "erro";
    }
}

function dectobin(decimal) {
    decimal = decimal.trim();
    if (decimal.includes(" ")) {
        return "Digite apenas um número";
    }
    let numero = parseInt(decimal);
    if (isNaN(numero)) {
        return "Valor inválido";
    }
    return numero.toString(2);
}

function bindec(binario) {
    binario = binario.trim();
    if (/[^01]/.test(binario)) {
        return "Número binário inválido";
    }
    return parseInt(binario, 2);
}

let stringMatematica = "";


//processar_input("2")
//processar_input("+")
//processar_input("4")
//processar_input("+")
//processar_input("_")
//processar_input("5")
//processar_input("=")
// console.log(evalvular(stringMatematica))
