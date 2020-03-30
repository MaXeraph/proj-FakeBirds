const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("apiPatient testing", () => {
  it("retrieves all patients", done => {
    chai
      .request(app)
      .get("/api/v1/patient/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.include({
          _id: "5e574bf00783ca4b578354ea",
          patient_number: 0,
          name: "Mike",
          email: "mike@gmail.com",
          phone: 6471222324,
          historical_form: ["5e7907be1c9d4400001b666b", "5e7907be1c9d4400001b666b"],
          createdAt: "2020-02-27T04:56:16.147Z",
          updatedAt: "2020-02-27T04:56:16.147Z",
          __v: 0
        });
        done();
      });
  });

  it("retrieves specific patient", done => {
    chai
      .request(app)
      .get("/api/v1/patient/1")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.name).to.equal("Alex");
        done();
      });
  });
});
