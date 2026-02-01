
import { CommonButton } from "@/components/ui/CommonButton";
import { CommonInput } from "@/components/ui/CommonInput";
import { useRouter } from "expo-router";
import { useState } from "react";
import AuthFooter from "../components/AuthFooter";
import AuthForm from "../components/AuthForm";
import AuthHeader from "../components/AuthHeader";
import AuthLayout from "../layouts/AuthLayout";
const RegisterScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <AuthLayout>
      <AuthHeader title="Tạo tài khoản" subtitle="Điền thông tin để bắt đầu" />

      <AuthForm>
        <CommonInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CommonInput
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          keyboardType="email-address"
          autoCapitalize="none"
          showPasswordToggle={true}
        />
        <CommonInput
          showPasswordToggle={true}
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CommonButton title="Đăng nhập" onPress={() => {}} />
      </AuthForm>

      <AuthFooter
        text="Đã có tài khoản?"
        actionText="Đăng nhập"
        onPress={() => router.push("/(auth)/login")}
      />
    </AuthLayout>
  );
};
export default RegisterScreen;
