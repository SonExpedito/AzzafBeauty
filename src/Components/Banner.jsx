import React from "react";
import Logo from "../assets/img/azzaflogo.png"
import Girl from "../assets/img/girlbanner.png"

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
            <div className="w-full h-24 flex gap-1 navcolor px-12 items-center overflow-hidden">
                <img src={Logo} alt="AzzafBeauty Logo" className="h-20" />
                <h1 className="font-extrabold italic text-xl">AzzafBeauty</h1>
            </div>

            <div className="h-custombanner w-full rounded-b-2xl flex overflow-hidden  banner  rounded-3xl">
                <div className="w-1/2 h-full flex flex-col justify-center px-20 pb-20 bannertextwrapper  ">
                    <h1 className="text-4xl uppercase font-bold italic pb-4 textitles text-white">Um novo estilo</h1>
                    <p className="text-justify text-lg text-white ">{texto}</p>
                </div>
                <div className="w-1/2 h-full flex items-center justify-center bannerimgwrapper  ">
                    <img src={Girl} className="h-11/12 rounded-md banner-img shadow-2xl" />
                </div>

            </div>

        </>

    )

}

export default Banner;