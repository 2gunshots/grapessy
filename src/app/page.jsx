import Hero from "@/components/Home/Hero";
import WineCatalog from "@/components/Wines/WineCatalog";
import Image from "next/image";
import leaves from "../../public/leaves1.png";
import mountain from "../../public/mountain.jpg";
import arrow from "../../public/arrow.png";
import Link from "next/link";
import ProgressiveImage from "@/components/all/ProgressiveImage";
import Footer from "@/components/Home/Footer";

export default function App() {
    return (
        <>
            <div className="relative z-10 bg-[#f6f6f6] min-h-screen mb-14 sm:mb-17.5 md:mb-49 border-b shadow-[0_12px_20px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col gap-5 p-5">
                    <p className="font-garamond text-lg">
                        Grapessy is a proudly independent, family owned organic
                        winery nestled in the heart of the Sahyadri Valley, one
                        of India's most promising and diverse wine regions.
                        Rooted in tradition and driven by a passion for
                        innovation, Grapessy is committed to crafting
                        expressive, elegant wines that honour both the land and
                        the legacy of those who cultivate it.
                    </p>
                    {/* <Image
                    src={art}
                    width={1500}
                    alt="Art Display"
                    className="object-contain grayscale-0"
                /> */}
                    <div className="grayscale-25">
                        <ProgressiveImage
                            url="https://res.cloudinary.com/dzovabwvn/image/upload/v1774420193/sj8gefy4btyz40dzzcf8_ymnzsv.webp"
                            blurhash="U6BfnO9u00xa_LWVM|oL9a%0x[jat7e.Ipj["
                            width={3000}
                            height={1080}
                            alt="Grapessy's creative depiction"
                            optimize={false}
                        />
                    </div>
                </div>
                <div className="p-5">
                    {/* <div className="col-span-full md:col-span-2 flex flex-col gap-5 md:border-r-[0.5px] md:pr-5 ">
                    <h2 className="title">Founded in 2003</h2>

                    <div className="w-full rounded-sm aspect-video bg-black/5 overflow-hidden">
                        <video
                            src="https://res.cloudinary.com/dzovabwvn/video/upload/v1759829731/grapessy_2006_pfeqrb.mp4"
                            className="w-full"
                            controls
                            type="video/mp4"
                        ></video>
                    </div>
                </div> */}
                    <div className="mt-10">
                        <h1 className="title text-center">
                            Founded in <i>2003</i>
                        </h1>
                        <p className="mt-3 text-sm md:text-lg font-garamond">
                            The valley, shaped by the Sahyadri mountains, offers
                            a rare combination sunlit autumn days, cool winters
                            and dry air that protects vines from disease.
                            Farmers here know something special: great wine
                            begins in the vineyard. And sometime around 2003,
                            Mr. Abhijit Shantaram Rokade decides to turn this
                            belief into something bigger a winery that would
                            capture the spirit of the land. That's how Grapessy
                            Wines and Beverages quietly came into existence.
                            {/* <Image
                        src={leaves}
                        alt="Corner floral art"
                        width={400}
                        className="absolute hidden md:block mix-blend-multiply right-0 bottom-0  scale-120  pointer-events-none"
                    /> */}
                        </p>
                    </div>
                    <div className="w-full md:px-50 mt-5 p-5">
                        {/* <Image
                        src={mountain}
                        width={500}
                        alt="Sahyadri Mountains"
                        className="object-contain w-full"
                    /> */}
                        <ProgressiveImage
                            url="https://res.cloudinary.com/dzovabwvn/image/upload/v1774420192/fo3kqyu4oxbo2ug0k2qc_udnu9n.webp"
                            blurhash="UHC%8J_3-;Rj~qof-;j[t7D%WBM{-;Rjj[M{"
                            width={1920}
                            height={599}
                            alt="Sahyadri Mountains"
                            optimize={false}
                        />

                        <p className=" text-center italic font-garamond text-lg my-5 px-5">
                            Long before the name Grapessy Wines and Beverages
                            was spoken, the region itself was already famous for
                            growing high quality grapes.
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="title text-center">
                        Our Wine <i>Catalogue</i>
                    </h1>

                    <div className="mt-5">
                        <WineCatalog />
                    </div>
                </div>
                <div className="w-full flex flex-col   ">
                    {[
                        { title: "Stay with Us", href: "/resort" },
                        { title: "Contact Us", href: "/contact" },
                    ].map((route, index) => (
                        <Link
                            key={route.title}
                            href={route.href}
                            className="flex justify-between items-center py-5 sm:py-7 md:py-10 border-t px-10 group hover:bg-[#222222] hover:text-white cursor-pointer"
                        >
                            <h5 className="text-xl md:text-3xl font-montserrat">
                                {route.title}
                            </h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-7 md:size-11"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>

                            {/* <Image src={arrow} width={50} className="mix-blend-multiply object-contain "/> */}
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
