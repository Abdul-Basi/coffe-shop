import { StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

interface CustomStatusBarProps {
    backgroundColor: string;
}

export const CustomStatusBar = ({ backgroundColor }: CustomStatusBarProps) => {
    if (Platform.OS === 'web') {
        return <ExpoStatusBar style={backgroundColor === '#0C0F14' ? 'light' : 'dark'} />;
    }
    return <StatusBar backgroundColor={backgroundColor} />;
};