import './globals.css';

export const metadata = {
  title: {
    default: 'The Apex Chemistry',
    template: '%s | The Apex Chemistry'
  },
  description: 'Chemistry learning portal for Classes 9–12, JEE and NEET.',
  icons: { icon: '/favicon.svg', apple: '/assets/uploaded-mark.jpg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
