function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    console.log(`
      Para: ${para}
      --------------------------------------------------------
      ${corpo}
      --------------------------------------------------------
      De: Clayton
    `);
    callback();
  }, 8000);
}
console.log('Inicio do envio do e-mail');
enviarEmail('Oi seja bem vindo ao curso de node', 'email@email.com', () => {
  console.log('Seu e-mail foi enviado!');
  console.log('Tudo Ok');
});
