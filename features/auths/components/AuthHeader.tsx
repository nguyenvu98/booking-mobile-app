import { Text, View } from "react-native"

const AuthHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => {
    return (
        <View style={{ marginBottom: 32 }}>
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>{title}</Text>
            {subtitle && (
                <Text style={{ marginTop: 8, color: "#666" }}>{subtitle}</Text>
            )}
        </View>
    )
}

export default AuthHeader
