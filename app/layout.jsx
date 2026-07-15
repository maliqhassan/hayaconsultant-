import './globals.css';

export const metadata = {
  title: 'Haya Visa Consultancy — Pakistan to Saudi Arabia',
  description:
    'Visa consultancy and overseas employment services between Pakistan and Saudi Arabia — work visas, Umrah, visit visas, and complete documentation support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
