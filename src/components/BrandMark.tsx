export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden
      className="shrink-0"
    >
      <rect x="4" y="0" width="12" height="12" rx="3" transform="rotate(45 10 6)" fill="#00A99D" />
      <rect x="16" y="0" width="12" height="12" rx="3" transform="rotate(45 22 6)" fill="#3D2170" />
      <rect x="4" y="16" width="12" height="12" rx="3" transform="rotate(45 10 22)" fill="#E6197E" />
      <rect x="16" y="16" width="12" height="12" rx="3" transform="rotate(45 22 22)" fill="#5A37A0" />
    </svg>
  );
}
