import React, { Component } from "react";
import { Card } from "react-bootstrap";

import TrueFalseQuestionBody from "./TrueFalseQuestionBody";
import MultipleChoiceRadioQuestionBody from "./MultipleChoiceRadioQuestionBody";
import MultipleChoiceCheckboxQuestionBody from "./MultipleChoiceCheckboxQuestionBody";
import TextQuestionBody from "./TextQuestionBody";
import IntQuestionBody from "./IntQuestionBody";

export default class SDCQuestion extends Component {
  constructor(props){
    super(props);
    // props are expected to be: a question schema JSON which contains question id,
    // question title, question type, question text, question, options if applicable,
    // answer (if an answer has already been selected and saved), and dependent questions
    // Also, an onChange function to store this question's answer

    // Example implementation:
    // <SDCQuestion question_id="1" question_title="Title 1" question_type="true_false" question_text="Are you a student?" answer={true} />
    // <SDCQuestion question_id="2" question_title="Title 2" question_type="text" question_text="What is your name?" />
    // <SDCQuestion question_id="3" question_title="Title 3" question_type="int" question_text="What is your age?" answer={20} />
    // <SDCQuestion question_id="4" question_title="Title 4" question_type="multiple_choice_radio" question_text="Which drink do you prefer the most?" question_options={[{id: "0", value: "Water"}, {id: "1", value: "Orange Juice"}, {id: "2", value: "Coca-Cola"}]} answer="0" />
    // <SDCQuestion question_id="5" question_title="Title 5" question_type="multiple_choice_checkbox" question_text="What are your favourite foods?" question_options={[{id: "0", value: "Grilled Cheese"}, {id: "1", value: "Burger"}, {id: "2", value: "Chicken"}]} answer={["1", "2"]}/>

    this.render = this.render.bind(this);
    this.handleSelfChange = this.handleSelfChange.bind(this);
    this.handleDependentQuestionChange = this.handleDependentQuestionChange.bind(this);

    this.state = {
      is_true_false: false,
      is_multiple_choice_radio:false,
      is_multiple_choice_checkbox: false,
      is_int: false,
      is_text: false,
      answer: props.question.answerObject.answer
    }

    if (props.question.answerType.$numberInt === "4") {
      this.state["is_true_false"] = true;
    }
    else if (props.question.answerType.$numberInt === "3") {
      this.state["is_multiple_choice_checkbox"] = true;
    }
    else if (props.question.answerType.$numberInt === "2") {
      this.state["is_multiple_choice_radio"] = true;
    }
    else if (props.question.answerType.$numberInt === "1") {
      this.state["is_int"] = true;
    }
    else {
      this.state["is_text"] = true;
    }
  }

  // Handle answers for this question
  handleSelfChange(value) {
    this.setState({
      answer: value
    });

    this.props.onChange(value, this.props.question.questionID);
  }


  // Handle answers for dependent questions
  handleDependentQuestionChange(value, questionID) {
    this.props.onChange(value, questionID);
  }

  render() {

    const cardStyle = {
      borderRadius: "15px",
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: "rgb(150, 70, 200)",
      margin: "5px",
      backgroundColor: "#282c34"
    }

    let dependentQuestionComponents = []

    if (this.state.answer) {
      this.props.question.dependentQuestions.forEach((dependentQuestion) => {
        dependentQuestionComponents.push(
          <SDCQuestion question={dependentQuestion} onChange={this.handleDependentQuestionChange}/>
        );
      });
    }

    return (
      <div>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>{this.props.question.questionTitle}</Card.Title>
            <Card.Text>
              <div style={{marginBottom: "5px"}}>{this.props.question.questionText}</div>
              {this.state.is_true_false && <TrueFalseQuestionBody question_id={this.props.question.questionID} onChange={this.handleSelfChange} answer={this.state.answer}/>}
              {this.state.is_multiple_choice_radio && <MultipleChoiceRadioQuestionBody question_id={this.props.question.questionID} question_options={this.props.question.questionBody.options} onChange={this.handleSelfChange} answer={this.state.answer}/>}
              {this.state.is_multiple_choice_checkbox && <MultipleChoiceCheckboxQuestionBody  question_id={this.props.question.questionID} question_options={this.props.question.questionBody.options} onChange={this.handleSelfChange} answer={this.state.answer}/>}
              {this.state.is_int && <IntQuestionBody onChange={this.handleSelfChange} answer={this.state.answer}/>}
              {this.state.is_text && <TextQuestionBody onChange={this.handleSelfChange} answer={this.state.answer}/>}
            </Card.Text>
          </Card.Body>
          {dependentQuestionComponents}
          {this.props.children}
        </Card>
      </div>
    );
  }
}
