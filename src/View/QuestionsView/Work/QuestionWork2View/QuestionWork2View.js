import React, { Component } from 'react';
import QuestionWork2 from "../../../../Components/QuestionComponents/Work/QuestionWork2/QuestionWork2"

class QuestionWork2View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Work</p>
                <QuestionWork2 />
            </div>
         );
    }
}

export default QuestionWork2View;
