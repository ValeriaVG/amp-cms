import { describe, it } from "mocha";
import { expect } from "chai";
import { routes } from "./index";

describe("health", () => {
  it("responds with ok", async () => {
    expect(
      await routes["/_health"].GET(
        {},
        {
          db: { query: async () => ({ rows: [{ status: "OK" }] }) } as any,
        }
      )
    ).to.deep.equal({ db: "OK" });
  });
});
