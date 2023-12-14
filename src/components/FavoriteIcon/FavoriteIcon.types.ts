export interface FavoriteIconProps {
  iconColor?: string;
  widthIcon?: number;
  heightIcon?: number;
  isFavorite: boolean;
  handlePressFavorite: () => void;
  testID?: string;
}
