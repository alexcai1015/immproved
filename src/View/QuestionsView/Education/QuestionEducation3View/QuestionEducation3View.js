import React, { Component } from 'react';
import QuestionEducation3 from "../../../../Components/QuestionComponents/Education/QuestionEducation3/QuestionEducation3"

class QuestionEducation3View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Education</p>
                <QuestionEducation3 />
            </div>
         );
    }
}
 
export default QuestionEducation3View;
