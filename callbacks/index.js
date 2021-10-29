function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    
    var deuErro = false;

    if(deuErro) {
      callback(12,'O envio do e-mail falhou');

    }else {
      callback(12); // pode ser utilizados parametros
    }
    
  }, 2000);
}
console.log('Inicio do envio do e-mail');
enviarEmail('Oi seja bem vindo ao curso de node', 'email@email.com', (time,erro) => {
  if(erro == undefined) {
    console.log('Tudo ok')
    console.log(`Tempo: ${time}s `)
  }else {
    console.log(`Ocorreu um erro: ${erro}`)
  }
});
