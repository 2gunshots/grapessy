"use client";
import Input from "./Input";
import TextareaAutosize from "react-textarea-autosize";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../all/Alert";
import Loader from "../all/Loader";

export default function ContactForm() {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    // alert = { type: "success" | "error", message: string }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            )
            .then(
                (result) => {
                    setAlert({
                        type: "success",
                        message: "Message sent successfully!",
                    });
                    form.current.reset();
                },
                (error) => {
                    setAlert({
                        type: "error",
                        message: "Oops! Something went wrong.",
                    });
                    console.error(error.text);
                },
            )
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className="w-full">
                <div className="flex flex-col sm:flex-row gap-5  mb-5">
                    <Input name="firstname" label="First Name" required />
                    <Input name="lastname" label="Last Name" required />
                </div>
                <div className="flex flex-col sm:flex-row gap-5  mb-5">
                    <Input name="email" label="Email" type="email" required />
                    <Input name="phone" label="Phone" />
                </div>
                <div className="flex flex-col w-full gap-2 mb-7">
                    <label
                        htmlFor="message"
                        className="flex items-center gap-1 text-sm sm:text-base"
                    >
                        Message
                        <span className="text-xs text-black/50">
                            (required)
                        </span>
                    </label>
                    <TextareaAutosize
                        name="message"
                        minRows={5}
                        required
                        className="border-b-[0.5px] focus:border-b"
                    />
                </div>
                <div className="text-sm">
                    <button
                        type="submit"
                        className="flex items-center justify-center rounded-full text-sm md:text-base bg-black text-white h-13 w-50 sm:h-15 sm:w-52 font-medium p-4 px-20 hover:bg-black/85 cursor-pointer"
                    >
                        {loading ? (
                            <Loader size={4} borderWidth={1} />
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
            {alert && <Alert type={alert.type} message={alert.message} />}
            <Alert type="error" message="Message sent successfully" />
        </>
    );
}
