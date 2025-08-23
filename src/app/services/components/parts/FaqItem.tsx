export default function FaqItem({
    q,
    a,
  }: {
    q: string;
    a: string;
  }) {
    return (
      <details className="rounded-xl border border-soft p-4">
        <summary className="cursor-pointer font-medium">{q}</summary>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{a}</p>
      </details>
    );
  }
  