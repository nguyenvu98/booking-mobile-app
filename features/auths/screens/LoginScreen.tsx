import AuthFooter from "../components/AuthFooter"
import AuthForm from "../components/AuthForm"
import AuthHeader from "../components/AuthHeader"
import AuthLayout from "../layouts/AuthLayout"

const LoginScreen = () => {
    return (
        <AuthLayout>
            <AuthHeader
                title="Đăng nhập"
                subtitle="Chào mừng bạn quay trở lại"
            />

            <AuthForm>
                {/* AppInput username */}
                {/* AppInput password */}
                {/* AppButton login */}
            </AuthForm>

            <AuthFooter
                text="Chưa có tài khoản?"
                actionText="Đăng ký"
                onPress={() => { }}
            />
        </AuthLayout>
    )
}

export default LoginScreen
