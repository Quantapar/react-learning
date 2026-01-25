function customRender(reactElement, root) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.childern;
  //   document.setAttribute("href", reactElement.props.href);
  //   document.setAttribute("target", reactElement.props.target);
  //   root.appendChild(domElement); // problem with this approach is that we don't know how many attributes , element will provide us

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childern;

  for (const prop in reactElement.props) {
    if (prop === "childern") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  root.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https.//google.com",
    target: "_blank",
  },
  childern: "Click me to visit google",
};

const root = document.getElementById("root");

customRender(reactElement, root);
