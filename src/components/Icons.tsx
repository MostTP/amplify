type IconProps = { className?: string };

export function IconBroadcast({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4.5 12a7.5 7.5 0 0115 0M7.5 12a4.5 4.5 0 019 0M10.5 12a1.5 1.5 0 013 0" strokeLinecap="round" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconCamera({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 8h2l2-3h8l2 3h2a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function IconDesign({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
      <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDigital({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" strokeLinecap="round" />
      <path d="M7 9h2M11 9h6M7 12h10" strokeLinecap="round" />
    </svg>
  );
}

export function IconVisuals({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" strokeLinecap="round" />
      <path d="M7 9h2M11 9h6M7 12h10" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlay({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function IconRec({ className = "w-3 h-3" }: IconProps) {
  return (
    <span className={`inline-block rounded-full bg-red-500 ${className}`} />
  );
}

export function Waveform({ className = "" }: IconProps) {
  const bars = [3, 5, 8, 4, 7, 5, 9, 4, 6, 3];
  return (
    <div className={`flex items-end gap-0.5 h-6 ${className}`}>
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-royal-400 animate-wave origin-bottom"
          style={{
            height: `${h * 2}px`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

const iconMap = {
  broadcast: IconBroadcast,
  camera: IconCamera,
  design: IconDesign,
  digital: IconDigital,
  visuals: IconVisuals,
} as const;

export function MediaIcon({
  name,
  className,
}: {
  name: keyof typeof iconMap;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
