import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() { // a basic list template to get drawing
    return `<li>${this.name}</li>`
  }


  get jumbleCard() {
    return `
      <div class="col-12 my-2 cards">
        <p role= "button" onclick= "app.JumblesController.setActiveJumble('${this.id}')">${this.name}</p>
         <p>${this.fastestTime}</p>
        <p>${this.startTime}</p>
        <p>${this.endTime}</p>
      </div>  
       `
    // <p>${this.body}</p>
  }

}



//   get activeJumbleCard() {
//     return `
//     <div class="col-4">
//       <button onclick="app.JumblesController.setActiveJumble(${this.name})" class="btn btn-success">Pick Me</button>
//     </div>`
//   }
// }