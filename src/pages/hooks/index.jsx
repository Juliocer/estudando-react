import { useState, useEffect, useCallback, useMemo } from 'react';

/* useState 

    🧩 1. Importando o Hook
        Aqui você está importando o useState do React — ele serve para armazenar e atualizar valores dentro de componentes funcionais.
            import { useState } from 'react'; 

    ⚙️ 2. Criando o componente
        const EstudoDeHooks = () => {
            Esse é um componente funcional. Ele pode conter HTML, lógica e Hooks.
        
    💾 3. Declarando o estado
        const [name, setName] = useState('Júlio');
        Aqui:
            name → é a variável de estado (valor atual).
            setName → é a função usada para atualizar esse valor.
            'Júlio' → é o valor inicial do estado.

    🔄 4. Criando a função que altera o estado
        const mudarName = () => {
            setName(name => name == 'Júlio' ? 'César' : 'Júlio')
        }
            Essa função faz o seguinte:
                Verifica se o nome atual (name) é "Júlio";
                Se for, muda para "César";
                Se não for, volta para "Júlio".
            🟢 O uso de setName(name => ...) é uma boa prática:
            ele garante que você está sempre pegando o valor mais recente do estado.

    🖥️ 5. Retornando o JSX (interface)
        return (
            <div>
                <p>{name}</p>
                <button onClick={mudarName}>Clique</button>
            </div>
        )
            {name} → mostra o valor atual do estado na tela.
            O botão chama mudarName quando clicado.
            Cada clique alterna o texto entre “Júlio” e “César”. 🎯

    ✅ Resultado esperado
        Ao abrir a página: aparece “Júlio”.
        Ao clicar: muda para “César”.
        Ao clicar de novo: volta para “Júlio”.

*/

/* useEffect 

// useEffect que roda toda vez que "name" muda
useEffect(() =>{
    console.log(`O nome mudou para: ${name}`);
        
    // opcional: mudar a cor de fundo dependendo do nome
    document.getElementById('p').style.backgroundColor = name === 'Júlio' ? '#1e90ff' : '#ff4757';

    // Cleanup (opcional): executa antes da próxima mudança
    return () => {
        console.log(`Limpando efeito anterior para o nome: ${name}`);
    };
}, [name]); // <--- dependência "name"

🧠 Explicando o que acontece:
    | Linha                                       | O que faz                                                                                                            |
    | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
    | `useEffect(() => { ... }, [name])`          | Executa o código **toda vez que o valor de `name` mudar**                                                            |
    | `console.log(...)`                          | Mostra no console o novo valor                                                                                       |
    | `document.body.style.backgroundColor = ...` | Muda a cor de fundo do Parágrafo conforme muda o nome                                                                        |
    | `return () => {...}`                        | Função opcional de **limpeza**, executada antes do próximo efeito (boa prática para remover listeners, timers, etc.) |

🧩 Resultado:
    Ao abrir a página, o nome é “Júlio” e o fundo fica azul.
    Quando clica no botão:
        O nome muda para “César”.
        O fundo muda para vermelho.
        Aparece no console: O nome mudou para: César.

*/

/* useMemo 

useMemo = referencia em variaveis(const, var, let)
useMemo = 💾 memoriza um valor (resultado de uma conta)

✅ useMemo agora retorna um valor calculado (sem alterar estado)
  const anoDeNascimento = useMemo(() => {
    const anoAtual = 2025;
    return anoAtual - age;
  }, [age]);

✅ Explicação passo a passo:
    useMemo diz ao React:
        “Só recalcula este valor se algo dentro do array [age] mudar.”

    Sempre que o usuário altera o campo de idade (age),
    o React executa novamente a função dentro do useMemo.

    Se age não muda, o React reutiliza o valor memorizado da última vez.
    (Ou seja, evita refazer o cálculo desnecessariamente.)

💡 Dica de melhoria (boa prática)

    Em vez de usar um número fixo (2025), é mais flexível usar o ano atual do sistema:
        const anoDeNascimento = useMemo(() => {
            const anoAtual = new Date().getFullYear();
            return age ? anoAtual - age : '';
        }, [age]);
    Assim, o código continua funcionando corretamente no futuro sem precisar alterar o valor manualmente.

*/

/* useCallback

useCallback = referencia de funcao.
useCallback = 🔁 memoriza uma função

✅ O que o seu código faz
        const mudaName = useCallback(() => {
        setName(name => name === 'Júlio' ? 'César' : 'Júlio');
        }, []);
    O useCallback diz ao React:
    👉 “Ei, guarda essa função e não cria uma nova em cada renderização.”

    O array de dependências [] quer dizer:
    👉 “Só recrie essa função se algo dentro mudar — mas aqui nada muda, então ela fica fixa.”

*/

const EstudoDeHooks = () => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    
    const mudaName = useCallback(() => {
        setName(name => name === 'Júlio' ? 'César' : 'Júlio');
    }, []);

    const anoDeNascimento = useMemo(() => {
       const anoAtual = new Date().getFullYear();
       return age ? anoAtual - age : '';
    }, [age]);

    useEffect(() =>{
        console.log(`O nome mudou para: ${name}`);
        document.getElementById('p').style.backgroundColor = name === 'Júlio' ? '#1e90ff' : '#ff4757';
        return () => {
            console.log(`Limpando efeito anterior para o nome: ${name}`);
        };
    }, [name]);

    return (
        <div>
            <p id='p'>
                Nome: {name}
            </p>
            <p>
                Idade: {age}
            </p>
            <p>
                Ano de Nacismento: {anoDeNascimento}
            </p>
            <br />
            <input 
                type="text"
                placeholder="Digite seu nome"
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="number"
                placeholder="Digite sua idade"
                value={age || ''}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <br />
            <button onClick={mudaName}>Mudar Nome</button>
            
        </div>
    )
}

export { EstudoDeHooks };
