/**
 * FormInput — text / textarea / select / number / email / date
 *
 * Props:
 * - label: string (optioneel)
 * - name, value, onChange: standaard
 * - type: 'text' | 'textarea' | 'select' | 'number' | 'email' | 'password' | 'date' | 'time'
 * - options: [{ value, label }] (voor type='select')
 * - placeholder, required, disabled, error (string)
 * - rows: number (voor textarea, default 4)
 * - hint: string (helper text)
 */
export default function FormInput({
  label,
  name,
  value,
  onChange,
  type = 'text',
  options = [],
  placeholder,
  required = false,
  disabled = false,
  error,
  rows = 4,
  hint,
  className = '',
  ...rest
}) {
  const baseInput = `w-full border rounded-lg px-3 py-2 text-sm transition-colors
    focus:border-up-orange focus:ring-2 focus:ring-up-orange/30 focus:outline-none
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${error ? 'border-red-500' : 'border-gray-300'}`;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-up-blue-dark">
          {label}
          {required && <span className="text-up-orange ml-1">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={baseInput}
          {...rest}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={baseInput}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={baseInput}
          {...rest}
        />
      )}
      {error && <p className="text-xs text-red-600">{error}</p>}
      {!error && hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
