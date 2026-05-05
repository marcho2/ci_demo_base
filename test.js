const sum = require('./sum');
function testSum() {
  const result = sum(2,3)
  if (result !== 5) {
    throw new Error('no es igual al resultado esperado');
  }
  console.log('Aprobado')
}
testSum();
