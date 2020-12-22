// eslint-disable-next-line no-unused-vars
const colors = ['green', 'red', 'blue', 'orange', '#000']

const btn = document.getElementById('btn')
const colorName = document.getElementById('colorName')

btn.addEventListener('click', function(){
  const randomColor = generateColor()
  document.body.style.backgroundColor = colors[randomColor]
  colorName.innerHTML = colors[randomColor]
})

// generate random color

const generateColor = ()=>{
  return Math.floor(Math.random() * colors.length)
}
console.log(generateColor())