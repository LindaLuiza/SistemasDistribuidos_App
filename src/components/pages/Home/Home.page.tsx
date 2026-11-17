import { Text, View } from "react-native";
import Button from "../../atoms/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../../auth/firebaseConfig";

interface HomeProps {
    userEmail: string;
}

export function Home(props: HomeProps){
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            <Text>Página inicial</Text>
            <Text>Logado como: {props.userEmail}</Text>
            <Button title="Sair" onPress={() => signOut(auth)} />
        </View>
    )
}