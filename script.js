// diagonal of a square
const num = 9
const diagonal = Math.SQRT2 * num
console.log('Diagonal of a square is: ' + diagonal.toFixed(4))

// area of a triangle

const side1 = 5
const side2 = 6
const side3 = 7

let s = (side1 + side2 + side3) / 2
let value = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
console.log('Area of a triangle is: ' + value.toFixed(4))

// circumference and surface area

const radius = 4

let circumCircle = 2 * radius * Math.PI
console.log('Circumference of a circle is: ' + circumCircle.toFixed(4))

let surfaceArea = Math.PI * Math.pow(radius, 2)
console.log('Surface area of a circle is: ' + surfaceArea.toFixed(4))
