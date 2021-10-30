function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{

      var deuErro = false;
      //console.log('Email enviado')
      if(!deuErro) {
        resolve({time: 6, to: "email@email.com"});
      }else {
        reject("Fila cheia")
      }
    }, 4000)
  })
}
enviarEmail("Olá mundo", 'email@email.com').then(({time, to}) =>{
  console.log(`
    Time: ${time}
    ___________________
    To: ${to}
  `)

}).catch((erro) =>{
  console.log('Que pena, não deu! :(' + erro)
})