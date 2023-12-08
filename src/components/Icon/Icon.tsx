import React from 'react';
import { IconProps } from './Icon.types';

export const svgs = {
  'home-icon': () => require('../../assets/svgs/home-icon.svg'),
  item: () => require('../../assets/svgs/item.svg'),
};

export const Icon: React.FC<IconProps> = ({ name = 'item', ...rest }) => {
  const Component = svgs[name]();

  return <Component.default color="#fff" height={30} width={30} {...rest} />;
};
