function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  });
}

function buscarEmailNoBanco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('email@email.com');
    }, 2000);
  });
}

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;
      //console.log('Email enviado')
      if (!deuErro) {
        resolve({ time: 6, to: 'email@email.com' });
      } else {
        reject('Fila cheia');
      }
    }, 4000);
  });
}

function pegarUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'clayton', lang: 'JS' },
        { name: 'paiva', lang: 'C#' },
        { name: 'silva', lang: 'Java' },
      ]);
    }, 3000);
  });
}

async function principal() {
  var id = await pegarId();
  var email = await buscarEmailNoBanco(id);
  enviarEmail('Olá, como vai?', email)
    .then(() => {
      console.log('Email enviado!');
    })
    .catch((err) => {
      console.log(err);
    });
}

principal();

// pegarId().then ((id) => {
//   buscarEmailNoBanco(id).then((email) => {
//     enviarEmail('Olá, como vai?!', email ).then(() => {
//       console.log("Email enviado, para o usuário com id: " + id)
//     }).catch((err) => {
//       console.log(err)
//     })
//   })
// })
