import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/classNames/tests/renderWithTranslations/renderWithTranslations";
import { Sidebar } from "./Sidebar";

describe("Sidebar.test", () => {
  test("Render ", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Render ", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});