let context = new (window.AudioContext || window.webkitAudioContext)();
let oscillator;
let isEngineRunning = false;

document.getElementById('accelerator').addEventListener('input', function(event) {
    if (isEngineRunning) {
        // Change the frequency based on the pedal input (range slider value)
        let frequency = 440 + (event.target.value * 5); // A basic mapping
        oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    }
});

function startEngine() {
    if (!isEngineRunning) {
        isEngineRunning = true;

        oscillator = context.createOscillator();
        oscillator.type = 'sine'; // For demo purposes, a simple sine wave
        oscillator.frequency.setValueAtTime(440, context.currentTime); // A starting frequency
        oscillator.connect(context.destination);
        oscillator.start();
    }
}

function stopEngine() {
    if (isEngineRunning) {
        isEngineRunning = false;
        oscillator.stop();
        oscillator = null;
    }
}
