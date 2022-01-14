import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import Context from "../context";

type TweetDetailProps = {
    text: string;
}

const TweetDetail: React.FC<TweetDetailProps> = ({text}) => (
    <View style={styles.tweetContainer}>
        <Text>{text}</Text>
    </View>
);

const TweetDetailScreen: React.FC = () => {
    const context = useContext(Context);
    const { tweets } = context;

    return (
        <SafeAreaView style={styles.container}>
            <Text>Number of tweets made: {tweets.length}</Text>
            {tweets.map((text, index) => <TweetDetail key={text + index} text={text} />)}
        </SafeAreaView>
    );
};

interface Styles {
    container: ViewStyle;
    tweetContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 24,
        margin: 16,
    },
    tweetContainer: {
        padding: 24,
        paddingTop: 24,
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 24,
        margin: 16,
    },
});

export default TweetDetailScreen;