// "/" is rewritten to /site.html in next.config.js.
// This fallback only renders if the rewrite is ever removed.
export default function Page() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <a href="/site.html">Open the portfolio</a>
    </main>
  );
}
