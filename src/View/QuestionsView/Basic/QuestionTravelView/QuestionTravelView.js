import React, { Component } from 'react';
import QuestionTravel from "../../../../Components/QuestionComponents/Basic/QuestionTravel/QuestionTravel"

class QuestionTravelView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="question-area">
                <p className="section-label">Travel</p>
                <QuestionTravel />
            </div>
         );
    }
}

export default QuestionTravelView;
