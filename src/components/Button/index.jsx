export const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="
            bg-transparent 
            border
            border-neutral-text
            text-neutral-text
            rounded-3xl
            px-6
            py-3
            flex
            items-center
            justify-center
            cursor-pointer
            gap-2
            text-base
            leading-[120%]
            hover:backdrop-opacity-80"
        >
            {children}
        </button>
    );
};
