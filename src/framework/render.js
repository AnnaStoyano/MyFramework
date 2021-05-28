/** @jsx createElement */
/*** @jsxFrag createFragment */
import { createElement } from './element';
import { current } from './hooks';

// let Component, Target;

// export default function renderApp(componentFunction = null, targetElement = null) {
//   if (componentFunction) Component = componentFunction;
//   if (targetElement) Target = targetElement;
//   Target.innerHTML = '';
//   Target.appendChild(<Component />);
// }

/**
 * Renders a component and attaches it to the target DOM element
 * @param Component - function
 * @param target - DOM element to attach component to
 */

let timer;

export function render(Component, target) {
  function workLoop() {
    if (current.shouldReRender) {
      current.shouldReRender = false;
      target.replaceChildren(<Component />);
    }

    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(workLoop);
  }
  timer = requestAnimationFrame(workLoop);
}

export default render;
