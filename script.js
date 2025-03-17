// Set the reference date (March 17, 2025)
const referenceDate = new Date('2025-03-17T00:00:00Z');
const priceChanged = false; // Set this to true when the price changes

// DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const counterElement = document.getElementById('counter');
const priceChangedElement = document.getElementById('price-changed');

// Update the counter
function updateCounter() {
    // If price has changed, show the message and hide the counter
    if (priceChanged) {
        counterElement.classList.add('hidden');
        priceChangedElement.classList.remove('hidden');
        return;
    }
    
    const now = new Date();
    const difference = now - referenceDate;
    
    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Update the DOM
    daysElement.textContent = days;
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Update the counter immediately and then every second
updateCounter();
setInterval(updateCounter, 1000);