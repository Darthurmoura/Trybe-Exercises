const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
function testObjEqual(objOne, objTwo) {
  assert.deepStrictEqual(objOne, objTwo);
}

function testObjNotEqual(objOne, objTwo) {
  assert.notDeepStrictEqual(objOne, objTwo);
}

testObjEqual(obj1, obj2);
testObjNotEqual(obj1, obj3);