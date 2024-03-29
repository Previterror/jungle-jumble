import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jungle.js";

class JungleService {
  gameStart() {

    console.log(AppState.activeJumble)
    AppState.activeJumble.start = new Date()
    // console.log('game started', AppState.activeJumble.start);
  }

  gameStop() {
    AppState.activeJumble.stop = new Date()
    // console.log('ended at', AppState.activeJumble.stop);
    let fastest = AppState.activeJumble.fastest
    let start = AppState.activeJumble.start
    let stop = AppState.activeJumble.stop
    let fastestTime = (stop - start) / 1000

    AppState.activeJumble.fastest = fastestTime
    // console.log('fastest time', fastestTime);


    // console.log('fast', fastest);
  }


  setActiveJumble(jumbleTitle) {
    const foundJumble = AppState.jumbles.find(jumble => jumble.title == jumbleTitle)
    AppState.activeJumble = foundJumble

    // console.log(AppState.activeJumble);


  }




  createJumble(jumbleFormData) {
    console.log('Service creating jumble', jumbleFormData);
    const newJumble = new Jumble(jumbleFormData)
    AppState.jumbles.push(newJumble)
    console.log(AppState.jumbles);
  }




}

export const jungleService = new JungleService