export default function ItsArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="200" fill="#f8fafc" />
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">ITS & DETECTION SYSTEMS</text>

            {/* Road Sensors */}
            <g transform="translate(30, 60)">
                <rect x="0" y="20" width="80" height="10" fill="#334155" />
                <circle cx="20" cy="25" r="4" fill="#fbbf24" />
                <circle cx="60" cy="25" r="4" fill="#fbbf24" />
                <text x="40" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#475569" fontWeight="bold">Road Sensors</text>
            </g>

            {/* Comm Network */}
            <g transform="translate(140, 60)">
                <path d="M10,25 Q40,5 70,25 T130,25" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4,2" />
                <text x="70" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#0284c7">Comm Network</text>
            </g>

            {/* Control Center */}
            <g transform="translate(260, 40)">
                <rect x="0" y="0" width="100" height="70" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#15803d" fontWeight="bold">Control Center</text>

                {/* Monitor Screen */}
                <rect x="20" y="30" width="60" height="30" fill="#166534" />
                <text x="50" y="48" textAnchor="middle" fontSize="6" fill="#4ade80">Windows 10</text>
            </g>

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
    );
}
