/**
 * EmptyState — "Nog geen data" placeholder
 *
 * Props:
 * - icon: lucide-react icon (optioneel)
 * - title: string
 * - description: string (optioneel)
 * - action: ReactNode (optioneel, bv. Button)
 */
export default function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="text-center py-12 px-4">
      {Icon && (
        <div className="mx-auto w-14 h-14 rounded-full bg-ghost-white flex items-center justify-center mb-4">
          <Icon size={24} className="text-gray-400" />
        </div>
      )}
      <h3 className="text-base font-semibold text-up-blue-dark">{title}</h3>
      {description && <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
