import {mount} from "@vue/test-utils";
import Blog from "../../src/Blog.vue";
describe("Blog", () => {
    const wrapper = mount(Blog, {});
    it("Makes sure the blog header 'Blog List' is rendered", async () => {
        expect(wrapper.find("h1").html()).toEqual('<h1>Blog List</h1>');
    });

    it("Makes sure the button to 'Hello' blog page is rendered", async () => {
        expect(wrapper.find("button").html()).toEqual('<button>Hello</button>');
    });
});