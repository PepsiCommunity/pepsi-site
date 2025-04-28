type ThemeType = { [key: string]: object };

const themes: ThemeType = {
    dark: {
        '--background-color': '#0a0a0a',
        '--card-color': '#0b0b0b',
        '--border-color': '#121212',
        '--text-color': '#ffffff',
        '--headers-color': '#a1a1a1',
        '--text-color-2': '#d4d4d4',
        '--placeholder-color': '#242424',
        '--buttons-color': '#0d0d0d'
    },
    light: {
        '--background-color': '#f7f9f8',
        '--card-color': '##f8faf9',
        '--border-color': '#ebecec',
        '--text-color': '#000000',
        '--headers-color': '#737373',
        '--text-color-2': '#737373',
        '--placeholder-color': '#dbdbdb',
        '--buttons-color': '#f8f9f9'
    }
};

export default themes;
