import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "../../app/_components/Text/Text";

describe("Text", () => {
  it("renders children in a p element by default", () => {
    const { container } = render(<Text>Hello</Text>);
    expect(container.querySelector("p")).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders as a different element with the as prop", () => {
    const { container } = render(<Text as="span">Span text</Text>);
    expect(container.querySelector("span")).toBeInTheDocument();
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });

  it("renders as div when specified", () => {
    const { container } = render(<Text as="div">Div text</Text>);
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("passes through additional props", () => {
    render(<Text data-testid="custom">Props</Text>);
    expect(screen.getByTestId("custom")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    const { container } = render(<Text className="custom-class">Styled</Text>);
    const el = container.querySelector("p");
    expect(el).toHaveClass("custom-class");
  });
});
