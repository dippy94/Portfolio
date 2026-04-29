import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Dipti Moharana Portfolio',
    template: 'Dipti Moharana Portfolio | %s',
  },
  description: 'Portfolio of Dipti Moharana, a passionate UI/UX and Product Designer based in Bengaluru, India. Specializing in analytical rigor and editorial craft with expertise in product design, user experience, and interface design. Explore selected projects including YouTube redesign, Recipe Buzz app, LinkedIn profile enhancement, and Smartwatch messaging UX.',
  keywords: 'UI/UX designer, product designer, portfolio, Bengaluru designer, user experience, interface design, product design, Dipti Moharana, design methodology, UX research',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Dipti Moharana Portfolio',
      template: 'Dipti Moharana Portfolio | %s',
    },
    description: 'Discover the portfolio of Dipti Moharana, a UI/UX and Product Designer crafting exceptional digital experiences with analytical precision and creative excellence. Based in Bengaluru, India.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
</body>
    </html>
  );
}