import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1C29',
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 15,
    marginBottom: 0

  },

  image:{
    marginLeft: 135,
    minHeight: 38,
    minWidth: 63,
    width: 130,
    height: 70,
    marginBottom: 7,
    marginTop: 0,
  },

  content: {
    paddingHorizontal: 16,
  },

  title:{
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 24,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
     
  },

  boxInput: {
    marginTop: 15,
    marginBottom: 3,
  },

  input: {
    backgroundColor: '#31333F',
    width: 377,
    height: 60,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,

  },

  text: {
    color: '#A7A8AD',
    fontSize: 12
  },  

  barra: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingRight: 2,
  },

  subtitle: {
    color: '#FFF',
    fontSize: 14,
  },

});