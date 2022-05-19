import React, { Component } from 'react';
import QuestionDisclaimer from "../../../../Components/QuestionComponents/Basic/QuestionDisclaimer/QuestionDisclaimer";

class QuestionDisclaimerView extends Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Getting Started</p>
                <QuestionDisclaimer />
            </div>
         );
    }
}

export default QuestionDisclaimerView;
