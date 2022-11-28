import { render, screen } from "@testing-library/react";
import { Text } from ".";

const mockStyle = {
  fontSize: "1rem",
  fontWeight: "700",
  color: "red",
  display: "block",
  textOverflow: "string",
  maxWidth: "100px",
  maxHeight: "100px",
  overflow: "visible",
  padding: "4px",
};

describe("<Text />", () => {
  it("should render component with text", () => {
    render(<Text>Text</Text>);

    const text = screen.getByText("Text");
    expect(text).toBeInTheDocument();
  });

  it("must have style passed by props", () => {
    render(<Text {...mockStyle}>Text</Text>);

    const text = screen.getByText("Text");
    expect(text).toHaveStyle(mockStyle);
  });
});
