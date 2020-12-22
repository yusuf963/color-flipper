// eslint-disable-next-line no-unused-vars
const colors = ['green', 'red', 'blue', 'orange', '#000', 'aero', 'blueviolet', 'azure', "aliceBlue", 'YellowGreen', 'White', 'Bisque', 'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Beige', 'Bisque', 'BlanchedAlmond', 'Brown', 'BlueViolet', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise']

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