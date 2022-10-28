import { StyleSheet, SafeAreaView, Text, View, FlatList, Pressable, Image} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import StartButton from "./components/StartButton"; 
import Song from  "./components/Song"


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);


  const renderSong = ({ item, index }) => {
    return <Song
      sname={item.name}
      tracknum={item.track_number}
      artist={item.artists[0].name}
      duration={item.duration_ms}
      album={item.album.name}
      image={item.album.images[0].url}
    />
  };

  let contentDisplayed = null
  if (token) {
    contentDisplayed = (
      <View>
        < View style={styles.titleRow} >
        <Image style={styles.image} source={require("./assets/spotify-logo.png")} />
          <Text style={styles.titleText}>My Top Tracks</Text>
        </View >
        <FlatList
          data={tracks}
          renderItem={(item) => renderSong(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
      
      
  } else {
    contentDisplayed = <StartButton  getSpotifyAuth={getSpotifyAuth}/>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  titleRow: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Themes.colors.white
  }, 
  image: {
    width: 30, 
    height: 30, 
    marginRight: 15
  }
});
