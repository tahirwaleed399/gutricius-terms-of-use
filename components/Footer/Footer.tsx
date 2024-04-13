import React, { useState } from "react";
import FooterShape from "./FooterShape";
// import { useTranslations } from "use-intl";
import { twMerge } from 'tailwind-merge';

const Footer: React.FC = () => {
  // const t = useTranslations('Index');
  const [isButtonHovered, setButtonHovered] = useState(false);

  const autofillStyles = `
    footer input:-webkit-autofill,
    footer input:-webkit-autofill:hover, 
    footer input:-webkit-autofill:focus, 
    footer input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${isButtonHovered ? '#f6b9ae' : '#f8e433'} inset !important;
    }
  `;
  function t(da) {
    return "dfadfas";
  }

  return (
    <footer
      id="footer"
      className="w-full relative overflow-hidden pb-10 bg-no-repeat bg-cover grid place-items-center mt-20"
    >
      <div className="max-w-[700px]">
        <h1 className="font-bold text-black text-5xl md:text-7xl text-center mb-10">
          {t('footer_heading')}
        </h1>
        <span className="text-3xl text-black">
          {t('footer_description')}
        </span>

        <form className="mx-auto mt-10 flex max-w-1xl gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            className={twMerge(`placeholder-[#453f0a] min-w-0 flex-auto rounded-xl border-0 px-3.5 py-3 text-[#453f0a] shadow-sm ring-white/10 ring-2 ring-inset text-[20px] sm:leading-6 bg-[#f8e433] ${isButtonHovered ? 'bg-[#f6b9ae] text-[#45312e] buttonHovered' : ''}`)}
            placeholder={t('email_placeholder')}
          />

          <button
            type="submit"
            className="btn-primary secondary"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            {t('button_text')}
          </button>
        </form>
      </div>
      <style>
        {autofillStyles}
      </style>
    </footer>
  );
};

export default Footer;
