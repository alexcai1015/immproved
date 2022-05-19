import React, { Component } from 'react';
import QuestionEducation1 from "../../../../Components/QuestionComponents/Education/QuestionEducation1/QuestionEducation1"

class QuestionEducation1View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Education</p>
                <QuestionEducation1 />
            </div>
         );
    }
}
 
export default QuestionEducation1View;
