import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Heading } from "../../app/_components/Heading/Heading";

describe("Heading", () => {
  it("renders children", () => {
    render(<Heading level="1">Hello World</Heading>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders as the correct default element for each level", () => {
    const { container: c1 } = render(<Heading level="1">H1</Heading>);
    expect(c1.querySelector("h1")).toBeInTheDocument();

    const { container: c2 } = render(<Heading level="2">H2</Heading>);
    expect(c2.querySelector("h2")).toBeInTheDocument();

    const { container: c3 } = render(<Heading level="3">H3</Heading>);
    expect(c3.querySelector("h3")).toBeInTheDocument();
  });

  it("allows overriding the element with the as prop", () => {
    const { container } = render(
      <Heading level="1" as="h2">
        Override
      </Heading>,
    );
    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(container.querySelector("h1")).not.toBeInTheDocument();
  });

  it("passes through additional props", () => {
    render(
      <Heading level="1" data-testid="custom">
        Props
      </Heading>,
    );
    expect(screen.getByTestId("custom")).toBeInTheDocument();
  });

  it("merges custom className with component styles", () => {
    const { container } = render(
      <Heading level="1" className="custom-class">
        Styled
      </Heading>,
    );
    const el = container.querySelector("h1");
    expect(el).toHaveClass("custom-class");
  });
});
