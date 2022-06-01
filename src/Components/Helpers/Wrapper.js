

const Wrapper = (props) => {
  return props.children
}

export default Wrapper

/*
that's also a fine method to wrap the adjacent elements around 
it also won't render as element by the browser, and we not end up with div soup

introducing fragments --> it's an empty wrapper component it doesn't render any html element to the dom but it fulfills react/jsx requirement
we can wrap the adjacent element as <React.Fragment></React.Fragment> or <></> some projects doesn't support <></> but <React.Fragment></React.Fragment> always works
we can wrap as <Fragment></Fragment> directyly but we need to import Fragment from react 

understaning react portals -->
Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
any nested component if we want it next to any other component to render we use react portals
to create a port we use <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    in index.html next to the body tag

Why React and ReactDom
The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.


 */ 