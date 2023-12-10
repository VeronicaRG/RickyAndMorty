import React from 'react';
import { IconProps } from './Icon.types';

export const svgs = {
  'arrow-left': () => require('@svgs/arrow-left.svg'),
  'home-icon': () => require('@svgs/home-icon.svg'),
  'rick-colorful': () => require('@svgs/rick-colorful.svg'),
  'rick-monochrome': () => require('@svgs/rick-monochrome.svg'),
  'morty-colorful': () => require('@svgs/morty-colorful.svg'),
  'morty-monochrome': () => require('@svgs/morty-monochrome.svg'),
  item: () => require('@svgs/item.svg'),
};

export const Icon: React.FC<IconProps> = ({ name = 'item', ...rest }) => {
  const Component = svgs[name]();

  return <Component.default color="#fff" height={30} width={30} {...rest} />;
};
