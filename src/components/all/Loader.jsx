export default function Loader({ size = 10, borderWidth = 1 }) {
    return (
        <div
            style={{
                height: size * 4,
                width: size * 4,
                borderWidth: borderWidth ,
            }}
            className={`border border-b-transparent rounded-full aspect-square  animate-spin`}
        ></div>
    );
}
