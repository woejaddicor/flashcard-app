import React, { useState } from "react";

export default function FlashcardNavigator({ currentIndex, onPreviousClick, onNextClick, children }) {
    return (
        <div>
            <button onClick={onPreviousClick} disabled={currentIndex === 1}>Previous</button>
            <button onClick={onNextClick}>Next</button>
            {children}
        </div>
    );
}