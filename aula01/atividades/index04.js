// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%.

let valorAVista = 1000;

let totalAPagar = 0;
let prestacao = 0;

let quantidadeParcelas = 5;

if (quantidadeParcelas == 3) {
  totalAPagar = valorAVista * 1.1;
  prestacao = totalAPagar / quantidadeParcelas;
  alert(
    `O valor total pago será de R$${totalAPagar} e o valor de parcela de R$${prestacao.toFixed(
      2
    )}`
  );
} else if (quantidadeParcelas == 5) {
  totalAPagar = valorAVista * 1.2;
  prestacao = totalAPagar / quantidadeParcelas;
  alert(
    `O valor total pago será de R$${totalAPagar} e o valor de parcela de R$${prestacao.toFixed(
      2
    )}`
  );
} else {
  alert(`O valor total pago será de R$${valorAVista}`);
}
