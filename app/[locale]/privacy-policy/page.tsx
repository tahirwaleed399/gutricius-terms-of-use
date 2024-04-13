import ImageAnimation from '../../../components/canvas/ImageAnimation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PrivacyAnimation from '@/components/canvas/PrivacyAnimation'
import fs from 'fs'
import { redirect } from 'next/navigation'
import path from 'path'
import { locales } from 'utils/languages'
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from 'next-intl'


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export default function Page({
     params : {locale},
     
   }: any) {
  const markdownFilePath = path.join(process.cwd(), 'content/privacy', `${locale}.md`)
  const content = fs.readFileSync(markdownFilePath, 'utf-8')


  unstable_setRequestLocale(locale);
  
  return (

      <div className="text-data-sizes ">
        <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden opacity-100 blur-sm [user-select:none] [z-index:0]">
          <PrivacyAnimation />
        </div>
        <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden [user-select:none] [z-index:2]">
          <PrivacyAnimation />
        </div>
        <div className="markdown-content mx-auto w-full max-w-screen-lg whitespace-pre-wrap px-8 py-12">
          {locale}
          <MarkdownRenderer content={content} />
        </div>
      </div>
   
  )
}
