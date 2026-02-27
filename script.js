function goToAnalyzer(){
    document.getElementById("landing").style.display = "none";
    document.getElementById("analyzer").style.display = "block";
}

function goBack(){
    document.getElementById("landing").style.display = "flex";
    document.getElementById("analyzer").style.display = "none";
}

function analyzeResume(){
    document.getElementById("results").style.display = "block";

    // Fake ATS score calculation demo
    let jobDesc = document.getElementById("jobDesc").value.toLowerCase();
    let skillsFound = 0;
    let skills = ["java","python","react","aws","docker","sql"];
    skills.forEach(s => { if(jobDesc.includes(s)) skillsFound++; });
    let score = Math.min(100, 50 + skillsFound*8);
    document.getElementById("scoreText").innerText = score + "%";
    document.getElementById("progressBar").style.width = score + "%";

    // Fill cards
    document.getElementById("headline").innerText = "Full Stack Developer | Cloud & AI Specialist";
    document.getElementById("skills").innerText = skillsFound + " relevant skills detected";
    document.getElementById("experience").innerText = "Use reverse-chronological format; quantify impact";
    document.getElementById("education").innerText = "Include Degree, University, Year, CGPA";

    // Suggested Job Roles
    let roles = [];
    if(jobDesc.includes("doctor")) roles = ["Medical Officer", "Research Scientist"];
    else if(jobDesc.includes("developer") || jobDesc.includes("software") || jobDesc.includes("engineer")) roles = ["Software Engineer","Full Stack Developer","Cloud Engineer"];
    else roles = ["Data Analyst","Project Manager","Consultant"];

    let ul = document.getElementById("jobRoles");
    ul.innerHTML = "";
    roles.forEach(r => {
        let li = document.createElement("li");
        li.innerText = r;
        ul.appendChild(li);
    });
}
