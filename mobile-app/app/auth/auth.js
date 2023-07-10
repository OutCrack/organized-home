import { Link, Stack } from "expo-router";
import { Button, Center, Input, VStack } from "native-base";
import { Image, Text, View } from "react-native";

function LogoTitle() {
    return (
        <Image
            style={{ width: 30, height: 30 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
    );
}

export default function Page() {
    return (
        <Center flex={1}>
            {/* <Stack.Screen
                options={{
                    // https://reactnavigation.org/docs/headers#setting-the-header-title
                    title: "My home",
                    // https://reactnavigation.org/docs/headers#adjusting-header-styles
                    headerStyle: { backgroundColor: "#f4511e" },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
                    headerTitle: (props) => <LogoTitle {...props} />,
                }}
            /> */}
            <VStack space={4} alignItems="center">
                <Text>Auth Screen</Text>
                <Link href={{ pathname: "/", params: { name: "Bacon" } }}>
                    Go to home
                </Link>
                <Input mx="10" placeholder="Username" />
                <Button onPress={() => alert("Hello world")}>
                    Hello world
                </Button>
            </VStack>
        </Center>
    );
}
