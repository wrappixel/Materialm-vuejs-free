import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BLUE_THEME: ThemeTypes = {
    name: 'BLUE_THEME',
    dark: false,
    variables: {
        'border-color': '#e0e6eb',
        'border-opacity': 1
    },
    colors: {
        primary: '#00A1FF',
        secondary: '#8965E5',
        info: '#46caeb',
        success: '#00ceb6',
        warning: '#ffae1f',
        error: '#ff6692',
        lightprimary: '#e5f5ff',
        lightsecondary: '#e7e2f3',
        lightsuccess: '#d2f9f4',
        lighterror: '#ffe4ec',
        lightinfo: '#e1f5fa',
        lightwarning: '#fff1cc',
        textPrimary: '#111c2d',
        textSecondary: '#7b8893',
        borderColor: '#e0e6eb',
        containerBg: '#F8FAFD',
        background: '#F8FAFD',
        hoverColor: '#EFF4FA',
        surface: '#fff',
        grey100: '#EAEFF4',
        grey200: '#29343d',
        light: '#EFF4FA',
        muted:'#526b7a'
    }
};



export { BLUE_THEME};
