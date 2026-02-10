export default function SecurityArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="200" fill="#f8fafc" />
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">ZERO TRUST ACCESS FLOW</text>

            {/* User / Device */}
            <g transform="translate(40, 70)">
                <circle cx="20" cy="15" r="10" fill="#64748b" />
                <path d="M10,35 C10,28 30,28 30,35" fill="none" stroke="#64748b" strokeWidth="2" />
                <rect x="5" y="40" width="30" height="20" rx="2" fill="#475569" />
                <text x="20" y="75" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#475569">User Device</text>
                <text x="20" y="85" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#94a3b8">(MDM Verified)</text>
            </g>

            {/* Tunnel / Identity */}
            <g transform="translate(150, 60)">
                <rect x="0" y="0" width="100" height="60" rx="8" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#0284c7" fontWeight="bold">Secure Tunnel</text>

                {/* Icons implicitly text for now */}
                <text x="50" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#0369a1">Okta + AppGate</text>
                <text x="50" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#0369a1">(Identity & SDP)</text>
            </g>

            {/* Protected Resources */}
            <g transform="translate(290, 60)">
                <rect x="0" y="0" width="80" height="80" rx="4" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" strokeDasharray="4,2" />
                <text x="40" y="15" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#059669" fontWeight="bold">Internal Network</text>

                <rect x="15" y="30" width="50" height="15" rx="2" fill="#10b981" />
                <text x="40" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white">App Server</text>

                <rect x="15" y="50" width="50" height="15" rx="2" fill="#10b981" />
                <text x="40" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white">DB Server</text>
            </g>

            {/* Arrows */}
            <line x1="80" y1="90" x2="150" y2="90" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="250" y1="90" x2="290" y2="90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Lock Icon Overlay Concept */}
            <circle cx="200" cy="60" r="8" fill="#f43f5e" />
            <rect x="197" y="57" width="6" height="6" fill="white" />

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                </marker>
            </defs>
        </svg>
    );
}
