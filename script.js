// ARRAY OF YOUR IMAGE FILES
// ⚠️ IMPORTANT: Customize this list with the exact filenames of all the pictures you upload to GitHub!
const imageFiles = [
    'snoopy.png', 
    'snoopy2.jpeg', 
    'snoopy3.jpeg', 
    'snoopy4.jpeg',
    'snoopy5.jpeg',
    'image6.jpeg'
    // Add all your other photo file names here!
];

// --- FUNCTION TO SET A RANDOM IMAGE ---
function setRandomImage() {
    const poemImage = document.getElementById('poemImage');
    if (!poemImage) return; 
    
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * imageFiles.length); 
    
    // Set the image source
    poemImage.src = imageFiles[randomIndex];
    poemImage.alt = "A wonderful picture of us!";
}

// --- MAIN INTERACTION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('revealBtn');
    const redoBtn = document.getElementById('redoBtn');
    const inputForm = document.getElementById('inputForm'); 
    const poemLetter = document.getElementById('poemLetter'); 

    // --- REVEAL BUTTON CLICK ---
    revealBtn.addEventListener('click', () => {
        // Collect all 7 values from INPUT BOXES (using adj1, adj2, etc. IDs)
        const adj1 = document.getElementById('adj1').value;
        const adj2 = document.getElementById('adj2').value;
        const adj3 = document.getElementById('adj3').value;
        const verb1 = document.getElementById('verb1').value;
        const adj4 = document.getElementById('adj4').value;
        const verb2 = document.getElementById('verb2').value;
        const noun2 = document.getElementById('noun2').value;

        // Simple validation check for all 7 fields
        if (!adj1 || !adj2 || !adj3 || !verb1 || !adj4 || !verb2 || !noun2) {
            alert('Please fill out all seven words before revealing the poem!');
            return;
        }

        // 1. Inject the words into their PLACEHOLDER SPANS (using word_... IDs)
        document.getElementById('word_adj1').textContent = adj1;
        document.getElementById('word_adj2').textContent = adj2;
        document.getElementById('word_adj3').textContent = adj3;
        document.getElementById('word_verb1').textContent = verb1;
        document.getElementById('word_adj4').textContent = adj4;
        document.getElementById('word_verb2').textContent = verb2;
        document.getElementById('word_noun2').textContent = noun2;

        // 2. Hide the input form
        inputForm.classList.add('hidden');
        
        // 3. Reveal the poem letter smoothly
        setTimeout(() => {
             poemLetter.classList.add('revealed');
             poemLetter.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500); 
    });

    // --- REDO BUTTON CLICK ---
    redoBtn.addEventListener('click', () => {
        // 1. Hide the poem
        poemLetter.classList.remove('revealed');
        
        // Clear all 7 INPUT FIELD values
        document.getElementById('adj1').value = '';
        document.getElementById('adj2').value = '';
        document.getElementById('adj3').value = '';
        document.getElementById('verb1').value = '';
        document.getElementById('adj4').value = '';
        document.getElementById('verb2').value = '';
        document.getElementById('noun2').value = '';

        // Reset PLACEHOLDER SPAN text
        document.getElementById('word_adj1').textContent = '[ADJECTIVE]';
        document.getElementById('word_adj2').textContent = '[ADJECTIVE]';
        document.getElementById('word_adj3').textContent = '[ADJECTIVE]';
        document.getElementById('word_verb1').textContent = '[VERB]';
        document.getElementById('word_adj4').textContent = '[ADJECTIVE]';
        document.getElementById('word_verb2').textContent = '[VERB]';
        document.getElementById('word_noun2').textContent = '[PLURAL NOUN]';

        // 2. Set a NEW random image for the next attempt
        setRandomImage(); 

        // 3. Show the input form and scroll to the top
        setTimeout(() => {
            inputForm.classList.remove('hidden');
            inputForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000); 
    });
});