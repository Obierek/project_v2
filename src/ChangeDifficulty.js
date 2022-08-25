import React from 'react';

function ChangeDifficulty() {

    const handleClickDifficulty = (value) => {
        const buttonValue = value;


        console.log("Button Value:", buttonValue);
        return buttonValue;
    }



    return (
        <div>
            <button onClick={() => handleClickDifficulty("easy")} value="easy">Pytania proste</button>
            <button onClick={() => handleClickDifficulty("medium")} value="medium">Pytania średnie</button>
            <button onClick={() => handleClickDifficulty("hard")} value="hard">Pytania trudne</button>
        </div>
    );
}

export default ChangeDifficulty;