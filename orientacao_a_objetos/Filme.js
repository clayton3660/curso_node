class Filme {
  constructor(titulo, ano, genero, diretor, duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.duracao = duracao;
    this.atores = [];
  }

  Reproduzir() {
    console.log('Reproduzindo....');
  }

  Pausar() {
    console.log('Pausado || ');
  }

  Avançar() {
    console.log('Avançar >> ');
  }

  Fechar() {
    console.log('Fechar X');
  }
  Ficha(){
    console.log("Titulo: " + this.titulo)
    console.log("Ano de lançamento: " + this.ano)
    console.log("Genero: " + this.genero)   
    console.log("Diretor: " + this.diretor)   
    console.log("Duração: " + this.duracao)   
    this.Reproduzir();
  }
}

var vingadores = new Filme('Vingadores 2',2014,"Ação","Alguem","2h");
vingadores.Ficha();


// console.log('Titulo do filme: ' + vingadores.titulo);
// console.log('Ano de lançamento: ' + vingadores.ano);

var batman = new Filme("Batman",2009,"Ação","Alguem 2","2h30");
batman.Ficha();
// batman.titulo = "batman"
// batman.ano = "2009"
// batman.genero = "Ação"

// console.log(batman.titulo)
// console.log(batman.genero)
