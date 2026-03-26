import RouteLayout from "@/layout/RouteLayout";
import Image from "next/image";
import drape from "../../../public/drape.png";
import ResortServices from "./ResortServices";
import ProgressiveImage from "@/components/all/ProgressiveImage";
import media from "./media";
import ProgressiveVideo from "@/components/all/ProgressiveVideo";

export default function Resort() {
    const shuffled = [...media].sort(() => Math.random() - 0.5);
    return (
        <div className=" ">
            <div className="relative grid-container mb-5  pb-7 p-5 px-5">
                <div className="col-span-full lg:col-span-7 flex flex-col gap-5 font-garamond text-lg">
                    <h1 className="title">
                        Stay with <i>Us!</i>
                    </h1>
                    <p className="">
                        At Grapessy Vineyards and Agrotourism, we have a small
                        resort right next to our vineyards. Guests can stay
                        here, enjoy the fresh air, and relax in the middle of
                        nature and grape farms.
                    </p>
                    <p>
                        We also specialize in hosting events. Whether you're
                        planning a private celebration, corporate gathering, or
                        special occasion, our dedicated event hall and team are
                        here to make your event memorable.
                    </p>
                    <p className="">
                        Enjoy a comfortable and well-equipped stay.
                    </p>
                    <div>
                        <ResortServices />
                    </div>
                </div>
                <Image
                    src={drape}
                    className="w-120 lg:w-137.5 absolute rotate-y-180 hidden lg:block mix-blend-multiply  right-0 top-3"
                    alt="Drape art"
                />
            </div>
            <div className=" columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-5 px-5 pb-5">
                {shuffled.map((media, index) => {
                    const [width, height] = media.dimensions.split("x") || [];
                    return (
                        <div key={media.title} className="mb-5">
                            {media.type === "image" ? (
                                <ProgressiveImage
                                    url={media.url}
                                    width={width}
                                    height={height}
                                    blurhash={media.blurhash || null}
                                    type={media.type}
                                />
                            ) : (
                                <ProgressiveVideo
                                    url={media.url}
                                    width={width}
                                    height={height}
                                    blurhash={media.blurhash || null}
                                    type={media.type}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
