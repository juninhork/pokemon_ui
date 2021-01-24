import styled from 'styled-components/native';

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const List = styled.FlatList`
  margin-top:10;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 20;
`;

const SafeArea = styled.SafeAreaView`
  background-color: #000000;
`;

const FilterTouchable = styled.TouchableOpacity`
  width: 25px;
  height: 60%;
  margin-right: 20px;
  margin-bottom: 5px;
  tint-color: #ffffff;
`;

const FilterImage = styled.Image`
  width: 100%;
  height: 100%;
  tint-color: #ffffff;
`;

const TitleText = styled.Text`
  font-size:35;
  color: #ffffff;
  margin-left:5%;
  font-weight: bold;
`;

export {
  Container,
  List,
  SafeArea,
  FilterTouchable,
  FilterImage,
  TitleText
}