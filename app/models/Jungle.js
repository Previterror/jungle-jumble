

export class Jumble {
  constructor(data) {
    this.title = data.title
    this.difficulty = data.difficulty
    this.body = data.body
    this.start = data.start == undefined ? new Date() : new Date(data.start)
    this.stop = data.stop == undefined ? new Date() : new Date(data.stop)
    this.fastest = data.fastest = undefined ? 0 : data.fastest
  }


  get jumbleItemTemplate() {
    return `
  <div class="m-1">
            <button class="d-inline" onclick="app.JungleController.setActiveJumble('${this.title}')">Start</button>
            <span class="m-1 p-1">${this.title}</span>
            <span class="m-1 p-1">${this.fastest}</span>
            <span class="m-1 p-1">wpm</span>
          </div>
  
  `
  }

  get activeJumbleTemplate() {
    return `
    <div class="row justify-content-between">
        <div class="col-12 m-1">
          <span class=" my-2 text-start w-50 fs-5 fst-italic fw-bold border-dark pe-1 border-end">${this.title}</span> 
          <span class=" my-2 text-end w-50 fs-5">Fastest Time: ${this.fastest} seconds</span>
          <hr/>

          <p>${this.body}</p>

          <form onsubmit="app.JungleController.checkGame('${this.title}')">
          <textarea type="text" name="gameSubmit" id="gameSubmit" class="w-100"></textarea>
          <button type="submit" class="btn btn-warning">Submit</button>
          </form>
          </div>
        </div>
    `
  }










  // _____________________________________>>>>>>>>

}



