import '../styles/addImage.css'

let smallImg = document.createElement('img')
// 必须 require 进来
smallImg.src = require('../images/small.png')
document.body.appendChild(smallImg)

let bigImg = document.createElement('img')

bigImg.src = require('../images/big.png')
document.body.appendChild(bigImg)