import React, { Component } from 'react'

class Result extends Component {
    
    render() { 
        return (
          <div style = {{border: '1px solid #d9d9d9', width: '520px', padding: '5px', marginTop: '10px'}} >
            <div style = {{ textAlign: 'left', marginTop: '-15px', color: 'green'}}>
                <h3> Ответы: </h3>
            </div>
            
            { this.output() }
            { this.commonResult() }
            
            <div style = {{ textAlign: 'right' }}>
              <button onClick = { this.props.repeat } > повторить </button>
            </div>
          </div>
        );
    }

    output =()=> {
        return (
            this.props.curTestsList.map((item, index) => {
                return (
                    <div key={ index } style = {{ textAlign: 'left' }} >
                        <div>
                            <b> {index + 1}. { item.question } </b>
                        </div>
                        {
                            ( Number( this.props.userAnswers[index] ) === Number( item.correct ) ) ?
                                <div style = {{ color: 'green'}}>
                                    Верно: { item.answers[item.correct] }
                                </div> :
                                <div>
                                    <div style = {{ color: 'red'}}>
                                        Не верно: { item.answers[this.props.userAnswers[index]] }
                                    </div>
                                    <div style = {{ color: 'gray'}}>
                                        Правильный ответ: { item.answers[item.correct] }
                                    </div>
                                </div>                    
                        }
                    </div>
                )
            })
        )
    }

    commonResult =()=> {
        let allQuestions = this.props.curTestsList.length,
            allCorrect = 0
        this.props.curTestsList.map((item, index) => {
            return (
                allCorrect = ( Number( this.props.userAnswers[index] ) === Number( item.correct ) ) ?
                    allCorrect + 1 : allCorrect
            )
        })
        return (
            <div style = {{ textAlign: 'left', paddingTop: '5px', color:'green' }}>
                <b> Вы правильно ответили на {allCorrect} из {allQuestions} вопросов! </b>
            </div>
        )
    }
    
}

export default Result;