"use strict";

const app = require("../app");
const request = require("supertest")(app);

let token = null;

// User Testings
describe("User Endpoints", () => {
  it("Should return an instruction to login", async () => {
    const userTest = {
      name: "Test Testing",
      email: "test@test.com",
      password: "test"
    };

    const res = await request(app)
      .post("/api/register")
      .send(userTest);

    expect(res.status).toEqual(201);
    expect(res.body.message).toBe("Please login to continue!");
  });

  it("Should return a generated token", async () => {
    const userTest = {
      email: "test@test.com",
      password: "test"
    };
    const res = await request
      .post("/api/login")
      .send(userTest);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });
});

// Product Testings
describe("Product Endpoints", () => {
  it("Should return the newly created product", async () => {
    const productTest = {
      name: "Test Name",
      description: "Test Description",
      image_url: "Test Image URL",
      price: 100,
      stock: 200
    };

    const res = await request
      .post("/api/products")
      .send(productTest);

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("Should return all products", async () => {
    const res = await request.get("/api/products");
    expect(res.status).toEqual(200);
  });

  it("Should return the specified product", async () => {
    const res = await request.get("/api/products/1");
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("name");
  });

  it("Should return the most recent updated data", async () => {
    const productTest = {
      name: "Test Name PUT",
      description: "Test Description PUT",
      image_url: "Test Image URL PUT",
      price: 200,
      stock: 400
    };

    const res = await request
      .put("/api/products/1")
      .send(productTest);

    expect(res.status).toEqual(200);
    expect(res.body.name).toBe(productTest.name);
  });

  it("Should return a success deletion message", async () => {
    const res = await request.delete("/api/products/1");
    expect(res.status).toEqual(200);
    expect(res.body.message).toBe("Successfully deleted product!");
  });
});
