import { BedrockChatParametersInput } from "./lib/utils/parameter-models";

export const bedrockChatParams = new Map<string, BedrockChatParametersInput>();

bedrockChatParams.set("default", {

  // 🌎 Región Bedrock (Norte de Virginia)
  bedrockRegion: "us-east-1",

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

  // 🧠 RAG (ahorro de costos)
  enableRagReplicas: false,

  // 🏪 Bot Store
  enableBotStoreReplicas: true,
  botStoreLanguage: "es",

  // ⚡ Performance
  enableLambdaSnapStart: false
});
