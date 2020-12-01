import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Score(props) {    

    return (
          <ProgressBar className="mt-5">
            <ProgressBar striped variant="success" now={props.correctScore}  min={0} max={20} key={1} />
            <ProgressBar variant="warning" now={props.wrongScore} key={2}  min={0} max={20} />
            <ProgressBar striped variant="danger"  now={(props.correctScore+props.wrongScore)} key={3} min={20} max={0} />
          </ProgressBar>
    );
}

export default Score;
