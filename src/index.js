import configureStore from "./store/configureStore";
import { bugAdded, bugResolved, bugRemoved } from "./store/bugs";

const store = configureStore();

store.dispatch(bugAdded({ description: "New bug 1" }));
store.dispatch(bugAdded({ description: "New bug 2" }));
store.dispatch(bugAdded({ description: "New bug 3" }));

store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 2 }));

console.log(store.getState());
