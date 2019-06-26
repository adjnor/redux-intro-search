import { createStore } from 'redux';

const initialState = {
  searchQuery: '',
  min: 0,
  max: 100000,
  inStock: false,
  advancedSearch: false,
};

const reducer = (state, action) => {
  if (action.type === '@@INIT') {
    return { ...state, example: 'hello' };
  }
  if (action.type === 'query') {
    return { ...state, searchQuery: action.q };
  }
  if (action.type === 'minimum-price') {
    return { ...state, min: action.price };
  }
  if (action.type === 'maximum-price') {
    return { ...state, max: action.price };
  }
  if (action.type === 'in-stock') {
    return { ...state, inStock: action.inStock };
  }
  if (action.type === 'clear') {
    return { ...initialState };
  }
  if (action.type === 'advanced-search') {
    return { ...state, advancedSearch: !state.advancedSearch };
  }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
/* meta
    ({
        text: {
            1: `In this file we create and export the store. We need to use createStore to create the store.`,
            2: `The reducer is a function that takes a state and an action. An action is just an object with a \`type\` property.
            It potentially returns a new object. The state of the store will then refer to this new object.
            To activate the reducer, a component needs to call this.props.dispatch and pass the action.
            The reducer then gets called with the current state of the store and the action. The reducer
            is referenced when the store is created

            `,
            3: `If the \`type\` of the action is \`"minimum-price"\` then we create and return a new object with
            the same properties as state but with the minimum-price property set to the price property of the action.
            Looking at Search.jsx, we see that this action is created and dispatched whenever the user interacts with the minimum price
            input box.
            `,
            4: `If the \`type\` of the action is \`"maximum-price"\` then we create and return a new object with
            the same properties as state but with the minimum-price property set to the price property of the action.
            Looking at Search.jsx, we see that this action is created and dispatched whenever the user interacts with the maximum price
            input box.
            `,
            5: `If the type is unrecognized, return the state as is. This is useful since
            redux sends an action with type \`"@@INIT"\` when the store is created. It isn't a particularly
            useful action to treat.

            `,
            6: `We create the store. We need to provide the store as well as the initial state of the store which contains
            three properties.`,
            7: `This argument lets you use redux developer tools, which is very, very useful. You can just
            copy paste it.`
        }
    })
    */
