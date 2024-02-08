const perguntas = [
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é utilizada para imprimir mensagens no console do navegador?",
      respostas: [
        "print()",
        "console.log()",
        "alert()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "add()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Object",
        "Array",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "Qual operador é utilizado para comparação de igualdade em valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma função anônima em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "const myFunction = function() {}",
        "() => {}",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de se referenciar um elemento HTML pelo seu ID em JavaScript?",
      respostas: [
        "getElementByTagName()",
        "getElementByClass()",
        "getElementById()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar uma classe a um elemento",
        "Adicionar um ouvinte de eventos a um elemento",
        "Adicionar um novo elemento ao DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo",
        "Converte uma string em um número inteiro",
        "Retorna a parte decimal de um número",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }