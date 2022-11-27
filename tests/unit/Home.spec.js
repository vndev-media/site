import {mount} from "@vue/test-utils";
import Home from "../../src/Home.vue";
describe("Home", () => {
    const wrapper = mount(Home, {});
    it("Makes sure the header is rendered", async () => {
        expect(wrapper.find('h1').html()).toEqual('<h1>Home</h1>');
    });
});