import { defineComponent } from "vue";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          <p>
            <router-link to="/">Foo</router-link>
            <router-link to="/bar">Bar</router-link>
          </p>
        </header>
        <router-view></router-view>
      </>
    );
  },
});
