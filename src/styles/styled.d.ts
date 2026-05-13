import 'styled-components';

// Hier erweitern wir das Standard-Modul von Styled Components
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            bgDark: string;
            primaryPetrol: string;
            accentAqua: string;
            textMain: string;
            textMuted: string;
        };
    }
}