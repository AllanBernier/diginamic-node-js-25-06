const { parentPort, workerData } = require("worker_threads")


const longCPUTask = () => {

  let i = 0

  while (i < workerData.limit) {
    i++
  }
  parentPort.postMessage('Long task done')
}

longCPUTask()