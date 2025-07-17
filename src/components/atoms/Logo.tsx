export default function Logo({ size }: { size: number }) {
    return (
        <svg
            viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto"
            style={{ width: `${size}rem` }}
        >
            <path d="M20 24C20 32.8366 11.0457 40 0 40V0H20V24Z" fill="#191902"/>
            <path d="M60 24C60 32.8366 51.0457 40 40 40L40 0L60 0V24Z" fill="#191902"/>
            <path d="M40 15.5547V39.9932C28.903 39.7577 20 32.6879 20 24V0L40 15.5547Z" fill="#FBF719"/>
            <path d="M0 40C11.0457 40 20 48.9543 20 60H0V40Z" fill="#FBF719"/>
            <path d="M40 40C51.0457 40 60 48.9543 60 60H20C20 48.9543 28.9543 40 40 40Z" fill="#191902"/>
        </svg>
    );
}