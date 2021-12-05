const fs = require('fs')

fs.readFile('/home/keian/projects/advent-of-code-2021/d3/input', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  data = data.split('\n')

  let oxygen = []
  let co2 = []

  const customReduce = (primaryArr, index) => {
    if (primaryArr.length === 1) {
      return [primaryArr, primaryArr]
    }

    let zeros = 0
    let ones = 0

    const zerosNums = []
    const onesNums = []

    for (const dig of primaryArr) {
      // count digit
      const binaryDig = parseInt(dig.charAt(index), 2)
      if (binaryDig === 1) {
        ones++
        onesNums.push(dig)
      } else {
        zeros++
        zerosNums.push(dig)
      }
    }

    if (ones === zeros || ones > zeros) {
      return [onesNums, zerosNums]
    } else {
      return [zerosNums, onesNums]
    }
  }

  [oxygen, co2] = customReduce(data, 0)

  for (let i = 1; i < data[0].length; i++) {
    oxygen = customReduce(oxygen, i).slice(0, 1)[0]
    co2 = customReduce(co2, i).slice(1)[0]
  }

  const lifeSupportRating = parseInt(oxygen[0], 2) * parseInt(co2[0], 2)

  console.log(`${lifeSupportRating}`)
})