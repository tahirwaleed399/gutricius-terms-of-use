import ImageAnimation from '../../../components/canvas/ImageAnimation'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import PrivacyAnimation from '@/components/canvas/PrivacyAnimation'
import fs from 'fs'
import path from 'path'

export default function Page() {
  const markdownFilePath = path.join(process.cwd(), 'content/privacy', 'privacy.md')
  const content = fs.readFileSync(markdownFilePath, 'utf-8')

  return (

      <div className="text-data-sizes ">
        <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden opacity-100 blur-sm [user-select:none] [z-index:0]">
          <PrivacyAnimation />
        </div>
        <div className="pointer-events-none fixed left-0 top-0 h-full w-full overflow-hidden [user-select:none] [z-index:2]">
          <PrivacyAnimation />
        </div>
        <div className="markdown-content mx-auto w-full max-w-screen-lg whitespace-pre-wrap px-8 py-12">
          <MarkdownRenderer content={content} />
        </div>
      </div>
   
  )
}
