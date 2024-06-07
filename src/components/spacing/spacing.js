import { StyleSheet, View } from "react-native"




const Spacing = ({marginTop, marginBottom, margin=null}) => {


  if(margin){
    marginTop = margin;
    marginBottom = margin;
  }
    
const styles = StyleSheet.create({
    spacing: {
      marginTop:  typeof marginTop === 'string' ?`${marginTop}%` : marginTop,
      marginBottom: typeof marginBottom === 'string' ?`${marginBottom}%` : marginBottom,
    },
  });


    return(
        <View style={styles.spacing}>
        </View>
    )
}



export default Spacing;

