export default function ZimbraArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="200" fill="#f8fafc" />
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">CORPORATE MAIL INFRASTRUCTURE</text>

            <g transform="translate(30, 60)">
                {/* Domain / DNS */}
                <circle cx="40" cy="30" r="30" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,2" />
                <text x="40" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#475569" fontWeight="bold">DNS</text>
                <text x="40" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#64748b">MX Records</text>
            </g>

            <g transform="translate(140, 50)">
                {/* Zimbra Server */}
                <rect x="0" y="0" width="100" height="80" rx="4" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
                <text x="50" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#3730a3" fontWeight="bold">Zimbra</text>
                <text x="50" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#3730a3">Collaboration Suite</text>

                {/* Security Icons */}
                <circle cx="25" cy="60" r="8" fill="#4ade80" />
                <text x="25" y="63" textAnchor="middle" fontSize="6" fill="white">AV</text>
                <circle cx="75" cy="60" r="8" fill="#f87171" />
                <text x="75" y="63" textAnchor="middle" fontSize="6" fill="white">Spam</text>
            </g>

            <g transform="translate(280, 60)">
                {/* Clients */}
                <rect x="0" y="0" width="80" height="60" rx="4" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#c2410c" fontWeight="bold">Clients</text>
                <text x="40" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#c2410c">Outlook / Web</text>
            </g>

            {/* Arrows */}
            <line x1="80" y1="90" x2="130" y2="90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="240" y1="90" x2="270" y2="90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
    );
}
