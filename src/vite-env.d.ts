/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DiscordId: string
    readonly LanyardApi: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }