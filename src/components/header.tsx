import { MenuAlt3Icon } from '@heroicons/react/outline'
import Typewriter from 'typewriter-effect'
import { appGradientTxt } from '../app.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../hooks/on-screen'
import { XIcon } from '@heroicons/react/solid'
import { useHideOnClickOutside } from '../hooks/hide-on-click-outside'

type CSS = React.CSSProperties

interface IconConfig {
  icon: IconDefinition,
  link: string
}

interface NavConfig {
  name: string,
  link: string
}

const shadowOverlayStyle: CSS = {
  background: "-webkit-linear-gradient(top, transparent 0%, rgba(0, 0, 0, 0.8) 100%)"
}

const spaceBg: CSS = {
  backgroundImage: 'url(assets/spaceBg.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: '50% 50%'
}

const Background = () => {
  return (
    <div className="h-full w-full overflow-hidden absolute inset-0 -z-10" style={spaceBg}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0" style={shadowOverlayStyle} />
    </div>
  )
}

const Nav = () => {
  const navItems: NavConfig[] = [
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'About',
      link: '#'
    },
    {
      name: 'Services',
      link: '#'
    },
    {
      name: 'Works',
      link: '#'
    },
    {
      name: 'Contact',
      link: '#'
    }
  ]
  const { isOnScreen, navRef: rNavRef } = useOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })

  const navRef = rNavRef as React.RefObject<HTMLDivElement>

  const { nodeRef, isVisible, setVisibility } = useHideOnClickOutside(false)

  const menuToOpenStyles = 'translate-x-0'
  const menuToCloseStyles = 'translate-x-full'
  const menuContentOpenStyles = 'opacity-100 duration-1000'
  const menuContentCloseStyles = 'opacity-0 duration-200'

  return (
    <div ref={navRef} className="px-8 py-10 w-full flex items-center z-20 md:px-12">
      <img className="h-14 inline" src="assets/logoWhite.png" />
      <button onClick={() => setVisibility(true)} className={`${isOnScreen ? 'bg-transparent' : 'bg-black'} cursor-pointer px-4 py-2 rounded-sm right-4 fixed flex items-center hover:text-white text-red-600 transition duration-200`}>
        <span className='font-medium hidden text-sm mr-4 md:inline transform duration-500'>MENU</span>
        <div className='w-8 h-8'>
          <MenuAlt3Icon className='w-full h-full' fill='white' stroke='white' />
        </div>
      </button>
      <nav ref={nodeRef} className={`${isVisible ? menuToOpenStyles : menuToCloseStyles} fixed right-0 top-0 h-full w-72 bg-zinc-900 transition p-10 flex duration-500 overflow-y-auto overflow-x-hidden`}>
        <div className={`${isVisible ? menuContentOpenStyles : menuContentCloseStyles} flex flex-grow flex-col transition-all`}>
          <div className='justify-between flex w-full items-center mt-2 mb-12'>
            <div className='text-xs uppercase text-red-600 font-semibold'>Navigation</div>
            <button onClick={() => setVisibility(false)} className='hover:bg-white rounded-sm hover:text-zinc-900 text-white p-1 transition duration-200'>
              <XIcon className='w-5 h-5' />
            </button>
          </div>
          <ul className='space-y-6'>
            {navItems.map((item, index) => (
              <li key={index + 'navItem'} className='text-white text-lg'>
                <a href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

const Content = () => {
  const adjectives = ['Creative', 'Dedicated', 'Ambitious', 'Committed', 'Enthusiastic', 'Passionate']
  const icons: IconConfig[] = [
    { icon: faFacebookF, link: '#' },
    { icon: faTwitter, link: '#' },
    { icon: faInstagram, link: '#' },
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/keyshawn-butts/' }
  ]
  const buttons = ['View Resume', 'Contact Me']
  return (
    <div className='w-full relative flex flex-col items-center flex-grow justify-center xs:items-start xs:px-8 sm:justify-start sm:pt-24 sm:px-12 lg:container lg:mx-auto lg:px-36'>
      <h3 className='text-sm xs:text-md md:text-lg text-zinc-500 font-bold mb-4'>Hello.</h3>
      <div className='text-white text-2xl xs:text-4xl md:text-5xl lg:text-6xl'>
        <Typewriter onInit={(tw) => {
          tw.typeString('<span>My name is <span class="' + appGradientTxt + '">Keyshawn.</span></span>')
            .pauseFor(2000)
            .deleteAll('natural')
          tw.typeString(`<span>I am <span class="${appGradientTxt}">${adjectives[0]}.</span></span>`)
            .pauseFor(1000)
            .deleteChars(adjectives[0].length + 1)
          for (let adj of adjectives.slice(1)) {
            tw.typeString(`<span class="${appGradientTxt}">${adj}.</span>`)
              .pauseFor(1000)
              .deleteChars(adj.length + 1)
          }
          tw.start()
        }} options={{
          autoStart: true,
          loop: true,
          delay: 75
        }} />
      </div>
      <div className='flex flex-col space-y-4 mt-14 sm:space-y-0 sm:flex-row sm:space-x-8'>
        {buttons.map((name, index) => (
          <button key={index + 'button'} className={`rounded-sm py-3 px-10 sm:px-6 bg-transparent border-2 text-white border-white hover:bg-white hover:text-zinc-900 transition duration-300`}>
            {name}
          </button>
        ))}
      </div>
      <ul className='absolute hidden xs:inline-block inset-y-24 right-6 lg:right-0 space-y-3'>
        {icons.map((config, index) => (
          <li key={index + 'icon'}>
            <a href={config.link}>
              <FontAwesomeIcon icon={config.icon} inverse className="w-4 h-4 p-2 rounded-full md:border-2 border-white hover:bg-white hover:text-zinc-900 cursor-pointer transition duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative h-screen flex flex-col overflow-x-hidden overflow-y-auto">
      <Background />
      <Nav />
      <Content />
    </div>
  )
}