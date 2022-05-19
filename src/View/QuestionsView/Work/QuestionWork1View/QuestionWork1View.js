import React, { Component } from 'react';
import QuestionWork1 from "../../../../Components/QuestionComponents/Work/QuestionWork1/QuestionWork1"

class QuestionWork1View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Work</p>
                <QuestionWork1 />
            </div>
         );
    }
}
 
export default QuestionWork1View;
