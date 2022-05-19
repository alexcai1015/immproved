import React, { Component } from 'react';
import QuestionLanguage1 from "../../../../Components/QuestionComponents/Language/QuestionLanguage1/QuestionLanguage1"

class QuestionLanguage1View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Language Skills</p>
                <QuestionLanguage1 />
            </div>
         );
    }
}
 
export default QuestionLanguage1View;
