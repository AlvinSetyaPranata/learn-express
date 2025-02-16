import request from "supertest";
import app from "../src/app";


describe("Server test", () => {
    test("Check server status", async () => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
    });
})