const BNBBadge = () => (
  <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-secondary/80 backdrop-blur-sm px-3 py-1.5 border-glow-bnb text-xs font-body text-muted-foreground">
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
      <path d="M16 0L19.8 3.8L10.2 13.4L6.4 9.6L16 0Z" fill="hsl(43, 88%, 50%)" />
      <path d="M22.4 6.4L26.2 10.2L10.2 26.2L6.4 22.4L22.4 6.4Z" fill="hsl(43, 88%, 50%)" />
      <path d="M3.8 12.8L7.6 16.6L3.8 20.4L0 16.6L3.8 12.8Z" fill="hsl(43, 88%, 50%)" />
      <path d="M28.2 12.8L32 16.6L16 32.6L12.2 28.8L28.2 12.8Z" fill="hsl(43, 88%, 50%)" />
    </svg>
    Built on BNB Chain
  </div>
);

export default BNBBadge;
