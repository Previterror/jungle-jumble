import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jumble } from "./models/Jungle.js"


class ObservableAppState extends EventEmitter {


  jumbles = [
    new Jumble({
      title: 'Baby Jumble',
      difficulty: 'easy',
      body: 'Fromage',
      fastest: 35,
    })
  ]



  /**
   * @type {Jumble}
   */
  activeJumble = null

  submittedJumble = null

}

export const AppState = createObservableProxy(new ObservableAppState())