# Getting Started with Create React App

## what is React.js
1. React.js is open source library.For building user interfaces
   
2. React.js is a library not framework.
3. Focus on UI.React does not focus other part on the application like routing and http request.It is responsible for reach user interfaces.
4. Rich ecosystem.
5. Created and maintained by facebook.

## Technical aspect of React.js
1. React is component based Architecture
2. Reuseable component.

### React is declarative. 


## create-react-app
---
 | npx  | npm  |
 |----- | ------|
 |*npx create-react-app project_name* | npm install create-react-app -g|
 |npm package runner | *create-react-app project_name* |
 | install node | npm globally |



 ## **Component type**
 1. **Stateless Functional component**

```stateless component
//JavaScript Function

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

2. **Stateful Class Component**
```stateful class Component
//JavaScript class. class extending component class Render method returning HTML

class Welcome extends React.Component{
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```


## **Functional Component** vs **Class Component**
|        Functional           |         class       |
|     ----------              | -------             |
|Simple functions | More features rich
|Use func component as much possible | Maintain their own private data - state|
|Absence of `this ` keyword| Complex UI logic|
|Solution without using state| Provided life cycle hooks|
|Mainly responsible for the UI|     ---|
|Stateless/Dumb/Presentational| ---    |




## **`JSX`**
* Javascript `XML` (`JSX`) = Extension to the JavaScript language syntax.
* Write `XML`- like code for elements and components.
* `JSX`   tags have a tag name, attributes, and children.

### **Necessity of JSX**
* `JSX` is not necessity to write React application(we can write code without using `JSX`)
* `JSX` makes your react code simpler and elegant.
* `JSX` ultimately transpile to pure JavaScript which is understood by the browser.

### **How does `JSX` word behind the seen**

1. `JSX` is a `syntactic` sugar to write `React.createElement`
2. JSX on the other hand we will keep the code elegant,simple and readable
3. .

## **Props**


## **props vs State**
|props| state|
|-----|------|
|`props` get passed to the component| `state` is managed within the component|
|Function parameters|variables declared in the function body|
|`props` are immutable| `state` can be changed|
|`props`-Functional Components| `useState` Hooks - functional components|
|`this.prop` - class components| `this.state` - class components|
