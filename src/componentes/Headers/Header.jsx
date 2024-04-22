import "./Header.css"
const Header = () => {
    return (
        <header className="w-full m-0 p-0 h-16 md:h-[120px] relative">
            <img className="h-full w-full object-cover" src="/public/images/more/15.jpg" alt="" />
            <div className="flex items-center justify-center gap-4 absolute top-4 left-12 md:left-[140px] lg:left-1/3">
                <img className="w-8 h-8 md:w-20 md:h-20" src="/public/images/more/logo1.png" alt="" />
                <h1 className="text-white text-3xl md:text-6xl rancho-regular">Espresso Emporium</h1>
            </div>
        </header>
    );
};

export default Header;