import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const MatchsList = styled.FlatList.attrs({
  contentContainerStyle: { PaddingTop: 50, PaddingBottom: 50 }
})``;

export const Match = styled.TouchableOpacity.attrs({ activeOpacity: 0.6 })`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Cover = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const LastMessage = styled.Text`
  color: #000;
  font-size: 14px;
  margin-top: 3px;
`;
