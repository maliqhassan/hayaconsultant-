import './globals.css';

export const metadata = {
  title: 'Haya Consultancy — Management Consulting Agency',
  description:
    'Haya Consultancy is a full-service management consulting agency helping businesses scale, transform, and lead their markets.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
