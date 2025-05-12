export { render };

async function render(pageContext: { Page: React.ComponentType }) {
  const { Page } = pageContext;
  return { Page };
}