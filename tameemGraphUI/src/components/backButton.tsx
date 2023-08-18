import React from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  return (
    <Link to={to}> 
    <button className="back-button"> Back to Main Page </button>
    </Link>
  );
}

export default BackButton;
