const request = require("supertest");
const userController = require("../controllers/userController");

describe("DB CRUD Operations", () => {
    test("GET all users details", () => {
        return request(userController)
            .get('/getUsers')
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name:expect.any(String),
                            dateOfBirth:expect.any(String),
                            weight:expect.any(String),
                            healthCondition:expect.any(String),
                            bloodGroup:expect.any(String),
                            town:expect.any(String),
                            district:expect.any(String),
                            password:expect.any(String),
                        }),
                    ])
                );
            });
    });

});

