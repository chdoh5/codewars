// const arr = [[45, 12],[55,21],[19, -2],[104, 20]]
// const write = document.querySelector('.test')


// const solve = (data) => {
//    const y = data.map(x => {
//         if(x[0]>=55 && x[1] > 7){
//             return "Senior"
//         } else {
//             return "Open"
//         }
        
//     })
//     return y
// }

// write.innerHTML = solve(arr)
// solve(arr)
// ----------------------

// const XO = (str) => {
//     const xArray = []
//     const oArray = []
//   let split =  str.split('')
//   split.map(letter => {
//       if(letter === 'x' || letter === 'X'){
//           xArray.push(letter)
//       } else if(letter === 'o' || letter === 'O'){
//           oArray.push(letter)
//       }
//   })
//   if(xArray.length === oArray.length){
//       return true
//   } else {
//       return false
//   }
// }

// console.log(XO("XxOO"))
// --------------------

// const phonePlease = (arr) => {
//    const str = arr.join('')
//     return `(${str[0]+str[1]+str[2]}) ${str[3]+str[4]+str[5]}-${str[6]+str[7]+str[8]+str[9]}`
// }
// const mine = "7087158856"
// const yours = mine.split('')

// console.log(phonePlease([7,0,8,7,1,5,8,8,5,6]))
// -------------------

// const likes = (arr) => {
//     if(arr.length === 0 ){
//         return "no one likes this"
//     } else if(arr.length === 1){
//         return `${arr[0]} likes this`
//     } else if(arr.length === 2) {
//         return `${arr[0]} and ${arr[1]} like this`
//     } else if(arr.length === 3){
//         return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
//     } else if(arr.length > 3){
//         const others = arr.length - 2
//         return `${arr[0]}, ${arr[1]} and ${others} others like this`
//     }
// }

// console.log(likes(['Alex', 'Jacob', 'Mark']))
// ----------------

// const getCount = (str) => {
    
//     let vowelsCount = []
//    const arr = str.split('')
//    arr.map(letter => {
//        if(letter === "a" || letter === "e" || letter === "i" || 
//        letter === "o" || letter === "u" ) {
//         vowelsCount.push(letter)
//        }
       
       
//    })
//     return vowelsCount.length
//   }

//   getCount("hello")
// -------------

// const persistence = (num) => {
//     const string = num.toString()
//     const numbers = string.split('')
//     for(i=0;i<numbers.length;i++) {
//        console.log(numbers[i]*numbers[i+1]) 
//     }
// }

// const persistence = (num) => {
    
//     let arr = num.toString().split('')
    
//     let sum = 1
//     let count = 0
//     if(arr.length === 1){
//         console.log(count) 
//     } else {
//         for(i=0;i<arr.length;i++){
//             sum = sum*arr[i]
            
//             console.log(sum)
//             arr = sum.toString().split('')
//             count = count+1
//         }
        

//     }

    
// }


// function persistence(num) {
//     var times = 0;
//     let str = num.toString();
//     while (str.length > 1) {
//         times++;
//         str = str.split('').reduce((a, b) => a * b).toString();
//     }
//     console.log(times);
// }

// const persistence = (num) => {
//     let count = 0 
//     let str = num.toString()
//     while (str.length > 1){
//         count = count + 1
//         str = str.split('').reduce((a,b) => a * b).toString()
//     }
//     return count 
// }

// persistence(223)
// ----------

// const deleteNth = (arr,n) => {
//     let newArr = []
//     arr.forEach(num => {
//         if (newArr.reduce((all, next) => all + (next === num), 0) < n){
//             newArr.push(num)
//         }
//     })
//     console.log(newArr)
// }

// const arr = [1,1,2,2,3,4,2,1]
// const n = 2

// deleteNth(arr,n)
// ----------

// const dirReduc = (arr) => {
//     const newArr = []
//     for(i=0;i<arr.length;i++){
//         if(arr[i] === "NORTH" && arr[i+1] != "SOUTH"){
//             newArr.push(arr[i])
//         }else if (arr[i] === "SOUTH" && arr[i+1] != "NORTH"){
//             newArr.push(arr[i])
//         }else if (arr[i] === "EAST" && arr[i+1] != "WEST"){
//             newArr.push(arr[i])
//         }else if (arr[i] === "WEST" && arr[i+1] != "EAST"){
//             newArr.push(arr[i])
//         }
//     }
//    return newArr
// }

// const arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// dirReduc(arr)
// -----------

// let namesList = [ ]

// const list = (names) => {
//     let namesArr = []
//     let sentence

//     if(names.length > 2){
//         names.map( name => namesArr.push(name.name) )
//         let lastTwo = namesArr.splice(namesArr.length-2)
//         let firstHalf = namesArr.join(", ")
//         let lastHalf = lastTwo.join(" & ")
//         sentence = firstHalf + ", " + lastHalf
//     } else if (names.length === 2) {
//         sentence = Object.values(names)[0].name + " & " + Object.values(names)[1].name
//     } else if (names.length === 1 ) {
//         sentence = Object.values(names)[0].name
//     } else {
//         sentence = ""
//     }
//     return (sentence)
// }

// list(namesList)
// -------------

// let str = "aabbccccccc"

// const findNum = (str) => {
//     let obj = {}
//     let arr = str.split('')
//     arr.forEach(letter => {
//         if( !obj[letter] ){
//             obj[letter] = 1
//         } else {
//             obj[letter] = obj[letter]+1
//         }
//     })
//     console.log(obj)
// }

// findNum(str)
// -------------
// const oddInt = [1,1,3,4,5]
// const evenInt = [2,2,3,4,6]

// const findOutlier = (integers) => {
//     let even = []
//     let odd = []
//     integers.forEach(num => {
//         if( num % 2===0 ){
//             even.push(num)
//         } else {
//             odd.push(num)
//         }
//     })
//     if( even.length > odd.length) {
//         return odd[0] 
//         } else {
//         return even[0]

//     }
// }

// findOutlier(evenInt)
// -----------

// strDash = "the-stealth-warrior"
// strUS = "The_Stealth_Warrior"

// const toCamelCase = (str) => {
//     let firstWord = str.split(/[-_]/)
//     const otherWords = firstWord.splice(1)

//     let cap = otherWords.map(word => word[0].toUpperCase() + word.slice(1))
//     firstWord.push(cap)
//     let flat = firstWord.flat()
//     let joined = flat.join("")

//     return joined
// }

// toCamelCase(strDash)

// --------------

// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// const addBinary = (a,b) => {
//     let sum = a + b

//     return sum.toString(2)
// }

// console.log(addBinary(12,1))

// -----------
// In this little assignment you are given a 
// string of space separated numbers, and have to
//  return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// const highAndLow = (numbers) => {
//     let arr = numbers.split(" ")
//     let numArr = []

//     arr.map( num => {
//       numArr.push(parseInt(num))
//     })

//     let min = Math.min(...numArr).toString()
//     let max = Math.max(...numArr).toString()
//     return max + " " + min
// }

// console.log(highAndLow("1 2 3 4 5")) 

kfkfk jjj