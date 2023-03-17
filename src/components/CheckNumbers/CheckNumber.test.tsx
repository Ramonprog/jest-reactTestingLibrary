// describes => descreve situações que queremos testar
// tests

import { render, screen } from "@testing-library/react";
import CheckNumber from "./index";
import userEvent from "@testing-library/user-event";

const getInput = () => {
  return screen.getByPlaceholderText("Digite o numero");
};

describe("<CheckNumber />", () => {
  test("Reders a title", () => {
    render(<CheckNumber />);

    const title = screen.getByText("Componente Par ou Ímpar");

    expect(title).toBeInTheDocument();
  });

  test("Renders an input", () => {
    render(<CheckNumber />);

    const input = getInput();
    expect(input).toBeInTheDocument();
  });

  describe("when there is no error", () => {
    test("renders the error message section empty", () => {
      render(<CheckNumber />);

      const alert = screen.getByRole("alert");

      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent("");
    });
  });

  describe("when the user types an add number", () => {
    test("renders Ímpar on the screen", () => {
      render(<CheckNumber />);

      const input = getInput();

      userEvent.clear(input);
      userEvent.type(input, "1");

      const section = screen.getByRole("presentation");

      expect(section).toHaveTextContent("Ímpar");
    });
  });
});

//aula pausada em 50 min
