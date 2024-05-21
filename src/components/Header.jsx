import logo from '../assets/logo.png'

const Header = ({ children }) => {
    const reloadPage = () => {
        window.location.reload()
    }

    return(
        <nav id="navbar" className="sticky top-0 h-fit w-[100vw] bg-navy">
            <div className="flex py-6 pl-3 pr-6 text-xl">
                <div className="w-[55%] pl-40 mobile-lg:!pl-10">
                    <img onClick={reloadPage} src={logo} alt="logo" className="w-10 h-10 hover:cursor-pointer" />
                </div>
                <div className="w-[45%] text-right mobile-lg:!hidden">
                    <div className="flex justify-evenly md:text-base md:py-2">
                        {children}
                    </div>  
                </div>
            </div>
        </nav>
    )
}

export default Header