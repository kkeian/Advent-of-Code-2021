const fs = require('fs')

fs.readFile('/home/keian/projects/advent-of-code-2021/d3/input', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  data = data.split('\n')

  const gamma = []
  const epsilon = []

  for (let i = 0; i < data[0].length; i++) {
    let zeros = 0
    let ones = 0
    for (const dp of data) {
      const digit = parseInt(dp.charAt(i), 2)
      if (digit === 1) {
        ones++
      } else {
        zeros++
      }
    }
    gamma.push(ones > zeros ? 0 : 1)
    epsilon.push(ones > zeros ? 1 : 0)
  }

  gammaString = gamma.join('')
  epsilonString = epsilon.join('')
  
  gammaDecimal = parseInt(gammaString, 2)
  epsilonDecimal = parseInt(epsilonString, 2)

  console.log(`${gammaDecimal * epsilonDecimal}`)

})