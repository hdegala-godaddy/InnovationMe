/**
 * 
 * Common utility module, can be shared across.
 */

/**
 * 
 * @param {function to be ised } func 
 * @param {delay in number of milli seconds tobe passed to setTimeout} delay 
 */

const debounce = (func, delay) => {
    if (!func || typeof func != 'function') {
        throw new TypeError("Debounce called with  invalid functin argument");
    }

    let inDebounce = null;
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

  export default {
      debounce
  }