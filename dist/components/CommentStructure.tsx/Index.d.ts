import './CommentStructure.scss';
import '@szhsin/react-menu/dist/core.css';
import React from 'react';
interface CommentStructureProps {
    info: {
        userId: string;
        comId: string;
        fullName: string;
        avatarUrl: string;
        text: string;
        userProfile?: string;
        replies?: Array<object> | undefined;
    };
    editMode: boolean;
    parentId?: string;
    replyMode: boolean;
    logIn: {
        loginLink: string;
        signupLink: string;
    };
}
declare const CommentStructure: ({ info, editMode, parentId, replyMode }: CommentStructureProps) => React.JSX.Element;
export default CommentStructure;
