import React, { ReactNode } from 'react';
import './GroupCard.scss';


interface GroupCardProps {
    children?: ReactNode;
}

const GroupCard: React.FC<GroupCardProps> = ({ children }) => {
    return (
        <div className="container-group">
            {children}
        </div>
    );
};

export default GroupCard;