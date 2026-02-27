
     function goToAnalyzer(){
    document.getElementById("landing").style.display = "none";
    document.getElementById("analyzer").style.display = "block";
    resetAnalyzer();
}

function goBack(){
    document.getElementById("landing").style.display = "flex";
    document.getElementById("analyzer").style.display = "none";
    resetAnalyzer();
}

// Reset the analyzer for new resume/job description
function resetAnalyzer(){
    document.getElementById("resumeFile").value = "";
    document.getElementById("jobDesc").value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("scoreText").innerText = "0%";
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("headline").innerText = "";
    document.getElementById("skills").innerText = "";
    document.getElementById("experience").innerText = "";
    document.getElementById("education").innerText = "";
    document.getElementById("jobRoles").innerHTML = "";
}

function analyzeResume(){
    const resultsDiv = document.getElementById("results");
    const resumeFile = document.getElementById("resumeFile").files[0];
    const jobDesc = document.getElementById("jobDesc").value.toLowerCase();

    if(!resumeFile && jobDesc.trim() === ""){
        alert("Please upload a resume file or paste a job description!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){
        let resumeText = e.target.result.toLowerCase();
        let combinedText = resumeText + " " + jobDesc;

        // Fake ATS score calculation
        let skills = ["java","python","react","aws","docker","sql","c++","html","css"];
        let skillsFound = 0;
        skills.forEach(s => { if(combinedText.includes(s)) skillsFound++; });
        let score = Math.min(100, 50 + skillsFound*8);

        // Show results
        resultsDiv.style.display = "block";
        document.getElementById("scoreText").innerText = score + "%";
        document.getElementById("progressBar").style.width = score + "%";

        // Fill analysis cards
        document.getElementById("headline").innerText = "Full Stack Developer | Cloud & AI Specialist";
        document.getElementById("skills").innerText = skillsFound + " relevant skills detected";
        document.getElementById("experience").innerText = "Use reverse-chronological format; quantify impact";
        document.getElementById("education").innerText = "Include Degree, University, Year, CGPA";

        // Suggested Job Roles
        let roles = [];
        if(combinedText.includes("doctor")) roles = ["Medical Officer", "Research Scientist"];
        else if(combinedText.includes("developer") || combinedText.includes("software") || combinedText.includes("engineer")) roles = ["Software Engineer","Full Stack Developer","Cloud Engineer"];
        else roles = ["Data Analyst","Project Manager","Consultant"];

        const ul = document.getElementById("jobRoles");
        ul.innerHTML = "";
        roles.forEach(r => {
            let li = document.createElement("li");
            li.innerText = r;
            ul.appendChild(li);
        });
    };

    if(resumeFile){
        reader.readAsText(resumeFile);
    } else {
        // If no file, just use job description
        reader.onload({target:{result:""}});
    }
}
