const skills =["HTML", "CSS", "JavaScript"]
export function renderSkills(){
    const mainDiv = document.getElementById("main")
    skills.forEach(skill => {
        const skillP=document.createElement("p")
        skillP.textContent= skill
        mainDiv.appendChild(skillP)
        // console.log(skill)    
        
    });
}
// mySkills(skills)