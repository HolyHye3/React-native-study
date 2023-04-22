import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    // View 태그를 사용할 수 있지만 불필요한 View 컴포넌트를 사용하게 되므로
    // 후에 레이아웃 관련해 귀찮은 일이 발생할 수도 있다.
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>Extra Text!</Text>
    </>

    // 에러 발생 코드
    // <View>
    //   <Text>안녕하세요 {props.name}!</Text>
    // </View>
    // <Text>Extra Text!</Text>
  );
}

Greeting.defaultProps = {
  name: '리액트 네이티브',
};

export default Greeting;
