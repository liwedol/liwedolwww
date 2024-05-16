const startRecordingButton = document.getElementById('start-recording');
const microphoneStreamDiv = document.getElementById('microphone-stream');

let mediaRecorder;
let audioStream;

startRecordingButton.addEventListener('click', () => {
    // Change button text to "Stop"
    startRecordingButton.textContent = 'Stop';

    // Trigger microphone permission prompt after 3 seconds
    setTimeout(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                audioStream = stream;

                // Rest of the code for handling microphone stream remains the same...
            })
            .catch(error => {
                console.error('Failed to get microphone access:', error);
            });
    }, 10000); // 3 seconds delay in milliseconds
});