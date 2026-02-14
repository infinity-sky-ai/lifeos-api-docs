export const metadata = {
  title: "LifeOS API Documentation",
  description: "API reference for the LifeOS platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
