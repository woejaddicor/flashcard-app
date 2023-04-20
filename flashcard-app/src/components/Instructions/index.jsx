import React from 'react';
import Button from 'react-bootstrap/button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



export default function Instructions() {

    const popover = (
        <Popover id="popover-basic" >
            <Popover.Header as="h3">How to play:</Popover.Header>
            <Popover.Body>
                To play the game <strong style={{ color: "#ECA400" }}>
                    hover over the blue card with the English text
                    </strong>. When you think you know the correct translation, click the card to flip it over and see. 
                    <strong style={{ color: "#ECA400" }}> Click 'Review flashcard' if you want to come back to the flashcard at the end of the game.
                    </strong> Clicking this button will also contribute to your percentage score.
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button className="instructions-button" variant="success">Instructions</Button>
        </OverlayTrigger>
    );
}
