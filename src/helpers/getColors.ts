import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {fallback: 'grey'});
  let primary;
  let secondary;

  switch (colors.platform) {
    case 'android':
      // android colors properties
      primary = colors.dominant;
      secondary = colors.average;
      break;
    case 'ios':
      // iOS colors properties
      primary = colors.background;
      secondary = colors.secondary;
      break;
  }

  return {primary, secondary};
};
