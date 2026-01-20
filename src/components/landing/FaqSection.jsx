import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona a integração com minha loja?',
    answer:
      'A integração é simples e rápida. Basta conectar sua plataforma de e-commerce (Shopify, WooCommerce, etc.) através de nosso painel. Todo o processo leva menos de 10 minutos e não requer conhecimento técnico.',
  },
  {
    question: 'Posso trocar de plano depois?',
    answer:
      'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e você só paga a diferença proporcional.',
  },
  {
    question: 'Como funciona o suporte?',
    answer:
      'Nosso suporte está disponível em português por email, chat e WhatsApp. Planos superiores têm acesso a suporte prioritário e até gerente de conta dedicado.',
  },
  {
    question: 'Os dados são seguros?',
    answer:
      'Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos os mais altos padrões de segurança da indústria. Seus dados e dos seus clientes estão completamente protegidos.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer:
      'Sim, não há contrato de fidelidade. Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,4.5vw,2.75rem)] font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-[clamp(1.05rem,2.6vw,1.25rem)] text-gray-600">
            Tudo o que você precisa saber
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-2xl bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-gray-900 font-semibold"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <Plus
                    className={`h-5 w-5 text-[#2472b3] transition ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
