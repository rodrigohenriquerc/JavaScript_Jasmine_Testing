describe('Consulta', function () {
  var rodrigo;
  beforeEach(function setUp() {
    rodrigo = new PacienteBuilder().constroi();
  });

  describe('Retorno', function () {
    it('Não deve cobrar nada se for um retorno', function () {
      var consulta = new Consulta(rodrigo, [], true, true);
      expect(consulta.preco()).toEqual(0);
    });
  });

  describe('Particular', function () {
    it('Deve dobrar o valor da consulta caso seja particular (somente procedimentos comuns)', function () {
      var consulta = new Consulta(rodrigo, ['proc1', 'proc2', 'proc3'], true, false);
      expect(consulta.preco()).toEqual((25 + 25 + 25) * 2);
    });

    it('Deve dobrar o valor da consulta caso seja particular (procedimentos comuns e especiais)', function () {
      var consulta = new Consulta(rodrigo, ['proc1', 'raio-x', 'proc2', 'gesso', 'proc3'], true, false);
      expect(consulta.preco()).toEqual((25 + 55 + 25 + 32 + 25) * 2);
    });
  });

  describe('Convênio', function () {
    it('Deve cobrar 25 por cada procedimento comum', function () {
      var consulta = new Consulta(rodrigo, ['proc1', 'proc2', 'proc3'], false, false);
      expect(consulta.preco()).toEqual(75);
    });

    it('Deve cobrar preço específico dependendo do procedimento', function () {
      var consulta = new Consulta(rodrigo, ['proc1', 'proc2', 'gesso', 'proc3', 'raio-x'], false, false);
      expect(consulta.preco()).toEqual(25 + 25 + 32 + 25 + 55);
    });
  });
});