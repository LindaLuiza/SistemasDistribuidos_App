import { Alert, Platform } from 'react-native';
import Button from '../../atoms/Button';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../auth/firebaseConfig';

interface LoginOptionsProps {
    email: string;
    senha: string;
    promptAsync: () => void;
    request: any;
}

export function LoginOptions(props: LoginOptionsProps) {
    // Função para entrar com email e senha
    const entrar = async () => {
        try {
            await signInWithEmailAndPassword(auth, props.email.trim(), props.senha);
        } catch (e: Error | any) {
            Alert.alert('Erro ao entrar', e.message);
        }
    };

    // Função para criar conta com email e senha
    const criarConta = async () => {
        try {
            await createUserWithEmailAndPassword(auth, props.email.trim(), props.senha);
        } catch (e: Error | any) {
            Alert.alert('Erro ao criar conta', e.message);
        }
    };

    // Função para entrar com conta pelo Google
    const entrarComGoogle = () => {
        if (Platform.OS === 'web') {
            signInWithPopup(auth, new GoogleAuthProvider()).catch((e) =>
                Alert.alert('Erro ao entrar com Google', e.message)
            );
        } else {
            props.promptAsync();
        }
    };

    return (
        <div>
            <Button title="Entrar" onPress={entrar} />
            <Button title="Criar conta" onPress={criarConta} />
            <Button
                title="Entrar com Google"
                disabled={Platform.OS !== 'web' && !props.request}
                onPress={entrarComGoogle}
            />
        </div>
    );
}