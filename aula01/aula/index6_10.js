let nomes = ["Gabriel", "Pedro", "Ana"];

// acessando posição do array
alert(nomes[1]);

// adicionando dados na array -> inicio da lista " .unshift "
let nome1 = "Eleticia";

nomes.unshift(nome1);

// adicionando dados na array -> final da lista " .push "

let nome2 = "Vitoria";

nomes.push(nome2);

// substituindo nome em certa posição

nomes[0] = "Eleticia Paiva";

// tamanho do array

nomes.length;

// ------------------------------------------
for (let i = 0; i < nomes.length; i++) {
  alert(nomes[i]);
}
