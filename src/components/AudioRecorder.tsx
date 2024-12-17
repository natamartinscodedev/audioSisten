"use client";
import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

interface AudioRecorderProps {
  onRecordingComplete: (audioBlob: Blob) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({
  onRecordingComplete,
}) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  return (
    <div>
      <h3>Grave seu áudio</h3>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>Status: {status}</p>
            <button onClick={startRecording}>Iniciar Gravação</button>
            <button
              onClick={() => {
                stopRecording();
                if (mediaBlobUrl) {
                  fetch(mediaBlobUrl)
                    .then((res) => res.blob())
                    .then((blob) => onRecordingComplete(blob));
                }
              }}
            >
              Parar Gravação
            </button>
            {mediaBlobUrl && <audio src={mediaBlobUrl} controls autoPlay />}
          </div>
        )}
      />
    </div>
  );
};

export default AudioRecorder;
