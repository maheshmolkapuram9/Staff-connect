import { describe, expect, it } from "vitest";
import Logo from "../components/Logo";
import { render, screen } from "./test-utils";
import Navbar from "../components/Navbar";
import DashboardBanner from "../components/DashboardBanner";
import QuickSummaryCard from "../components/QuickSummaryCard";
import PrimaryButton from "../utils/PrimaryButton";

describe("Dashboard test cases", () => {
  it("should show app name, Staff Connect", () => {
    render(<Logo handleMenuToggle={() => {}} />);
    const heading = screen.getByText("Staff Connect");
    expect(heading).toBeInTheDocument();
  });

  it("should render all navbar headings", () => {
    render(<Navbar showNavOnMobile={true} handleMenuToggle={() => {}} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(5);
    expect(items[0]).toHaveTextContent("Dashboard");
    expect(items[1]).toHaveTextContent("Staff Directory");
    expect(items[2]).toHaveTextContent("IT Requests");
    expect(items[3]).toHaveTextContent("Tickets");
    expect(items[4]).toHaveTextContent("To Do List");
  });

  it("should show welcome text with overview description on the dashboard banner", () => {
    render(<DashboardBanner />);
    const welcometext = screen.getByText("Welcome,");
    const overViewDescription = screen.getByText(
      "Here's an overview of your day.",
    );
    expect(welcometext).toBeInTheDocument();
    expect(overViewDescription).toBeInTheDocument();
  });

  it("should show the number of open tickets and Open Tickets title", () => {
    render(<QuickSummaryCard quantity={5} title="Open Tickets" imgPath="" />);
    const quantity = screen.getByText(5);
    const title = screen.getByText("Open Tickets");
    expect(quantity).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should show title of the button", () => {
    render(<PrimaryButton title="Submit IT request" linkPath="" />);
    const title = screen.getByText("Submit IT request");
    expect(title).toBeInTheDocument();
  });
});
