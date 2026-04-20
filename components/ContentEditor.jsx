import { useState } from 'react';
import { Save, X, Edit3 } from 'lucide-react';

/**
 * ContentEditor — inline-edit component (generiek, geen Supabase dependency)
 *
 * Props:
 * - value: huidige waarde
 * - type: 'text' | 'textarea' | 'html' (default 'text')
 * - onSave: async (newValue) => void (throw error om edit te cancelen)
 * - readOnly: boolean (default false)
 */
export default function ContentEditor({ value, type = 'text', onSave, readOnly = false }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      if (onSave) await onSave(editValue);
      setEditing(false);
    } catch (err) {
      setError(err.message || 'Opslaan mislukt');
    } finally {
      setSaving(false);
    }
  };

  if (!editing) {
    return (
      <div className="group relative">
        {type === 'html' ? (
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: value || '—' }}
          />
        ) : (
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{value || '—'}</p>
        )}
        {!readOnly && (
          <button
            onClick={() => { setEditValue(value || ''); setEditing(true); }}
            className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 p-1 bg-white border border-gray-200 rounded shadow-sm transition-opacity"
            aria-label="Bewerken"
          >
            <Edit3 size={14} className="text-gray-500" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      {type === 'html' ? (
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm font-mono h-48 focus:border-up-orange focus:ring-2 focus:ring-up-orange/30 focus:outline-none"
        />
      ) : type === 'textarea' ? (
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm h-32 focus:border-up-orange focus:ring-2 focus:ring-up-orange/30 focus:outline-none"
        />
      ) : (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:border-up-orange focus:ring-2 focus:ring-up-orange/30 focus:outline-none"
        />
      )}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-up-orange hover:bg-up-orange-600 text-white text-sm rounded-lg disabled:opacity-50"
        >
          <Save size={14} /> {saving ? 'Opslaan…' : 'Opslaan'}
        </button>
        <button
          onClick={() => { setEditing(false); setEditValue(value || ''); setError(null); }}
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg"
        >
          <X size={14} /> Annuleer
        </button>
      </div>
    </div>
  );
}
