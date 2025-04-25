import './header.css';
export function header(): HTMLElement {
  const header = document.createElement('header');
  header.innerHTML = `<h1>Art Timeline</h1>`;
  return header;
}
