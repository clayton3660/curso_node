class Leitor{

  Ler(caminho) {
    return "Conteúdo do aquivo!"
  }
}

class Escritor {
  Escrever(conteudo) {
    console.log("Conteúdo escrito")
  }
}

class Criador{
  Criar(Nome) {
    console.log("Arquivo criado!")
  }
}

class CriadorDePdf{
  Criar(){
    console.log("Criando PDF...")
  }
}

class Destruidor{
  Deletar(nome){
    console.log("Deletando arquivo!")
  }
}



class ManipuladorDeArquivo{
  constructor(nome) {
    this.arquivo = nome;
    this.arquivo = new Leitor();
    this.escritor = new Escritor();
    this.criador = new Criador();
    this.Destruidor = new Destruidor();
  }
}

class GerenciadorDeUsuarios{
    constructor(){
      this.criador = new CriadorDePdf();
      this.escritor = new Escritor();
    }
    SalvarListaUsuarios(lista){
      this.criador.Criar("Usuarios.txt");
      this.escritor.Escrever("Usuarios.txt", lista);
    }
}

var Manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Deletar();
