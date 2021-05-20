let Component, Target;

export default function renderApp(componentFunction = null, targetSelector = null) {
  if (componentFunction) Component = componentFunction;
  if (targetSelector) Target = targetSelector;
  document.querySelector(Target).innerHTML = `${Component()}`;
}
