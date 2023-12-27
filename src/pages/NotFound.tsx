import React from "react";
import Header from '../components/Header';
import './NotFound.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <Header />
      <h1 className="not-found-title">404: Page Not Found</h1>
      <p className="not-found-text">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFoundPage;
