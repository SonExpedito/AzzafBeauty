import React from "react";
import Logo from "../assets/img/azzaflogo.png"
import Girl from "../assets/img/girlbanner.png"
import { IoBag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Banner = () => {

    const texto = `
        Beleza elevada ao essencial. Inspirada na elegância minimalista e atemporal, 
        AzzafBeauty oferece uma linha de cosméticos que combina sofisticação e acessibilidade, 
        tornando a alta performance acessível a todos. Cada produto é desenvolvido com ingredientes de qualidade, 
        pensados para valorizar a sua beleza única. Redefinindo o luxo acessível, AzzafBeauty transforma o 
        cuidado diário em um ritual de confiança e expressão.
        `;

    return (
        <>
            <div className="w-full h-24 flex gap-1 navcolor items-center overflow-hidden px-12">
                <div className="w-1/2 h-full flex items-center ">
                    <img src={Logo} alt="AzzafBeauty Logo" className="h-20" />
                    <h1 className="font-extrabold italic text-xl logotext">AzzafBeauty</h1>
                </div>
                <div className="w-1/2 h-full flex items-center justify-end gap-6 px-2">
                    <IoSearchSharp className="text-2xl cursor-pointer iconesacao navbuttons" />
                    <IoBag className="text-2xl cursor-pointer iconesacao navbuttons" />
                    <FaUser className="text-xl cursor-pointer iconesacao navbuttons" />
                </div>

            </div>

            <div className="h-custombanner w-full rounded-b-2xl flex overflow-hidden  banner  rounded-3xl">
                <div className="w-1/2 h-full flex flex-col justify-center px-20 pb-20 bannertextwrapper  ">
                    <h1 className="text-4xl uppercase font-bold italic pb-4 textitles text-white">Um novo estilo</h1>
                    <p className="text-justify text-lg text-white pb-4">{texto}</p>
                    <button class="filling-button">
                        <span class="filling"></span>
                        Conheça
                    </button>

                </div>
                <div className="w-1/2 h-full flex items-center justify-center bannerimgwrapper  ">
                    <img src={Girl} className="h-5/6 rounded-md banner-img shadow-2xl" />
                </div>

            </div>

        </>

    )

}

export default Banner;