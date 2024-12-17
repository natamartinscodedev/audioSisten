import formidable from "formidable";
import fs from "fs";
import path from "path";
import axios from "axios";

export const config = {
  api: { bodyParser: false }, // Necessário para upload de arquivos
};

export default async function POST(req: any, res: any) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    // Processar o upload do arquivo
    form.parse(req, async ({ err, fields, files }: any) => {
      if (err) {
        console.error("Erro ao fazer upload:", err);
        return res.status(500).json({ error: "Erro ao processar arquivo" });
      }

      const audioFile: any = files.audio[0]; // Obtemos o arquivo do formulário
      const audioPath = audioFile.filepath;

      try {
        // Leitura do arquivo
        const audioBuffer = fs.readFileSync(audioPath);

        // Enviar o arquivo para a API OpenAI
        const openAIResponse = await axios.post(
          "https://api.openai.com/v1/audio/transcriptions",
          audioBuffer,
          {
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              "Content-Type": "audio/wav",
            },
          }
        );

        // Responder ao cliente com o texto retornado pela OpenAI
        res.status(200).json({ text: openAIResponse.data.text });
      } catch (error) {
        console.error("Erro na API da OpenAI:", error);
        res.status(500).json({ error: "Erro ao processar o áudio" });
      }
    });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
