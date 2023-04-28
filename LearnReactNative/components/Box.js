import React from 'react';
import {View, StyleSheet} from 'react-native';

/*
function Box(props) {
  // return <View style={[styles.box, styles.rounded]} />; // 배열을 사용하여 적용할 스타일을 적용하는 듯

  // props가 true 일 때만 스타일 부여
  // return <View style={[styles.box, props.rounded ? styles.rounded : null]} />;
  return (
    <View
      style={[
        styles.box,
        props.rounded && styles.rounded,
        sizes[props.size],
        {
          backgroundColor: props.color,
        },
      ]}
    />
  ); // 혹은 이렇게도 작성 가능
}
*/

//==== 객체 구조 분해 할당 사용 =====//
function Box({rounded, size, color}) {
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {backgroundColor: color},
      ]}
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  // rounded: true,
  color: 'black',
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;
