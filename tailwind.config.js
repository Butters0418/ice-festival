import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px',
    },

    extend: {
      boxShadow: {
        'header-shadow': '0 0 5px rgb(0,0,0,0.1)',
      },
      borderRadius: {
        '17xl': '36px',
      },
      colors: {
        pcRed: '#db232f',

        // 左選單
        leftNavActivityText: '#fff',
        leftNavActivityTextHover: '#fffb6e',
        leftNavBg: '#fdf8fd',
        leftNavText: '#010101',
        leftNavTextHover: '#fff',
        leftNavTextBgHover: '#069FE7',
        // 右選單
        rightNavBg: '#fdf8fd',
        rightNavText: '#069FE7',
        rightNavActive: '#010101',

        // 活動用
        // dark: '#1f1f1f',
        'blue-500': '#48c4ff',
        'yellow-300': '#F8FC0C',
        'blue-400': '#92e0ff',
        'red-500': '#ffb2b2',
        'purple-400': '#e4dcff',
        'green-400': '#c0f0e3',
        'red-800': '#fa0211',
        'white-100': '#ffffff',
        'white-200': '#f3f3f3',
        'bk-400': '#19243c',
        'red-200': '#fad9e6',
        'blue-800': '#026bd6',
        'red-400': '#ff75c8',
        'yellow-100': '#faf5bf',

        gray: '#19243c',
        black: '#000',

        rainbowLine1: '#4dc9ff',
        rainbowLine2: '#FFFFFF',
        rainbowLine3: '#fad9e6',
        rainbowLine4: '#ff7abd',
        rainbowLine5: '#ffce00',

        lightskyblue: '#76d4ff',
        lightblue: '#c0ebff',
      },
      fontSize: {
        '5xl': '24px',
        '13xl': '32px',
        '95xl': '114px',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      notosans: ['Noto Sans TC'],
      ZenMaruGothic: ['Zen Maru Gothic'],
      Jost: ['Jost'],
    },
    container: {
      center: true,
    },
  },
  plugins: [lineClamp, aspectRatio],
};
