export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Aqui vem um layout do about</h1>
      {children}
    </>
  );
}
