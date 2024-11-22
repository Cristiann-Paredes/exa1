import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.ionic',
  appName: 'CristianPar',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, 
      launchAutoHide: true,
      backgroundColor: '#ffffff', 
      androidScaleType: 'CENTER_CROP', 
      showSpinner: false, 
    },
  },
};

export default config;
