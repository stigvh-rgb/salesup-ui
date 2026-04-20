/**
 * StatsCard — metric tile voor dashboards
 *
 * Props:
 * - title: string
 * - value: string | number
 * - subtitle: string (optioneel)
 * - icon: lucide-react icon component (optioneel)
 * - color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'orange' (default: 'blue')
 * - trend: { value: string, direction: 'up' | 'down' } (optioneel)
 */
export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = 'blue',
  trend,
}) {
  const colors = {
    blue:   'bg-blue-50 text-blue-600',
    green:  'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red:    'bg-red-50 text-red-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-up-orange-50 text-up-orange',
  };

  return (
    <div className="bg-white rounded-lg shadow-card border border-gray-100 p-5 hover:shadow-card-hover transition-shadow">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm text-gray-500 truncate">{title}</p>
          <p className="text-2xl font-bold mt-1 text-up-blue-dark">{value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
          {trend && (
            <p className={`text-xs mt-1 ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend.direction === 'up' ? '↗' : '↘'} {trend.value}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg ${colors[color]} flex-shrink-0 ml-3`}>
            <Icon size={22} />
          </div>
        )}
      </div>
    </div>
  );
}
