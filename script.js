const containerEl = document.querySelector(".container");

const careers = ["Software Developer", "Freelancer", "Tutor", "Facilitator"];


let careerIndex = 0;

let caracterIndex = 0;

updateText();

function updateText(){
    caracterIndex++;
    containerEl.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0,caracterIndex)}</h1>
    `;
 
    if(caracterIndex === careers[careerIndex].length){
        careerIndex++;
        caracterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
        setTimeout(updateText, 400);
}

