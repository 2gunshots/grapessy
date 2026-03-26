"use client";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
} from "@react-google-maps/api";
import Link from "next/link";

const containerStyle = {
    width: "100%",
    height: "500px",
    zIndex: 0,
};

const location = {
    lat: 19.1933001,
    lng: 73.8998577,
};

const mapStyles = [
    {
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
    },
    {
        elementType: "labels.text.fill",
        stylers: [{ color: "#858585" }],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }],
    },
    {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
    },

    {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "transit",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
    },
    { featureType: "landscape", stylers: [{ color: "#f7f7f7" }] },
    { featureType: "water", stylers: [{ color: "#ededed" }] },
];

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
    });
    if (!isLoaded)
        return (
            <div className="h-125 w-full bg-[#eeeeee] flex items-center justify-center">
                <div className="border-l-2 border-t-2 rounded-full aspect-square h-10 w-10 animate-spin "></div>
            </div>
        );
    // const [mapLoaded, setMapLoaded] = useState(false);

    return (
        // <LoadScript
        //     googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
        //     onLoad={() => setMapLoaded(true)}
        // >
        //     {mapLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={14}
            options={{
                styles: mapStyles,
                disableDefaultUI: true,
                zoomControl: true,
                clickableIcons: false,
                scaleControl: "greedy",
            }}
        >
            <Marker
                position={location}
                icon={{
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: 15,
                    fillColor: "#000",
                    fillOpacity: 1,
                    strokeWeight: 0,
                }}
                onClick={() => {
                    window.open(
                        "https://maps.app.goo.gl/yupcDTMQ9HAGX3uQ6",
                        "_blank",
                    );
                }}
            />
        </GoogleMap>
        // )}
        // </LoadScript>
    );
}
