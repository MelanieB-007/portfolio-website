import { createGlobalStyle } from 'styled-components';

export const petrolTheme = {
    colors: {
        bgDark: '#0a1012',      // Sehr dunkles Anthrazit/Blau
        primaryPetrol: '#0098ad', // Dein Petrol aus dem Bild
        accentAqua: '#00d4eb',    // Hellere Variante für Glow-Effekte
        textMain: '#f5f5f5',      // Off-White für gute Lesbarkeit
        textMuted: '#a0a0a0',     // Grau für weniger wichtige Infos
    }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.bgDark};
    color: ${props => props.theme.colors.textMain};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;