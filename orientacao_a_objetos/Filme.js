class Filme{
  cosntructor(){
    this.titulo = '';
    this.ano = 0;
    this.genero = '';
    this.diretor = '';
    this.atores = [];
    this.duracao = 0;
  }

  Reproduzir(){
    console.log("Reproduzindo....");
  }

  Pausar(){
    console.log('Pausado || ');
  }

  Avançar(){
    console.log('Avançar >> ');
  }

  Fechar(){
    console.log('Fechar X');
  }
}

var vingadores = new Filme();

console.log("Titulo do filme: " + vingadores.titulo)
console.log("Ano de lançamento: " + vingadores.ano)

var hulk = new Filme();

console.log("Titulo do filme: " + hulk.titulo)
console.log("Ano de lançamento: " + hulk.ano)

var starWars = new Filme();

console.log("Titulo do filme: " + starWars.titulo)
console.log("Ano de lançamento: " + starWars.ano)