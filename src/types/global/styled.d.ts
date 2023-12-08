import 'styled-components';
import {Theme} from '../../theme/theme.types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
