import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Styles=StyleSheet.create({
  container:{ 
      
        // flexDirection:'row',
        height: hp('13%'),
        width:wp('25%'),
        borderRadius:5,
        margin:10,
        backgroundColor:'#EFEFEF',
        display:'flex',
         justifyContent:'center',
         alignItems:'center',
         
        

    },
    shadowProp: {
         shadowColor: '#171717',
         shadowOffset: {width:5, height: 0},
        shadowOpacity: 0.10,
         shadowRadius: 3,
         elevation:15,
          
    
         
       },
    container2:{
           display:"flex",
           marginTop:15,
           marginBottom:15,
           marginLeft:15,
           marginRight:15,

           flexDirection:'row',
           justifyContent:'center',
          flexWrap:'wrap',
          backgroundColor:'#F5F5F5'
   



    },
    img:{
        padding:10,
        margin:5,
        width:18,
        height:10,
        tintColor:'#0076BE',
        justifyContent:'center',
        alignItems:'center',
        
    },
    text:{
        fontSize:12,
        justifyContent:'center',
        alignItems:'center',
        color:'#000',
        textAlign:'justify',
        
     

    },

componentbackground:{
    backgroundColor:'#F5F5F5'
}
})
 export default Styles;