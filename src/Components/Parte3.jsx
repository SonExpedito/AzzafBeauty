import React, { useEffect, useRef, useState } from "react";
import Fashion from "../assets/img/fashion.png";

const Parte3 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const text = `Realce sua beleza única com nossos produtos especialmente selecionados. 
    Acreditamos que o verdadeiro diferencial está em você, e nossos cosméticos são projetados 
    para destacar o melhor de cada estilo e personalidade. Explore nossa linha e descubra o que
     faz você se sentir especial.`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 } // O threshold define a porcentagem de visibilidade necessária para acionar o efeito
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="h-scrollffect w-full flex items-center justify-center p-4">
            <div
                ref={sectionRef}
                className={`h-full w-full bannerproducts bg-gradient-to-br from-gray-500 to-gray-700 rounded-3xl relative overflow-hidden flex items-center justify-center transition-opacity duration-500 ease-in ${
                    isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <img src={Fashion} className="object-cover h-full w-full opacity-80" alt="Fashion" />
                <div className="absolute flex flex-col gap-2 bg-black bg-opacity-20 h-full w-full items-center justify-center">
                    <h1 className="font-bold text-white text-4xl text-center capitalize">O Diferencial é apenas com você</h1>
                    <p className="justify-center text-white text-justify w-2/4">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Parte3;
