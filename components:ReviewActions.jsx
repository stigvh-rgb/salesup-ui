import { useState } from 'react';
import { Check, X, MessageSquare } from 'lucide-react';
import Modal from './Modal';
import FormInput from './FormInput';
import Button from './Button';

/**
 * ReviewActions — goedkeuren/feedback/afwijzen (generiek, geen Supabase dependency)
 *
 * Props:
 * - currentStatus: string (component verbergt zichzelf als status niet 'in_review' of 'open')
 * - onApprove: async () => void
 * - onReject: async () => void
 * - onFeedback: async (feedbackText) => void
 */
export default function ReviewActions({
  currentStatus,
  onApprove,
  onReject,
  onFeedback,
}) {
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  if (currentStatus !== 'in_review' && currentStatus !== 'open') {
    return null;
  }

  const call = async (fn) => {
    setLoading(true);
    try {
      await fn();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="primary"
        icon={Check}
        size="sm"
        loading={loading}
        onClick={() => onApprove && call(onApprove)}
      >
        Goedkeuren
      </Button>
      <Button
        variant="outline"
        icon={MessageSquare}
        size="sm"
        onClick={() => setShowModal(true)}
      >
        Feedback
      </Button>
      <Button
        variant="ghost"
        icon={X}
        size="sm"
        loading={loading}
        onClick={() => onReject && call(onReject)}
        className="text-red-600 hover:bg-red-50"
      >
        Afwijzen
      </Button>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Feedback geven"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowModal(false)}>Annuleer</Button>
            <Button
              variant="primary"
              loading={loading}
              onClick={async () => {
                if (onFeedback && feedback.trim()) {
                  await call(() => onFeedback(feedback));
                }
                setShowModal(false);
                setFeedback('');
              }}
            >
              Verstuur
            </Button>
          </>
        }
      >
        <FormInput
          type="textarea"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Schrijf je feedback hier…"
          rows={5}
        />
      </Modal>
    </div>
  );
}
