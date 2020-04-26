describe('Números Romanos', function () {
  it('Deve transformar número romano em número inteiro', function () {
    var numeros = new NumerosRomanos();
    expect(numeros.converte('I')).toEqual(1);
    expect(numeros.converte('II')).toEqual(2);
    expect(numeros.converte('III')).toEqual(3);
    expect(numeros.converte('V')).toEqual(5);
    expect(numeros.converte('X')).toEqual(10);
    expect(numeros.converte('L')).toEqual(50);
    expect(numeros.converte('C')).toEqual(100);
    expect(numeros.converte('D')).toEqual(500);
    expect(numeros.converte('M')).toEqual(1000);
    expect(numeros.converte('IV')).toEqual(4);
    expect(numeros.converte('VII')).toEqual(7);
    expect(numeros.converte('XXXC')).toEqual(70);
    expect(numeros.converte('XL')).toEqual(40);
    expect(numeros.converte('XC')).toEqual(90);
    expect(numeros.converte('MMM')).toEqual(3000);
  });
});