import { ThemeProvider } from 'next-themes';
import './globals.css';
import localFont from 'next/font/local';

const noveoLocal = localFont({
  src: '/fonts/NoveoSans-Book.ttf',
  variable: '--font-noveo-local',
});

export const metadata = {
  title: 'Matheus Barbosa',
  description: "Matheus Barbosa's developer portfolio",
  icons: {
    icon: [
      {
        url: '/favicon-light.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon-dark.png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${noveoLocal.variable} font-local`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}