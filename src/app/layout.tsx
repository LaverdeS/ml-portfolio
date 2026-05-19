import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sebastian Laverde — ML Engineer | Agentic AI · LLM Infrastructure',
  description: 'ML Engineer with 7+ years building production AI systems. Expert in Agentic AI architectures, LLM infrastructure, RAG pipelines, and document intelligence. Available for Senior ML roles.',
  keywords: [
    'ML Engineer',
    'Machine Learning',
    'Agentic AI',
    'LLM',
    'RAG',
    'LangGraph',
    'GCP',
    'Leipzig',
    'Document Intelligence',
    'Computer Vision',
    'NLP'
  ],
  authors: [{ name: 'Sebastian Laverde Alfonso' }],
  openGraph: {
    title: 'Sebastian Laverde — ML Engineer',
    description: 'Agentic AI · LLM Infrastructure · Document Intelligence',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col font-mono bg-bg text-text antialiased scroll-smooth">
        {children}
      </body>
    </html>
  )
}
