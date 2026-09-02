import * as React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sendEmail } from '@/services/email-service';

interface EmailClientCardProps {
  className?: string;
  onSent?: () => void;
}

const inputClass =
  'w-full rounded-lg border bg-card px-3 py-2 text-sm text-foreground shadow-sm outline-none transition focus:ring-2 focus:ring-zinc-400 placeholder:text-muted-foreground';

const EmailClientCard = React.forwardRef<HTMLDivElement, EmailClientCardProps>(
  ({ className, onSent }, ref) => {
    const { t } = useTranslation();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState<
      'idle' | 'loading' | 'success' | 'error'
    >('idle');
    const [error, setError] = React.useState('');

    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.05 },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    };

    const canSubmit =
      name.trim() !== '' &&
      email.trim() !== '' &&
      subject.trim() !== '' &&
      message.trim() !== '';

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!canSubmit || status === 'loading') return;

      setStatus('loading');
      setError('');
      const result = await sendEmail({ name, email, subject, message }, t);

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        onSent?.();
      } else {
        setStatus('error');
        setError(result.message || t('pages.contatos.erroEnvio'));
      }
    };

    return (
      <motion.div
        ref={ref}
        className={
          'w-full max-w-2xl mx-auto rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col transition-colors ' +
          (className ?? '')
        }
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card Header */}
        <motion.div
          className="p-12 sm:p-12 flex items-start gap-3 border-b"
          variants={itemVariants}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-muted">
            <Mail className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-grow flex flex-col gap-3">
            <input
              type="text"
              placeholder={t('pages.contatos.formNomePlaceholder')}
              aria-label={t('pages.contatos.formNomeLabel')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              placeholder={t('pages.contatos.formEmailPlaceholder')}
              aria-label={t('pages.contatos.formEmailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
            <input
              type="text"
              placeholder={t('pages.contatos.formAssuntoPlaceholder')}
              aria-label={t('pages.contatos.formAssuntoLabel')}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </div>
        </motion.div>

        {/* Card Body */}
        <motion.div
          className="p-4 sm:p-6 text-sm text-foreground/90"
          variants={itemVariants}
        >
          <textarea
            placeholder={t('pages.contatos.formMensagemPlaceholder')}
            aria-label={t('pages.contatos.formMensagemLabel')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className={inputClass + ' resize-y leading-relaxed'}
          />
        </motion.div>

        {/* Action bar */}
        <motion.div
          className="p-3 sm:p-4 mt-auto border-t bg-muted/50"
          variants={itemVariants}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 text-sm">
              {status === 'success' && (
                <p className="flex items-center gap-2 text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" /> {t('pages.contatos.sucessoEnvio')}
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-red-500">
                  <XCircle className="h-4 w-4" /> {error}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit || status === 'loading'}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-400 hover:text-white disabled:pointer-events-none disabled:opacity-40"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {t('pages.contatos.enviar')}
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  },
);

EmailClientCard.displayName = 'EmailClientCard';

export { EmailClientCard };
