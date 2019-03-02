# simple-hooks
This is a sample ReactJs application that demonstrates how to use react hooks _useEffect_ and _useState_ in function-based 
components. A custom hook `useAxiosGet` is introduced in an example service function as a general pattern for axios GET requests. `useAxiosGet` returns a `{data, loading, error}` object invoked by a list component. 

---
![search Search component](https://github.com/bobmacneal/simple-hooks-search/blob/master/src/images/UsersList.png)

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
[Section 25: Hooks with Functional Components](https://www.udemy.com/react-redux/learn/v4/overview).

- **simple-hooks** uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), the "Fake Online REST API for 
Testing and Prototyping", to make `axios` GET requests to fetch _posts, todos, users,_ and _photos_ data from a remote API.

- Helpful blog [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data/) by [Robin Wieruch](https://github.com/rwieruch).

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
