import { svgs } from '.';
import { SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
  name?: keyof typeof svgs;
}
