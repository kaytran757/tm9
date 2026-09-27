import patternRingsGold from '@/assets/images/hoavan/pattern-rings-gold.svg';

export default function RoundelDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[200px] overflow-hidden"
      style={{
        backgroundImage: `url(${patternRingsGold})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: '516px 300px',
        backgroundPosition: 'center bottom',
      }}
      aria-hidden="true"
    />
  );
}
