// import komponen yang kana di lakukan testing
import HomePage from "../pages/index";

// plugin untuk melakukan testing
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// melakukan testing
describe("Calculator", () => {
  it("test apakah semua kompnen di render dengan baik dan benar", () => {
    render(<HomePage />);

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("input-num1")).toBeInTheDocument();
    expect(screen.getByTestId("input-num2")).toBeInTheDocument();
    expect(screen.getByTestId("button-add")).toBeInTheDocument();
    expect(screen.getByTestId("button-min")).toBeInTheDocument();
    expect(screen.getByTestId("button-mul")).toBeInTheDocument();
    expect(screen.getByTestId("button-dis")).toBeInTheDocument();
  });
});
