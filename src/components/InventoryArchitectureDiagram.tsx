export default function InventoryArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="200" fill="#f8fafc" />
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">ASSET INVENTORY SYSTEM</text>

            {/* Steps */}
            <g transform="translate(30, 60)">
                {/* Web Interface */}
                <rect x="0" y="0" width="80" height="60" rx="4" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#0369a1" fontWeight="bold">Web UI</text>
                <text x="40" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#0369a1">JS / HTML5</text>
            </g>

            <g transform="translate(140, 60)">
                {/* Backend */}
                <rect x="0" y="0" width="80" height="60" rx="4" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#15803d" fontWeight="bold">Backend</text>
                <text x="40" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#15803d">Node.js / PHP</text>
            </g>

            <g transform="translate(250, 60)">
                {/* Database */}
                <path d="M0,10 C0,4 40,0 40,0 C40,0 80,4 80,10 L80,50 C80,56 40,60 40,60 C40,60 0,56 0,50 Z" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
                <path d="M0,10 C0,16 40,20 40,20 C40,20 80,16 80,10" fill="none" stroke="#f97316" strokeWidth="2" />
                <text x="40" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#c2410c" fontWeight="bold">SQL Server</text>
                <text x="40" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#c2410c">Sequelize ORM</text>
            </g>

            {/* Arrows */}
            <line x1="110" y1="90" x2="140" y2="90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="220" y1="90" x2="250" y2="90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
    );
}
