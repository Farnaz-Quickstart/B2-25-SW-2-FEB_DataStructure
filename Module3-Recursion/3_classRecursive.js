
const classList = ["Victor", "Thomas", "Mytisha", "kyle", "Matthew"];

function passMessage(index) {

  if (index == classList.length - 1) return
  console.log (`${classList[index]} pass message to ${classList[index+1]} `)
  passMessage(index+1)
}

passMessage(0);