// import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("Should render Staff Connect", () => {
    render(<App />);
    expect(screen.getByText("Staff Connect"));
  });
});
