import { useCounter } from "../../hooks/useCounter";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { state, increment, decrement, reset } = result.current;
    expect(state).toBe(0);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });
});
