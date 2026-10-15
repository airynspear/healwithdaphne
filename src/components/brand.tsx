import Link from 'next/link';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Heal with Daphne — Home">
      <span className="brand-emblem" aria-hidden="true" />
      <span className="brand-copy">
        <span className="brand-name">heal with daphne</span>
        <span className="brand-tagline">BODYWORK · DAPHNE MOSKO</span>
      </span>
    </Link>
  );
}
