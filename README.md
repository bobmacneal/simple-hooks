# simple-hooks
This is a sample ReactJs application. It demonstrates one way to use React's built-in hooks such as _useEffect_ and _useState_, as well as shows an an example of a custom hook in function-based components. A React custom hook `useAxiosGetItems` is introduced in a service function that invokes an axios GET request. 

---
![users UsersList component](https://github.com/bobmacneal/simple-hooks/blob/master/src/images/UsersList.png)

### Custom Hook

A React custom hook `useAxiosGetItems` is demonstrated. The custom hook uses [axios](https://github.com/axios/axios) to request search results from the [Hacker News search API](https://hn.algolia.com/api). `useAxiosGetItems` is referenced by a service layer function called `searchHackerNews`. The custom hook returns search results, a loading boolean for a progress indicator, and any HTTP errors that occur during the request: `return {listItems, loading, error}`.

### Setup

1. Clone the repository: `git clone https://github.com/bobmacneal/simple-hooks-search.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn: `yarn`

### Run

- Run app locally: `yarn start`

## hat tips

- **simple-hooks** was inspired by 
[Stephen Grider's](https://github.com/StephenGrider) Udemy course [Modern React with Redux - [2019 Update]](https://www.udemy.com/react-redux/learn/v4/content) which provides a primer on React hooks: 
[Section 25: Hooks with Functional Components](https://www.udemy.com/react-redux/learn/v4/overview). [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data/) by [Robin Wieruch](https://github.com/rwieruch) also informed this example.

- **simple-hooks** uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), the "Fake Online REST API for 
Testing and Prototyping", to make `axios` GET requests to fetch _posts, todos, users,_ and _photos_ data from a remote API.

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
