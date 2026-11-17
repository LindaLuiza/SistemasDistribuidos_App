import { Alert, View } from "react-native";
import LoginOptions from "../../molecules/LoginOptions";
import UserLoginInput from "../../molecules/UserLoginInput";
import { useEffect, useState } from "react";

import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../../auth/firebaseConfig";

export function LoginPage() {
    const webClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || 'sem-client-id';
    const androidClientId = process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID || 'sem-client-id';

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        webClientId,
        androidClientId,
        iosClientId: webClientId,
    });

    useEffect(() => {
        if (response?.type === 'success') {
        const credential = GoogleAuthProvider.credential(response.params.id_token);
        signInWithCredential(auth, credential).catch((e) =>
            Alert.alert('Erro ao entrar com Google', e.message)
        );
        } else if (response?.type === 'error') {
            Alert.alert('Erro ao entrar com Google', response.error?.message ?? 'Erro desconhecido');
        }
    }, [response]);

    return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <UserLoginInput email={email} senha={senha} setEmail={setEmail} setSenha={setSenha} />
        <LoginOptions email={email} senha={senha} request={request} promptAsync={promptAsync} />
    </View>
    )
}