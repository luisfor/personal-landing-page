export default function DatabaseArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="200" fill="#f8fafc" />
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">SQL SERVER OPTIMIZATION FLOW</text>

            {/* Source: SQL Engine */}
            <g transform="translate(40, 60)">
                <path d="M0,10 C0,4 40,0 40,0 C40,0 80,4 80,10 L80,50 C80,56 40,60 40,60 C40,60 0,56 0,50 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
                <path d="M0,10 C0,16 40,20 40,20 C40,20 80,16 80,10" fill="none" stroke="#94a3b8" strokeWidth="2" />
                <text x="40" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#475569" fontWeight="bold">SQL Server</text>
                <text x="40" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#64748b">Engine</text>
            </g>

            {/* Process: Optimization */}
            <g transform="translate(160, 70)">
                <rect x="0" y="0" width="80" height="40" rx="4" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#c2410c" fontWeight="bold">Query Tuning</text>
                <text x="40" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#c2410c">& Re-indexing</text>
            </g>

            {/* Destination: High Perf DB */}
            <g transform="translate(280, 60)">
                <path d="M0,10 C0,4 40,0 40,0 C40,0 80,4 80,10 L80,50 C80,56 40,60 40,60 C40,60 0,56 0,50 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                <path d="M0,10 C0,16 40,20 40,20 C40,20 80,16 80,10" fill="none" stroke="#22c55e" strokeWidth="2" />
                <text x="40" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#15803d" fontWeight="bold">High Perf</text>
                <text x="40" y="45" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#15803d" fontWeight="bold">Database</text>
            </g>

            {/* Arrows */}
            <line x1="120" y1="90" x2="150" y2="90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="240" y1="90" x2="270" y2="90" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Definitions for arrow markers */}
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
    );
}
