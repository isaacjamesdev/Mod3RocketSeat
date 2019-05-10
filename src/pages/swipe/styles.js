import styled from 'styled-components/native';

export const Container = styled.View`
  felx: 1;
  flex-direction: 'column';
  background: #f2f2f2
`;

container: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#f2f2f2',
},
content:{
  flex: 5,
  alignItems: 'center',
  justifyContent: 'center',
},
card:{
  width: 320,
  height: 470,
  backgroundColor: '#FE474C',
  borderRadius: 5,
  shadowColor: 'rgba(0,0,0,0.5)',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity:0.5,
},
card1: {
  backgroundColor: '#FE474C',
},
card2: {
  backgroundColor: '#FEB12C',
},
label: {
  lineHeight: 400,
  textAlign: 'center',
  fontSize: 55,
  fontFamily: 'System',
  color: '#ffffff',
  backgroundColor: 'transparent',
},
footer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
buttonContainer:{
  width:220,
  flexDirection:'row',
  justifyContent: 'space-between',
},
button:{
  shadowColor: 'rgba(0,0,0,0.3)',
  shadowOffset: {
    width: 0,
    height: 1
  },
  shadowOpacity:0.5,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center',
  zIndex: 0,
}
