# Answers

1.  What is React JS and what problems does it try and solve?
DOM operations are quite expensive in terms of performance, and any application that has much of DOM operations in the background will render slowly. If the page has data that changes over time at high rates, then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data.
React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.
React.JS, though not being an MVC framework, a lot of people considers it as the 'V' in MVC is specifically built for handling complex DOM interactions/updates.

1.  What does it mean to _think_ in react?
Thinking in React, is to break the UI Into A Component Hierarchy, so you decompose your UI and make each a self independent component, then you  think about your state and where the state should live.



1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component 

A functional component is a plain JavaScript function which accepts props as an argument and returns a React element, and which doesn’t have its own state or needs to access a lifecycle hook.

A class component requires you to extend from React.Component and create a render function which returns a React element, which allows to manipulate data/state or needs to access a lifecycle hook.

1.  Describe state.

State is a JavaScript object that stores a component’s dynamic data and determines the component’s behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

1.  Describe props.
Props is how Components get their properties. Starting from the top component, every child component gets its props from the parent. In a function component, props is all it gets passed, and they are available by adding props as the function argument:
