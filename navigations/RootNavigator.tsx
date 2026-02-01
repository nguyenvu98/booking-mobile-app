import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./AppNavigator"
import AuthNavigator from "./AuthNavigator"

const RootNavigator = () => {
    const isAuthenticated = false

    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default RootNavigator
