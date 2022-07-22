const permutator = (inputArr) => { 
    let result = []
    
    const permute = (arr, permutation = []) => {
      if (arr.length === 0) {
        result.push(permutation)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice()
          let next = curr.splice(i, 1)

          permute(curr.slice(), permutation.concat(next))
        }
      }
    }
  
    permute(inputArr)
    
    return result    
}

console.log(permutator([1,2,3,4,5,6])) 
console.log(permutator([-10,-5,0,5,10]))