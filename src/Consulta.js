function Consulta(paciente, procedimentos, particular, retorno, data) {
  var clazz = {
    preco: function () {
      if (retorno) return 0;
      var precoFinal = 0;
      procedimentos
        .forEach(function (procedimento) {
          if (procedimento === 'raio-x') precoFinal += 55;
          else if (procedimento === 'gesso') precoFinal += 32;
          else precoFinal += 25;
        });
      if (particular) precoFinal *= 2;
      return precoFinal;
    },
    getNome: function () {
      return paciente;
    },
    getProcedimentos: function () {
      return procedimentos;
    },
    isParticular: function () {
      return particular;
    },
    isRetorno: function () {
      return retorno;
    },
    getData: function () {
      return data;
    }
  };
  return clazz;
}