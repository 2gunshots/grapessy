import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import Image from "next/image";
import branch from "../../../public/leavesbg.png";
import Alert from "@/components/all/Alert";

export default function Contact() {
    return (
        <div className=" overflow-hidden">
            <div className="w-full flex flex-col gap-5 mb-10 ">
                <Map />
                {/* <div>35/2 Agar, Hapusbaug Junnar, Pune IN</div> */}
            </div>
            <div className="grid-container  mb-5  pb-7 p-5">
                <div className="relative col-span-full md:col-span-4 flex flex-col gap-5 ">
                    <h1 className="title">Contact Us</h1>
                    <p className=" text-base">
                        Interested in working with Grapessy Wines and Beverages?
                        Fill out some info and we will be in touch shortly. We
                        can't wait to hear from you!
                    </p>
                    <Image
                        src={branch}
                        width={500}
                        className="hidden lg:block mt-5 scale-135 mix-blend-multiply"
                        alt="vines art"
                    />
                </div>
                <div className="col-span-full md:col-span-8 flex justify-center md:pl-10 lg:pl-40 md:pr-10 mt-5">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
