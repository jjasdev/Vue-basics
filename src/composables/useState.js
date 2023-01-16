import { reactive, readonly } from "vue";
const state = reactive({
  count: 0,
});
export function useState() {
  const addCount = () => state.count++;
  return {
    state: readonly(state),
    addCount,
  };
}
