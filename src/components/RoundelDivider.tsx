import backgroundCircle from '@/assets/images/hoavan/backgroundCircle.jpg';

export default function RoundelDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[200px] overflow-hidden"
      aria-hidden="true"
    >
      {/* Cream backing layer — multiply blend mode blends the image's
          near-white background into the section's cream (#FDF6E9). */}
      <div className="absolute inset-0 bg-brand-cream" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundCircle})`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center bottom',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
