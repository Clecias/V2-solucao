import { ArrowRight, Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Growth',
    price: '139,90',
    href: 'https://www.unicodrop.com.br/app/?t=cadastrar',
    features: [
      'Dashboard financeiro (vendas, custos e lucro)',
      'WhatsApp ilimitado (1 número conectado)',
      'E-mail marketing (até 3.000 envios/mês)',
      'Plugin de rastreamento de pedidos',
      'Notificações automáticas de rastreio (WhatsApp + e-mail)',
      'Pedidos retroativos (até 60 dias)',
      'Até 500 rastreios ativos',
    ],
  },
  {
    name: 'Scale',
    price: '179,90',
    popular: true,
    href: 'https://www.unicodrop.com.br/app/?t=cadastrar&plano=2',
    features: [
      'Tudo do plano Growth',
      'WhatsApp ilimitado (4 números conectados)',
      'E-mail marketing (até 12.000 envios/mês)',
      'SMS marketing e automações',
      'Campanhas de e-mail',
      'Até 2.000 rastreios ativos',
      'Pedidos retroativos (até 12 meses)',
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      className="py-16 px-6 text-white"
      style={{
        background: 'linear-gradient(135deg, #1b1464 0%, #2472b3 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold mb-4">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-[clamp(1.05rem,2.4vw,1.25rem)] text-white/90">
            Planos flexíveis para cada etapa do seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white/10 border-2 ${
                plan.popular ? 'border-[#26abe2]' : 'border-white/20'
              } p-6 rounded-2xl h-full flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#2472b3] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Mais usado
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-white/80">R$</span>
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-white/80">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-white/90">
                    <Check className="w-5 h-5 text-[#26abe2] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                className={`w-full rounded-xl font-bold text-lg py-4 transition inline-flex items-center justify-center ${
                  plan.popular
                    ? 'bg-white text-[#2472b3] hover:shadow-2xl'
                    : 'border-2 border-white/40 text-white hover:bg-white/10'
                }`}
                href={plan.href}
              >
                Teste grátis
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-white/75">Cancele quando quiser, sem burocracia.</p>
        </div>
      </div>
    </section>
  );
}
