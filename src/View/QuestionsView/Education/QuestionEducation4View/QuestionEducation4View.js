import React, { Component } from 'react';
import QuestionEducation4 from "../../../../Components/QuestionComponents/Education/QuestionEducation4/QuestionEducation4"

class QuestionEducation4View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Education</p>
                <QuestionEducation4 />
            </div>
         );
    }
}
 
export default QuestionEducation4View;
