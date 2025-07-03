const EventEmitter = require("events")

const em = new EventEmitter()


em.on('ping', () => {
  console.log("Ping")
})

em.on('pong', (arg) => {
  console.log("Pong", arg)
})



em.emit('pong', ('Toto'))

em.emit("ping")

//




class Incr extends EventEmitter {

  constructor() {
    super()
    this.count = 0
  }


  increment() {
    this.count++
    this.emit('incremented', this.count)
  }
}







const incrementeur = new Incr()


incrementeur.on('incremented', (valeur) => {
  console.log("Current value", valeur)
})



incrementeur.increment()
incrementeur.increment()
incrementeur.increment()