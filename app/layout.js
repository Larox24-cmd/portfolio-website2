export const metadata = {
  title: "Lakshanand Sugumar",
  description: "Robotics engineering student: embedded firmware, PCB design and industrial robot cells.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
