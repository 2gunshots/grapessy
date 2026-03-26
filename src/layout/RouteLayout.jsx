export default function RouteLayout({ heading, children }) {
    return (
        <div className="grid grid-cols-5 gap-3 md:gap-7">
            <div className="col-span-full md:col-span-1 md:border-r-[0.5px]">
                <h1 className="font-shippori ">{heading}</h1>
            </div>
            <div className="col-span-full md:col-span-4">{children}</div>
        </div>
    );
}
