import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import Book from "./components/Book";

describe("App Component", () => {
  test("renders search form", () => {
    render(<App />);
    const inputElement = screen.getByText("Search", { exact: true });
    expect(inputElement).toBeInTheDocument();
  });

  test("renders input box", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("select box is shown", () => {
    render(<App />);
    const filterElement = screen.getByText("Filter", { exact: true });
    expect(filterElement).toBeInTheDocument();
  });

  test("renders status", () => {
    render(<App />);
    expect(screen.queryByText("Loading data...")).toBeNull()
    screen.debug();
  });

  test("renders status", () => {
    render(<App />);
    expect(screen.queryByText("Please enter your search")).toBeNull();
    screen.debug();
  });


  test("renders posts if request succeeds with title", async () => {
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => [
    //     {
    //       isbn: ["9780385533225"],
    //       title: "Harry Potter",
    //       author_name: ["J. K. Rowling"],
    //       publish_date: ["21 July 2007"],
    //     },
    //   ],
    // });
    render(<App />);
    const bookElement = await screen.findAllByRole(
      "heading",
      {}
      // { timeout: 2000 }
    );
    expect(bookElement).not.toHaveLength(0);
  });
});

describe("Book Component", () => {
  test("Published Date rendered fine", () => {
    render(<Book />);
    const dateElement = screen.getByText("Published Date:", { exact: true });
    expect(dateElement).toBeInTheDocument();
  });

  test("Author rendered fine", () => {
    render(<Book />);
    const authorElement = screen.getByText("Author:", { exact: true });
    expect(authorElement).toBeInTheDocument();
  });
});
