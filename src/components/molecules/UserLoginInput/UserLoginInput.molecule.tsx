import { Text } from "react-native";
import TextInput from "../../atoms/TextInput";

interface UserLoginInputProps {
    email: string;
    senha: string;
    setEmail: (email: string) => void;
    setSenha: (senha: string) => void;
}

export function UserLoginInput(props: UserLoginInputProps) {
    return (
        <div>
            <Text>Login</Text>
            <TextInput
                placeholder="E-mail"
                value={props.email}
                onChangeText={props.setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Senha"
                value={props.senha}
                onChangeText={props.setSenha}
                autoCapitalize="none"
                keyboardType="default"
                secureTextEntry={true}
            />
        </div>
    )
}