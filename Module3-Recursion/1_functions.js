function fun_A(mynumber) {
  console.log (`This is function A ${mynumber}`)
  debugger;
  fun_B(1)
}

function fun_B(mynumber) {
  console.log (`This is function B ${mynumber}`)
  fun_C(1)
}

function fun_C(mynumber) {
  console.log (`This is function C ${mynumber}`)
  fun_D(2)
}

function fun_D(mynumber) {
  console.log (`This is function D ${mynumber}`)
  if (mynumber==2) return 
  fun_A(1)
}



fun_A(1)