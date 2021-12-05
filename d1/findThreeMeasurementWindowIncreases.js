const fs = require('fs')

fs.readFile('/home/keian/projects/advent-of-code-2021/d1/input', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  data = data.split('\n')

  console.log(typeof data)

  let count = 0
  let i = 0
  while (i < data.length -3) {
    let prevSum = 0
    let nextSum = 0
    
    // find measurement window sums
    for (let j = i; j < i+3; j++) {
      prevSum += parseInt(data[j], 10)
    }
    for (let k = i+1; k < i+4; k++) {
      nextSum += parseInt(data[k], 10)
    }

    if (prevSum < nextSum) {
      count++
    }

    i++
  }


  console.log(count)
})
