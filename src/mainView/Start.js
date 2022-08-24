import React from 'react';
import CheckBox from "../components/CheckBox";

function Start(props) {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    
    return (
        <form style={{width: 300}} onSubmit={handleSubmit}>
            <CheckBox label="Wybierz poziom trudności"/>
            <button style={{width: 300}} type="submit">Zaczynamy</button>
        </form>
    );
}

export default Start;