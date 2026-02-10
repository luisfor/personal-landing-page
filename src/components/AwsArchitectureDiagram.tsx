export default function AwsArchitectureDiagram() {
    return (
        <svg viewBox="0 0 400 300" className="w-full h-auto rounded-lg bg-white shadow-sm border border-slate-200">
            {/* Background / Region */}
            <rect x="0" y="0" width="400" height="300" fill="#f8fafc" />

            {/* AWS Cloud Box */}
            <rect x="20" y="20" width="360" height="260" rx="8" fill="none" stroke="#ff9900" strokeWidth="2" strokeDasharray="5,5" />
            <text x="40" y="45" fontFamily="sans-serif" fontSize="12" fill="#ff9900" fontWeight="bold">AWS Cloud (Region)</text>

            {/* VPC Box */}
            <rect x="40" y="60" width="320" height="200" rx="8" fill="#e1f5fe" stroke="#00b4d9" strokeWidth="2" />
            <text x="60" y="85" fontFamily="sans-serif" fontSize="12" fill="#0077b6" fontWeight="bold">VPC</text>

            {/* Availability Zone A */}
            <rect x="55" y="100" width="135" height="140" rx="4" fill="white" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
            <text x="65" y="120" fontFamily="sans-serif" fontSize="10" fill="#64748b">Availability Zone A</text>

            {/* Availability Zone B */}
            <rect x="210" y="100" width="135" height="140" rx="4" fill="white" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
            <text x="220" y="120" fontFamily="sans-serif" fontSize="10" fill="#64748b">Availability Zone B</text>

            {/* Load Balancer (Spanning AZs conceptually, drawn on top or top level) */}
            <g transform="translate(180, 70)">
                <circle cx="20" cy="20" r="15" fill="#8c4fff" />
                <text x="20" y="24" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="bold">ALB</text>
            </g>

            {/* Subnets / Instances AZ A */}
            <g transform="translate(70, 140)">
                {/* Public Subnet */}
                <rect x="0" y="0" width="105" height="40" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
                <text x="5" y="15" fontSize="8" fill="#15803d">Public Subnet</text>
                {/* Instance */}
                <rect x="70" y="10" width="20" height="20" rx="2" fill="#f97316" />
                <text x="80" y="24" textAnchor="middle" fill="white" fontSize="6">EC2</text>
            </g>
            <g transform="translate(70, 190)">
                {/* Private Subnet */}
                <rect x="0" y="0" width="105" height="40" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
                <text x="5" y="15" fontSize="8" fill="#475569">Private Subnet</text>
                {/* Instance */}
                <rect x="70" y="10" width="20" height="20" rx="2" fill="#3b82f6" />
                <text x="80" y="24" textAnchor="middle" fill="white" fontSize="6">RDS</text>
            </g>

            {/* Subnets / Instances AZ B */}
            <g transform="translate(225, 140)">
                {/* Public Subnet */}
                <rect x="0" y="0" width="105" height="40" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
                <text x="5" y="15" fontSize="8" fill="#15803d">Public Subnet</text>
                {/* Instance */}
                <rect x="70" y="10" width="20" height="20" rx="2" fill="#f97316" />
                <text x="80" y="24" textAnchor="middle" fill="white" fontSize="6">EC2</text>
            </g>
            <g transform="translate(225, 190)">
                {/* Private Subnet */}
                <rect x="0" y="0" width="105" height="40" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="1" />
                <text x="5" y="15" fontSize="8" fill="#475569">Private Subnet</text>
                {/* Instance */}
                <rect x="70" y="10" width="20" height="20" rx="2" fill="#3b82f6" />
                <text x="80" y="24" textAnchor="middle" fill="white" fontSize="6">RDS</text>
            </g>

            {/* Arrows indicating Flow */}
            <line x1="200" y1="50" x2="200" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="200" y1="105" x2="140" y2="140" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="200" y1="105" x2="260" y2="140" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />

        </svg>
    );
}
