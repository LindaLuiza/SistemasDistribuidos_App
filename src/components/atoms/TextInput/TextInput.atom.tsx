import { TextInput as TextInputReact } from 'react-native';

interface TextInputProps {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}   

export function TextInput(props: TextInputProps) {
    return props.secureTextEntry ? (
        <TextInputReact 
            placeholder={props.placeholder} 
            value={props.value} 
            autoCapitalize={props.autoCapitalize}
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            secureTextEntry
        />
        ) : (
        <TextInputReact 
            placeholder={props.placeholder} 
            value={props.value} 
            autoCapitalize={props.autoCapitalize}
            onChangeText={props.onChangeText} 
        />
);
}