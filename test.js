const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

describe("Post User reqres", function() {
    it("Success register - 200" , async function(){
        const response = await request
        .post("/api/users")
        .send({name : "faris",
        job: "soft eng"});

        expect(response.body.name).to.eql("faris");
        expect(response.body.job).to.eql("soft eng");
    })
})


const petstore = require("supertest")("https://dummyjson.com");
describe("Get Product ", function() {
    it("Success get data - 200" , async function(){
        const response = await petstore
        .get("/products/1");

        expect(response.body.title).to.eql("iPhone 9");
        expect(response.body.price).to.eql(549);
    })
})
