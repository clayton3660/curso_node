function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
      Para: ${para}
      --------------------------------------------------------
      ${corpo}
      --------------------------------------------------------
      De: Clayton
    `)
  },8000);
}
console.log('Inicio do envio do e-mail')
enviarEmail('Oi seja bem vindo ao curso de node', 'email@email.com')
console.log('Seu e-mail foi enviado!')
console.log('Tudo Ok')