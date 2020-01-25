import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }){
    const githubUsername = navigation.getParam('github_username');

    return <WebView style={{ flex: 1}} source={{ uri: `https://github.com/${githubUsername}`}} />
}

export default Profile


/*

{ devs.map( dev => (
                    <Marker
                        key={dev._id}
                        coordinate={{
                            latitude: dev.location.coordinates[1],
                            longitude: dev.location.coordinates[0],
                        }}
                    >
                        <Image
                            style={styles.avatar}
                            source={{ uri: dev.avatar_url }}
                        />

                        <Callout onPress={() => {
                            navigation.navigate('Profile', { github_username: 'diego3g'});
                        }} >
                            <View style={styles.callout}>
                                <Text style={styles.devName} >{dev.name}</Text>
                                <Text style={styles.devBio} >{dev.bio}</Text>
                                <Text style={styles.devTechs} >{ dev.techs.join(', ')}</Text>
                            </View>
                        </Callout>
                    </Marker>
               ))}


*/