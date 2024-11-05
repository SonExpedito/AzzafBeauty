import React from "react";
import girlpng from "../assets/img/girl.png"


const Parte4 = () => {

    const Fashion = `Transforme seu estilo e realce sua essência com os produtos que são 
    o desejo de toda mulher. Nossa linha de cosméticos foi criada para proporcionar a beleza 
    e a confiança que você merece, destacando o melhor de você em cada momento.`

    return(
        <>
            <div className="banner-review w-full flex flex-row-reverse justify-cente items-center bg-gradient-to-br from-gray-100 to-gray-100 rounded-3xl overflow-hidden">
                    <div className="side-container h-full w-1/2 text-containerside flex flex-col gap-2 justify-center px-12">
                            <h1 className="font-bold capitalize text-3xl"> O Desejo de toda mulher</h1>
                            <p className="text-base">{Fashion} </p>
                    </div>
                    <div className="side-container h-full w-1/2 img-containerside flex items-center justify-center bg-gray-200">
                            <img src={girlpng} className="h-full w-full object-cover" />
                    </div>
            </div>
        
        </>

    )


}

export default Parte4;