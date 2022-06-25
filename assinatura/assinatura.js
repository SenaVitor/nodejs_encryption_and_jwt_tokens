import {generateKeyPairSync, createSign, createVerify } from 'crypto';

function verifica(dados){
    const verificador = createVerify('rsa-sha256');
    verificador.update(dados);
    const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');
    console.log(ehVerificado);
}

const {privateKey, publicKey } = generateKeyPairSync
('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

let dados = "Essa string será assinada";

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura: ${assinatura}`);

verifica(dados);//true -> não foi alterado

dados += 'Arquivo alterado';

verifica(dados);//false -> foi alterado