'use client';

import Footer from '@/components/Footer/Footer';
import { Navigation } from '@/components/Navigation';
import SectionContainer from '@/components/SectionContainer';
import siteMetadata from '@/data/siteMetadata';
import { Analytics, AnalyticsConfig } from 'pliny/analytics';
import React, { useState } from 'react'

const ClientLayout = ({
    children,
    
  }: {
    children: React.ReactNode;
    
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [navOpen , setNavOpen] =  useState<boolean>(false);
    const [isLangBtnHovered , setIsLangBtnHovered] = useState(false);
    const [langOpen , setLangOpen] =  useState<boolean>(false);
    const langToggle = ()=>setLangOpen(!navOpen);
  return (
<>

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
          <Footer footerBg='red'  />

</>
  )
}

export default ClientLayout