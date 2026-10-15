import Image from 'next/image';
import Link from 'next/link';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Heal with Daphne — Home">
      <Image src="/images/hwd-logo.svg" alt="" width={1072} height={1470} className="brand-emblem" />
      <span className="brand-copy">
        <span className="brand-name">heal with daphne</span>
        <span className="brand-tagline">BODYWORK · DAPHNE MOSKO</span>
      </span>
    </Link>
  );
}
