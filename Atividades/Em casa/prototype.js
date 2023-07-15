
function Gatos(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade / 12;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historicoMedico = new HistoricoMedico();
  }
  
  Gatos.prototype.miar = function() {
    console.log(this.nome + "MIAU");
  };
  
  Gatos.prototype.vacinar = function(vacina) {
    this.historicoMedico.adicionarVacina(vacina);
  };
  
  Gatos.prototype.registrarProcedimento = function(procedimento) {
    this.historicoMedico.adicionarProcedimento(procedimento);
  };
  
  Gatos.prototype.consultar = function(consulta) {
    this.historicoMedico.adicionarConsulta(consulta);
  };
  
  
  function Cachorros(nome, idade, cor, raca) {
    this.nome = nome;
    this.idade = idade / 12;
    this.cor = cor;
    this.raca = raca;
    this.historicoMedico = new HistoricoMedico();
  }
  
  Cachorros.prototype.latir = function() {
    console.log(this.nome + " está latindo!");
  };
  
  Cachorros.prototype.vacinar = function(vacina) {
    this.historicoMedico.adicionarVacina(vacina);
  };
  
  Cachorros.prototype.registrarProcedimento = function(procedimento) {
    this.historicoMedico.adicionarProcedimento(procedimento);
  };
  
  Cachorros.prototype.consultar = function(consulta) {
    this.historicoMedico.adicionarConsulta(consulta);
  };
  
  
  function Exoticos(nome, idade, cor, especie, adulto) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;
    this.historicoMedico = new HistoricoMedico();
  }
  
  Exoticos.prototype.vacinar = function(vacina) {
    this.historicoMedico.adicionarVacina(vacina);
  };
  
  Exoticos.prototype.registrarProcedimento = function(procedimento) {
    this.historicoMedico.adicionarProcedimento(procedimento);
  };
  
  Exoticos.prototype.consultar = function(consulta) {
    this.historicoMedico.adicionarConsulta(consulta);
  };
  
  Exoticos.prototype.getAdulto = function() {
    if (this.especie === "hamster") {
      return this.idade >= 2;
    } else if (this.especie === "papagaio") {
      return this.idade >= 3;
    } else if (this.especie === "calopsita") {
      return this.idade >= 18;
    } else {
      return false;
    }
  };
  
  
  function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
  }
  
  HistoricoMedico.prototype.adicionarConsulta = function(consulta) {
    this.consultas.unshift(consulta);
  };
  
  HistoricoMedico.prototype.adicionarVacina = function(vacina) {
    this.vacinas.unshift(vacina);
  };
  
  HistoricoMedico.prototype.adicionarProcedimento = function(procedimento) {
    this.procedimentos.unshift(procedimento);
  };
  
 
  const meuGato = new Gatos("Pxon", 36 , 'Preto', true, true);
  meuGato.vacinar("Vacina 1");
  meuGato.registrarProcedimento("Cirurgia");
  meuGato.consultar("Consulta 1");
  meuGato.consultar("Consulta 2");
  meuGato.miar(); 
  console.log(meuGato)
  
  const meuCachorro = new Cachorros("Dandara", 144 , 'Marrom', false, 'Boxe' );
  meuCachorro.vacinar("Vacina 2");
  meuCachorro.registrarProcedimento("Exame");
  meuCachorro.consultar("Consulta 3");
  meuCachorro.latir(); 
  console.log(meuCachorro)  
  
  
  const meuExotico = new Exoticos("Blanc", 3, "Branco","hamster", false);
  meuExotico.vacinar("Vacina 3");
  meuExotico.registrarProcedimento("Banho");
  meuExotico.consultar("Consulta 4");
  
  console.log(meuExotico)
  console.log(meuExotico.getAdulto()); 