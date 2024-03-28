import React from 'react';
import './InputField.scss';
interface EmojiInputProps {
    text: string;
    setText: Function;
    mode?: string;
    inputStyle?: object;
}
declare const EmojiInput: ({ text, setText, mode, inputStyle }: EmojiInputProps) => React.JSX.Element;
export default EmojiInput;
