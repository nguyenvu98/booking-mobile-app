import { Pressable, Text, View } from "react-native"

const AuthFooter = ({ text, actionText, onPress }: { text: string, actionText: string, onPress: () => void }) => {
    return (
        <View style={{ marginTop: 24, alignItems: "center" }}>
            <Text>
                {text}{" "}
                <Pressable onPress={onPress}>
                    <Text style={{ fontWeight: "600" }}>{actionText}</Text>
                </Pressable>
            </Text>
        </View>
    )
}

export default AuthFooter
