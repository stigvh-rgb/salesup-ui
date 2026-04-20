const defaultLabels = {
  // Marketing
  in_review: 'Te reviewen',
  approved: 'Goedgekeurd',
  active: 'Actief',
  completed: 'Voltooid',
  archived: 'Gearchiveerd',
  scheduled: 'Ingepland',
  sent: 'Verzonden',
  live: 'Live',
  paused: 'Gepauzeerd',
  open: 'Open',
  resolved: 'Opgelost',
  revision_needed: 'Revisie nodig',
  wont_fix: 'Niet oplossen',
  dismissed: 'Genegeerd',
  acknowledged: 'Gezien',
  superseded: 'Vervangen',
  // Training
  draft: 'Concept',
  in_progress: 'In uitvoering',
  cancelled: 'Geannuleerd',
  registered: 'Ingeschreven',
  attended: 'Aanwezig',
  absent: 'Afwezig',
  excused: 'Verontschuldigd',
};

/**
 * StatusBadge — status chip met NL-labels en kleurcode
 *
 * Props:
 * - status: string (een van de status keys)
 * - type: 'status' | 'severity' | 'health' (default: 'status')
 * - labels: custom labels object (override defaults) (optioneel)
 */
export default function StatusBadge({ status, type = 'status', labels }) {
  const mergedLabels = { ...defaultLabels, ...(labels || {}) };
  const label = mergedLabels[status] || status;

  const className =
    type === 'severity' ? `status-badge severity-${status}` :
    type === 'health'   ? `status-badge health-${status}` :
                          `status-badge status-${status}`;

  return <span className={className}>{label}</span>;
}
