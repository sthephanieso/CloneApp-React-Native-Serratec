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
    marginLeft: 15
  },

  image:{
    marginLeft: 135,
    minHeight: 38,
    minWidth: 63,
    width: 130,
    height: 70,
    marginBottom: 10,
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

  input: {
    color: '#A7A8AD',
    backgroundColor: '#31333F',
    width: 377,
    height: 60,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 15,
    marginBottom: 2,
  },

  button: {
   width: '100%',
   height: 50,
   backgroundColor: '#0072D2',
   borderRadius: 4,
   flexDirection: 'row',
   alignItems: 'center',
  },

  buttonTitle:{
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
  },

  barra: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingRight: 2,
  },

  subtitle: {
    color: '#C9CACE',
    fontSize: 15,
  },

  assinar: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Ubuntu_500Medium',
    marginLeft: 5,
    marginTop: 0.5,
  }
});