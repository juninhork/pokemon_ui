import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const List = styled.FlatList`
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 20;
`;

export const FilterTouchable = styled.TouchableOpacity`
  width: 25px;
  height: 60%;
  margin-right: 20px;
  margin-bottom: 5px;
  tint-color: #ffffff;
`;

export const FilterImage = styled.Image`
  width: 100%;
  height: 100%;
  tint-color: #ffffff;
`;
