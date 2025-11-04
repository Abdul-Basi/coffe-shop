import { Platform } from 'react-native';

declare const window: any;

export const showToast = (message: string) => {
    if (Platform.OS === 'web') {
        // For web, use a simple alert
        window.alert(message);
    } else {
        // For mobile platforms, log to console for now
        // In a production app, you'd want to implement a proper mobile toast
        console.log(message);
    }
};