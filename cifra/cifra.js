const decifra = true;
const cifra = false;
const mensagemSecreta = 'zebra';
console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimentos, decifra){
    let mensagemCifrada = "";
    let calculo = '';
    for (let i = 0; i < mensagem.length; i++) {
        let codLetraAscii = mensagem.charCodeAt(i);
        if (codLetraAscii >= 65 && codLetraAscii <= 90) {
            if (decifra === true){
                calculo = ((codLetraAscii - 90 - movimentos) % 26) + 90; 
            }else{
                calculo = ((codLetraAscii - 65 + movimentos) % 26) + 65;
            }
            mensagemCifrada += String.fromCharCode(calculo);
        } else if (codLetraAscii >= 97 && codLetraAscii <= 122) { 
            if (decifra === true){
                calculo = ((codLetraAscii - 122 - movimentos) % 26) + 122; 
            }else{
                calculo = ((codLetraAscii - 97 + movimentos) % 26) + 97;
            }
            mensagemCifrada += String.fromCharCode(calculo);
        } else {
            mensagemCifrada += String.fromCharCode(codLetraAscii); 
        }
    }

    return mensagemCifrada;
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3, cifra);

console.log(mensagemCifrada);

const mensagemDecifrada = cifraMensagem(mensagemCifrada, 3, decifra);

console.log(mensagemDecifrada);