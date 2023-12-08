import React from 'react';
import { IconProps } from './Icon.types';

export const svgs = {
  'home-icon': () => require('../../assets/svgs/home-icon.svg'),
  'rick-colorful': () => require('../../assets/svgs/rick-colorful.svg'),
  'rick-monochrome': () => require('../../assets/svgs/rick-monochrome.svg'),
  'morty-colorful': () => require('../../assets/svgs/morty-colorful.svg'),
  'morty-monochrome': () => require('../../assets/svgs/morty-monochrome.svg'),
  item: () => require('../../assets/svgs/item.svg'),
};

export const Icon: React.FC<IconProps> = ({ name = 'item', ...rest }) => {
  const Component = svgs[name]();

  return <Component.default color="#fff" height={30} width={30} {...rest} />;
};
