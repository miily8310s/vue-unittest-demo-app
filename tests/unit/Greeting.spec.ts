import { render } from "@testing-library/vue";
import Greeting from "@/components/Greeting.vue";

describe("Greeting.vue", () => {
  it("renders greeting component", () => {
    const greetingText = "Vue and TDD";
    const { getByText } = render(Greeting);
    expect(getByText(greetingText).textContent).toBe(greetingText);
  });
});
