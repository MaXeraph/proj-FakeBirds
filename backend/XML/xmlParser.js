const fs = require("fs"),
  xml2js = require("xml2js"),
  log = console.log;

let SDCPackage_Metadata,
  XMLPackage_Metadata,
  XMLPackage_FormDesign,
  XMLPackage_Property_U,
  XMLPackage_Property,
  XMLPackage_Body_U,
  XMLPackage_Body,
  XMLPackage_Body_Metadata,
  XMLPackage_Body_ChildItems,
  XMLPackage_Body_ChildItems_Metadata,
  XMLPackage_Body_ChildItems_Section,
  XMLPackage_Body_ChildItems_Comment,
  XMLPackage_Footer_U,
  XMLPackage_Footer,
  XMLPackage_Footer_Metadata,
  XMLPackage_Footer_Property_U,
  XMLPackage_Footer_Property;

var parser = new xml2js.Parser();
fs.readFile(__dirname + "/source/1.xml", function(err, data) {
  parser.parseString(data, function(err, result) {
    //TODO: check to see if we need this data.
    // SDCPackage_Metadata = result.SDCPackage.$;

    if (result.SDCPackage) {
      XMLPackage_FormDesign = result.SDCPackage.XMLPackage[0].FormDesign;
    } else {
      XMLPackage_FormDesign = result.FormDesign;
    }
    XMLPackage_Metadata = XMLPackage_FormDesign.$;

    XMLPackage_Property_U = XMLPackage_FormDesign.Property;

    XMLPackage_Property = XMLPackage_Property_U.map(x => x.$);

    // ###################   BODY    ###################
    XMLPackage_Body_U = XMLPackage_FormDesign.Body;

    XMLPackage_Body_Metadata = XMLPackage_Body_U[0].$;

    XMLPackage_Body_ChildItems = XMLPackage_Body_U[0].ChildItems;

    let sections = XMLPackage_Body_ChildItems[0].Section;


    // ^^^^^^^^^^^^^^^^^^^   BODY    ^^^^^^^^^^^^^^^^^^^^

    // // ###################   FOOTER    ###################
    // XMLPackage_Footer_U = XMLPackage_FormDesign[0].Footer;

    // XMLPackage_Footer_Metadata = XMLPackage_Footer_U[0].$;

    // XMLPackage_Footer_Property_U = XMLPackage_Footer_U[0].Property;

    // XMLPackage_Footer_Property = XMLPackage_Footer_Property_U.map(x => x.$);

    // // ^^^^^^^^^^^^^^^^^^^   FOOTER   ^^^^^^^^^^^^^^^^^^^^

    log(JSON.stringify(buildSectionSchemas(sections)));
  });
});
/*
This function extracts questions from the raw json from xml2js.
json: string
returns list of json of questions
example [Question1, question2, [question4, [question5, question6]], question3]

*/
// pass in individual sections
function extractQuestions(section) {
  let reQuestions = [];
  let ListQuestions = section.ChildItems[0].Question;
  let ListSections = section.ChildItems[0].Section;
  if (ListQuestions != null) {
    let qs = ListQuestions.map(q =>
      parsingQuestion(q));

    reQuestions.push(qs);
  } else if (ListSections) {
    reQuestions.push(extractQuestions(ListSections));
  }
  return reQuestions;
}

function parsingQuestion(question){
/*
{
  questionID: "77894.100004300"
  questionTitle: "Clinical History:",
  dependentQuestions: ["xxx", "yyy"],
  questionBody: null,
  answerType: 0,
  answerObject: {questionID: "77894.100004300", answer: null}
}
*/
  let questionID, questionTitle, questionText, questionBody, answerType, answerObject;
  questionID = question.$.ID;
  questionTitle = question.$.title;
  questionText = null;
  questionText = question.Property ? question.Property[0].$.val : null;


  if (question.ListField) { // this is a multiple choice question
    let options = question.ListField[0].List[0].ListItem.map(item => ({optionID: item.$.ID, value: item.$.title}));
    if (question.ListField[0].$.maxSelections) {
      questionBody = {is_radio: false, is_checkbox: true, options: options};
      answerType = 3;
    } else {
      questionBody = {is_radio: true, is_checkbox: false, options: options};
      answerType = 2
    }
  } else if (question.ResponseField) {
    questionBody = null;
    answerType = 0;
  }
  // If ResponseField then text only, If ListField then multiple choice
  answerObject = {questionID, answer: null};
  return {
    questionID,
    questionTitle,
    questionText,
    dependentQuestions: question.ChildItems ? question.ChildItems[0].Question.map(q => parsingQuestion(q)) : [],
    questionBody,
    answerType,
    answerObject,
  };
}

/*
{
  sectionID: {
    type: String,
    required: true,
    unique: true
  },
  sectionTitle: {
    type: String,
    required: true
  },
  subSections: [this],
  questions: [QuestionSchema]
}
*/
// FormDesign.Body.ChildItems.Sections
function buildSectionSchemas(sectionArray) {
  let sectionID, sectionTitle, subSections, questions;
  let reSections = [];
  for (let i = 0; i < sectionArray.length; i++){
    sectionID = sectionArray[i].$.ID;
    sectionTitle = sectionArray[i].$.title;
    subSections = sectionArray[i].ChildItems.Section ? buildSectionSchemas(sectionArray[i].ChildItems.Section) : [];
    questions = extractQuestions(sectionArray[i]);
    reSections.push({sectionID, sectionTitle, subSections, questions});
  }
return reSections;
}