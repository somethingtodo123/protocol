import * as styledComponents from 'styled-components';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents;

export type Theme = { [key in ColorOption]: string };

export enum ColorOption {
    primaryColor = 'primaryColor',
    black = 'black',
    lightGrey = 'lightGrey',
    darkGrey = 'darkGrey',
    white = 'white',
}

export const theme: Theme = {
    primaryColor: '#512D80',
    black: 'black',
    lightGrey: '#999999',
    darkGrey: '#333333',
    white: 'white',
};

export { styled, css, injectGlobal, keyframes, ThemeProvider };
