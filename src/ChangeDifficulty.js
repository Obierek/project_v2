import React from 'react';

function ChangeDifficulty({changeLevelAction, currentLevel}) {

    const handleClickDifficulty = (value) => {

        changeLevelAction(value)

    }



    return (
        <div>
            <button className={currentLevel === "easy" ? "active" : "default"} onClick={() => handleClickDifficulty("easy")} value="easy">Pytania proste</button>
            <button className={currentLevel === "medium" ? "active" : "default"} onClick={() => handleClickDifficulty("medium")} value="medium">Pytania średnie</button>
            <button className={currentLevel === "hard" ? "active" : "default"} onClick={() => handleClickDifficulty("hard")} value="hard">Pytania trudne</button>
        </div>
    );
}

export default ChangeDifficulty;