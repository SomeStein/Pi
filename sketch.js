let amount = 100000
let amountSq = amount * amount
let inTheCircle = 0
let i = -1
let j = 0
let repeats = 10000

function setup() {
  createCanvas(500, 500)
  background(51)
  noFill()
  stroke(255)
  strokeWeight(width/amount)
  ellipse(0, 0, width * 2)
  console.log("this calculation will take roughly " + str(floor(amountSq / 36000000 * 100) / 400) + " minutes")
}

function draw() {
  
  for (k = 0; k < repeats; k++) {
    i++
    let x = map(i, 0, amount, 0, width)
    let y = map(j, 0, amount, 0, height)
    ellipse(x, y, width/amount)
    if (i ** 2 + j ** 2 <= amountSq) {
      inTheCircle++
    }
    else {
      j++
      if (j == amount + 1) {
        console.log("finished!")
        console.log("final approximation for pi is: " + str(4 * inTheCircle / amountSq))
        console.log("calculation took " + str(millis()/60000)+" minutes")
        noLoop()
        break
      }
      inTheCircle += amount - j
      i = amount - j  
    }
    if (i == amount) {  
      j++
      i = amount - j
      inTheCircle += amount - j
    }
    
  }
}
