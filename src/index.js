import configureStore from "./store/configureStore";
import { bugAdded, bugResolved } from "./store/bugs";
// import { BUG_RESOLVED } from "./actionTypes";
// console.log(store);
// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });
const store = configureStore();

store.dispatch(bugAdded("New bug 1"));
store.dispatch(bugAdded("New bug 2"));
store.dispatch(bugAdded("New bug 1"));

store.dispatch(bugResolved(1));

console.log(store.getState());
