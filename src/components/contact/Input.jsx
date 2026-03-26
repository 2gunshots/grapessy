export default function Input({
    name,
    value,
    type = "text",
    label = null,
    required = false,
}) {
    return (
        <div className="flex flex-col w-full">
            <label className="flex items-center gap-1 text-sm sm:text-base">
                {label !== null ? label : name}
                {required && (
                    <span className="text-xs text-black/50">(required)</span>
                )}
            </label>
            <input
                name={name}
                value={value}
                type={type}
                required={required}
                className="border-b-[0.5px] focus:border-b"
            />
        </div>
    );
}
