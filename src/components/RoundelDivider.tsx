import backgroundCircle from '@/assets/images/hoavan/backgroundCircle.jpg';

export default function RoundelDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[100px] overflow-hidden sm:h-[110px]"
      style={{
        backgroundImage: `url(${backgroundCircle})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center bottom',
      }}
      aria-hidden="true"
    />
  );
}
