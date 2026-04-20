/**
 * Card — generic card wrapper, consistent met StatsCard
 *
 * Props:
 * - title: string (optioneel, rendert als header)
 * - subtitle: string (optioneel)
 * - actions: ReactNode (optioneel, rechts in header)
 * - children: body content
 * - padding: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
 * - hover: boolean (hover shadow effect)
 * - className: extra Tailwind classes
 */
export default function Card({
  title,
  subtitle,
  actions,
  children,
  padding = 'md',
  hover = false,
  className = '',
}) {
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-card border border-gray-100 ${
        hover ? 'hover:shadow-card-hover transition-shadow' : ''
      } ${className}`}
    >
      {(title || subtitle || actions) && (
        <div className={`flex items-start justify-between ${paddings[padding]} ${children ? 'pb-3 border-b border-gray-100' : ''}`}>
          <div className="min-w-0">
            {title && <h3 className="font-semibold text-up-blue-dark">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {actions && <div className="flex-shrink-0 ml-3">{actions}</div>}
        </div>
      )}
      {children && (
        <div className={title || subtitle || actions ? paddings[padding] : paddings[padding]}>
          {children}
        </div>
      )}
    </div>
  );
}
