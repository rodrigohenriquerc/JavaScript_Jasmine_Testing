describe('Paciente', function () {
  var rodrigo;
  beforeEach(function setUp() {
    console.log(rodrigo);
    rodrigo = new PacienteBuilder().constroi();
  });
  it('Deve calcular o número de batimentos cardíacos', function () {
    expect(rodrigo.batimentos()).toEqual(25 * 365 * 24 * 60 * 80);
  });

  it('Deve calcular o IMC', function () {
    expect(rodrigo.imc()).toEqual(85 / (1.77 * 1.77));
  });
});