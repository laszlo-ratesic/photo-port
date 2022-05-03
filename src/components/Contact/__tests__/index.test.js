import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact Form is rendering", () => {
  it("renders", () => {
    render(<ContactForm />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Submit button displays properly", () => {
    it("renders submit text", () => {
        render(<ContactForm/>)

        expect(screen.getByTestId('submitBtn')).toHaveTextContent('Submit')
    })
})