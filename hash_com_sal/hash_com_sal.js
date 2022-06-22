import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaSenhaComSal(senha){
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');
    return `${sal}:${senhaHasheada}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome,
        [this.sal, this.hash] = criaSenhaComSal(senha).split(':');
    }
    autentica(nome, senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);
            if(hashesCorrespondem){
                console.log("Usuário autenticado com sucesso!");
                return true;
            }
        }
        console.log("Usuário ou senha incorretos.");
        return false;
    }
}

const u = new Usuario('Vitor', 'senha');

console.log(u);

//Teste de sucesso
u.autentica('Vitor', 'senha');

//Testes de fracasso
u.autentica('JJ', 'senha');
u.autentica('Vitor', 'SenhA');