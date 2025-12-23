import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Firebase Hosting은 정적 호스팅만 지원하므로 SPA 모드로 설정
  ssr: false,
} satisfies Config;
