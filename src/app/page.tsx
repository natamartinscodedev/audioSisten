"use client";

import { useState } from "react";
import AudioRecorder from "@/components/AudioRecorder";

export default function Home() {
  const [responseText, setResponseText] = useState("");

  const handleAudioComplete = (audioBlob: Blob) => {
    console.log("Áudio gravado:", audioBlob);

    // Exemplo: Enviar o áudio para o backend
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.wav");
 
    console.log("formData:", formData)
    // fetch("/api/voiceChat", {
    //   method: "POST",
    //   body: formData,
    // }).then(() => console.log("Áudio enviado com sucesso!"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voice Chat with OpenAI</h1>

      {/* {recording ? (
        <button onClick={handleStopRecording} style={{ padding: "10px 20px" }}>
          Stop Recording
        </button>
      ) : (
        <button onClick={handleStartRecording} style={{ padding: "10px 20px" }}>
          Start Recording
        </button>
      )} */}
      <AudioRecorder onRecordingComplete={handleAudioComplete} />
      {responseText && (
        <div style={{ marginTop: "20px" }}>
          <h3>Resposta:</h3>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
}
