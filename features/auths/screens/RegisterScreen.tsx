import AuthFooter from "../components/AuthFooter"
import AuthForm from "../components/AuthForm"
import AuthHeader from "../components/AuthHeader"
import AuthLayout from "../layouts/AuthLayout"

const RegisterScreen = () => {
    return (
        <AuthLayout>
            <AuthHeader
                title="Tạo tài khoản"
                subtitle="Điền thông tin để bắt đầu"
            />

            <AuthForm>
                {/* AppInput email */}
                {/* AppInput password */}
                {/* AppInput confirm */}
                {/* AppButton register */}
            </AuthForm>

            <AuthFooter
                text="Đã có tài khoản?"
                actionText="Đăng nhập"
                onPress={() => { }}
            />
        </AuthLayout>
    )
}
export default RegisterScreen
