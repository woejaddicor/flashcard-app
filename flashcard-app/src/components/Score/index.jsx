export default function Score({ wrongAnswers }) {
    return (
        <div>
            <h1>Score</h1>
            {wrongAnswers.length > 0 ? (
                <div>
                    <p>You got the following questions wrong:</p>
                    <ul>
                        {wrongAnswers.map((index) => (
                            <li key={index}>Question {index}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Congratulations! You got all the questions right.</p>
            )}
        </div>
    );
}
