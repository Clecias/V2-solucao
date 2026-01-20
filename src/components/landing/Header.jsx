import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)' }}
          >
            U
          </div>
          <span className="font-bold text-lg text-gray-900">Único Drop</span>
        </div>

        <Button
          className="text-white font-semibold min-h-[44px] px-4 sm:px-6"
          style={{ background: 'linear-gradient(90deg, #2472b3 0%, #26abe2 100%)' }}
          href="https://www.unicodrop.com.br/app/?t=cadastrar"
        >
          Testar Grátis
        </Button>
      </div>
    </header>
  );
}
