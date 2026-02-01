import { View } from "react-native"

type Props = {
    children?: React.ReactNode
}

const AuthForm = ({ children }: Props) => {
    return <View style={{ gap: 16 }}>{children}</View>
}

export default AuthForm
