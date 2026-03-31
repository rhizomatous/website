import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Link } from "../../app/_components/Link/Link";

describe("Link", () => {
  it("renders an anchor element by default", () => {
    render(<Link href="/test">Click me</Link>);
    const link = screen.getByText("Click me");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/test");
  });

  it("renders as a different element with the as prop", () => {
    const { container } = render(<Link as="button">Button link</Link>);
    expect(container.querySelector("button")).toBeInTheDocument();
    expect(container.querySelector("a")).not.toBeInTheDocument();
  });

  it("passes through additional props", () => {
    render(
      <Link href="/test" target="_blank" rel="noopener noreferrer">
        External
      </Link>,
    );
    const link = screen.getByText("External");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("merges custom className", () => {
    render(
      <Link href="/test" className="custom-class">
        Styled
      </Link>,
    );
    const link = screen.getByText("Styled");
    expect(link).toHaveClass("custom-class");
  });
});
