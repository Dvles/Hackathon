 // Define questions array
 const questions = [
    {
        question: "What's the greenest way to store your personal data?",
        choices: [
            { text: "In the cloud", impact: 0, explanation: "Local storage consumes less energy in the long run than cloud storage, (but using one cloud is more green than using many clouds.)" },
            { text: "G On an external hard drive", impact: 1, explanation: "Local storage (like an external hard drive) consumes less energy in the long run compared to cloud storage." },
            { text: "B On multiple cloud servers", impact: -1, explanation: "Wow.  Using multiple data centres is not very green.  Try limiting to one, or even better using local storage." }
        ]
    },
    {
        question: "What's the greenest way to communicate remotely?",
        choices: [
            { text: "B Video call", impact: -1, explanation: "Video calls consume a lot of bandwidth and energy.  An SMS (text) requires the least data and energy." },
            { text: "G SMS (text)", impact: 1, explanation: "Yes!  An SMS (text) consumes the least energy and data of the three choices!" },
            { text: "Email", impact: 0, explanation: "While an email is a better option than a video call, a text (SMS) consumes the least energy and data." }
        ]
    },
    {
        question: "What's the most ecological (IT) option for listening to music?",
        choices: [
            { text: "B Streaming in high quality", impact: -1, explanation: "This is the least green option of the three.  Unless you have excellent audio perception AND AMAZING speakers, you probably won't notice the difference." },
            { text: "Streaming in standard quality", impact: 0, explanation: "While streaming standard quality consumes less than streaming HQ, the best option is to download and listen offline." },
            { text: "G Download and listen offline", impact: 1, explanation: "Downloading and listening offline is indeed the most green option." }
        ]
    },
    {
        question: "What method should you use to access frequently used sites online?",
        choices: [
            { text: "Search your browser history", impact: 0, explanation: "This approach is better than using a search engine each time, but using bookmarks or direct links is greener." },
            { text: "B Use a search engine to find the link", impact: -1, explanation: "Using a search engine to find a link you use frequently is not great.  Try bookmarking frequently used sites to reduce your number of server requests." },
            { text: "G Use a bookmark or direct link", impact: 1, explanation: "This is the greenest choice because it avoids additional server requests, which lowers the carbon footprint of your browsing." }
        ]
    },
    {
        question: "Which device is the most energy efficient for surfing the 'net?",
        choices: [
            { text: "G Tablet", impact: 1, explanation: "In general, the more portable a device is, the more it and it's components have been designed to consume less energy.  Tablet wins here, followed by laptop and then desktop." },
            { text: "Laptop", impact: 0, explanation: "While a laptop computer consumes less energy than a desktop, tablets are generally designed to be even more energy efficient than laptops." },
            { text: "B Desktop Computer", impact: -1, explanation: "These are usually the devices that consume the most.  Unlike laptops and tablets, energy efficiency of the hardware is not as critical to their design and function, and so they are almost always less efficient." }
        ]
    },
    {
        question: "What should you do with an old smartphone?",
        choices: [
            { text: "G Recycle it through a certified e-waste program", impact: 1, explanation: "Recycling through certified e-waste programs ensures that harmful materials are safely disposed of and valuable parts are reused." },
            { text: "B Throw it in the trash", impact: -1, explanation: "Throwing electronics in the trash leads to harmful chemicals being released into the environment." },
            { text: "Keep it as a backup device", impact: 0, explanation: "Keeping it as a backup device is neutral but doesn't address the environmental issues of old devices." }
        ]
    },
    {
        question: "How can you reduce energy usage when gaming?",
        choices: [
            { text: "G Enable power-saving mode", impact: 1, explanation: "Power-saving modes help reduce energy consumption by adjusting performance settings while gaming." },
            { text: "B Leave the game running when not in use", impact: -1, explanation: "Leaving the game running consumes unnecessary power and increases energy usage." },
            { text: "Mute the sound", impact: 0, explanation: "Muting sound does not significantly affect energy usage." }
        ]
    },
    {
        question: "How can you reduce the environmental impact of data storage?",
        choices: [
            { text: "G Use cloud services with renewable energy sources", impact: 1, explanation: "Cloud services powered by renewable energy significantly reduce the carbon footprint of data storage." },
            { text: "Store data on personal hard drives", impact: 0, explanation: "Personal hard drives are neutral but may use more energy if left running constantly." },
            { text: "B Keep unused data indefinitely", impact: -1, explanation: "Keeping unnecessary data wastes storage resources and energy." }
        ]
    },
    {
        question: "What is the best way to handle an old laptop?",
        choices: [
            { text: "G Donate or recycle it", impact: 1, explanation: "Donating or recycling laptops ensures they are either reused or properly disposed of, reducing e-waste." },
            { text: "B Store it in your closet forever", impact: -1, explanation: "Storing old devices indefinitely adds to e-waste and prevents the reuse of valuable components." },
            { text: " Take it apart for fun", impact: 0, explanation: "While disassembling may be educational, it does not contribute to sustainability efforts." }
        ]
    },
    {
        question: "What can you do to lower your PC's energy consumption?",
        choices: [
            { text: "G Activate sleep mode when not in use", impact: 1, explanation: "Sleep mode significantly reduces energy usage by lowering the power draw during inactivity." },
            { text: "B Leave it running all day", impact: -1, explanation: "Leaving your PC on all day wastes energy and increases electricity costs." },
            { text: "Turn off the monitor only", impact: 0, explanation: "Turning off the monitor saves some energy, but not as much as putting the entire PC in sleep mode." }
        ]
    },

    {
        question: "Which is the most ecological network choice for surfing online?",
        choices: [
            { text: "B 4G / 5G", impact: -1, explanation: "4G & 5G networks require energy intensive antennas and infrastructure, Wi-Fi is a better choice." },
            { text: "3G", impact: 0, explanation: "3G consumes less energy than 4G or 5G but is not as energy efficient as Wi-Fi." },
            { text: "G Wi-Fi", impact: 1, explanation: "Wi-Fi consumes less energy than 5G, 4G or 3G." }
        ]
    },
    {
        question: "Which is the greenest choice for managing your emails?",
        choices: [
            { text: " Archive them for later reference", impact: 0, explanation: "Emails that are archived electronically consume server energy.  Try to only archive what you really need!" },
            { text: "G Sort them daily and delete unnecessary ones.", impact: 1, explanation: "Deleting unnecessary emails reduces the load on storage servers, lowering energy use." },
            { text: "B Allow them to pile up in your inbox.", impact: -1, explanation: "Deleting unnecessary emails reduces the energy consumed by storage servers." }
        ]
    },
    {
        question: "Which video format is greenest for watching content online?",
        choices: [
            { text: "G 720p or 1080p", impact: 1, explanation: "Watching videos in 1080p or 720p consumes less energy and bandwidth than streaming 4K or 1440p." },
            { text: "B 4K.", impact: -1, explanation: "Watching videos in 4K consumes more bandwith and energy than streaming in 1080p or 720p." },
            { text: "1440p.", impact: 0, explanation: "While 1440p does consume less bandwidth and energy than 4K it is not as green a choice as 1080p or 720p." }
        ]
    },
    {
        question: "What is the greenest way to share a large amount of files?",
        choices: [
            { text: "Use a public cloud service.", impact: 0, explanation: "Using the cloud is more effective than email, but less green than using local storage or USB drives." },
            { text: "G Send them through local storage or USB drive.", impact: 1, explanation: "Sharing a USB drive or local storage is more eco friendly than sharing files by email or cloud." },
            { text: "B Send them by email as attachments.", impact: -1, explanation: "Sharing files as email attachments is less green using a cloud to share.  Local storage or USB drives are the greenest choice." }
        ]
    },
    {
        question: "When is it best to recharge mobile devices?",
        choices: [
            { text: "B While using them.", impact: -1, explanation: "Charging while using the device can strain the battery and shorten its lifespan." },
            { text: "As soon as possible after the battery drops to 50%.", impact: 0, explanation: "While this approach is better than charging while using, it is less efficient than waiting until the battery is low." },
            { text: "G Only when the battery is low.", impact: 1, explanation: "Charging only when the batter is low maximizes efficiency and saves energy." }
        ]
    },
    {
        question: "What is the greenest way to manage software updates?",
        choices: [
            { text: "Install updates automatically in the background.", impact: 0, explanation: "While regularly updating can optimize your device consumption, doing so automatically generally consumes more than installing manually for important updates." },
            { text: "G Install manually only when necessary.", impact: 1, explanation: "Manually installing important updates optimizes your devices resources and saves energy." },
            { text: "B Ignore updates until they are critical.", impact: -1, explanation: "This approach won't help optimize your device consumption and, additionally might lead to security vulnerabilities." }
        ]
    },
    {
        question: "What is the best choice for lighting your office or home?",
        choices: [
            { text: "G Use LED lightbulbs", impact: 1, explanation: "LED bulbs consume less energy than incandescent or fluorescent bulbs and also last longer than the other options." },
            { text: "B Use incandescent lightbulbs", impact: -1, explanation: "Incandescent bulbs consume more energy than the other two options and generally don't last as long." },
            { text: " Use fluorescent lightbulbs", impact: 0, explanation: "Fluorescent / CFL bulbs are more energy efficient than incandescent bulbs, but not as efficient as LEDs which consume less and last at least 3 times longer." }
        ]
    },
    {
        question: "How should you treat your devices when you aren't using them?",
        choices: [
            { text: " Leave them in sleep mode when not using them.", impact: 0, explanation: "While sleeping devices consume less than devices left on, the best is to turn them off when you aren't using them." },
            { text: "G Turn them off completely after use.", impact: 1, explanation: "This is definitely the greenest choice!  A device that is off is consuming far less energy than one that is sleeping or left on." },
            { text: " B Leave them on, it's good to keep them warm.", impact: -1, explanation: "Leaving a device on when it's not in use is a waste of energy!  While putting it to sleep is a smarter choice, it's even smarter to turn it off." }
        ]
    },
    {
        question: "To transfer files between devices, which is the best option?",
        choices: [
            { text: "G Use a USB or ethernet cable.", impact: 1, explanation: "Yes!  To transfer files using a hardware option like USB instead of a network option normally uses less energy." },
            { text: "Use Bluetooth or WiFi.", impact: 0, explanation: "This is the second-best option.  Sending on a local network will consume less energy than sending out to an external server for the transfer." },
            { text: "B Send via email with attachments.", impact: -1, explanation: "Sending by email in attachments is the least ecological option in this case.  It's best to transfer using hardware like USB." }
        ]
    },

    {
        question: "How do you ensure efficient browsing?",
        choices: [
            { text: "G Use a browser that blocks ads and trackers.", impact: 1, explanation: "This choice enhances browsing efficiency and reduces the amount of data processed." },
            { text: "Use a well known browser like Chrome, Safari or Firefox", impact: 0, explanation: "While familiarity is comfortable, it does not ensure energy efficiency or data optimization.  Consider blocking pop-ups, ads and trackers to process less data." },
            { text: "B Use several browsers at once, at least some of them will be more efficient than others.", impact: -1, explanation: "Doing this can slow down your system and increase energy consumption.  Choose a good browser and then block ads and trackers" }
        ]
    },

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
        divButton.className = "divButton"; // Add class to div
        const button = document.createElement('button');
        button.className = "button";
        button.textContent = choice.text;
        button.onclick = () => handleAnswer(choice, button);
        choicesContainer.appendChild(divButton);
        divButton.appendChild(button);
    });

    // Hide next button until an answer is selected
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('explanation').textContent = ''; // Clear the explanation from the previous question
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

function chooseBkgdImgSrc() {
    if (score === 12) {
        bkgdSrcClass = 'best';
    } else if (score === 10 || score === 11) {
        bkgdSrcClass = 'good2';
    } else if (score === 8 || score === 9) {
        bkgdSrcClass = 'good1';
    } else if (score === 6 || score === 7) {
        bkgdSrcClass = 'good';
    } else if (score === 4 || score === 5) {
        bkgdSrcClass = 'neutreGood2';
    } else if (score === 2 || score === 3) {
        bkgdSrcClass = 'neutreGood1';
    } else if (score === -1 || score === 0 || score === 1) {
        bkgdSrcClass = 'neutre';
    } else if (score === -2 || score === -3) {
        bkgdSrcClass = 'neutreBad1';
    } else if (score === -4 || score === -5) {
        bkgdSrcClass = 'neutreBad2';
    } else if (score === -6 || score === -7) {
        bkgdSrcClass = 'bad';
    } else if (score === -8 || score === -9) {
        bkgdSrcClass = 'bad1';
    } else if (score === -10 || score === -11) {
        bkgdSrcClass = 'bad2';
    } else if (score <= -12) {
        bkgdSrcClass = 'Theworst';
    }
}

function updateBkgdImg() {
    let backgroundFrame = document.getElementById('bkgdFrame'); // locate the place for the background image
    backgroundFrame.classList.add('loading'); // Add a temporary "loading" class to fade out the background
    
    // Apply the new background class after a small delay to avoid flicker
    setTimeout(() => {
        backgroundFrame.className = ''; // clear existing class names
        backgroundFrame.classList.add(bkgdSrcClass);
        backgroundFrame.classList.remove('loading'); // remove loading class after background update
    }, 50);
}

function moveSmiley() {
    let divId = score.toString();
    let targetDiv = document.getElementById(divId);
    
    if (targetDiv) {
        targetDiv.innerHTML = ''; // Remove the empty Bubble at the target div in order to place the smiley
        
        let smiley = document.createElement('img');
        smiley.src = smileySrc; // Add the path to the smiley image
        smiley.alt = 'Smiley';
        targetDiv.appendChild(smiley);
    } else {
        console.error("No div found with id:", divId);
    }
}

// Function to handle the selected answer
function handleAnswer(selectedChoice, clickedButton) {
    lastAnswerImpact = selectedChoice.impact;
    score += selectedChoice.impact;  // Update score based on answer impact
    updateScoreDisplay();  // Show updated score

    // Disable all choice buttons after selecting an answer
    const buttons = document.querySelectorAll('#choices-container button');
    buttons.forEach(button => {
        button.disabled = true;  // Disable all buttons
        button.classList.remove('clicked'); // Remove clicked class from all buttons
    });

    // Add the clicked class to the button that was selected
    clickedButton.classList.add('clicked');

    // Show the overlay
    document.getElementById('overlay').style.display = 'block';

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
        // After the 10th question, show the "See your impact" button
        document.getElementById('final-score-btn').style.display = 'block';
    }
}





// Hide the overlay when "Next" is clicked
document.getElementById('next-btn').addEventListener('click', () => {
    displayQuestion();
    document.getElementById('overlay').style.display = 'none'; // Hide overlay
});

// Function to show the final score
function showFinalScore() {
    const resultContainer = document.getElementById('result');
    if (!resultContainer) {
        console.error("Element with ID 'result' not found");
        return; // Exit the function if the element is not found
    }

    // Hide all necessary elements
    document.getElementById('quiz-container').style.display = 'none'; // Hide quiz container
    document.getElementById('explanation').style.display = 'none'; // Hide explanation div
    document.getElementById('next-btn').style.display = 'none'; // Hide next button
    document.getElementById('final-score-btn').style.display = 'none'; // Hide "See your impact" button
    document.getElementById('overlay').style.display = 'none'; // Hide overlay as well

    resultContainer.style.display = 'block'; // Show the result container
    document.getElementById('final-score').textContent = score; // Display score in the result container

    // Show the restart and end buttons
    document.getElementById('restart-btn').style.display = 'block';
    document.getElementById('end-btn').style.display = 'block';
}

// Event listener for "See your impact" button
document.getElementById('final-score-btn').addEventListener('click', () => {
    showFinalScore(); // Call function to show final score
});

// Restart button event listener
document.getElementById('restart-btn').addEventListener('click', () => {
    location.reload(); // Reload the current page to restart the quiz
});

// End button event listener
document.getElementById('end-btn').addEventListener('click', () => {
    window.location.href = './end.html'; // Redirect to end.html
});

// Start the game
selectedQuestions = selectRandomQuestions();
displayQuestion();
