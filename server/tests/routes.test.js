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

    const res = await request
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
      .set("token", token)
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
      .set("token", token)
      .send(productTest);

    expect(res.status).toEqual(200);
    expect(res.body.name).toBe(productTest.name);
  });
});

// Cart Testings
describe("Cart Endpoints", () => {
  it("Should return the newly created cart data", async () => {
    const cartData = {
      UserId: 1,
      ProductId: 1
    };

    const res = await request
      .post("/api/carts")
      .set("token", token)
      .send(cartData);
    
    expect(res.status).toEqual(201);
    expect(res.body.carts).toHaveProperty("id");
  });

  it("Should return all carts", async () => {
    const res = await request
      .get("/api/carts")
      .set("token", token);
    
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body.carts)).toBe(true);
  });

  it("Should return the specified cart", async () => {
    const res = await request
      .get("/api/carts/1")
      .set("token", token);
    expect(res.status).toEqual(200);
    expect(typeof res.body.carts).toBe("object");
  });

  it("Should return a success message of cart deletion", async() => {
    const res = await request
      .delete("/api/carts/1")
      .set("token", token);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Successfully deleted cart!");
  });
});

// Product Removal
describe("Product Deletion Endpoint", () => {
  it("Should return a success deletion message", async () => {
    const res = await request
      .delete("/api/products/1")
      .set("token", token);
    expect(res.status).toEqual(200);
    expect(res.body.message).toBe("Successfully deleted product!");
  });
});
