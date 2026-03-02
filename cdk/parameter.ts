import { BedrockChatParametersInput } from "./lib/utils/parameter-models";

export const bedrockChatParams = new Map<string, BedrockChatParametersInput>();

bedrockChatParams.set("default", {

  // 🌎 Región Bedrock (Norte de Virginia)
  bedrockRegion: "us-east-1",

  // 🎨 Logo personalizado
  logoPath: "43229.png",

  // 🔐 Seguridad
  selfSignUpEnabled: false,
  enableFrontendWaf: false,
  enableBedrockCrossRegionInference: false,

  // 👤 Usuarios nuevos SIN permisos
  autoJoinUserGroups: [],

  // 🤖 Solo modelos Amazon (AWS)
  globalAvailableModels: [
    "amazon-nova-pro",
    "amazon-nova-lite",
    "amazon-nova-micro"
  ],

  // 🧠 RAG
  enableRagReplicas: false,

  // 🏪 Bot Store
  enableBotStoreReplicas: true,
  botStoreLanguage: "es",

  // ⚡ Performance
  enableLambdaSnapStart: false
});
