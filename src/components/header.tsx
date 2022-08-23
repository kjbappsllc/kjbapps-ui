import { MenuAlt3Icon } from '@heroicons/react/outline'

const shadowOverlayStyle: React.CSSProperties = {
  background: "-webkit-linear-gradient(top, transparent 0%, rgba(0, 0, 0, 0.8) 100%)"
}

const Nav = () => {
  return (
    <nav className="px-12 py-10 w-full flex items-center relative">
      <img className="h-14 inline" src="assets/logoWhite.png" />
      <div className='right-12 fixed flex items-center'>
        <span className='inline text-white text-sm mr-3'>MENU</span>
        <div className='w-8 h-8'>
          <MenuAlt3Icon className='w-full h-full' fill='white' stroke='white' />
        </div>
      </div>
    </nav>
  )
}

const Content = () => {
  return (
    <div className='container flex flex-col h-full mx-auto text-white px-36 pt-28'>
      <h3 className='text-6xl text-white'>Hello There.</h3>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative h-screen">
      <div className="h-full w-full overflow-hidden absolute inset-0 -z-10">
        <img className="object-cover h-full w-full" src="assets/spaceBg.jpg" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0" style={shadowOverlayStyle} />
      </div>
      <Nav />
      <Content />
    </div>
  )
}