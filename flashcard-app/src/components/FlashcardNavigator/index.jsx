import React, { useState } from "react";

export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, children, disableNext }) {
    return (
        <div>
            <button onClick={onPreviousClick} disabled={currentIndex === 1}>Previous</button>
            <button onClick={onNextClick} disabled={disableNext}>Next</button>
            {children}
        </div>
    );
}
