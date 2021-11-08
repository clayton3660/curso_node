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
var hulk = new Filme();
var starWars = new Filme();