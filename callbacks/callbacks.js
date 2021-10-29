function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

      var deuErro = true;
      //console.log('Email enviado')
      if(!deuErro) {
        resolve();
      }else {
        reject()
      }

    }, 4000)
  })
}
enviarEmail("Olá mundo", 'email@email.com').then(() =>{
  console.log('Opa, voce consegui fazer o que me prometeu!')
}).catch(() =>{
  console.log('Que pena, não deu! :(')
})