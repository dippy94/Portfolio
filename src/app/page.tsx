import { Metadata } from 'next';
 import HomePage from'./HomePage';

export const metadata: Metadata = {
  title: 'Dipti Moharana | UI/UX & Product Designer Portfolio',
  description: 'Portfolio of Dipti Moharana, a passionate UI/UX and Product Designer based in Bengaluru, India. Specializing in analytical rigor and editorial craft with expertise in product design, user experience, and interface design. Explore selected projects including YouTube redesign, Recipe Buzz app, LinkedIn profile redesign, and Smartwatch messaging UX.',
  keywords: 'UI/UX designer, product designer, portfolio, Bengaluru designer, user experience, interface design, product design, Dipti Moharana, design methodology, UX research',
  
  openGraph: {
    title: 'Dipti Moharana | UI/UX & Product Designer Portfolio',
    description: 'Discover the portfolio of Dipti Moharana, a UI/UX and Product Designer crafting exceptional digital experiences with analytical precision and creative excellence. Based in Bengaluru, India.',
  }
}

export default function Page() {
  return <HomePage />
}