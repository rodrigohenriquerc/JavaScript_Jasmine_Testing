function NumerosRomanos() {
  var clazz = {
    converte: function (numero) {
      var glossary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
      return numero
        .split('')
        .map(function (num) {
          return glossary[num]
        })
        .reduce(function (t, v) {
          if (t === v || t > v) {
            return t + v;
          }
          return v - t;
        });
    }
  };
  return clazz;
}