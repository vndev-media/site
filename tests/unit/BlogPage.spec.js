import {shallowMount} from "@vue/test-utils";
import BlogPage from "../../src/BlogPage.vue";
describe("BlogPage", () => {
    const wrapper = shallowMount(BlogPage, {
        global: {
            mocks: {
                content: "# Hello",
                $route: {params: { page: ""}}
            }
        }
    });
    it("Makes sure the md header is rendered", async () => {
        expect(wrapper.find('#undefined-page').html()).toContain("Undefined page!");
    });
});