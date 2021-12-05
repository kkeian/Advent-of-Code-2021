const fs = require('fs')

fs.readFile('./input', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  data = data.split('\n')

  let count = 0
  let prevNum = parseInt(data[0], 10)
  for(let i = 1; i < data.length; i++) {
    const currNum = parseInt(data[i], 10)
    if (prevNum < currNum) {
      count++
    }
    prevNum = currNum
  }

  console.log(count)
})