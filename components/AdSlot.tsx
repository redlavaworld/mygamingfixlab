export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <aside className="ad-slot" aria-label={label}>
      <small>{label}</small>
      <div>Ad space reserved</div>
    </aside>
  );
}
