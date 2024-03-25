// 1.
const array1 = [
  { id: "333222111", name: "Sulejman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
];

function getObjects(array, ime) {
  const nesto = array.reduce((acc, value) => {
    if (value["name"] === ime) {
      acc.push(value);
    }
    return acc;
  }, []);
  return nesto;
}

console.log(getObjects(array1, "Semir"));
// result: [ { id: '222312543', name: 'Semir', age: '32' } ]

console.log(getObjects(array1, "Suad"));
// result: [ ]
