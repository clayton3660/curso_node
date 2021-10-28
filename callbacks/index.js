function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
      Para: ${para}
      --------------------------------------------------------
      ${corpo}
      --------------------------------------------------------
      De: Clayton
    `);
    callback('Ok', 5, '8s', 'clayton'); // pode ser utilizados parametros
  }, 8000);
}
console.log('Inicio do envio do e-mail');
enviarEmail('Oi seja bem vindo ao curso de node', 'email@email.com', (status, amount, time, nome) => {
  console.log(`
    De: ${nome}
    Status: ${status}
    -----------------
    Contatos: ${amount}
    -----------------
    Tempo: ${time}
  `);
  console.log('Tudo Ok');
});
