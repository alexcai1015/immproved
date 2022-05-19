import React, { Component } from 'react';
import QuestionPersonal from "../../../../Components/QuestionComponents/Basic/QuestionPersonal/QuestionPersonal";

class QuestionPersonalView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Getting Started</p>
                <QuestionPersonal />
            </div>
         );
    }
}

export default QuestionPersonalView;
