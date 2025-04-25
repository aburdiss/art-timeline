export function appendAllChildren(
  root: HTMLElement,
  events: HTMLElement[]
): void {
  events.map(function (eventSingle) {
    root.appendChild(eventSingle);
  });
}
