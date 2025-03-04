const Logo = ({ color = "#C6FF6A" }) => {

    return (
        <svg
            width="100%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
            <rect x="50" y="97" width="11" height="11" rx="5.5" fill={color} />
            <rect x="63" y="86" width="22" height="11" rx="5.5" transform="rotate(45 63 86)" fill={color} />
            <rect x="79" y="84" width="22" height="11" rx="5.5" transform="rotate(45 79 84)" fill={color} />
            <rect width="22" height="11" rx="5.5" transform="matrix(-0.707 0.707 0.707 0.707 97 97)" fill={color} />
            <rect x="104" y="86" width="22" height="11" rx="5.5" transform="rotate(45 104 86)" fill={color} />
            <rect x="120" y="86" width="22" height="11" rx="5.5" transform="rotate(45 120 86)" fill={color} />
            <rect x="136" y="86" width="22" height="11" rx="5.5" transform="rotate(45 136 86)" fill={color} />
        </svg>
    );
};

export default Logo;