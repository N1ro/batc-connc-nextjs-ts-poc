import React from 'react';
import './Spinner.css'; // Ensure the path is correct

const Spinner: React.FC = () => {
    return (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui big text loader">Loading...</div>
            </div>
        </div>
    );
};

export default Spinner;
