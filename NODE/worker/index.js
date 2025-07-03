

setInterval(() => {
  console.log("Process running ")
}, 1000)

const longCPUTask = () => {

  let i = 0

  while ( i < 10_000_000_000){
    i ++
  }
  console.log("Done")
}

longCPUTask()