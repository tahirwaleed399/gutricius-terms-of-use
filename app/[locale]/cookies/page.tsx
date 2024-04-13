import ImageAnimation from "../../../components/canvas/ImageAnimation"
import MarkdownRenderer from "@/components/MarkdownRenderer";
import fs from 'fs';
import path from 'path';

export default function Page({params : {locale}}) {

  const markdownFilePath = path.join(process.cwd(), 'content/cookies', `${locale}.md`);
  const content = fs.readFileSync(markdownFilePath, 'utf-8');

  return (
    <>
    <div className="text-data-sizes ">
    <div className="fixed [z-index:0] overflow-hidden top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-100 blur-sm">
    <ImageAnimation />
    </div>
    <div className="overflow-hidden fixed [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none">
    <ImageAnimation />
    </div>
    <div className="mx-auto w-full max-w-screen-lg px-8 py-12 whitespace-pre-wrap markdown-content">
    <MarkdownRenderer content={content} />
    </div>
    </div>
    </>
  );
}
