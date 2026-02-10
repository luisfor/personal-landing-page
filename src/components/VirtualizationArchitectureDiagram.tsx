export default function VirtualizationArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 200" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="200" fill="#f8fafc" />
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">DISASTER RECOVERY ARCHITECTURE</text>

            {/* Production Site */}
            <g transform="translate(30, 50)">
                <rect x="0" y="0" width="100" height="100" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
                <text x="5" y="15" fontFamily="sans-serif" fontSize="8" fill="#64748b">Production Cluster</text>

                {/* VM 1 */}
                <rect x="15" y="30" width="30" height="30" rx="2" fill="#3b82f6" />
                <text x="30" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white">VM 1</text>

                {/* VM 2 */}
                <rect x="55" y="30" width="30" height="30" rx="2" fill="#3b82f6" />
                <text x="70" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white">VM 2</text>

                {/* Hypervisor Label */}
                <text x="50" y="85" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#475569" fontWeight="bold">vCenter / Hyper-V</text>
            </g>

            {/* Veeam Backup */}
            <g transform="translate(160, 80)">
                <rect x="0" y="0" width="80" height="40" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#15803d" fontWeight="bold">Veeam</text>
                <text x="40" y="30" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#15803d">Replication</text>
            </g>

            {/* DR Site */}
            <g transform="translate(270, 50)">
                <rect x="0" y="0" width="100" height="100" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
                <text x="5" y="15" fontFamily="sans-serif" fontSize="8" fill="#64748b">Contingency Site</text>

                {/* Replica 1 */}
                <rect x="15" y="30" width="30" height="30" rx="2" fill="#94a3b8" />
                <text x="30" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white">Replica 1</text>

                {/* Replica 2 */}
                <rect x="55" y="30" width="30" height="30" rx="2" fill="#94a3b8" />
                <text x="70" y="48" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="white">Replica 2</text>

                <text x="50" y="85" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#64748b">Standby</text>
            </g>

            {/* Arrows */}
            <line x1="130" y1="100" x2="160" y2="100" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="240" y1="100" x2="270" y2="100" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />

            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#22c55e" />
                </marker>
            </defs>
        </svg>
    );
}
