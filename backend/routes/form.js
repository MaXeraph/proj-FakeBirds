const router = require("express").Router();
let admin = require("../models/admin.model");
let form = require("../models/form.model");

// Post new XML to be processed
router.route("/import").get((req, res) => {
  // Take in XML

  // Check for duplicates + version differences

  // Process XML
  let data = {
    formID: "Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF",
    formTitle: "ADRENAL GLAND",
    diagnosticID: null,
    version: "3.003.001.REL",
    originalFile: "Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF.xml",
    property: [
      {
        name: "Copyright",
        value:
          "(c) 2019 College of American Pathologists.  All rights reserved.  License required for use."
      },
      {
        name: "GenericHeaderText",
        value: "Surgical Pathology Cancer Case Summary"
      },
      { name: "Category", value: "Endocrine" },
      { name: "OfficialName", value: "ADRENAL GLAND" },
      { name: "CAP_ProtocolName", value: "Adrenal Gland" },
      { name: "CAP_ProtocolShortName", value: "Adrenal" },
      { name: "CAP_ProtocolVersion", value: "4.0.2.0" },
      { name: "TemplateID", value: "129.100004300" },
      {
        name: "Restrictions",
        value:
          "Please refer to the cancer protocol cover page (www.cap.org/cancerprotocols) for information about which tumor types and procedures can be reported using this template."
      },
      { name: "CAP_Required", value: "true" },
      { name: "AccreditationDate", value: "11/1/2019" },
      { name: "WebPostingDate", value: "2/27/2019" },
      { name: "ApprovalStatus", value: "REL" },
      { name: "AJCC_Version", value: "8th Edition" }
    ],
    note:
      "# This checklist applies principally to adrenal carcinomas in adults. Pediatric adrenal cortical tumors have different criteria for malignancy and are, in general, treated under protocols that may differ significantly from the recommendations for adult- type tumors.",
    sections: [
      {
        sectionID: "4257.100004300",
        subSections: [],
        questions: [
          {
            questionID: "2118.100004300",
            questionText: "Tumor Site",
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [{ optionID: "2119.100004300", value: "Adrenal gland" }]
            },
            answerType: 2,
            answerObject: { questionID: "2118.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17537.100004300",
        sectionTitle: "CLINICAL",
        subSections: [],
        questions: [
          {
            questionID: "4156.100004300",
            questionTitle: "Clinical History (specify)",
            questionText: "Clinical History",
            dependentQuestions: [],
            questionBody: null,
            answerType: 0,
            answerObject: { questionID: "4156.100004300", answer: null }
          },
          {
            questionID: "53772.100004300",
            questionTitle: "Functional Status (Notes J and K)",
            questionText: "Functional Status",
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                {
                  optionID: "20900.100004300",
                  value:
                    "Urinary 17-ketosteroids increased (10 mg / g creatinine / 24 hours)"
                },
                { optionID: "20902.100004300", value: "Cushing syndrome" },
                { optionID: "20904.100004300", value: "Conn syndrome" },
                { optionID: "43052.100004300", value: "Virilization" },
                { optionID: "44618.100004300", value: "Feminization" },
                { optionID: "20906.100004300", value: "Weight loss" },
                { optionID: "20907.100004300", value: "Other (specify)" }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "53772.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17875.100004300",
        sectionTitle: "SPECIMEN",
        subSections: [],
        questions: [
          {
            questionID: "42554.100004300",
            questionTitle: "Procedure",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "50809.100004300",
                  value: "Percutaneous needle biopsy"
                },
                {
                  optionID: "46633.100004300",
                  value:
                    "Endoscopic directed biopsy (specify radiographic technique)"
                },
                { optionID: "2122.100004300", value: "Adrenalectomy, total" },
                {
                  optionID: "2121.100004300",
                  value: "Adrenalectomy, partial"
                },
                { optionID: "2123.100004300", value: "Other (specify)" },
                { optionID: "2124.100004300", value: "Not specified" }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "42554.100004300", answer: null }
          },
          {
            questionID: "52756.100004300",
            questionTitle: "Specimen Laterality",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                { optionID: "2126.100004300", value: "Right" },
                { optionID: "2127.100004300", value: "Left" },
                { optionID: "56812.100004300", value: "Bilateral" },
                { optionID: "2128.100004300", value: "Not specified" },
                { optionID: "20866.100004300", value: "Other (specify)" }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "52756.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17876.100004300",
        sectionTitle: "TUMOR",
        subSections: [],
        questions: [
          {
            questionID: "59852.100004300",
            questionTitle: "Histologic Type (Notes C through E)",
            questionText: "Histologic Type",
            dependentQuestions: [
              {
                questionID: "43670.100004300",
                questionTitle: "Histologic Type Comments",
                questionText: null,
                dependentQuestions: [],
                questionBody: null,
                answerType: 0,
                answerObject: {
                  questionID: "43670.100004300",
                  answer: null
                }
              }
            ],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "2117.100004300",
                  value: "Adrenal cortical carcinoma"
                },
                {
                  optionID: "46925.100004300",
                  value: "Adrenal cortical carcinoma, oncocytic type"
                },
                {
                  optionID: "44449.100004300",
                  value: "Adrenal cortical carcinoma, myxoid type"
                },
                {
                  optionID: "59162.100004300",
                  value: "Adrenal cortical carcinoma, sarcomatoid type"
                }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "59852.100004300", answer: null }
          },
          {
            questionID: "49275.100004300",
            questionTitle: "Histologic Grade (Notes C through E)",
            questionText: "Histologic Grade",
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "53603.100004300",
                  value: "Low grade (<= 20 mitoses / 50 high-power fields)"
                },
                {
                  optionID: "48634.100004300",
                  value: "High grade (> 20 mitoses / 50 high-power fields)"
                },
                {
                  optionID: "54648.100004300",
                  value: "Cannot be assessed (explain)#"
                }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "49275.100004300", answer: null }
          },
          {
            questionID: "2129.100004300",
            questionTitle: "Tumor Size (Note A)",
            questionText: "Tumor Size",
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "2131.100004300",
                  value: "Greatest dimension in Centimeters (cm)"
                },
                {
                  optionID: "2130.100004300",
                  value: "Cannot be determined (explain)"
                }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "2129.100004300", answer: null }
          },
          {
            questionID: "40496.100004300",
            questionTitle: "Tumor Weight (Note B)",
            questionText: "Tumor Weight",
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                { optionID: "44761.100004300", value: "Specify weight (g)" },
                { optionID: "57476.100004300", value: "Cannot be determined" }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "40496.100004300", answer: null }
          },
          {
            questionID: "51265.100004300",
            questionTitle: "Tumor Extension",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                {
                  optionID: "44186.100004300",
                  value: "No evidence of primary tumor"
                },
                {
                  optionID: "50695.100004300",
                  value:
                    "Tumor confined to adrenal cortex without invasion through tumor capsule (if present)"
                },
                {
                  optionID: "39537.100004300",
                  value: "Tumor invades into or through the adrenal capsule"
                },
                {
                  optionID: "52315.100004300",
                  value: "Tumor invades into extra-adrenal structures (specify)"
                },
                {
                  optionID: "56271.100004300",
                  value: "Tumor invades into other adjacent organ(s)"
                },
                { optionID: "51911.100004300", value: "Cannot be assessed" }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "51265.100004300", answer: null }
          },
          {
            questionID: "39990.100004300",
            questionTitle: "Lymphovascular Invasion (Note F)",
            questionText: "Lymphovascular Invasion",
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                { optionID: "2159.100004300", value: "Not identified" },
                {
                  optionID: "52962.100004300",
                  value:
                    "Large vessel invasion, renal vein (including when identified clinically)"
                },
                {
                  optionID: "59454.100004300",
                  value:
                    "Large vessel invasion, vena cava (including when identified clinically)"
                },
                {
                  optionID: "43597.100004300",
                  value: "Large vessel invasion, not otherwise specified"
                },
                {
                  optionID: "55828.100004300",
                  value: "Microscopic angioinvasion"
                },
                { optionID: "45031.100004300", value: "Lymphatic invasion" },
                { optionID: "2161.100004300", value: "Cannot be determined" }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "39990.100004300", answer: null }
          },
          {
            questionID: "48491.100004300",
            questionTitle: "Tumor Description",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                { optionID: "20863.100004300", value: "Hemorrhagic" },
                { optionID: "20864.100004300", value: "Necrotic" },
                { optionID: "20865.100004300", value: "Other (specify)" }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "48491.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17878.100004300",
        sectionTitle: "MARGINS",
        subSections: [],
        questions: [
          {
            questionID: "2153.100004300",
            questionTitle: "Margins",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                { optionID: "2154.100004300", value: "Uninvolved by tumor" },
                { optionID: "2155.100004300", value: "Involved by tumor" },
                { optionID: "2157.100004300", value: "Cannot be assessed" },
                { optionID: "20852.100004300", value: "Not applicable" }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "2153.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17881.100004300",
        sectionTitle: "LYMPH NODES",
        subSections: [],
        questions: [
          {
            questionID: "1867.100004300",
            questionTitle: "Regional Lymph Nodes",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                {
                  optionID: "1868.100004300",
                  value: "No lymph nodes submitted or found"
                }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "1867.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "2136.100004300",
        sectionTitle:
          "PATHOLOGIC STAGE CLASSIFICATION  (pTNM, AJCC 8th Edition) (Note G)",
        subSections: [],
        questions: [
          {
            questionID: "20880.100004300",
            questionTitle: "?TNM Descriptors",
            questionText: "TNM Descriptors",
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                { optionID: "22897.100004300", value: "?Not applicable" },
                {
                  optionID: "20890.100004300",
                  value: "m (multiple primary tumors)"
                },
                { optionID: "20891.100004300", value: "r (recurrent)" },
                { optionID: "20892.100004300", value: "y (post-treatment)" }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "20880.100004300", answer: null }
          },
          {
            questionID: "2137.100004300",
            questionTitle: "Primary Tumor (pT)",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "2142.100004300",
                  value: "pTX: Primary tumor cannot be assessed"
                },
                {
                  optionID: "20889.100004300",
                  value: "pT0: No evidence of primary tumor"
                },
                {
                  optionID: "2138.100004300",
                  value:
                    "pT1: Tumor <= 5 cm in greatest dimension, no extra-adrenal invasion"
                },
                {
                  optionID: "2139.100004300",
                  value: "pT2: Tumor > 5 cm, no extra-adrenal invasion"
                },
                {
                  optionID: "2140.100004300",
                  value:
                    "pT3: Tumor of any size with local invasion, but not invading adjacent organs"
                },
                {
                  optionID: "2141.100004300",
                  value:
                    "pT4: Tumor of any size with invasion of adjacent organs (kidney, diaphragm, pancreas, spleen, or liver) or large blood vessels (renal vein or vena cava)"
                }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "2137.100004300", answer: null }
          },
          {
            questionID: "2143.100004300",
            questionTitle: "Regional Lymph Nodes (pN) (Note H)",
            questionText: "Regional Lymph Nodes (pN)",
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "2144.100004300",
                  value: "pNX: Regional lymph nodes cannot be assessed"
                },
                {
                  optionID: "2145.100004300",
                  value: "pN0: No regional lymph node metastasis"
                },
                {
                  optionID: "2146.100004300",
                  value: "pN1: Metastasis in regional lymph node(s)"
                }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "2143.100004300", answer: null }
          },
          {
            questionID: "2149.100004300",
            questionTitle: "?Distant Metastasis (pM) (Note I)",
            questionText: "Distant Metastasis (pM)",
            dependentQuestions: [],
            questionBody: {
              is_radio: true,
              is_checkbox: false,
              options: [
                {
                  optionID: "20895.100004300",
                  value:
                    "?Not applicable - pM cannot be determined from the submitted specimen(s)"
                },
                {
                  optionID: "2151.100004300",
                  value: "pM1: Distant metastasis"
                }
              ]
            },
            answerType: 2,
            answerObject: { questionID: "2149.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17884.100004300",
        sectionTitle: "ADDITIONAL FINDINGS",
        subSections: [],
        questions: [
          {
            questionID: "39188.100004300",
            questionTitle: "Additional Pathologic Findings",
            questionText: null,
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                { optionID: "2163.100004300", value: "None identified" },
                { optionID: "20897.100004300", value: "Hemorrhage" },
                { optionID: "20898.100004300", value: "Cystic change" },
                { optionID: "20854.100004300", value: "Calcifications" },
                { optionID: "2167.100004300", value: "Other (specify)" }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "39188.100004300", answer: null }
          }
        ]
      },
      {
        sectionID: "17880.100004300",
        sectionTitle: "SPECIAL STUDIES",
        subSections: [],
        questions: [
          {
            questionID: "42054.100004300",
            questionTitle: "Ancillary Studies (Note L)",
            questionText: "Ancillary Studies",
            dependentQuestions: [],
            questionBody: {
              is_radio: false,
              is_checkbox: true,
              options: [
                {
                  optionID: "54683.100004300",
                  value: "Ki-67 labeling index (%) (specify)"
                },
                {
                  optionID: "54436.100004300",
                  value: "Reticulin stain (specify type(s) and result(s))"
                },
                {
                  optionID: "52023.100004300",
                  value: "Other (specify type and result)"
                }
              ]
            },
            answerType: 3,
            answerObject: { questionID: "42054.100004300", answer: null }
          }
        ]
      }
    ],
    comment: {
      questionID: "2168.100004300",
      questionTitle: "?Comment(s)",
      questionText: "Comment(s)",
      dependentQuestions: [],
      questionBody: null,
      answerType: 0,
      answerObject: { questionID: "2168.100004300", answer: null }
    },
    copyrightFooter:
      "(c) 2019 College of American Pathologists.  All rights reserved.  License required for use."
  };

  // upload to Atlas
  try {
    form.collection.insertOne(data);
    form
      .findOne({ formID: "Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF" })
      .then(data => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all available fillout forms
router.route("/").get((req, res) => {
  try {
    admin.findOne().then(data => {
      res.json({
        allForms: data["allForms"]
      });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get fillout form specifically @formID
router.route("/:formID").get((req, res) => {
  try {
    form.findOne({ formID: req.params.formID }).then(data => {
      res.json(data);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
