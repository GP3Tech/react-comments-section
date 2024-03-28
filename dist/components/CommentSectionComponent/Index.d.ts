import './CommentSection.css';
import React from 'react';
interface CommentSectionProps {
    overlayStyle?: object;
    logIn: {
        loginLink: string;
        signupLink: string;
    };
    hrStyle?: object;
    titleStyle?: object;
    customNoComment?: Function;
}
declare const CommentSection: ({ overlayStyle, logIn, hrStyle, titleStyle, customNoComment }: CommentSectionProps) => React.JSX.Element;
export default CommentSection;
