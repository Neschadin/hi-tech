export const LifeNumber = ({ onClick }: { onClick?: () => void }) => (
  <a href="tel:0968003333" className="inline-flex gap-x-2" onClick={onClick}>
    <span className="text-neutral-grey">096</span>
    <span className="whitespace-nowrap">800-33-33</span>
  </a>
);

export const KyivstarNumber = ({ onClick }: { onClick?: () => void }) => (
  <a href="tel:0472383880" className="inline-flex gap-x-2" onClick={onClick}>
    <span className="text-neutral-grey">0472</span>
    <span className="whitespace-nowrap">38-38-80</span>
  </a>
);
