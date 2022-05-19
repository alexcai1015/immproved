import React, { Component } from 'react';
import QuestionStatus from "../../../../Components/QuestionComponents/Basic/QuestionStatus/QuestionStatus";

class QuestionStatusView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Citizen Status</p>
                <QuestionStatus />                
            </div>
         );
    }
}

export default QuestionStatusView;
