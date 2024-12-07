import React from 'react';
interface HeaderProps {
    title : string;

}

cons Header : React.Fc < HeaderProps >;
= ({ title}) => {
    return (
    <header style = {{borderBottom:
        '1px solid #000' padding: '10px',
        fontSize: '24px'}}>
        </header>
    };
};
export default Header;