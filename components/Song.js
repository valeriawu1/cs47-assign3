import { StyleSheet, SafeAreaView, Text, View, Pressable,Image } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { autofocus } from "caniuse-lite/data/features";
import styleScoped from "caniuse-lite/data/features/style-scoped";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";


const Song = ({sname, tracknum, artist, duration, album, image }) => {

    const minutes = millisToMinutesAndSeconds(duration)
    return (
        <View style ={styles.container}>
            <View style={styles.box}>
       
                <Text style = {styles.text}>{tracknum}</Text>
                <Image source={{ uri: image }} style={{ width: 48, height: 48 }}/>
                <View style = {styles.info}>
                <Text style = {styles.title} numberOfLines={1}>{sname}</Text>
                <Text style = {styles.artist}>{artist}</Text>
                </View>
                <Text style={styles.text}>{album}</Text>
                <Text style={styles.text}>{minutes}</Text>
            </View>
        </View>

    );
}
  
export default Song 

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        marginBottom: 35,
        width: '100%',
        flex: 1,
        
    },
    box: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'


    }, 
    text: {
        fontSize: 16, 
        color: Themes.colors.gray, 
        
    },
    info: {
        flexDirection: 'column', 
        width: '50%'
    }, 
    artist: {
        color: Themes.colors.gray,
        fontSize: 14
    }, 
    title: {
        fontWeight: 'bold',  
        fontSize: 18, 
        color: Themes.colors.gray, 
    }

})
