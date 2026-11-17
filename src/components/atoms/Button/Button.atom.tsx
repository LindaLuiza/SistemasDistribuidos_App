import { Button as ReactButton }  from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export function Button(props: ButtonProps) {
    return <ReactButton title={props.title} onPress={props.onPress} />
}