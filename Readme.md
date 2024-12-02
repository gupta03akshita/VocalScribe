
# VocalScribe

VocalScribe is a simple speech-to-text web application that uses the Web Speech API to transcribe spoken words into text in real-time. This JavaScript file is responsible for capturing speech and displaying the transcribed text dynamically.

**How it Works:**
1. Recognition Instance: The SpeechRecognition instance listens to the user's speech.
2. Result Handling: When speech is detected, the transcript is retrieved and displayed in the browser as text.
3. Continuous Listening: After transcription ends, the speech recognition is automatically restarted, ensuring continuous input and transcription.

This application is a straightforward way to implement voice-to-text functionality in a web environment, providing an interactive and accessible method for users to transcribe speech.
## Features

1. Speech Recognition Setup: It uses the SpeechRecognition API (or webkitSpeechRecognition as a fallback) to enable speech-to-text functionality.
2. Live Transcription: The application transcribes speech as it's being spoken, displaying the text in real-time. This is done using the interimResults property, which allows live updates of the transcription.
3. Persistent Transcription: Each transcribed sentence is added to the DOM as a new paragraph (<p>), allowing users to see the continuous flow of speech converted to text.
4. Automatic Restart: Once the recognition ends (such as when a pause in speech is detected), the recognition is restarted to continue transcribing without interruption.
5. User Interface: The transcribed text is dynamically appended to the .texts container, making it easy to view the speech-to-text conversion.
## Run Locally

Clone the project

```bash
  git clone https://github.com/gupta03akshita/VocalScribe.git
```

Go to the project directory

```bash
  cd <Project Folder>
```

Run the project 

```
  Run index.html file
```
