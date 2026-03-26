export default function Winery() {
    return (
        <div className="grid grid-cols-5 gap-7">
            <div className=" border-r-[0.5px]">
                <h1 className="font-shippori ">Winery</h1>
            </div>
            <div className="col-span-4">
                <div className="pb-7 border-b-[0.5px]">
                    <div className="w-full aspect-[2/1] bg-black/5 rounded-md "></div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="border-r-[0.5px]">
                        <h2 className="font-shippori">Winemaking</h2>
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
    );
}
