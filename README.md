# simple-hooks
This is a sample ReactJs application that demonstrates how to use react hooks _useEffect_ and _useState_ in function-based 
components. A custom hook `useAxiosGet` is introduced in an example service function as a general pattern for axios GET request that returns `{data, loading, error}` object to a sample list component. 

## setup

1. Clone the repository: `git clone https://github.com/bobmacneal/simple-hooks.git`
2. Install [Yarn](https://yarnpkg.com) for package management. 
3. Install node dependencies using yarn: `yarn`

## run

- Run app locally: `yarn start`

## hat tips

- **simple-hooks** is based on the exemplary Udemy instruction of 
[Stephen Grider](https://github.com/StephenGrider). Stephen Grider's  
[Modern React with Redux - [2019 Update]](https://www.udemy.com/react-redux/learn/v4/content) now includes a helpful 
primer on React hooks: 
[Section 25: Hooks with Functional Components](https://www.udemy.com/react-redux/learn/v4/overview).

- **simple-hooks** uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), the _"Fake Online REST API for 
Testing and Prototyping"_, to fetch post, todo, and photo data from a remote API.

- **simple-hooks** was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
