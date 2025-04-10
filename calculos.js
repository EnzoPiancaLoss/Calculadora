function atualizarDisplay(NovoDisplay) {
    document.getElementById("Display").innerHTML = stringMatematica;
}

function processar_input(input) {
    let forbiden = ["ce", "C","=", "d","_"];
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
            stringMatematica = stringMatematica.slice(0, -1);
        } else if (input == forbiden[4]) {
            stringMatematica += "-";
        }
        console.log("valor: ", stringMatematica);
    } else {
        stringMatematica = construir_string(input,stringMatematica);
        console.log(stringMatematica);
    }

    
}

function construir_string(item, string) {
    return stringMatematica += item + " ";
}


function evalvular(expressao) {
    try {
        return eval(expressao);
    } catch (e) {
        return "erro";
    }
}


let stringMatematica = ""; // Não comenta isso
//processar_input("2")
//processar_input("+")
//processar_input("4")
//processar_input("+")
//processar_input("_")
//processar_input("5")
//processar_input("=")
// console.log(evalvular(stringMatematica))
