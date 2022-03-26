import {View,Text,TouchableOpacity,Image, ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../Header/Header';


function Iesaconclave ({navigation}){
    const[data,setData] =useState(0);
    useEffect(() =>{
        getApicdata();
        return() =>{
            clearInterval(getApicdata)
        }
      },[]);
      async function getApicdata() {
        fetch('https://www.iesaconnect.com/api/bannerjson')
        .then(response => response.json())
        .then(json =>{
          setData(json);
        }).catch(error=>{console.log(error)})
      }

    return(
        <View>
        <Header/>
        </View>


    )

}
export default Iesaconclave;