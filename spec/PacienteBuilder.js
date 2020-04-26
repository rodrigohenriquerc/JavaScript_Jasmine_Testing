function PacienteBuilder() {
  var nome = 'Rodrigo';
  var idade = 25;
  var peso = 85;
  var altura = 1.77;

  var clazz = {
    defineNome: function (nome) {
      nome = nome;
      return this;
    },
    defineIdade: function (idade) {
      idade = idade;
      return this;
    },
    definePeso: function (peso) {
      peso = peso;
      return this;
    },
    defineAltura: function (altura) {
      altura = altura;
      return this;
    },
    constroi: function () {
      return new Paciente(nome, idade, peso, altura);
    }
  };
  return clazz;
}