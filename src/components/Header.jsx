const Header = ({ children }) => {
    return(
        <nav className="sticky top-0 h-fit w-[100%] px-12 bg-navy">
            <div className="flex py-6 pl-3 pr-6 text-xl">
                <div className="w-[55%] pl-40"> LOGO </div>
                <div className="w-[45%] text-right">
                    <div className="flex justify-evenly">
                        {children}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header