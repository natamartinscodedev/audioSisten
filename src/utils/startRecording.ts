// Iniciar gravação
// "use client";

import { useRef, useState } from "react";
import RecordRTC from "recordrtc";

export async function startRecording({ setRecording }: any) {
  // const recorderRef: any = useRef(null);
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new RecordRTC(stream, { type: "audio" });

  // recorder.startRecording();
  // recorderRef.current = recorder;
  setRecording(true);
  return console.log("Ola:", recorder);
}
