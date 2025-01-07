/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly RESEND_API_KEY: string;
    readonly CLOUDFLARE_API_TOKEN: string;
    readonly CLOUDFLARE_ZONE_ID: string;
    readonly CLOUDFLARE_ACCOUNT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  