import React, { Component } from 'react';
import QuestionEducation2 from "../../../../Components/QuestionComponents/Education/QuestionEducation2/QuestionEducation2";

class QuestionEducation2View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Education</p>
                <QuestionEducation2 />
            </div>
         );
    }
}
 
export default QuestionEducation2View;
