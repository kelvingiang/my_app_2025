import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.myapp',
  appName: 'my-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  "android": {
    // "path": ""  // 或者完全刪除這行
  },
};

export default config;
