import React from 'react'
import { SafeAreaView, ScrollView, View } from "react-native"

type Props = { children: React.ReactNode }

const AuthLayout = ({ children }: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    padding: 24,
                }}
                keyboardShouldPersistTaps="handled"
            >
                <View>{children}</View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AuthLayout