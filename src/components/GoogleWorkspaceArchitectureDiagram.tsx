export default function GoogleWorkspaceArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background */}
            <rect x="0" y="0" width="400" height="300" fill="#f8fafc" />

            {/* Legend / Title */}
            <text x="20" y="25" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="bold">CONSOLIDATION ARCHITECTURE</text>

            {/* Source Environment - Left Side */}
            <g transform="translate(30, 60)">
                <text x="0" y="-10" fontFamily="sans-serif" fontSize="10" fill="#64748b">Legacy Tenants (M365)</text>

                {/* Tenant A */}
                <rect x="0" y="0" width="80" height="50" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                <text x="40" y="20" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#475569">Tenant A</text>
                <text x="40" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#94a3b8">@company-a.com</text>

                {/* Tenant B */}
                <rect x="0" y="60" width="80" height="50" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                <text x="40" y="80" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#475569">Tenant B</text>
                <text x="40" y="95" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#94a3b8">@company-b.com</text>

                {/* Tenant C */}
                <rect x="0" y="120" width="80" height="50" rx="4" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                <text x="40" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#475569">Tenant C</text>
                <text x="40" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#94a3b8">@company-c.com</text>
            </g>

            {/* Migration Engine - Center */}
            <g transform="translate(150, 60)">
                {/* Arrows In */}
                <line x1="-30" y1="25" x2="10" y2="85" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
                <line x1="-30" y1="85" x2="10" y2="85" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
                <line x1="-30" y1="145" x2="10" y2="85" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />

                {/* Engine Box */}
                <rect x="10" y="55" width="80" height="60" rx="8" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="2" />
                <text x="50" y="80" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#0284c7" fontWeight="bold">Migration</text>
                <text x="50" y="95" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#0284c7" fontWeight="bold">Engine</text>
            </g>

            {/* Destination - Right Side */}
            <g transform="translate(260, 50)">
                <text x="0" y="0" fontFamily="sans-serif" fontSize="10" fill="#16a34a" fontWeight="bold">Google Workspace</text>

                <rect x="0" y="15" width="110" height="155" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />

                {/* Unified Services */}
                <g transform="translate(10, 30)">
                    <rect x="0" y="0" width="90" height="25" rx="2" fill="white" />
                    <text x="45" y="16" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#15803d">Unified Identity (SSO)</text>
                </g>
                <g transform="translate(10, 65)">
                    <rect x="0" y="0" width="90" height="25" rx="2" fill="white" />
                    <text x="45" y="16" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#15803d">Shared Drives</text>
                </g>
                <g transform="translate(10, 100)">
                    <rect x="0" y="0" width="90" height="25" rx="2" fill="white" />
                    <text x="45" y="16" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#15803d">Centralized Security</text>
                </g>
            </g>

            {/* Arrow Out */}
            <line x1="240" y1="145" x2="260" y2="145" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Definitions for arrow markers */}
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
                </marker>
            </defs>
        </svg>
    );
}
