// let a = 5;
// var b = 5; // à éviter
// const c = 5; // c = 4; TypeError: Assignment to constant variable.

// ====================
// function testVar() {
//   var l = 1
//   if (true) {
//     var l = 2
//     console.log(l) //2
//   }
//   console.log(l) //2
// }


// function testLet() {
//   let l = 1

//   if (true) {
//     let l = 2
//     console.log(l) //2
//   }

//   console.log(l) //1
// }

// =========================


// let a = 5;
// let str = "Hello world"
// let char = 'c'
// let bool = true


// let arr = ['5', 4, true, 4,4,4]

// console.log(arr[2])

// let obj = {
//   name : "Jhon",
//   age : 25,

// }

// console.log(obj["name"])
// console.log(obj.age)


// let arr = [1, 2, 3, 4]
// let arrCopy = [0, ...arr, 5, 5]

// arr[0] = 8
// console.log(arrCopy)
// console.log(arr)
// let  [a,b,c] = arr


// arr.push(6)
// arr.pop()

// arr.filter((e) => {
//   return e < 2
// })

// const newarr = arr.map((e) => {
//   return e * 2
// })

// const obj = { message: "Created succesfully", code: 201 }

// const objCopy = obj

// obj.code = 500

// console.log(objCopy)

// const { code ,message } = obj

// if (code === 500) {
//   console.log("Err")
// } else {
//   console.log("Ok")
// }


// console.log( code === 500 ? "Err" : "Ok" )


// maFunction()

// const maFunction = () => {
//   console.log("Arrow function")
// }

// const a = "Hello"
// const b = "World"

// const c = a + " " + b + " !"

// const d = `${a} ${b} !`

// const examen = {
//   title : "Maths",
//   questions : {
//     title : "toto"
//   }
// }

// console.log(examen?.questions?.title)


const wait = (ms) => {
  return new Promise((resolve, reject) => {

    if (ms > 5000) {
      return reject({ message: "ms > 5000 :" + ms })
    }

    setTimeout(() => resolve("Hello !"), ms)
  })
}


// const usePromesse = () => {
//   console.log("Start")

//   wait(2000).then((res) => {
//     console.log(res)
//   }).catch((err) => {
//     console.log(err)
//   })

//   console.log("End")
// }

// usePromesse()


// const useParallel = async () => {
//   console.log("start")

  
//   const response = await Promise.all([
//     wait(2000),
//     wait(3000),
//     wait(1000)
//   ])

//   console.log(response)

//   console.log("end")
// }

// useParallel()