import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Close = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 20}
    viewBox="0 0 20 20"
    fill="none"
    className={props.className}
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5701 3.42998C16.9769 3.83677 16.9769 4.49632 16.5701 4.90311L4.90348 16.5698C4.49668 16.9766 3.83714 16.9766 3.43034 16.5698C3.02355 16.163 3.02355 15.5034 3.43034 15.0966L15.097 3.42998C15.5038 3.02318 16.1634 3.02318 16.5701 3.42998Z"
      fill="#FAFAFA"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.43034 3.42998C3.83714 3.02318 4.49668 3.02318 4.90348 3.42998L16.5701 15.0966C16.9769 15.5034 16.9769 16.163 16.5701 16.5698C16.1634 16.9766 15.5038 16.9766 15.097 16.5698L3.43034 4.90311C3.02355 4.49632 3.02355 3.83677 3.43034 3.42998Z"
      fill="#FAFAFA"
    />
  </Svg>
);

export default Close;
