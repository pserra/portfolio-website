import Link from 'next/link'
import { AUTHOR_NAME } from '../lib/constants'

const MainMenu = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-neutral-50 border-t border-neutral-200 bg-gradient-to-l from-blue-200 to-white-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                <path d="M8.50178 5.38707C8.80966 5.10997 8.83462 4.63576 8.55752 4.32787C8.28043 4.01999 7.80621 3.99503 7.49833 4.27213L5.76084 5.83587C5.0245 6.49853 4.41369 7.04822 3.99428 7.54679C3.55325 8.07104 3.23975 8.6343 3.23975 9.3296C3.23975 10.0249 3.55325 10.5882 3.99428 11.1124C4.41369 11.611 5.02449 12.1607 5.76083 12.8233L7.49833 14.3871C7.80621 14.6642 8.28043 14.6392 8.55752 14.3313C8.83462 14.0234 8.80966 13.5492 8.50178 13.2721L6.80531 11.7453C6.01743 11.0362 5.48623 10.5558 5.14213 10.1468C4.81188 9.7542 4.73975 9.52502 4.73975 9.3296C4.73975 9.13417 4.81188 8.90499 5.14213 8.51241C5.48623 8.10338 6.01743 7.62298 6.80531 6.91389L8.50178 5.38707Z" fill="#1C274C"/>
                <path d="M14.1795 4.27517C14.5798 4.38157 14.818 4.79234 14.7117 5.19266L10.7248 20.1927C10.6184 20.593 10.2077 20.8312 9.80735 20.7248C9.40703 20.6184 9.16877 20.2077 9.27517 19.8074L13.262 4.80735C13.3684 4.40704 13.7792 4.16877 14.1795 4.27517Z" fill="#1C274C"/>
                <path d="M15.4425 10.4983C15.7196 10.1904 16.1938 10.1654 16.5017 10.4425L18.2392 12.0063C18.9756 12.6689 19.5864 13.2186 20.0058 13.7172C20.4468 14.2415 20.7603 14.8047 20.7603 15.5C20.7603 16.1953 20.4468 16.7586 20.0058 17.2828C19.5864 17.7814 18.9756 18.3311 18.2392 18.9937L16.5017 20.5575C16.1938 20.8346 15.7196 20.8096 15.4425 20.5017C15.1654 20.1938 15.1904 19.7196 15.4983 19.4425L17.1947 17.9157C17.9826 17.2066 18.5138 16.7262 18.8579 16.3172C19.1882 15.9246 19.2603 15.6954 19.2603 15.5C19.2603 15.3046 19.1882 15.0754 18.8579 14.6828C18.5138 14.2738 17.9826 13.7934 17.1947 13.0843L15.4983 11.5575C15.1904 11.2804 15.1654 10.8062 15.4425 10.4983Z" fill="#1C274C"/>
            </svg>
            <a href="/">
                <span className="font-semibold text-xl text-black-200 tracking-tight">Paul Serra</span>
            </a>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray-500 mr-4">
                Blog
            </a>
            <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray-500 mr-4">
                About
            </a>
            <a target="_blank" href="https://calendly.com/pserra" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray-500 mr-4">
                Schedule
            </a>
            </div>
            <div>
            <a target="_blank" href="https://www.linkedin.com/in/paul-serra-a348587/" className="inline-block text-lg px-2 py-2 leading-none border rounded hover:border-slate-100 hover:bg-gradient-to-l hover:from-amber-200 hover:to-amber-300 hover:border-amber-900 hover:bg-amber-300 text-black border-black hover:border-transparent hover:text-blue-900 hover:bg-white mt-4 lg:mt-0">LinkedIn&nbsp;
            <svg className="float-right" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"/>
            <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"/>
            <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
            </svg>

            </a>
            </div>
        </div>
    </nav>
  )
}

export default MainMenu
