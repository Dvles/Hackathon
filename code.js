 // Define questions array
 const questions = [
    {
        question: " What should you do with an old smartphone?",
        choices: [
            { text: "Recycle it through a certified e-waste program", impact: 1, explanation: "Recycling through certified e-waste programs ensures that harmful materials are safely disposed of and valuable parts are reused." },
            { text: "Throw it in the trash", impact: -1, explanation: "Throwing electronics in the trash leads to harmful chemicals being released into the environment." },
            { text: "Keep it as a backup device", impact: 0, explanation: "Keeping it as a backup device is neutral but doesn't address the environmental issues of old devices." }
        ]
    },
    {
        question: " How can you reduce energy usage when gaming?",
        choices: [
            { text: "Enable power-saving mode", impact: 1, explanation: "Power-saving modes help reduce energy consumption by adjusting performance settings while gaming." },
            { text: "Leave the game running when not in use", impact: -1, explanation: "Leaving the game running consumes unnecessary power and increases energy usage." },
            { text: "Mute the sound", impact: 0, explanation: "Muting sound does not significantly affect energy usage." }
        ]
    },
    // {
    //     question: "Which way of seeking information online is more eco-friendly?",
    //     choices: [
    //         { text: "An engine that offsets its carbon emissions or plants trees", impact: 1, explanation: "Choosing a search engine that offsets its carbon emissions helps reduce the environmental impact of online activities." },
    //         { text: "Whichever search engine is most popular, surely they have efficient data centres", impact: -1, explanation: "Choosing based solely on popularity without considering environmental impact leads to greater carbon emissions." },
    //         { text: "AI - because usually it takes only one or two searches to find what you need", impact: -1, explanation: "Choosing based solely on popularity without considering environmental impact leads to greater carbon emissions." }
    //     ]
    // },
    {
        question: "How can you reduce the environmental impact of data storage?",
        choices: [
            { text: "Use cloud services with renewable energy sources", impact: 1, explanation: "Cloud services powered by renewable energy significantly reduce the carbon footprint of data storage." },
            { text: "Store data on personal hard drives", impact: 0, explanation: "Personal hard drives are neutral but may use more energy if left running constantly." },
            { text: "Keep unused data indefinitely", impact: -1, explanation: "Keeping unnecessary data wastes storage resources and energy." }
        ]
    },
    {
        question: "What’s the best way to handle an old laptop?",
        choices: [
            { text: "Donate or recycle it", impact: 1, explanation: "Donating or recycling laptops ensures they are either reused or properly disposed of, reducing e-waste." },
            { text: "Store it in your closet forever", impact: -1, explanation: "Storing old devices indefinitely adds to e-waste and prevents the reuse of valuable components." },
            { text: "Take it apart for fun", impact: 0, explanation: "While disassembling may be educational, it does not contribute to sustainability efforts." }
        ]
    },
    {
        question: "What can you do to lower your PC's energy consumption?",
        choices: [
            { text: "Activate sleep mode when not in use", impact: 1, explanation: "Sleep mode significantly reduces energy usage by lowering the power draw during inactivity." },
            { text: "Leave it running all day", impact: -1, explanation: "Leaving your PC on all day wastes energy and increases electricity costs." },
            { text: "Turn off the monitor only", impact: 0, explanation: "Turning off the monitor saves some energy, but not as much as putting the entire PC in sleep mode." }
        ]
    },
    {
        question: "What is the best way to charge your devices?",
        choices: [
            { text: "Unplug once fully charged", impact: 1, explanation: "Unplugging your devices when fully charged prevents overcharging and reduces energy waste." },
            { text: "Keep them plugged in overnight", impact: -1, explanation: "Overcharging wastes energy and may shorten the lifespan of your devices' batteries." }
        ]
    },
    {
        question: "8Which is the most ecological network choice for surfing online?",
        choices: [
            { text: "4G / 5G", impact: -1, explanation: "4G & 5G networks require energy intensive antennas and infrastructure, Wi-Fi is a better choice." },
            { text: "3G", impact: 0, explanation: "3G consumes less energy than 4G or 5G but is not as energy efficient as Wi-Fi." },
            { text: "Wi-Fi", impact: 1, explanation: "Wi-Fi consumes less energy than 5G, 4G or 3G." }
        ]
    },
    {
        question: "Which is the greenest choice for managing your emails?",
        choices: [
            { text: "Archive them for later reference", impact: 0, explanation: "Emails that are archived electronically consume server energy.  Try to only archive what you really need!" },
            { text: "Sort them daily and delete unnecessary ones.", impact: 1, explanation: "Deleting unnecessary emails reduces the load on storage servers, lowering energy use." },
            { text: "Allow them to pile up in your inbox.", impact: -1, explanation: "Deleting unnecessary emails reduces the energy consumed by storage servers." }
        ]
    }, 
    {
        question: "Which video format is greenest for watching content online?",
        choices: [
            { text: "720p or 1080p", impact: 1, explanation: "Watching videos in 1080p or 720p consumes less energy and bandwidth than streaming 4K or 1440p." },
            { text: "4K.", impact: -1, explanation: "Watching videos in 4K consumes more bandwith and energy than streaming in 1080p or 720p." },
            { text: "1440p.", impact: 0, explanation: "While 1440p does consume less bandwidth and energy than 4K it is not as green a choice as 1080p or 720p." }
        ]
    }, 
    {
        question: "What is the greenest way to share a large amount of files?",
        choices: [
            { text: "Use a public cloud service.", impact: 0, explanation: "Using the cloud is more effective than email, but less green than using local storage or USB drives." },
            { text: "Send them through local storage or USB drive.", impact: 1, explanation: "Sharing a USB drive or local storage is more eco friendly than sharing files by email or cloud." },
            { text: "Send them by email as attachments.", impact: -1, explanation: "Sharing files as email attachments is less green using a cloud to share.  Local storage or USB drives are the greenest choice." }
        ]
    }, 
    {
        question: "When is it best to recharge mobile devices?",
        choices: [
            { text: "While using them.", impact: -1, explanation: "Charging while using the device can strain the battery and shorten its lifespan." },
            { text: "As soon as possible after the battery drops to 50%.", impact: 0, explanation: "While this approach is better than charging while using, it is less efficient than waiting until the battery is low." },
            { text: "Only when the battery is low.", impact: 1, explanation: "Charging only when the batter is low maximizes efficiency and saves energy." }
        ]
    }, 
    {
        question: "What is the greenest way to manage software updates?",
        choices: [
            { text: "Install updates automatically in the background.", impact: 0, explanation: "While regularly updating can optimize your device consumption, doing so automatically generally consumes more energy than installing manually only when necessary." },
            { text: "As soon as possible after the battery drops to 50%.", impact: 0, explanation: "While this approach is better than charging while using, it is less efficient than waiting until the battery is low." },
            { text: "Only when the battery is low.", impact: 1, explanation: "Charging only when the batter is low maximizes efficiency and saves energy." }
        ]
    }, 
    {
        question: "What is the best choice for lighting your office or home?",
        choices: [
            { text: "Use LED lightbulbs", impact: 1, explanation: "LED bulbs consume less energy than incandescent or fluorescent bulbs and also last longer than the other options." },
            { text: "Use incandescent lightbulbs", impact: -1, explanation: "Incandescent bulbs consume more energy than the other two options and generally don't last as long." },
            { text: "Use fluorescent lightbulbs", impact: 0, explanation: "Fluorescent/ CFL bulbs are more energy efficient than incandescent bulbs, but not as efficient as LEDs which consume less and last at least 3 times longer." }
        ]
    },
    // Add more questions in this format
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let lastAnswerImpact = 0;
let smileySrc = './assets/neutral_smiley.svg';
let bkgdSrcClass = 'neutre';


// Function to shuffle and select random questions
function selectRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10); // Select 10 random questions
}

// Function to display a question
function displayQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById('question-container').textContent = questionData.question;

    // Display choices
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = ''; // Clear previous choices
    questionData.choices.forEach((choice) => {
        const divButton = document.createElement('div');
        //ajouter classe div
        divButton.className = "divButton";
        const button = document.createElement('button');
        button.className = "button";
        button.textContent = choice.text;
        button.onclick = () => handleAnswer(choice, button);
        choicesContainer.appendChild(divButton);
        divButton.appendChild(button);
    });

    // Hide next button until an answer is selected
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('explanation').textContent = ''; // Clear the explanation from previous question
}

// Function to update score display
function updateScoreDisplay() {
    document.getElementById('score-display').textContent = "Score: " + score;
    clearAllSmileys();
    chooseSmileySrc();
    moveSmiley();
    chooseBkgdImgSrc();
    updateBkgdImg();
}

function clearAllSmileys() {
// Loop through all divs with IDs from -10 to 10 to replace with empty bubble image
    for (let i = -10; i <= 10; i++) {
        let div = document.getElementById(i.toString());
        if (div) {
            div.innerHTML = ''; // Clear any existing content
            
            // Create and insert the empty bubble image
            let emptyBubble = document.createElement('img');
            emptyBubble.src = './assets/neutral_rond_sm4.png'; // Add the path to the empty bubble image
            emptyBubble.alt = 'Empty Bubble';

            div.appendChild(emptyBubble);
        }
    }
}   

function chooseSmileySrc() {
    if (lastAnswerImpact == 0) {
        smileySrc = './assets/neutral_smiley.svg';
    } else if (lastAnswerImpact == -1) {
        smileySrc = './assets/bad_smiley.svg';
    } else if (lastAnswerImpact == 1) {
        smileySrc = './assets/good_smiley.svg';
    }
}

function chooseBkgdImgSrc(){
    if (score >= -2 && score <= 2){
        bkgdSrcClass = 'neutre';
    } else if (score >= 3 && score <= 6){
        bkgdSrcClass = 'better';
    } else if (score >=7 && score <=10){
        bkgdSrcClass = 'best';
    } else if (score <=-3 && score >=-6){
        bkgdSrcClass = 'worse';
    } else if (score <=-7 && score >=-10){
        bkgdSrcClass = 'Theworst';
    }
}

// function updateBkgdImg() {
//     // Select the body or main tag where you want to apply the background
//     let backgroundFrame = document.getElementById('bkgdFrame'); // locate the div for the background image
//     backgroundFrame.innerHTML=''; //clear existing image

//     let bkgd = document.createElement('img');
//     bkgd.src = bkgdSrc; // Add the path to the background image
//     bkgd.alt = 'Background Image';
//     backgroundFrame.appendChild(bkgd);
// }

function updateBkgdImg() {
    // Select the body or main tag where you want to apply the background
    let backgroundFrame = document.getElementById('bkgdFrame'); // locate the place for the background image
    backgroundFrame.className=''; //clear existing class name
    backgroundFrame.className= bkgdSrcClass;

    // let bkgd = document.createElement('img');
    // bkgd.src = bkgdSrc; // Add the path to the background image
    // bkgd.alt = 'Background Image';
    // backgroundFrame.appendChild(bkgd);
}


function moveSmiley() {
    // Convert score to string to use it in selecting the corresponding div
    let divId = score.toString();
    let targetDiv = document.getElementById(divId);
    
    if (targetDiv) {
        // Remove the empty Bubble at the target div in order to place the smiley
        targetDiv.innerHTML = '';
        
        // Insert the smiley image in the target div
        let smiley = document.createElement('img');
        smiley.src = smileySrc; // Add the path to the smiley image
        smiley.alt = 'Smiley';
        targetDiv.appendChild(smiley);
    } else {
    console.error("No div found with id:", divId);
    }
}

// // Function to handle the selected answer
// function handleAnswer(selectedChoice, clickedButton){
//     lastAnswerImpact = selectedChoice.impact;
//     score += selectedChoice.impact;  // Update score based on answer impact
//     updateScoreDisplay();  // Show updated score

//     //disable all choice buttons after selecting an answer
//     const buttons = document.querySelectorAll('#choices-container button');
//     buttons.forEach(button => {
//         button.disabled = true;  // Disable all buttons
//     });

//     // Show the answer's explanation
//     document.getElementById('explanation').textContent = selectedChoice.explanation;

//     currentQuestionIndex++;
//     if (currentQuestionIndex < selectedQuestions.length) {
//         document.getElementById('next-btn').style.display = 'block';
//     } else {
//         // After the 10th question, show the "See your final score" button
//         document.getElementById('final-score-btn').style.display = 'block';
//     }
// }

// Function to handle the selected answer
function handleAnswer(selectedChoice, clickedButton) {
    lastAnswerImpact = selectedChoice.impact;
    score += selectedChoice.impact;  // Update score based on answer impact
    updateScoreDisplay();  // Show updated score

    // Disable all choice buttons after selecting an answer
    const buttons = document.querySelectorAll('#choices-container button');
    buttons.forEach(button => {
        button.disabled = true;  // Disable all buttons
    });

    // Clear previous explanation
    const explanationContainer = document.getElementById('explanation');
    explanationContainer.innerHTML = ''; // Clear the content

    // Create a new div for the explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'explanation-content';
    explanationDiv.textContent = selectedChoice.explanation;

    // Append the new explanation div to the explanation container
    explanationContainer.appendChild(explanationDiv);

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        document.getElementById('next-btn').style.display = 'block';
    } else {
        // After the 10th question, show the "See your final score" button
        document.getElementById('final-score-btn').style.display = 'block';
    }
}

// Function to show the final score
function showFinalScore() {
    document.getElementById('result').style.display = 'block';
    document.getElementById('final-score').textContent = score;
}

// Event listener for "Next" button
document.getElementById('next-btn').addEventListener('click', () => {
    displayQuestion();
});

// Event listener for "See your final score" button
document.getElementById('final-score-btn').addEventListener('click', () => {
    showFinalScore();
});

// Start the game
selectedQuestions = selectRandomQuestions();
displayQuestion();
updateScoreDisplay();

/////////////
