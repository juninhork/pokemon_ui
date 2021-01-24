import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const List = styled.FlatList`
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 20;
`;

const SafeArea = styled.SafeAreaView`
  background-color: #000000;
`;

export {
  Container,
  List,
  SafeArea
}