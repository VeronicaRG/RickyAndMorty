import { FavoriteIconProps } from '@components/FavoriteIcon/FavoriteIcon.types';

export interface HeaderProps extends FavoriteIconProps {
  testID: string;
  handlePressGoBack(): void;
}
