'use client';
import 'css/tailwind.css';
import 'css/extractedStyles.css';
import 'css/globals.css';


import 'pliny/search/algolia.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata' 
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation';
import { useState } from 'react';
import Footer from '@/components/Footer/Footer';


const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [navOpen , setNavOpen] =  useState<boolean>(false);
  const [isLangBtnHovered , setIsLangBtnHovered] = useState(false);
  const [langOpen , setLangOpen] =  useState<boolean>(false);
  const langToggle = ()=>setLangOpen(!navOpen);

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <div className="flex  flex-col justify-between font-sans">
            
              <div className="transparent-lang" onClick={()=>setLangOpen(!langOpen)}>
            </div>
            <div className="transparent-menu" onClick={()=>setNavOpen(!navOpen)}>
            </div>
            <div className="transparent-logo" onClick={()=>{}}>
            </div>
  
              <Navigation section={'dark'} navOpen={navOpen} langOpen={langOpen} setLangOpen={setLangOpen} setNavOpen={setNavOpen} isHovered={isHovered} setIsHovered={setIsHovered} isLangBtnHovered={isLangBtnHovered} setIsLangBtnHovered={setIsLangBtnHovered} />
                <main className="mb-auto">{children}</main>
          
            </div>
          </SectionContainer>
          <Footer  />

        </ThemeProviders>
      </body>
    </html>
  )
}
