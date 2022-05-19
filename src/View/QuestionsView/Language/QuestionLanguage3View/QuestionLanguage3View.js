import React, { Component } from 'react';
import QuestionLanguage3 from "../../../../Components/QuestionComponents/Language/QuestionLanguage3/QuestionLanguage3"

class QuestionLanguage3View extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Language Skills</p>
                <QuestionLanguage3 />
            </div>
         );
    }
}
 
export default QuestionLanguage3View;
