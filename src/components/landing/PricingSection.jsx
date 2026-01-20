import { ArrowRight, Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Growth',
    price: '119,90',
    href: 'https://www.unicodrop.com.br/app/?t=cadastrar',
    features: [
      'Dashboard financeiro',
      'Automação de WhatsApp ilimitada (1 número conectado)',
      'Automação de E-mails (3.000 envios)',
      'Leads ilimitados',
      'Templates de E-mails',
      'Plugin de Rastreamento',
      'Plugin de WhatsApp',
      'Automação de E-mail e WhatsApp para atualização de rastreamento',
      'Campanha de E-mails',
      'Pedidos retroativos até 60 dias',
      'Rastreios (500), acima delay maior',
      'Suporte humanizado',
    ],
  },
  {
    name: 'Scale',
    price: '169,90',
    popular: true,
    href: 'https://www.unicodrop.com.br/app/?t=cadastrar&plano=2',
    features: [
      'Tudo do plano Growth',
      'Automação de WhatsApp ilimitada (2 números conectados)',
      'Automação de E-mails (12.000 envios)',
      'Rastreios (2000), acima delay maior',
      'Automação e campanhas de SMS',
      'Importar leads nas campanhas',
      'Templates de mensagens para SMS',
      'Exportação de arquivos',
      'Pedidos retroativos até 12 meses',
      'Suporte Premium',
    ],
  },
  {
    name: 'Elite',
    price: '289,90',
    href: 'https://www.unicodrop.com.br/app/?t=cadastrar&plano=3',
    features: [
      'Tudo do plano Scale',
      'Automação de WhatsApp ilimitada (4 números conectados)',
      'Automação de E-mails (30.000 envios)',
      'Gestor de Conta dedicado',
      'Integração com API Oficial do WhatsApp (em breve)',
      'Acesso à API (em breve)',
      'Chatbot (em breve)',
      'Rastreios (5000), acima delay maior',
      'Pedidos retroativos até 24 meses',
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
            Escolha o Plano Ideal Para Sua Loja
          </h2>
          <p className="text-[clamp(1.05rem,2.4vw,1.25rem)] text-white/90">
            Comece a recuperar vendas hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white/10 border-2 ${
                plan.popular ? 'border-[#26abe2]' : 'border-white/20'
              } p-6 rounded-2xl h-full flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#2472b3] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Mais Popular
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
                Começar Agora
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Shield className="w-10 h-10 mx-auto mb-4 text-white" />
          <p className="font-bold text-xl mb-2 text-white">
            Garantia Incondicional de 30 Dias
          </p>
          <p className="text-lg text-white/90">
            Use o sistema por 30 dias completos. Se ele não recuperar mais
            dinheiro do que o valor da mensalidade, você recebe 100% do seu
            investimento de volta. Sem perguntas, sem burocracia. O risco é
            TODO meu.
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-white/75">
            ✓ Ativação imediata • ✓ Cancele quando quiser • ✓ Suporte em português
          </p>
        </div>
      </div>
    </section>
  );
}
