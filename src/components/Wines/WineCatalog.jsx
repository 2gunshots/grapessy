"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import floral from "../../../public/floral1.png";

const WineCatalog = () => {
    const wines = [
        {
            name: "Syrah",
            description: "Distinctive Red Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420187/bbc6oenpmclqybyrrmhe_roe7o3.webp",
            stock: true,
        },
        {
            name: "Navire",
            description: "Fine Ruby Port Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420183/vvnt5n179ebelmqhzknw_dkebrq.webp",
            stock: true,
        },

        {
            name: "Aarya Dynasty",
            description: "Rose Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774501368/aarya_pappli.webp",
            stock: true,
        },
        {
            name: "Virgin Shiraj",
            description: "Red Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420186/wf7jwfrqbsir56t6twwy_bp51kc.webp",

            stock: true,
        },
        {
            name: "Shantavi",
            description: "White Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420181/ebrxyl1p134wrh8ijbqv_jex7ox.webp",
            stock: true,
        },
        {
            name: "Papillon White",
            description: "Fortified White Wine",
            sizes: "180ml / 375ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420182/vhgnvg6nfxyjawtpil9q_keeyag.webp",
            stock: true,
        },
        {
            name: "Papillon Red",
            description: "Fortified Red Wine",
            sizes: "180ml / 375ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420181/fyoczhldqgvkchodyafo_q60deh.webp",
            stock: true,
        },
        // {
        //     name: "La Zulu",
        //     description: "Zulu",
        //     sizes: "180ml / 375ml",
        //     image: zulu,
        //     stock: true,
        // },
        {
            name: "Teenager",
            description: "Red Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420181/nbdfjp1mh3pf75pjucfa_hjt1xq.webp",
            stock: false,
        },
        {
            name: "Rahino",
            description: "Sparkling Wine",
            sizes: "375ml / 750ml",
            image: "https://res.cloudinary.com/dzovabwvn/image/upload/v1774420185/rkobxfybc1zzpeu8gayo_eckfbk.webp",
            stock: false,
        },
    ];
    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(Math.floor(Math.random() * (wines.length - 2)));
    }, []);
    return (
        <div className="relative lg:grid-cols-12 grid-container w-full">
            <Image
                src={floral}
                alt="Corner floral art"
                width={400}
                className="absolute hidden lg:block mix-blend-multiply left-0 translate-y-15 lg:translate-y-15 xl:translate-y-20  lg:scale-160 xl:scale-180 -translate-x-20 lg:translate-x-0 xl:translate-x-15  pointer-events-none"
            />

            <div className="col-span-6 lg:col-start-3 lg:col-span-4 flex items-center justify-end mx-3">
                <ul className=" ">
                    {wines.map((wine, index) => {
                        const isActive = index === active;
                        return (
                            <li
                                key={wine.name}
                                onMouseEnter={() => {
                                    setActive(index);
                                }}
                                onClick={() => setActive(index)}
                                className={`font-garamond font-extralight text-2xl sm:text-4xl md:text-6xl text-right hover:italic text-[#222222] cursor-pointer whitespace-nowrap ${isActive && "italic text-black"}`}
                            >
                                {wine.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div
                className={`  border-l  relative overflow-hidden col-span-6 lg:col-span-4  w-full ${!wines[active].stock && "opacity-75"}`}
            >
                <div className=" h-full flex flex-col px-5">
                    <h3 className="font-garamond text-base sm:text-lg md:text-2xl ">
                        {wines[active].name}
                    </h3>
                    <p className="font-inter text-[11px] md:text-sm">
                        {wines[active].description}
                    </p>
                    <p className="font-inter text-[9px] md:text-xs">
                        {wines[active].stock
                            ? wines[active].sizes
                            : "Out of Stock"}
                    </p>
                    <Image
                        src={wines[active].image}
                        height={2203}
                        width={800}
                        alt={wines[active].name}
                        className={`z-5 h-full min-h-90 max-h-100 sm:max-h-120 sm:min-h-120 md:min-h-130 md:max-h-130 lg:max-h-150 w-auto object-contain transition-opacity duration-300 pointer-events-none`}
                    />
                </div>
            </div>
            {/* <div className="relative row-start-1 lg:row-start-0 col-span-full lg:col-span-3 lg:col-start-9">
                <p className="lg:text-xl text-sm font-inter lg:ml-1 lg:mt-25 lg:mr-5">
                    Our wines are all about great taste and easy moments,
                    whether you're celebrating or just relaxing.We produce our
                    grape wines during the main season beginning around January,
                    while our fruit wines are made year round using the freshest
                    seasonal fruits.
                </p>
                <Image
                    src={floral1}
                    alt="Corner floral art"
                    width={400}
                    className="absolute hidden lg:block mix-blend-multiply  bottom-0 translate-x-50 md:scale-130 lg:scale-140 xl:scale-160 pointer-events-none "
                />
            </div> */}
        </div>
    );
};

export default WineCatalog;
