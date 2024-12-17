// Parar e enviar o áudio
import { useRef } from "react";

export const stopRecording = async ({
  setTranscription,
  setResponse,
  setRecording,
}: any) => {
  // const recorderRef: any = useRef(null);
  // const recorder = recorderRef.current;

  // recorder.stopRecording(async () => {
  //   const blob = recorder.getBlob();

  //   const formData = new FormData();
  //   formData.append("audio", blob, "recording.wav");

  //   try {
  //     const res = await fetch("/api/voiceChat", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await res.json();
  //     setTranscription(data.transcription);
  //     setResponse(data.response);
  //   } catch (error) {
  //     console.error("Error sending audio:", error);
  //   }

  //   setRecording(false);
  // });

  return setRecording(false);
};
