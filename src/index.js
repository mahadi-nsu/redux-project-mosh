import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  bugRemoved,
  getUnresolvedBugs,
  bugAssignedToUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(userAdded({ name: "user-1" }));
store.dispatch(userAdded({ name: "user-2" }));

store.dispatch(bugAdded({ description: "New bug 1" }));
store.dispatch(bugAdded({ description: "New bug 2" }));
store.dispatch(bugAdded({ description: "New bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 2 }));

store.dispatch(projectAdded({ description: "this is subject one!" }));

// console.log(store.getState().entities.bugs);

// const unresolvedBugs = store
//   .getState()
//   .entities.bugs.filter((bug) => !bug.resolved);
// console.log(unresolvedBugs);

// console.log(store.getState());
const unersolvedBugs = getUnresolvedBugs(store.getState());
console.log(unersolvedBugs);
