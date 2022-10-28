import { StyleSheet, SafeAreaView, Text, View, Pressable,Image } from "react-native";
import { useSpotifyAuth } from "../utils";
import { Themes } from "../assets/Themes";


const StartButton = (props) => {
    const getAuth = () => {
        props.getSpotifyAuth();
    }
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={getAuth}>
                <Image style={styles.image} source={require("../assets/spotify-logo.png")} />
                <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
            </Pressable>

        </View>
    );
}

export default StartButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", 
        width: '80%'
    },
    text: {
        fontSize: 16, 
        color: 'white',
        fontWeight: 'bold',
    }, 
    button: {
        padding: 4,
        margin: 20,
        borderRadius: 99999,
        backgroundColor: 'green', 
        width: '90%', 
        height: 70, 
        flexDirection: 'row', 
        alignItems: 'center',

    }, 
    image: {
        width: 40, 
        height: 40, 
        marginRight: 30, 
        marginLeft: 10


    }
})