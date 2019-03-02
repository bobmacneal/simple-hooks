# simple-hooks
This is a sample ReactJs application. It demonstrates one way to use React's built-in hooks such as _useEffect_ and _useState_, as well as shows an an example of a custom hook in function-based components. Each successful request to the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API displays a list of sample data items corresponding to the tab clicked by the user.

---
![users UsersList component](https://github.com/bobmacneal/simple-hooks/blob/master/src/images/UsersList.png)

[Material-UI](https://material-ui.com/) React components are used for design and functional simplicity.

### Custom Hook

A React custom hook `useAxiosGetItems` is demonstrated. The custom hook uses [axios](https://github.com/axios/axios) to request items from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. `useAxiosGetItems` is referenced by a service layer function called `getResources`. The custom hook returns list items, a loading boolean for a progress indicator, and any HTTP errors that occur during the request: `return {listItems, loading, error}`.

### Setup

1. Clone the repository: `git clone https://github.com/bobmacneal/simple-hooks.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn: `yarn`

### Run

- Run app locally: `yarn start`

### Hat Tips

- **simple-hooks** was inspired by 
[Stephen Grider's](https://github.com/StephenGrider) Udemy course [Modern React with Redux - [2019 Update]](https://www.udemy.com/react-redux/learn/v4/content) which provides a primer on React hooks: 
[Section 25: Hooks with Functional Components](https://www.udemy.com/react-redux/learn/v4/overview). [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by [Robin Wieruch](https://github.com/rwieruch) also informed this example.

- **simple-hooks** uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), the "Fake Online REST API for 
Testing and Prototyping", to make `axios` GET requests to fetch _todos, posts, photos,_ and _users_ data from a remote API.

- **simple-hooks** was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- See companion [simple-hooks-search](https://github.com/bobmacneal/simple-hooks-search) for a sample search application.
