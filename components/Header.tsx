import Image from 'next/image';

export function Header() {
  return (
    <header className="relative z-10 border-b border-[#eadfce]/80 bg-[#fffdf9]/90 backdrop-blur-sm">
      <div className="page-shell flex h-24 items-center justify-center sm:h-28">
        <Image
          src="/images/logo.png"
          alt="The Meragi Decor"
          width={2048}
          height={1081}
          priority
          className="h-auto w-40 sm:w-48"
        />
      </div>
    </header>
  );
}
