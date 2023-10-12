import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";


describe("App", () =>{
    const { asFragment } = render(<Search />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});