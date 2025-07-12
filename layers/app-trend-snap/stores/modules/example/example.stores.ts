import { STORES } from "#example-layer/constants";
import { useActions } from "./example.actions";
import { useGetters } from "./example.getters";

//TODO: change the name of the store
export const useExampleStore = defineStore(STORES.EXAMPLE, () => {
  const state = reactive({});
  return {
    ...toRefs(state),
    ...useGetters(),
    ...useActions(),
  };
});
