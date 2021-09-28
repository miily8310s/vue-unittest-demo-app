import { mount } from "@vue/test-utils";
import Emitter from "@/components/Emitter.vue";

describe("Emitter", () => {
  it("2つの引数があるイベントを発火する", () => {
    const wrapper = mount(Emitter);
    wrapper.vm.emitEvent();
    wrapper.vm.emitEvent();
    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
    expect(wrapper.emitted().myEvent[1]).toEqual(["name", "password"]);
  });
});
