import React, { Component } from 'react';
import QuestionFinal from "../../../../Components/QuestionComponents/Final/QuestionFinal/QuestionFinal"

class QuestionFinalView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Wrapping Up</p>
                <QuestionFinal />
            </div>
         );
    }
}
 
export default QuestionFinalView;
