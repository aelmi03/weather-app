function appendAllChildren(parentElement, childrenElements) {
  for (let i = 0; i < childrenElements.length; i += 1) {
    parentElement.appendChild(childrenElements[i]);
  }
}

export { appendAllChildren as default };
