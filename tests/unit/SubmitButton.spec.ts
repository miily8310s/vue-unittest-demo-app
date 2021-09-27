import { render } from "@testing-library/vue";
import SubmitButton from "@/components/SubmitButton.vue";

describe("SubmitButton.vue", () => {
  const msg = "送信する";
  const factory = (propsData?: object) => {
    return render(SubmitButton, {
      props: {
        msg,
        ...propsData,
      },
    });
  };
  it("権限がない状態のメッセージを表示する", () => {
    const { getByRole, getByTestId } = factory();
    expect(getByTestId("test-span").textContent).toBe("権限がありません");
    expect(getByRole("button").textContent).toBe("送信する");
  });
  it("権限がある状態のメッセージを表示する", () => {
    const { getByRole, getByTestId } = factory({ isAdmin: true });
    expect(getByTestId("test-span").textContent).toBe("管理者権限を実行する");
    expect(getByRole("button").textContent).toBe("送信する");
  });
});
