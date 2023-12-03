# ReactJS

1. ### What is ReactJS?

   React is a free and open-source front-end JavaScript library for building user interfaces based
   on components. It is maintained by Meta and a community of individual developers and companies

2. ### What are the key features of ReactJS?

   The key features of ReactJS are its component-based architecture, virtual DOM implementation for
   efficient rendering, code reusability through reusable components, declarative syntax and JSX for
   easier UI development, unidirectional data flow for predictable updates, and performance
   optimization by minimizing direct DOM manipulation.

3. ### What is the difference between ReactJS and other JavaScript frameworks/libraries?

   ReactJS differs from other JavaScript frameworks/libraries in several ways. It focuses solely on
   the view layer, allowing developers to integrate it easily with other libraries or frameworks.
   React also introduces the concept of a virtual DOM, which enhances performance by minimizing
   direct manipulation of the actual DOM.

4. ### What is JSX in ReactJS?

   JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to
   describe React's object tree using a syntax that resembles that of an HTML template. It is just
   an XML-like extension that allows us to write JavaScript that looks like markup and have it
   returned from a component.

5. ### Explain the concept of virtual DOM in ReactJS.

   Virtual DOM is a lightweight copy of the actual DOM maintained by React. It allows React to
   efficiently update and render components by calculating the optimal changes needed and applying
   them to the real DOM.

6. ### What are the components in ReactJS?

   Components in ReactJS are the building blocks of the user interface. They can be thought of as
   reusable, self-contained pieces of code that encapsulate a specific functionality or UI element.

7. ### What is the significance of state in ReactJS?

   The state in ReactJS is a JavaScript object that stores data specific to a component. It
   represents the current state of the component and can be updated over time. The significance of
   state is that it allows components to manage and display dynamic data, enabling interactivity in
   the user interface.

8. ### What is the difference between props and state?

   Props (short for properties) and state are both used in ReactJS to manage data, but they serve
   different purposes. Props are used to pass data from a parent component to a child component,
   while state is used to manage and update data within a component itself.

9. ### What is the purpose of the "render" method in ReactJS?

   The "render" method in ReactJS is a crucial part of a component. It is responsible for returning
   the JSX (JavaScript XML) code that defines the structure and content of the component's UI. The
   render method is called automatically whenever there is a change in the component's state or
   props.

10. ### What are the lifecycle methods in ReactJS and how do they work?

    Lifecycle methods in ReactJS are special methods that are invoked at different stages of a
    component's lifecycle. They allow developers to perform specific actions at certain points, such
    as initializing state, updating the UI, or cleaning up resources. Examples of lifecycle methods
    include "componentDidMount," "componentDidUpdate," and "componentWillUnmount." They provide
    hooks to execute code at specific moments during the component's lifespan.

11. ### What is a higher-order component (HOC) in ReactJS?

    A Higher-Order Component (HOC) in ReactJS is a function that takes a component as input and
    returns a new enhanced component. They act as wrappers around components, enabling you to inject
    props, modify behavior, and reuse common logic across multiple components.

12. ### What is the purpose of the "key" prop in ReactJS?

    The "key" prop in ReactJS is used to uniquely identify elements in a list of components or
    elements rendered by a loop. It helps React efficiently update and re-render only the necessary
    components when the list changes.

13. ### Explain the concept of controlled and uncontrolled components in ReactJS.

    Controlled components in ReactJS are form inputs whose state is managed by React. The input
    value is bound to a state variable, and changes are handled through event handlers. Uncontrolled
    components, on the other hand, have their state managed by the DOM, and the input value is
    accessed directly. Controlled components provide more control and validation options, while
    uncontrolled components are simpler for basic scenarios.

14. ### What is the purpose of the "setState" method in ReactJS and how does it work?

    The "setState" method in ReactJS is used to update the state of a component. It is a built-in
    method provided by React's Component class. When called, "setState" triggers a re-render of the
    component, updating its UI based on the new state.

15. ### What is the significance of the "React.Fragment" component?

    "React.Fragment" is a component in ReactJS that allows you to group multiple elements without
    adding extra DOM elements. It helps keep the rendered output clean and is particularly useful
    when you don't want to introduce additional wrappers or nesting levels.

16. ### How does React handle event handling?

    React handles event handling by using synthetic events, which are cross-browser wrappers around
    native browser events. When an event is triggered, React creates a synthetic event object and
    passes it to the event handler function.

17. ### What are the differences between class components and functional components in ReactJS?

    The main difference between class components and functional components in ReactJS is the syntax
    and the way they manage state. Class components are defined using ES6 classes and have lifecycle
    methods, while functional components are defined as JavaScript functions. Class components have
    their own internal state and can use lifecycle methods like componentDidMount and
    componentDidUpdate, while functional components use React Hooks to manage state and handle side
    effects.

18. ### How can you optimize the performance of React applications?

    There are several ways to optimize the performance of React applications. Some techniques
    include: using a production build of React, minimizing the number of re-renders by using
    shouldComponentUpdate or React.memo, lazy loading components or data using code splitting,
    implementing virtualization techniques for long lists, and optimizing network requests by
    caching data or using techniques like memoization.

19. ### What is React Router and how does it work?

    React Router is a popular library in React for handling routing in a web application. It allows
    developers to create single-page applications with multiple views or pages. React Router works
    by defining routes that map to different components. When a user navigates to a specific route,
    the corresponding component is rendered

20. ### Explain the concept of React Hooks and their benefits.

    React Hooks provide a way to reuse stateful logic without writing a class component. Hooks
    enable developers to manage component state, handle side effects, and tap into the React
    lifecycle in a more straightforward and flexible manner. They offer benefits like improved code
    readability, reusability, and easier testing. Some commonly used hooks include useState,
    useEffect, and useContext.

21. ### Can web browsers read JSX directly?

    Web browsers cannot read JSX directly. This is because they are built to only read regular JS
    objects and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the
    file needs to be transformed into a regular JavaScript object. For this, we use Babel

22. ### “In React, everything is a component.” Explain.

    Components are the building blocks of a React application’s UI. These components split up the
    entire UI into small independent and reusable pieces. Then it renders each of these components
    independent of each other without affecting the rest of the UI.

23. ### What are Pure Components?

    Pure components are the simplest and fastest components which can be written. They can replace
    any component which only has a render(). These components enhance the simplicity of the code and
    performance of the application.

24. ### Why is it necessary to start component names with a capital letter?

    In React, it is necessary to start component names with a capital letter. If we start the
    component name with lower case, it will throw an error as an unrecognized tag. It is because, in
    JSX, lower case tag names are considered as HTML tags.

25. ### When do we prefer to use a class component over a function component?

    If a component needs state or lifecycle methods, we should use the class component; otherwise,
    use the function component. However, after React 16.8, with the addition of Hooks, you could use
    state, lifecycle methods, and other features that were only available in the class component
    right in your function component.

26. ### How do you handle forms in React?

    In React, you can handle forms by using controlled components. This means that the form inputs'
    values are controlled by React state. You create state variables to store the values of the form
    inputs and update the state using the onChange event. You can access and process the form data
    from the state when the form is submitted.

27. ### Explain the Flux architectural pattern.

    The Flux architectural pattern is a design pattern used in React applications for managing data
    flow. It consists of four key components: the view, actions, dispatcher, and stores. Actions
    trigger changes, which are dispatched by the dispatcher to the appropriate stores. The stores
    contain the application state and update the views. This unidirectional data flow ensures
    predictability and maintainability.

28. ### Explain the concept of context in React. How does it work?

    Context in React is a way to share data between components without explicitly passing it through
    props at each level. It allows you to create a context object that holds the shared data, which
    can be accessed by any component within its subtree. The context provider sets the value, and
    the consuming components can access it using the useContext hook.

29. ### What are portals in React? When would you use them?

    Portals in React provide a way to render children components into a different DOM node, outside
    the current component's DOM hierarchy. They allow you to render components at a different
    location in the DOM, which is useful for scenarios like modals, popovers, or tooltips, where the
    component needs to be positioned relative to a specific DOM element outside its parent.

30. ### Explain the concept of lazy loading in React.

    Lazy loading in React is a technique used to optimize performance by loading components or
    resources only when they are needed. Instead of loading all components upfront, you can
    dynamically import them using the React.lazy function and render them when required. This helps
    reduce the initial bundle size and improves the loading speed of your application.

31. ### What is useEffect hook?

    The useEffect hook is utilized for handling side effects in React components. It enables you to
    perform tasks like data fetching, subscriptions, or DOM manipulation.

32. ### What is the role of the useReducer hook in React? How does it differ from the useState hook?

    The useReducer hook serves as an alternative to useState for managing complex state logic. It
    takes a reducer function and an initial state, returning the current state value and a dispatch
    function. By dispatching actions to the reducer, state updates can be controlled and organized
    in a more structured manner.

33. ### Describe the purpose of the useRef hook.

    The useRef hook is employed to create mutable values that persist across renders in a React
    component. It is commonly used for accessing DOM elements or storing any mutable value that
    doesn't need to trigger a re-render. useRef allows components to retain a reference to a
    specific value or element throughout their lifecycle.

34. ### What is the purpose of the useMemo hook? How does it help optimize performance in React?

    The useMemo hook is designed for memoizing expensive calculations or function calls in React. It
    takes a function and a dependency array, returning a memoized value. By specifying the
    dependencies, the memoized value is recalculated only when the dependencies change, helping to
    optimize performance by avoiding unnecessary computations.

35. ### When would you use the useCallback hook in React? How does it differ from the useMemo hook?

    The useCallback hook in React is like useMemo, but it memoizes functions instead of values. It's
    handy when passing callbacks to child components because it avoids unnecessary re-renders. By
    memoizing the function, it ensures that the same function instance is returned as long as the
    dependencies (inputs) remain unchanged. This optimization can improve performance in certain
    situations by preventing unnecessary function recreations.

36. ### What happens when you call setState?

    The state property is updated in a React component with the object passed into setState, and
    this is done asynchronously. It tells React that this component and its children need to be
    re-rendered, but React may not do this immediately.

37. ### What is `children` prop in React?

    The `children` prop in React allows you to pass content or components as a nested element to
    another component, making it flexible and reusable. It enables you to include and render dynamic
    content within a component by placing it between the opening and closing tags of that component.

38. ### What are stateless components?

    If the behaviour of a component is independent of its state then it can be a stateless
    component. You can use either a function or a class for creating stateless components. But
    unless you need to use a lifecycle hook in your components, you should go for function
    components.

39. ### What are stateful components?

    If the behaviour of a component is dependent on the state of the component then it can be termed
    as stateful component. These stateful components are either function components with hooks or
    class components.

40. ### What is the impact of indexes as keys?

    Using indexes as keys in React can cause problems. When components are rendered using indexes as
    keys, React may not properly update or reorder them when the order changes. This can result in
    incorrect rendering, loss of component state, and slower performance. It's better to use unique
    and stable identifiers as keys to avoid these issues and ensure that components are updated
    correctly.

41. ### What is prop drilling in react?

    Prop drilling in React refers to the process of passing down props (properties) from a parent
    component to a deeply nested child component, even if the intermediate components do not need or
    use those props. This can lead to a cluttered and less maintainable codebase, as props need to
    be passed through multiple layers of components, making it harder to understand and modify the
    code.

42. ## How can we avoid prop drilling?

    Prop drilling can be avoided by using React's Context API or state management libraries like
    Redux, which allow for more efficient and organized sharing of data across components.

43. ### How would you prevent a component from rendering in React?

    To prevent a component from rendering in React, you can use conditional rendering. You can wrap
    the component's JSX code inside an if statement or a ternary operator, where you specify a
    condition. If the condition evaluates to true, the component will render; otherwise, it won't.
    This allows you to control when and under what circumstances the component should be displayed.
    By dynamically adjusting the condition, you can easily show or hide the component based on
    certain logic or user interactions.

44. ### What do these three dots (...) in React do?

    The three dots (...) in React, called the spread operator, can be used to make copies of objects
    or arrays. With objects, it lets you create a new object by copying properties from an existing
    object and adding or changing specific ones. For arrays, it allows you to create a new array by
    combining elements from different arrays. The spread operator is handy for manipulating data in
    React and simplifies tasks like updating component state or merging objects with new properties.

45. ### Why React uses className over class attribute?

    React uses `className` instead of `class` in HTML because `class` is a reserved keyword in
    JavaScript. Using `class` would cause conflicts with JavaScript syntax. So, to avoid issues,
    React uses `className` for specifying CSS classes on elements. This allows developers to apply
    CSS classes to React components without running into conflicts or JavaScript errors.

46. ### Why we should not update state directly?

    Updating the state directly in ReactJS is not recommended because it can cause unexpected issues
    and make it hard to track changes. React provides the setState() method for updating the state,
    which ensures proper handling of updates, triggers component re-rendering, and maintains state
    management integrity.

47. ### What is StrictMode in React?

    StrictMode in React is a component that helps catch potential problems in your code by
    performing extra checks during rendering, highlighting issues and encouraging best practices.

48. ### What's wrong with using Context in React?

    Context in React is not inherently bad, but it should be used carefully. Using Context
    extensively can make your code harder to understand and maintain. It may also cause unnecessary
    re-rendering and may not be the best choice for managing global state in complex applications.
    So we should consider other state management options like Redux for larger projects.

49. ### Does React re-render all components and sub components every time setState is called?

    No, React does not re-render all components and subcomponents every time setState is called. It
    only re-renders the components that are affected by the state change, optimizing performance by
    avoiding unnecessary updates.

50. ### Explain why and when would you use `useMemo()`?

    You would use `useMemo()` in React when you want to optimize performance by memoizing the result
    of a function or computation. It is used to avoid unnecessary calculations or expensive
    operations by caching the computed value until its dependencies change. By using `useMemo()`,
    you can ensure that the computation is only performed when necessary, reducing the workload on
    the application and improving efficiency.

51. ### When shall we use useReducer hook in ReactJS?

    The useReducer hook in ReactJS is typically used when you have complex state logic that involves
    multiple related values or when the state transitions are more intricate. It is a good choice
    when you find that managing state with the useState hook becomes cumbersome and leads to complex
    and nested code.

52. ### How does React renderer work exactly when we call setState?

    When you use setState in React, it triggers a process called reconciliation. React compares the
    old and new state, figures out what changed, and updates only the necessary parts of the user
    interface. It does this by creating a virtual copy of the user interface called the virtual DOM
    and then efficiently applying the required changes to the actual web page. This helps React make
    updates quickly and keeps your app running smoothly.

53. ### what are styled component?

    Styled components are a way to style React components by writing CSS directly in JavaScript.
    They allow you to create reusable styled elements and easily manage styles within your
    components. It improves code organization and makes styling more readable and maintainable.

54. ### What are the advantages of styled components?

    Styled components in React offer advantages such as component-based styling, improved
    readability, scoped styles, support for dynamic styles, reusability, theme support, and better
    performance. They enhance code organization, make styles more maintainable, and provide a
    seamless integration between styling and component logic.

55. ### What are the advantages of styled components?

    Styled components in React can be more complex and have a higher learning curve compared to
    traditional CSS stylesheets. Defining styles within JavaScript may require developers to adapt
    their workflow and understand CSS-in-JS concepts. Additionally, the generated class names for
    styled components can be less readable, making debugging more challenging

56. ### Why props cannot be updated in ReactJS?

    props cannot be updated in ReactJS as due to React core philosophy focused on making the props
    as immutable and top-down thus, a parent can send any prop values to a child but child cannot
    change the received prop.

57. ### What is a dispatcher?

    It is one of the components required for building apps according to Flux architecture. In this
    pattern dispatcher is the main point which manages data exchanging inside the app.

58. ### What are Default Props?

    In React, default props are used to define default values for props in a component. Default
    props ensure that if a parent component doesn't provide a value for a certain prop, the
    component will still have a default value to work with.

59. ### What are inline conditional expressions?

    In JSX, you can include any JavaScript expression within curly braces and use it with
    conditional (ternary) operators, making inline conditional expressions an interesting topic for
    react interview questions for freshers.

60. ### What are the differences between React and React Native?

    React is a JavaScript library used for building web user interfaces, while React Native is a
    framework for developing native mobile applications. React renders components to the web browser
    using virtual DOM, while React Native renders components directly to native UI elements for iOS
    and Android platforms, resulting in a more native-like experience.

61. ### Is React a library or a Framework and why?

    React is a JavaScript library for UI building, not a framework. It focuses on the view layer,
    offering efficient ways to create UI components and manage state. Unlike frameworks, React
    doesn't provide a full set of development tools, but it excels at making interactive web
    applications with its declarative approach and efficient UI updates.

62. ### What are nested component in react?

    In React, nested components refer to the idea of rendering components within other components.
    It allows for building complex user interfaces by composing smaller components together.

63. ### Can a nested child component access the state of its sibling component?

    No, a nested child component cannot directly access the state of its sibling component. If
    sibling components need to communicate or share data, it is recommended to lift the shared state
    up to their common parent component and pass it down as props to both siblings.

64. ### What are error boundaries in react?

    Error boundaries in React are components that prevent the entire application from crashing when
    an error occurs within their child components. They act as safety nets by catching and handling
    errors, allowing developers to display fallback UI and maintain a smoother user experience.

65. ### What is React Dev Tool?

    React DevTools is a browser extension that helps developers debug and inspect React
    applications. It allows you to see the component structure, check and modify component data, and
    analyze performance. It's a useful tool for understanding how React components work and finding
    and fixing issues in your code.

66. ### What is "React Node" in react?

    In React, a "React Node" is a term used to describe any content that can be rendered within a
    React component. It could be HTML elements, other React components, text, numbers, or fragments.

67. ### Why do we need to React Router?

    It maintains consistent structure and behavior and is used to develop single-page web
    applications. Enables multiple views in a single application by defining multiple routes in the
    React application.

68. ### Explain the role of Reducer.

    Reducers are pure functions which specify how the application’s state changes in response to an
    ACTION. Reducers work by taking in the previous state and action, and then it returns a new
    state. It determines what sort of update needs to be done based on the type of the action, and
    then returns new values. It returns the previous state as it is, if no work needs to be done.

69. ### What is the use of React.cloneElement?

    React.cloneElement is a method provided by React that allows you to clone and modify a React
    element. It is typically used when you want to add or override props of a React element while
    maintaining its original type and key. This is useful when working with components that accept
    and modify their children's elements.

70. ### Can you explain React's "lifting state up" concept and why it is important?

    "Lifting state up" is a concept in React where you move the shared state of multiple components
    to their common parent component. By doing this, you establish a single source of truth for the
    shared state, allowing you to pass down the state and related functions as props to child
    components. It enables better data flow, state management, and enhances performance by reducing
    unnecessary re-rendering.

71. ### What is a ref in React and what is its purpose?

    A ref in React is a way to access and interact with the real DOM elements or React components
    directly. Its purpose is to provide a means of reading or modifying the properties, state, or
    behavior of a component outside of the typical React data flow. In simple terms, refs allow you
    to directly manipulate elements or components, like getting their values, focusing input fields,
    or triggering methods, bypassing the usual data flow of React.

72. ### How does using refs differ from traditional DOM manipulation?

    Refs in React provide a convenient and efficient way to work with elements and components,
    allowing you to easily access and modify them. It's like a special tool that React provides,
    making it easier to interact with the user interface. Traditional DOM manipulation, on the other
    hand, involves more manual and cumbersome approaches to achieve the same results.

73. ### What is the main difference between "string refs" and "callback refs" in React.

    The main difference is that string refs rely on a string identifier, while callback refs use a
    function to capture the reference. Callback refs are more flexible and allow for better control
    and manipulation of the reference, making them the preferred method in React whereas using
    string refs approach is considered legacy and is not recommended in newer versions of React.

74. ### Explain the concept of "forwarding refs" in React.

    "Forwarding refs" in React allows a parent component to pass a ref to its child component. This
    way, the parent can access and control the child's DOM element or component. It's like giving a
    special power to the parent component to interact with its child component's internals.

75. ### How do refs affect the component lifecycle in React?

    Refs in React do not directly impact the component lifecycle. They provide a way to access and
    interact with elements or components separately from lifecycle methods. Refs allow you to work
    with specific parts of the component without affecting its lifecycle or rendering.

76. ### What are the benefits of using callback refs over string refs?

    The benefits of using callback refs over string refs in React are that callback refs provide
    more flexibility and control when accessing and manipulating DOM elements. With callback refs,
    you have direct access to the actual DOM node, allowing you to perform more advanced operations.
    On the other hand, string refs are limited to identifying elements using a string name, which
    can be less versatile and may not provide the same level of control.

77. ### Can we use refs with functional components in React? If yes, how?

    Yes, you can use refs with functional components in React. The `useRef` hook allows you to
    create a ref and use it within a functional component. By calling `useRef()` and assigning the
    result to a variable, you can access and manipulate the ref's current value, which can be used
    to reference elements in the component's JSX.

78. ### What are the limitations or caveats of using refs in React?

    While refs can be useful, there are limitations and caveats to consider when using them in
    React. One limitation is that refs bypass the typical data flow in React, which can make it
    harder to track and understand changes in your component's state. Additionally, overusing refs
    can lead to code that is harder to maintain and test, as it may introduce dependencies between
    different parts of your application.

79. ### How do you clean up or release the resources associated with a ref in React?

    To clean up or release resources associated with a ref in React, you can leverage the
    `useEffect` hook. Within the `useEffect` hook, you can return a cleanup function that will be
    called when the component unmounts or when the ref value changes. This allows you to handle any
    necessary cleanup operations, such as removing event listeners or cancelling timers, ensuring
    that your application's resources are properly managed.

80. ### How do you access the DOM node using refs in React?

    Accessing the DOM node using refs in React is straightforward. After creating a ref using the
    `useRef` hook or the `React.createRef()` function, you can attach the ref to a JSX element using
    the `ref` attribute. Once the component has rendered, you can access the DOM node by referring
    to the current property of the ref.

81. ### What is binding in React and why is it important?

    Binding in React ensures that a function has the correct reference to the component it belongs
    to. It's important because it allows the function to access the component's data and methods.

82. ### What happens if you don't bind a function in React? Explain the potential issues that can arise.

    If you don't bind a function in React, it may lose access to the component's instance and its
    associated data. This can result in errors or unexpected behavior when the function is called.

83. ### How can you bind a function in a React class component? Describe the different methods available.

    You can bind a function in a React class component by either using the constructor to bind the
    function explicitly or by using arrow function syntax, which automatically binds the function to
    the component instance.

84. ### What is the recommended approach for binding functions in React components?

    The recommended approach for binding functions in React components is to use arrow function
    syntax or bind the functions in the constructor. Arrow function syntax simplifies the code and
    eliminates the need for explicit binding.

85. ### Explain the difference between binding in class components and functional components in React.

    Binding functions in class components is done using the constructor or arrow function syntax,
    while functional components don't require explicit binding as they automatically bind functions
    to the component instance.

86. ### What is the difference between Element and Component in React?

    An element is a basic building block or specific part of a system or interface, like a button or
    text input field. A component, on the other hand, is a larger, self-contained entity made up of
    one or more elements, such as a navigation bar or login form. Components are reusable and
    provide specific functionality within a system. In essence, elements are smaller parts, while
    components are larger, composed entities.

87. ### How to apply validation on props in React?

    To apply validation on props in React, you can use the PropTypes library. Install it, import it
    into your component file, and define the expected props and their types using PropTypes. React
    will display warnings in the console if the provided props don't match the specified types or if
    any required props are missing.

88. ### Why is a React component declarative?

    A React component is declarative because it tells React what the UI should look like based on
    the current data. Instead of giving step-by-step instructions, we describe the desired UI state
    and let React handle the rest. It simplifies the process of building interfaces by focusing on
    "what" we want, rather than worrying about the nitty-gritty of "how" to achieve it.

89. ### What is ReactDOM package?

    The ReactDOM package in React is responsible for rendering the React components to the browser's
    DOM (Document Object Model). It provides methods and functionality for efficiently updating and
    manipulating the DOM based on changes in the React component tree. ReactDOM acts as the bridge
    between React's virtual representation of the UI and the actual HTML elements on the webpage,
    ensuring that any changes in the component hierarchy are reflected in the rendered UI.

90. ### how is React different from Angular?

    ReactJS is a JavaScript library focused on building user interfaces using reusable components,
    while Angular is a comprehensive framework following the MVC/MVVM patterns. React uses
    JavaScript and JSX, whereas Angular is based on TypeScript. React has a simpler learning curve,
    a large community, and a lightweight nature, while Angular offers a complete solution with a
    steeper learning curve, a robust ecosystem provided by Google, and built-in features. The choice
    depends on project needs, team preferences, and scalability requirements.

91. ### Explain the use of CSS modules in React.

    CSS modules in React allow you to locally scope CSS styles to specific components, preventing
    class name collisions and promoting a more modular approach to styling. By generating unique
    class names for each component, CSS modules ensure that styles defined in one component won't
    interfere with styles in another

92. ### Can you explain what custom hooks are in React and how they differ from regular hooks?

    Custom hooks in React are reusable JavaScript functions that allow you to extract logic and
    stateful behavior from components. While regular hooks like useState and useEffect are provided
    by React, custom hooks are created by developers to encapsulate specific logic that can be
    shared across multiple components.

93. ### What are the benefits of using custom hooks in React? Can you provide an example of a scenario where a custom hook would be useful?

    The benefits of using custom hooks in React are improved code organization, reusability, and
    separation of concerns. They enable you to extract complex logic into a reusable hook, reducing
    duplication and promoting cleaner, more maintainable code. For example, a custom hook for
    handling form validation can be reused in multiple forms throughout the application.

94. ### How do you create a custom hook in React?

    To create a custom hook in React, you start by defining a function with the "use" prefix, such
    as "useCustomHook." Inside the function, you can use existing React hooks and additional logic
    to encapsulate the desired state or behavior. Return any values or functions that need to be
    accessed outside the custom hook. Once defined, you can import and use the custom hook in any
    component, enabling code reuse and modularity across your React application.

95. ### Are there any limitations or considerations when using custom hooks in React? Are there any performance implications or potential pitfalls that developers should be aware of?

    Custom hooks in React don't have built-in limitations or performance issues. Just keep an eye on
    any dependencies and side effects in your custom hooks. Also, remember to follow the rules of
    hooks like calling them at the top level and avoiding conditional usage. By being aware of these
    considerations, you can effectively use custom hooks in your React applications.

96. ### What is Formik, and why would you use it in a React application?

    Formik is a powerful form management library in React that simplifies the process of handling
    forms. It provides an easier way to manage form state, handle form validation, and manage form
    submission. With Formik, you can streamline the development of forms by reducing boilerplate
    code and handling complex form-related tasks efficiently.

97. ### What are the advantages of using Formik over traditional form handling in React?

    Formik offers several advantages over traditional form handling in React. It simplifies the
    process of managing form state and reduces the need for manual state management. Formik's
    built-in validation capabilities make it easier to handle form validation without relying on
    additional libraries. Overall, Formik significantly improves the developer experience when
    working with forms in React.

98. ### What is Axios, and what problem does it solve in JavaScript or React development?

    Axios is a JavaScript library used for making HTTP requests in browsers or Node.js. It
    simplifies the process of sending and receiving data from servers, making it easier to handle
    network requests in JavaScript or React applications.

99. ### What are the advantages of using Axios over the built-in fetch API in JavaScript?

    Axios offers advantages over the built-in fetch API by providing a more convenient and
    consistent API, better error handling, support for request cancellation, and the ability to
    intercept requests and responses.

100. ### What is Material-UI, and what is its purpose in React development?

     Material-UI is a React component library that implements Google's Material Design guidelines.
     It offers pre-designed and customizable UI components, making it easier to build visually
     appealing and user-friendly interfaces. With Material-UI, developers can focus on functionality
     while simplifying the process of styling and creating responsive layouts.

101. ### What is render hijacking in react?

     Render hijacking is a technique in React that allows you to control what a component outputs
     from another component. You do this by wrapping the component in a Higher-Order Component
     (HOC). By wrapping the component, you can inject additional props or make other changes, which
     can cause the component to render differently.

102. ### What are Keyed Fragments?

     Keyed fragments in React group multiple elements without a wrapper element, improving
     performance. By assigning a unique key to each child element, efficient reordering and updating
     are ensured during rendering. The general use case is mapping a collection to an array of
     fragment

103. ### What is suspense component?

     If the module containing the dynamic import is not yet loaded by the time parent component
     renders, you must show some fallback content while you’re waiting for it to load using a
     loading indicator. This can be done using Suspense component.

104. ### Is it possible to use react without JSX?

     Yes, it's possible to use React without JSX. JSX is a syntax extension for JavaScript used to
     write HTML-like code in React. However, you can still create React elements using the
     `createElement` function provided by React, which takes the element type, props, and children
     as arguments.

     ```
     const MyComponent = () => {
     return React.createElement("div", { className: "my-class" }, "Hello, World!");
     };
     ```

105. ### Why does strict mode render twice in React?

     Strict mode in React renders components twice to provide additional checks and useful warnings.
     It acts as a safeguard that catches possible issues in your code. By rendering twice, React can
     detect and alert you about problems like unintended side effects or outdated practices. This
     way, you can fix those issues before they cause any trouble in your application, making it more
     reliable and sturdy.

106. ### What is React Fiber?

     React Fiber is a new reconciliation algorithm introduced in React 16. It is responsible for the
     efficient rendering and updating of components in React applications. React Fiber breaks the
     rendering work into smaller units called "fibers" and manages them in a priority-based manner.

107. ### How does React Fiber improve the overall performance of React applications?

     React Fiber improves performance by allowing more control over scheduling and rendering. It
     enables asynchronous rendering, which avoids blocking the main thread, resulting in a smoother
     user experience.

108. ### What is Babel in React js?

     Babel is a popular JavaScript compiler widely used in the React ecosystem. It allows developers
     to write modern JavaScript code (including the latest ECMAScript features) and transforms it
     into backward-compatible versions that can run in older browsers and environments that don't
     support those features(ES6, ES7 into plain old ES5).

109. ### What is a wrapper component in react?

     A wrapper component in React is like a parent container that wraps around other components. It
     adds extra features, behavior, or styling to the wrapped components. It acts as a higher-level
     component, enhancing the functionality of the components it contains.

110. ### Explain DOM diffing?

     DOM diffing, or reconciliation in React, is the process of comparing the previous and new
     versions of the user interface. It identifies the changes and updates needed for the actual web
     page. React determines what has changed, adds or removes elements, and updates only the
     necessary parts of the user interface. This makes the updates faster and more efficient by
     avoiding unnecessary re-rendering and manipulation of the web page.

111. ### What are the dependencies in the dependency array of the useEffect hook? How do they affect the behavior of the hook?

     Dependencies in the dependency array of the useEffect hook determine when the effect should be
     executed. If any of the dependencies change, the effect will run again. If the dependency array
     is empty, the effect will only run once.

112. ### What are some common use cases for the useEffect hook?

     Common use cases for the useEffect hook include fetching data from an API, subscribing to
     external data sources, setting up event listeners, updating the document title, and performing
     any other side effects that need to occur when the component renders or updates.

113. ### Can you explain the concept of multiple useEffect hooks in a single component? How do they interact with each other?

     Multiple useEffect hooks in a single component allow you to separate concerns and organize
     code. Each useEffect hook operates independently and is triggered based on its own specified
     dependencies. They do not interact directly with each other.

114. ## What is the purpose of the cleanup function returned by the useEffect hook? How can you utilize it effectively?

     The cleanup function returned by the useEffect hook is important for cleaning up any resources
     or subscriptions created by the effect. To perform cleanup, you simply return a cleanup
     function from the effect. The cleanup function is useful for removing event listeners,
     cancelling subscriptions, or performing other necessary cleanup tasks.

     ```
            useEffect(() => {
         const timerId = setInterval(() => {
           console.log('Running effect...');
         }, 1000);

         return () => {
          // Cleanup function: Clear interval when component unmounts
           clearInterval(timerId);
         };
       }, []);
     ```

115. ### What are the potential pitfalls or common mistakes when using the useEffect hook? How can you avoid them?

     Some common mistakes with useEffect are: forgetting dependencies, causing stale data or
     infinite loops; not cleaning up properly, leading to memory leaks; and modifying state or props
     without proper dependency management, resulting in unexpected behavior. To avoid these, include
     all dependencies, update state or props conditionally, perform cleanup operations, and handle
     errors appropriately.

116. ### What is server-side rendering (SSR) in React.js?

     Server-side rendering (SSR) in React.js is the process of rendering React components on the
     server and sending the pre-rendered HTML to the client.

117. ### Why would you choose to use server-side rendering instead of client-side rendering in React.js?

     Server-side rendering is chosen over client-side rendering in React.js for benefits like
     improved performance, SEO friendliness, and better initial page load experience.

118. ### How does server-side rendering differ from client-side rendering in React.js?

     Server-side rendering differs from client-side rendering in that the rendering process occurs
     on the server before sending the HTML to the client, whereas client-side rendering renders
     components in the browser.

119. ### Explain the benefits and drawbacks of server-side rendering in React.js.

     The benefits of server-side rendering in React.js include improved SEO, faster initial page
     load, and better performance for low-end devices. However, it can introduce more complexity and
     may not be suitable for all applications.

120. ### What are the performance implications of server-side rendering in React.js?

     Server-side rendering can improve performance by reducing the time required for the initial
     render, but it can also increase the server load and network traffic for subsequent or
     additional requests.

121. ### How can you implement server-side rendering with React.js without using frameworks like Next.js?

     To perform server-side rendering with React.js without frameworks like Next.js, you need to set
     up a Node.js server, use a build system like Webpack or Babel, and implement server-side
     rendering logic using libraries like react-dom/server.

122. ### Describe the steps involved in setting up server-side rendering with React.js from scratch.

     The steps for setting up server-side rendering with React.js from scratch involve creating a
     Node.js server, configuring a build system, creating a server-side entry point, implementing
     rendering logic, and setting up routing.

123. ### What libraries or tools can be used to perform server-side rendering with React.js?

     Libraries like react-dom/server, ReactDOMServer, and express can be used to perform server-side
     rendering with React.js.

124. ### How can you handle data fetching and asynchronous operations during server-side rendering in React.js?

     Data fetching and asynchronous operations during server-side rendering can be handled by making
     use of lifecycle methods like componentDidMount or using libraries like react-async.

125. ### What considerations should you keep in mind when implementing server-side rendering for a large-scale React.js application?

     Considerations for server-side rendering in large-scale React.js applications include
     optimizing performance, managing data fetching efficiently, and dealing with complex
     application states.

126. ### Can you explain the concept of code splitting and how it relates to server-side rendering in React.js?

     Code splitting is the process of splitting the JavaScript bundle into smaller chunks to improve
     performance. It can be utilized with server-side rendering to load only the necessary
     JavaScript code for each route or component.

127. ### How can you optimize server-side rendered React.js applications for search engine optimization (SEO)?

     To optimize server-side rendered React.js applications for SEO, ensure that important content
     is present in the initial HTML, use proper meta tags, and provide server-side rendering for
     dynamic content.

128. ### What are some common challenges or pitfalls associated with server-side rendering in React.js, and how can you address them?

     Common challenges with server-side rendering include handling client-side interactions,
     managing state across the server and client, and dealing with third-party libraries that are
     not SSR-friendly. These challenges can be addressed by using techniques like rehydration and
     carefully handling asynchronous operations.

129. ### How does server-side rendering impact the development and debugging process compared to client-side rendering?

     Server-side rendering impacts development and debugging differently from client-side rendering,
     as errors and issues can occur on both the server and the client. Proper error handling and
     debugging techniques are necessary.

130. ### Can you explain the concept of hydration in the context of server-side rendering in React.js?

     Hydration in server-side rendering refers to the process of attaching event listeners and
     reattaching React components on the client-side after the initial server-rendered HTML has been
     received. It enables interactivity and seamless transition to client-side rendering.

131. ### What are the best practices for organizing and structuring a React application?

     Best practices for organizing and structuring a React application include using a
     component-based architecture, separating concerns with folders and files, and utilizing state
     management libraries like Redux or React Context.

132. ### How do you handle authentication and authorization in React applications?

     There are two main ways to handle authentication and authorization in React applications. One
     way is to use a third-party library, such as Auth0 or Firebase. These libraries provide a
     number of features that make it easy to implement authentication and authorization in your
     application, such as user management, password hashing, and session management.

133. ### What are the pros and cons of using React in a project compared to other JavaScript frameworks?

     The pros of using React in a project include its component-based architecture, virtual DOM for
     efficient rendering, a large and active community, and the ability to create reusable UI
     components. The cons can include a steep learning curve, complex configuration for larger
     projects, and potential performance issues with improper optimization.

134. ### Why do we need Nextjs?

     Next.js is a React framework that provides server-side rendering (SSR), static site generation
     (SSG), and other features like routing and API handling. It is useful for building optimized
     and performant React applications, improving SEO, and enabling server-side functionality.

135. ### What are some of the challenges you have faced working with React?
     &nbsp; &nbsp; &nbsp; <b> Write your own answer </b>
