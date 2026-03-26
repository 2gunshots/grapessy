import RouteLayout from "@/layout/RouteLayout";

export default function Vineyard() {
    return (
        <div>
            <RouteLayout heading="Vineyard">
                <div>
                    <div className="aspect-[2/1] bg-black/5 rounded-md overflow-hidden">
                        <img src="/vineyard (2).jpg" alt="" className="w-full object-contain" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5"></div>
            </RouteLayout>
        </div>
    );
}
