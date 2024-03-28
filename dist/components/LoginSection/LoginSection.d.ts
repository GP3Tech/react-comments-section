import React from 'react';
import './LoginSection.scss';
interface LoginSectionProps {
    loginLink: string;
    signUpLink: string;
}
declare const LoginSection: ({ loginLink, signUpLink }: LoginSectionProps) => React.JSX.Element;
export default LoginSection;
