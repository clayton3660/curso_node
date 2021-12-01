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

vingadores.titulo = 'Vingadores 2'
vingadores.ano = '2014'
vingadores.genero = 'Ação'

console.log("Titulo do filme: " + vingadores.titulo)
console.log("Ano de lançamento: " + vingadores.ano)

var batman = new Filme();

batman.titulo = "batman"
batman.ano = "2009"
batman.genero = "Ação"

console.log(batman.titulo)
console.log(batman.genero)