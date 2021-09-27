import { render } from "@testing-library/vue";
import NumberRenderer from "@/components/NumberRenderer.vue";

describe("NumberRenderer", () => {
  it("偶数をレンダー", () => {
    const { getByTestId } = render(NumberRenderer, {
      props: {
        even: true,
      },
    });
    expect(getByTestId("test-div").innerHTML).toBe("2, 4, 6, 8");
  });
  it("奇数をレンダー", () => {
    const { getByTestId } = render(NumberRenderer, {
      props: {
        even: false,
      },
    });
    expect(getByTestId("test-div").innerHTML).toBe("1, 3, 5, 7, 9");
  });
});
