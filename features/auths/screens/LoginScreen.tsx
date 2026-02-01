import { CommonButton } from "@/components/ui/CommonButton";
import { CommonInput } from "@/components/ui/CommonInput";

import { useRouter } from "expo-router";
import { useState } from "react";
import AuthFooter from "../components/AuthFooter";
import AuthForm from "../components/AuthForm";
import AuthHeader from "../components/AuthHeader";
import AuthLayout from "../layouts/AuthLayout";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthLayout>
      <AuthHeader title="Đăng nhập" />
      <AuthForm>
        <CommonInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
          <CommonInput
          showPasswordToggle={true}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          keyboardType="visible-password"
          autoCapitalize="none"
        />
        <CommonButton title="Đăng nhập" onPress={() => {}} />
      </AuthForm>

      <AuthFooter
        text="Don't have an account?"
        actionText="Register"
        onPress={() => router.push("/(auth)/register")}
      />
    </AuthLayout>
  );
};

export default LoginScreen;
