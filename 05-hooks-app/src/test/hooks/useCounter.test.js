import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { state, increment, decrement, reset } = result.current;
    expect(state).toBe(0);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe de retornar el valor enviado por parametro", () => {
    const { result } = renderHook(() => useCounter(100));
    const { state } = result.current;
    expect(state).toBe(100);
  });

  test("Debe de retornar el valor incrementado en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });

    const { state } = result.current;
    expect(state).toBe(101);
  });

  test("Debe de retornar el valor decrementar en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });

    const { state } = result.current;
    expect(state).toBe(99);
  });

  test("Debe de retornar el valor reseteado luego de la incrementacion en 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      increment();
      reset();
    });

    const { state } = result.current;
    expect(state).toBe(100);
  });
});
