describe('Números Romanos', function () {
  it('Deve transformar número romano em número inteiro', function () {
    var numeros = new NumerosRomanos();
    expect(numeros.converte('I')).toEqual(1);
    expect(numeros.converte('II')).toEqual(2);
    expect(numeros.converte('III')).toEqual(3);
    expect(numeros.converte('XL')).toEqual(40);
    expect(numeros.converte('XC')).toEqual(90);
  });
});