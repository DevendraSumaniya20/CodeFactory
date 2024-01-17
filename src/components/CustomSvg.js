import React from 'react';
import {Svg, Path} from 'react-native-svg';

const CustomSvg = ({source, iconStyle, color, width = 24, height = 24}) => {
  return (
    <Svg
      width={iconStyle?.width || width}
      height={iconStyle?.height || height}
      viewBox="0 0 24 24"
      fill={color || 'currentColor'}
      style={iconStyle}>
      {source && <Path d={source} />}
    </Svg>
  );
};

export default CustomSvg;
