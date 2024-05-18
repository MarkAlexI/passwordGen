import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import GeneratedPasswordDisplay from "../GeneratedPasswordDisplay.vue";

describe("GeneratedPasswordDisplay", () => {
  let wrapper;
  const generatedPassword = "TestPassword123";

  beforeEach(() => {
    const clipboardMock = {
      writeText: vi.fn().mockResolvedValueOnce()
    };
    const permissionsMock = {
      query: vi.fn().mockResolvedValueOnce({ state: "granted" })
    };

    Object.assign(navigator, {
      clipboard: clipboardMock,
      permissions: permissionsMock
    });

    window.alert = vi.fn();

    wrapper = mount(GeneratedPasswordDisplay, {
      props: {
        generatedPassword: generatedPassword
      }
    });
  });

  it("renders properly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Generated Password:");
    expect(wrapper.text()).toContain(generatedPassword);
    expect(wrapper.find(".copy-btn").exists()).toBe(true);
  });

  it("copies password to clipboard and shows success message", async () => {
    await wrapper.find(".copy-btn").trigger("click");

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(generatedPassword);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Content copied to clipboard!");
    expect(wrapper.find(".success").exists()).toBe(true);
  });

  it("handles clipboard write error and shows error message", async () => {
    navigator.clipboard.writeText = vi.fn().mockRejectedValueOnce(new Error("Failed to copy"));

    await wrapper.find(".copy-btn").trigger("click");

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(generatedPassword);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain("Failed to copy content!");
    expect(wrapper.find(".error").exists()).toBe(true);
  });

  it("resets copy status when generatedPassword changes", async () => {
    wrapper.setProps({ generatedPassword: "NewTestPassword456" });
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".success").exists()).toBe(false);
    expect(wrapper.find(".error").exists()).toBe(false);
  });
});
