const fillInput = (selector, value) => {
    function setNativeValue(element, value) {
      const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, 'value') || {}
      const prototype = Object.getPrototypeOf(element)
      const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, 'value') || {}
    
      if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value)
      } else if (valueSetter) {
        valueSetter.call(element, value)
      } else {
        throw new Error('The given element does not have a value setter')
      }
    }
    
    // Select the textarea element
    let q = document.querySelector(selector);
    setNativeValue(q, value);
    q.dispatchEvent(new Event('input', { bubbles: true }));
    
}
fillInput("input.someReactSelector", "some value");
