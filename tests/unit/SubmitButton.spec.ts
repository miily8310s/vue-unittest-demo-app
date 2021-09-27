import { render } from "@testing-library/vue";
import SubmitButton from "@/components/SubmitButton.vue";

describe("SubmitButton.vue", () => {
  it("権限がない状態のメッセージを表示する", () => {
    const msg = "送信する";
    const { getByRole, getByTestId } = render(SubmitButton, {
      props: {
        msg,
      },
    });
    expect(getByTestId("test-span").textContent).toBe("権限がありません");
    expect(getByRole("button").textContent).toBe("送信する");
  });
});
