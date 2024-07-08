import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-compponents' {
    export interface DefaultTheme extends ThemeType {}
}
