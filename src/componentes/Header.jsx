import { useEffect, useState } from "react";
import IconMonn from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => { 

    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {

        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

    }, [darkMode]);

    return(
        <header className="container mx-auto px-4 pt-8 transition-all duration-1000" >
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                            Todo
                        </h1>
                        <botton onClick={() => setDarkMode(!darkMode)}>
                            {
                                darkMode ? <IconSun /> : <IconMonn />
                            }
                        </botton>
                    </div>
                </header>
    );
};

export default Header;