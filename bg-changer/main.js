import './style.css'
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let violet = document.getElementById("violet")
let green  = document.getElementById("green")
let orange = document.getElementById("orange")
let yellow = document.getElementById("yellow")
let body = document.getElementsByTagName("body")[0]

red.onclick = () =>{
  body.style.backgroundColor = "red"
}

blue.onclick = () =>{
  body.style.backgroundColor = "blue"
}
violet.onclick = () =>{
  body.style.backgroundColor = "violet"
}
orange.onclick = () =>{
  body.style.backgroundColor = "orange"
}
yellow.onclick = () =>{
  body.style.backgroundColor = "yellow"
}
green.onclick = () =>{
  body.style.backgroundColor = "green"
}

