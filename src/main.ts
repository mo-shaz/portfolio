// style import
import './style.css'

// the app
const app = document.getElementById('app')

// the prompt input field
let inputField = document.getElementById('input-field')

// the residue area where the results are shown
let residue = document.getElementById('residue')

// the textarea
const inputArea = <HTMLInputElement>document.getElementById('input-area')

// reset the field on load
inputArea.value = ""

// set the residue text to welcome on first load
residue!.innerHTML = `Welcome visitor<br>
                      type 'help' for commands<br>`

// the command outputs
const help = `[visitor@mo-shaz~]$ help<br>
              <p class="help">
              help: show this help menu<br>
              about: details about the developer<br>
              projects: projects by the developer<br>
              cat [project-name]: for project details<br>
              clear: clear the screen<br></p>`

const about = `[visitor@mo-shaz~]$ about<br>
               <p class="about">
               Mohammed Shaz<br>
               FullStack Developer<br>
               Kerala, India<br>
               <a class="git" href="https://github.com/mo-shaz">Github</a>
               <a class="wapp" href="https://wa.me/+919995982023">WhatsApp</a>
               <a class="linked" href="https://www.linkedin.com/in/mohammed-s-6a834191">LinkedIn</a><br></p>`

const projects = `[visitor@mo-shaz~]$ projects<br>
                  <p class="projects">
                  artbucket<br></p>`

const artbucket = `[visitor@mo-shaz~]$ cat artbucket<br>
                   <p class="artbucket">
                   <u>artbucket</u><br>
                   Full-stack Web Project (JAMStack)<br>
                   Frontend: Svelte<br>
                   Backend: NodeJS + Fastify + Postgres<br>
                   Links: <a href="https://artbucket-site.pages.dev">site</a> <a href="https://github.com/mo-shaz/artbucket.site">repo</a><br></p>`

const error = `[visitor@mo-shaz~]$<br>
               <p class="error">
               <b>error:</b> invalid command<br></p>`

// make the cursor blink if the text-area is in focus
window.setInterval( () => { 

    if (document.activeElement === inputArea) {
        document.getElementById('cursor')!.style.animation = "blink 1s infinite step-end"
    
    } else {
        
        document.getElementById('cursor')!.style.animation = ""
    }

}, 500)


// function that chages focus to the text area
app!.addEventListener('click', (): void => {
    inputArea.focus()
})


// function that updates the input field as per the value of textarea
inputArea.addEventListener('input', (): void => {
    // update the text in the text field
    inputField!.innerHTML = inputArea.value 
})


// on enter key
inputArea.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        // show output as per the input
        if(inputArea.value == "help") {

            residue!.innerHTML += help

        } else if (inputArea.value == "") {
            // show the same prompt
            residue!.innerHTML += "[visitor@mo-shaz~]$<br>"
        
        } else  if (inputArea.value == "about") {

            residue!.innerHTML += about

        } else if (inputArea.value == "projects") {

            residue!.innerHTML += projects

        } else if (inputArea.value == "cat artbucket") {

            residue!.innerHTML += artbucket

        } else if (inputArea.value == "clear") {

            residue!.innerHTML = ""
        
        } else {
            // show error
            residue!.innerHTML += error
        }

        // set the scroll height to always show the prompt line
        app!.scrollTop = app!.scrollHeight

        // reset the input field and area
        inputArea.value = ""
        inputField!.innerHTML = ""
    }
})
