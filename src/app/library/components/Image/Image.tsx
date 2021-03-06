import * as React from 'react';
import { ImageStyle } from 'react-native';
import { ImageProps } from './Image.props';
import { images } from '@assets/image';
import {enhance, handleImage} from '@common';
import equals from 'react-fast-compare';
import { Block } from '../Block/Block';
import FastImage from 'react-native-fast-image';
import {ColorsCustom} from "@theme/color";
const ROOT: ImageStyle = {
  resizeMode: 'contain',
};

const ImgComponent = (props: ImageProps) => {
  const { style: styleOverride = {}, resizeMode = 'cover', source, containerStyle, tintColor } = props;
  const style = React.useMemo(
    () => enhance([ROOT, styleOverride]),
    [styleOverride],
  );

  return (
    <Block style={containerStyle}>
      <FastImage style={[style]} tintColor={tintColor} resizeMode={resizeMode} source={handleImage(source)} />
    </Block>
  );
};
export const Img = React.memo(ImgComponent, equals);
