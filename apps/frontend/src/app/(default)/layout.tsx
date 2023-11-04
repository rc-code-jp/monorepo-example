export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Default Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
