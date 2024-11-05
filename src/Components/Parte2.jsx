import React from "react";
import card1 from "../assets/img/Cards/card1.png"
import card2 from "../assets/img/Cards/cards2.png"
import card3 from "../assets/img/Cards/cards3.png"
import card4 from "../assets/img/Cards/cards4.webp"

const Pt2 = () => {


    return (
        <>
            <div className="h-colections w-full flex flex-col gap-12 items-center py-20 collections-responses">
                <div className="bg-gray-800 w-96 p-4 rounded-3xl">
                    <h1 className="text-center font-bold text-3xl text-white">Nossas Coleções</h1>
                </div>
                <div className="h-fit w-full flex gap-2 items-center justify-center gap-32">

                    <div className="h-96 w-60 bg-green-300 rounded-3xl iconesacao shadow-2xl overflow-hidden">
                        <div className="w-full h-2/6 flex items-center justify-start px-4">
                            <h1 className="text-white font-bold text-2xl italic ">Perfumes</h1>
                        </div>

                        <div className="w-full h-4/6 flex items-center justify-start overflow-hidden">
                            <div className="w-1/2 h-full p-1">
                                <p className="text-white text-base">Explore nossas fragrâncias únicas e encontre a essência que reflete 
                                    sua personalidade </p>
                            </div>
                            <div className="w-1/2 h-full flex items-center">
                                <img src={card4} className="w-full h-full object-cover shadow-lg rounded-lg" alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="h-96 w-60 bg-gray-500 rounded-3xl iconesacao shadow-2xl overflow-hidden">
                        <div className="w-full h-2/6 flex items-center justify-start px-4">
                            <h1 className="text-white font-bold text-2xl italic ">Batom</h1>
                        </div>

                        <div className="w-full h-4/6 flex items-center justify-start overflow-hidden">
                            <div className="w-1/2 h-full p-1">
                                <p className="text-white text-base">Encontre o batom perfeito entre nossas cores vibrantes e acabamentos luxuosos.</p>
                            </div>
                            <div className="w-1/2 h-full flex items-center">
                                <img src={card3} className="w-full h-full object-cover shadow-lg rounded-lg" alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="h-96 w-60 bg-red-300 rounded-3xl iconesacao shadow-2xl overflow-hidden">
                        <div className="w-full h-2/6 flex items-center justify-start px-4">
                            <h1 className="text-white font-bold text-2xl italic ">Base</h1>
                        </div>

                        <div className="w-full h-4/6 flex items-center justify-start overflow-hidden">
                            <div className="w-1/2 h-full p-1">
                                <p className="text-white text-base">Descubra bases com acabamento natural em vários tons para uniformizar sua pele.</p>
                            </div>
                            <div className="w-1/2 h-full flex items-center">
                                <img src={card2} className="w-full h-full object-cover shadow-lg rounded-lg" alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="h-96 w-60 bg-indigo-300 rounded-3xl iconesacao shadow-2xl overflow-hidden">
                        <div className="w-full h-2/6 flex items-center justify-start px-4">
                            <h1 className="text-white font-bold text-2xl italic ">Rímel</h1>
                        </div>

                        <div className="w-full h-4/6 flex items-center justify-start overflow-hidden">
                            <div className="w-1/2 h-full pl-3 p-1">
                                <p className="text-white text-base">Realce seu olhar com nossos rímeis que volumizam, alongam e definem os cílios.</p>
                            </div>
                            <div className="w-1/2 h-full flex items-center">
                                <img src={card1} className="w-full h-full object-cover shadow-lg rounded-lg" alt="" />
                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </>
    )


}

export default Pt2