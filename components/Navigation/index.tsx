import classNames from "classnames";
import Image from "next/image";
import { useState, useTransition } from "react";
import { CiGlobe } from "react-icons/ci";
import { Popover } from "react-tiny-popover";
import { languages } from "../../utils/languages";
// import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export const Navigation = ({ section , navOpen  , langOpen , setLangOpen , setNavOpen ,isHovered , setIsHovered, isLangBtnHovered  , setIsLangBtnHovered }: { section: "light" | "dark" , navOpen:boolean , langOpen : boolean , setLangOpen : any  , setNavOpen : any , isHovered : any , setIsHovered : any , setIsLangBtnHovered: any , isLangBtnHovered : any }) => {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const localActive = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(localActive);
  const changeLanguage = (newLocale : string) => {
    
    startTransition(() => {
      // Split the pathname into segments
      const segments = pathname.split('/');
      
      // Assuming the first segment could be the locale, check if it's in a valid locale format
      if (segments.length > 1 && /[a-z]{2}-[a-z]{2}/i.test(segments[1])) {
        // Replace the current locale (second segment) with the new one
        segments[1] = newLocale;
      } else {
        // If the first segment isn't a valid locale, we insert the new locale right after the initial '/'
        // Only do this if there isn't already a locale there
        segments.splice(1, 0, newLocale);
      }
  
      // Reconstruct the pathname
      const newPathname = segments.join('/');
      router.replace(newPathname, undefined);
    });
  };
  
  return (
    <nav
      className={
        "flex w-full justify-between items-center  mx-auto px-[1rem] md:px-0 " +
        section
      }
    >
      <div className="relative font-extrabold text-black">
        <Image
          alt="logo"
          height={70}
          width={120}
          objectFit="contain"
          className=" h-[110px] w-[120px] 2xl:h-[100px] 2xl:w-[150px] object-contain"
          src={`/assets/${section === "dark" ? "day" : "night"}/logo.webp`}
        ></Image>
        <div
        className={`z-20 absolute   h-full w-full rounded-full top-0 cursor-pointer`}
       
        // onClick={()=>{}}
      ></div>
      </div>

      <div className="flex items-center gap-10 ">
        
      <Popover
  isOpen={langOpen}
  
  positions={['left', 'top']} 
  padding={10}
  onClickOutside={() => setLangOpen(false)}
  content={({ position, nudgedLeft, nudgedTop }) => ( 
    <div className="languages-box">
     {languages.map((lang) => (
            <div
              key={lang.code}
              className={`language ${selectedLanguage === lang.code ? 'selected' : ''}`}
         
              onClick={() => changeLanguage(lang.code)}
            >
              <span>{lang.label}</span>
              <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" >
                <path clipRule="evenodd" d="M20.54 7.225 9.58 18.185l-6.12-6.12 1.415-1.414 4.705 4.706 9.546-9.546z"></path>
              </svg>
            </div>
          ))}
    
    
    </div>
  )}
>
  <div className={`lang-btn relative cursor-pointer ${isLangBtnHovered ? 'hovered' : ''}`} onClick={() => setLangOpen(!langOpen)}>
  <div className="h-full w-full absolute z-20 cursor-pointer inner-lang-btn"    onMouseEnter={() =>{setIsLangBtnHovered(true)}}
        onMouseLeave={() => setIsLangBtnHovered(false)} onClick={() => setLangOpen(!langOpen)}>

          </div>

  <CiGlobe color={section === 'light' ? "#ffffff" :  "#000000"}/>
  </div>
</Popover>
             <div className={`relative ${section === 'light' ? 'light' : 'dark'} hamburger-container ${navOpen ? 'navOpen' : ''}`}>
      <div
        className={`z-20 absolute  h-full w-full rounded-full duration-[800ms] extra-nav`}
        onMouseEnter={() =>{setIsHovered(true)}}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=>setNavOpen(!navOpen)}
      ></div>
      <button className={` menu__icon  ${isHovered || navOpen ? 'hovered-class' : ''}`}>
        <span></span>
        <span></span>
      </button>
    </div>

       
       
        <div className={classNames("navigation", section)}>
          <input
            type="checkbox"
            className="navigation__checkbox"
            checked={navOpen}
            id="navi-toggle"
          />
      
    
        <div className={`navigation__background ${navOpen ?  'navOpen' : ''}`}>&nbsp;</div>
       
        

          <nav className="navigation__nav">
          <div className="custom-container flex justify-between min-h-[130px] items-center">
  <div>

  </div>
 <div className={`relative ${section === 'light' ? 'light' : 'dark'} hamburger-container ${navOpen ? 'navOpen' : ''}`}>
      <div
        className={`z-20 absolute  w-20 h-20 rounded-full duration-[800ms] extra-nav`}
        onMouseEnter={() =>{ setIsHovered(true)}}
        onMouseLeave={() => setIsHovered(false)}
        onClick={()=>setNavOpen(!navOpen)}
      ></div>
      <button className={` mr-8 menu__icon  ${isHovered || navOpen ? 'hovered-class' : ''}`}>
        <span></span>
        <span></span>
      </button>
    </div>
</div>
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                 About Natous
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Your benfits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                 Popular tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                 Stories
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                 Book now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};
