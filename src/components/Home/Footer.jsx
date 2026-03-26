import Link from "next/link";
import ornament from "../../../public/a.png";
import o from "../../../public/o.png";
import grapessy from "../../../public/grapessy logo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full z-[-1]">
            <div
                style={{
                    // background: "radial-gradient(ellipse at center, #edeee9, #d6ccc2)"
                    // background: "radial-gradient(ellipse at center, #ffffff, #f6f6f6)"
                    background:
                        "radial-gradient(ellipse at 50% 55%, #f8f8f5 0%, #edeee9 35%, #d6ccc2 100%)",
                }}
                className="relative   p-2 md:p-5 md:h-49 flex items-center justify-center "
            >
                <div className="flex flex-col items-center gap-1">
                    <Image
                        src={grapessy}
                        width={85}
                        alt="Grapessy's Logo"
                        className="hidden md:block mix-blend-multiply scale-x-110  select-none opacity-85"
                    />
                    <h3 className="font-shippori text-sm sm:text-lg md:text-xl lg:text-1.5xl xl:text-2xl  md:-mt-1 select-none opacity-85">
                        Grapessy Wines and Beverages
                    </h3>
                    <div className="flex justify-center items-center gap-2">
                        <Image
                            src={o}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rotate-y-180 -rotate-12 mix-blend-multiply w-8 sm:w-15 md:w-22.5 select-none  opacity-85"
                            alt="scrollwork"
                        />
                        <div className=" text-[8px] sm:text-[11px] lg:text-xs font-montserrat  mt-1 select-none opacity-85">
                            Certified Winery & Vineyard
                        </div>
                        <Image
                            src={o}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className=" mix-blend-multiply rotate-12 w-8 sm:w-15 md:w-22.5 select-none opacity-85"
                            alt="scrollwork"
                        />
                    </div>

                    <Image
                        src={ornament}
                        width={155}
                        alt="Vintage Ornament"
                        className="absolute hidden md:block rotate-y-180 right-0  translate-x-5 top-0 mix-blend-multiply select-none opacity-85"
                    />
                    <Image
                        src={ornament}
                        width={155}
                        alt="Vintage Ornament"
                        className="absolute hidden md:block left-0  -translate-x-5 top-0 mix-blend-multiply select-none opacity-85"
                    />
                </div>
            </div>
        </footer>
    );
}

{
    /*
    divide
    */
}

// export default function Footer() {
//     const menu = [
//         // { label: "Winery", href: "/winery" },
//         // { label: "Vineyard", href: "/vineyard" },
//         // { label: "Resort", href: "/resort" },
//         // { label: "Wine Collection", href: "/wines" },
//         // { label: "Our Story", href: "/about" },
//         // { label: "Visit Us", href: "/visit" },
//         { label: "Contact Us", href: "/contact" },
//     ];
//     return (
//         <footer className="border-y-[0.5px] grid grid-cols-4 gap-5  font-inter min-h-[250px] mt-5">
//             <div className="md:border-r-[0.5px] col-span-full md:col-span-1 md:col-start-1 row-start-1 border-b-[0.5px] md:border-b-0  pb-5 py-5">
//                 <h5 className="mb-5 font-shippori text-lg">
//                     Grapessy Wines and Beverages
//                 </h5>
//                 <div className="text-sm">Certified winery & vineyard</div>
//             </div>
//             <div className="border-r-[0.5px] row-start-2 md:row-start-1 col-span-2 md:col-span-1 md:col-start-2 py-5">
//                 <h5 className="mb-5 font-montserrat uppercase">FIND US</h5>
//                 <Link
//                     href="https://maps.app.goo.gl/TepmCStgCCsR6Xxm8"
//                     className="hover:text-black/55 transition-colors duration-300"
//                 >
//                     <div className="text-sm">
//                         35/2 Agar, Hapusbaug <br /> Junnar, Pune
//                         <br />
//                         410502 <br /> Maharashtra, India
//                     </div>
//                 </Link>
//             </div>
//             <div className="md:border-r-[0.5px] border-t-[0.5px] md:border-t-0 col-span-full md:col-span-1 md:col-start-3 md:row-start-1 pt-5  py-5">
//                 <h5 className="mb-5  font-montserrat uppercase">MENU</h5>
//                 <ul className="grid grid-cols-2 font-montserrat text-sm">
//                     {menu.map((item) => (
//                         <li key={item.label} className="w-fit text-sm">
//                             <Link
//                                 href={item.href}
//                                 className="hover:text-black/55 transition-colors duration-300"
//                             >
//                                 {item.label}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="row-start-2 md:row-start-1 md:col-start-4 md:col-span-1 py-5">
//                 <h5 className="mb-5 font-montserrat uppercase ">SOCIAL</h5>
//                 <ul className="text-sm font-inter">
//                     <li>Instagram</li>
//                 </ul>
//             </div>
//         </footer>
//     );
// }
