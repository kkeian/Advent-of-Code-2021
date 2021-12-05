const { dir } = require('console')
const fs = require('fs')

fs.readFile('/home/keian/projects/advent-of-code-2021/d2/input', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  data = data.split('\n')


  // find unique keys
  const directions = { 'aim': 0, 'depth': 0 }
  data.forEach((elem) => {
    key = elem.split(' ')[0]
    if (!(key in directions)) {
      directions[key] = 0
    }
  })

  // Count total of directions
  data.forEach((elem) => {
    navigation = elem.split(' ')
    distance = parseInt(navigation[1], 10)
    directions[navigation[0]] += distance
    
    // calculate aim
    directions['aim'] = directions['down'] - directions['up']
    
    // calculate depth
    if(navigation[0] === 'forward' && directions['aim'] > 0) {
      directions['depth'] += distance * directions['aim']
    }
  })

  console.log(`Final position: ${directions['forward']} forward\n
               \t\t${directions['aim']} aim`)
  console.log(`${directions['forward'] * directions['depth']}`)

})