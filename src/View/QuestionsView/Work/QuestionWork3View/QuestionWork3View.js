import React, { Component } from 'react';
import QuestionWork3 from "../../../../Components/QuestionComponents/Work/QuestionWork3/QuestionWork3"

class QuestionWork3View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Work</p>
                <QuestionWork3 />
            </div>
         );
    }
}
 
export default QuestionWork3View;
