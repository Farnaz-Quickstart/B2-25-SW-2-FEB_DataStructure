function functionA (myNumber) {
  debugger;
  console.log (`This is function A ${myNumber}`)
  functionB (myNumber)
}

function functionB (myNumber) {
  console.log (`This is function B ${myNumber}`)
  functionC (myNumber)
}

function functionC (myNumber) {
  console.log (`This is function C ${myNumber}`)
  functionD (myNumber)
}

function functionD (myNumber) {
  console.log (`This is function D ${myNumber}`)
}

functionA (12)