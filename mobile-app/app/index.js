import { Box } from "native-base";
import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <Box
            flex={1}
            bg="primary.500"
            alignItems="center"
            justifyContent="center"
        >
            <Text>Open up App.js to start working on your app!</Text>
            <Link href="/auth/auth">Go to Auth</Link>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
