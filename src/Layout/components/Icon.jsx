import React from 'react';
import "../DefaultLayout.css"
const Icon = ({children}) => {
    return (
        <div className='icon-footer'>
            {children && children}
        </div>
    );
};

export default Icon;