content = document.querySelector('div')
body = document.querySelector('body')
//Generate headlines...
function randomHeadlines() {
    let nation = ["American", "German", "Russian", 
                  "Chinese", "French", "Japanese",
                  "British", "Iranian"],
    randomNation = nation[Math.round(Math.random() * (nation.length - 1))],
    job = ["Banks", "Tech Companies", "Farmers", "Politicians", "Soldiers", "Teachers"],
    randomJob = job[Math.round(Math.random() * (job.length - 1))],
    emotion = ["terrified", "excited", "worried", "happy", "enraged", "calm"],
    randomEmotion = emotion[Math.round(Math.random() * (emotion.length - 1))],
    badJob = ["Hackers", "Oilmen", "Bankers", "Farmers", "Politicans"],
    randomBadJob = badJob[Math.round(Math.random() * (badJob.length - 1))],
    activity = ["CrossFit", "ESports", "HQ", "Code Bootcamps", "Twitter"],
    randomActivity = activity[Math.round(Math.random() * (activity.length - 1))],
    /* The headlines proper... */
    a = `${randomNation} ${randomJob} are ${randomEmotion} about ${randomNation} ${randomBadJob}.` ,
    b = `${randomNation} ${randomBadJob} are ${randomEmotion} about ${randomActivity}.` ,
    //push headlines...
    headlines = []
    return headlines.push(a,b),
    headlines[Math.round(Math.random() * (headlines.length - 1))]
}

function setHeadline() {
    document.getElementById("headline").innerHTML = randomHeadlines()
}

function ChangeBackground(){
    content.classList.toggle('content1')
    content.classList.toggle('content2')
    body.classList.toggle('body1')
    body.classList.toggle('body2')
}