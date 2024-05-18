document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const nameInput = document.getElementById('name');
    const saveButton = document.getElementById('saveName');

    // Function to update the greeting
    function updateGreeting(name) {
        greeting.textContent = `Welcome, ${name}`;
    }

    // Check if a name is saved in local storage
    const savedName = localStorage.getItem('name');
    if (savedName) {
        updateGreeting(savedName);
        nameInput.value = savedName;
    }

    // Save the name and update the greeting when the button is clicked
    saveButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('name', name);
            updateGreeting(name);
        }
        nameInput.style.display = 'none';
        saveButton.style.display = 'none';
        document.getElementById('name-input-div').style.display = 'none';

    });
});

