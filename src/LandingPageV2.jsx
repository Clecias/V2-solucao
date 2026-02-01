import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, Zap, BarChart3, CheckCircle2, Target, Star, Play, PhoneCall } from 'lucide-react';
import PricingSection from './components/landing/PricingSection';
import VideoTestimonialsSection from './components/landing/VideoTestimonialsSection';
import IntegrationsSection from './components/landing/IntegrationsSection';
import FaqSection from './components/landing/FaqSection';
import Header from './components/landing/Header';
import PromoPopup from './components/landing/PromoPopup';

export default function LandingPageV2() {
  const [activeTab, setActiveTab] = useState('recovery');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const demoTriggerRef = useRef(null);
  const demoCloseRef = useRef(null);
  const demoModalRef = useRef(null);

  useEffect(() => {
    if (!isDemoOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    demoCloseRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsDemoOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = demoModalRef.current?.querySelectorAll(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isDemoOpen]);

  useEffect(() => {
    if (!isDemoOpen) {
      demoTriggerRef.current?.focus();
    }
  }, [isDemoOpen]);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-white pt-16">
      <Header />
      <PromoPopup />
      {/* Hero */}
      <section className="text-white py-20 px-6" style={{background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-5 py-2 rounded-lg font-semibold mb-6">
              <TrendingUp className="w-5 h-5" />
              +3.847 vendas recuperadas nas últimas 24h
            </div>
            
            <h1 className="text-[clamp(2.1rem,5.4vw,3.75rem)] font-bold mb-6 leading-tight">
              Aumente Seu Faturamento em 30-45%
            </h1>
            
            <p className="text-[clamp(1.25rem,3.2vw,1.5rem)] mb-4 font-semibold">
              Recupere automaticamente vendas que você já conquistou mas não fechou
            </p>
            
            <p className="text-[clamp(1.02rem,2.6vw,1.25rem)] opacity-95 mb-10 sm:mb-12 max-w-3xl mx-auto">
              Carrinhos abandonados, pedidos recusados e clientes inativos viram dinheiro no bolso enquanto você dorme
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-12">
              <a
                className="bg-white w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl transition inline-flex items-center justify-center"
                style={{color: '#2472b3'}}
                href="https://www.unicodrop.com.br/app/?t=cadastrar"
              >
                Começar a Recuperar Vendas Agora
                <ArrowRight className="w-6 h-6 inline ml-2" />
              </a>
              <button
                ref={demoTriggerRef}
                type="button"
                data-demo-button
                className="bg-transparent border-2 border-white text-white w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:bg-white hover:bg-opacity-10 transition"
                onClick={handleOpenDemo}
              >
                <Play className="w-6 h-6 inline mr-2" />
                Ver Demonstração
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl">
                <p className="text-[clamp(1.45rem,4.2vw,2.25rem)] font-black mb-2">R$ 2.3M+</p>
                <p className="text-xs sm:text-sm opacity-90">Recuperados em 2025</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl">
                <p className="text-[clamp(1.45rem,4.2vw,2.25rem)] font-black mb-2">38%</p>
                <p className="text-xs sm:text-sm opacity-90">Aumento médio</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl">
                <p className="text-[clamp(1.45rem,4.2vw,2.25rem)] font-black mb-2">28mil+</p>
                <p className="text-xs sm:text-sm opacity-90">Lojas</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur p-4 sm:p-6 rounded-xl">
                <p className="text-[clamp(1.45rem,4.2vw,2.25rem)] font-black mb-2">24/7</p>
                <p className="text-xs sm:text-sm opacity-90">Trabalhando</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Esperados */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900 mb-4">
              Resultados Reais Que Você Pode Esperar
            </h2>
            <p className="text-[clamp(1.05rem,2.6vw,1.25rem)] text-gray-600">
              Baseado em dados de +28mil lojas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                icon: <DollarSign className="w-13 h-13 text-white" />,
                metric: "R$ 4.800 - R$ 18.500",
                label: "Recuperados no 1º mês",
                desc: "Média de clientes que faturam R$ 30k-100k/mês",
                color: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'
              },
              {
                icon: <TrendingUp className="w-13 h-13 text-white" />,
                metric: "22-35%",
                label: "De carrinhos recuperados",
                desc: "Taxa média de conversão em vendas efetivas",
                color: 'linear-gradient(135deg, #26abe2 0%, #2472b3 100%)'
              },
              {
                icon: <Clock className="w-13 h-13 text-white" />,
                metric: "40-60 horas",
                label: "Economizadas por mês",
                desc: "Tempo que gastava respondendo clientes",
                color: 'linear-gradient(135deg, #1b1464 0%, #2472b3 100%)'
              }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl border-2 border-gray-200 p-6 sm:p-8 hover:shadow-xl transition">
                <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-6" style={{background: stat.color}}>
                  {stat.icon}
                </div>
                <p className="text-[clamp(1.6rem,4.2vw,2.25rem)] font-black text-gray-900 mb-2 break-words">{stat.metric}</p>
                <p className="text-[clamp(1rem,2.4vw,1.125rem)] font-bold text-gray-700 mb-3 leading-snug">{stat.label}</p>
                <p className="text-[clamp(0.95rem,2.3vw,1rem)] text-gray-600 leading-snug">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-10 rounded-2xl border border-blue-200">
            <h3 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900 mb-8 text-center">
              De Onde Vem Esse Resultado?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {[
                {
                  title: "Recuperação de Carrinhos",
                  percentage: "40%",
                  value: "R$ 3.200 - R$ 12.000/mês",
                  desc: "70% abandonam. Recuperamos 25-35% automaticamente.",
                  bg: 'bg-blue-50'
                },
                {
                  title: "Pedidos Recusados",
                  percentage: "25%",
                  value: "R$ 1.000 - R$ 4.000/mês",
                  desc: "40% compram com método alternativo quando oferecido.",
                  bg: 'bg-blue-50'
                },
                {
                  title: "Reativação de Clientes",
                  percentage: "20%",
                  value: "R$ 800 - R$ 3.500/mês",
                  desc: "Inativos voltam com campanhas personalizadas.",
                  bg: 'bg-blue-50'
                },
                {
                  title: "Upsell Pós-Compra",
                  percentage: "15%",
                  value: "R$ 600 - R$ 2.500/mês",
                  desc: "Ofertas complementares aumentam ticket médio.",
                  bg: 'bg-blue-50'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-[clamp(1.05rem,2.5vw,1.25rem)] font-bold text-gray-900">{item.title}</h4>
                    <span className="px-3 py-1 rounded-full text-sm font-bold text-white" style={{background: '#2472b3'}}>
                      {item.percentage}
                    </span>
                  </div>
                  <p className="text-[clamp(1.4rem,3.8vw,2rem)] font-black mb-2 break-words" style={{color: '#2472b3'}}>{item.value}</p>
                  <p className="text-[clamp(0.95rem,2.3vw,1rem)] text-gray-600 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white p-6 sm:p-8 rounded-xl shadow-lg border-2" style={{borderColor: '#2472b3'}}>
              <p className="text-[clamp(1rem,2.4vw,1.125rem)] text-gray-700 mb-2">Potencial total de recuperação mensal:</p>
              <p className="text-[clamp(1.25rem,6vw,2rem)] font-black mb-2" style={{color: '#2472b3'}}>R$ 5.600 - R$ 22.000</p>
              <p className="text-[clamp(1rem,2.4vw,1.125rem)] text-gray-600">Com vendas que você JÁ CONQUISTOU mas perdeu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-center mb-4">
            Resultados Reais. Clientes Reais.
          </h2>
          <p className="text-center text-[clamp(1.05rem,2.6vw,1.25rem)] opacity-90 mb-12">
            Veja o que nossos clientes estão alcançando
          </p>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                name: "Rafael Costa",
                business: "Dropshipping de Eletrônicos",
                period: "90 dias usando Único Drop",
                image: "RC",
                before: "Faturava R$ 45k/mês",
                after: "Passou a faturar R$ 68k/mês",
                increase: "+R$ 23.000/mês",
                highlight: "Recuperou R$ 18.400 só de carrinhos abandonados",
                quote: "Nos primeiros 30 dias já tinha pago 6 meses da ferramenta. Hoje não consigo imaginar trabalhar sem. O sistema literalmente se paga sozinho.",
                rating: 5
              },
              {
                name: "Camila Mendes",
                business: "E-commerce de Moda Feminina",
                period: "120 dias usando Único Drop",
                image: "CM",
                before: "Gastava 5h/dia em atendimento",
                after: "Gasta 45min/dia em atendimento",
                increase: "+67% tempo livre",
                highlight: "Margem de lucro aumentou 12% identificando produtos ruins",
                quote: "A automação não só recuperou vendas, me devolveu minha vida. Agora eu trabalho NO negócio, não só DENTRO dele.",
                rating: 5
              },
              {
                name: "Lucas Barros",
                business: "Infoprodutos (Curso Online)",
                period: "60 dias usando Único Drop",
                image: "LB",
                before: "ROI de 2.1x em tráfego pago",
                after: "ROI de 4.3x em tráfego pago",
                increase: "+105% no ROI",
                highlight: "R$ 31.200 recuperados em pedidos recusados",
                quote: "Mesmo investimento em anúncios, mas agora converto mais que o dobro. O follow-up automático não deixa ninguém escapar.",
                rating: 5
              }
            ].map((story, idx) => (
              <div key={idx} className="rounded-2xl p-6 sm:p-8 border-2" style={{background: 'linear-gradient(135deg, rgba(36, 114, 179, 0.1) 0%, rgba(27, 20, 100, 0.1) 100%)', borderColor: '#2472b3'}}>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[clamp(1.25rem,3vw,1.5rem)] font-black" style={{background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'}}>
                        {story.image}
                      </div>
                      <div>
                        <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold">{story.name}</h3>
                        <p className="opacity-90 text-sm sm:text-base">{story.business}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#26abe2'}} />
                        <p className="text-sm sm:text-base"><span className="text-gray-400">Antes:</span> {story.before}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#26abe2'}} />
                        <p className="text-sm sm:text-base"><span className="text-gray-400">Depois:</span> {story.after}</p>
                      </div>
                    </div>

                    <div className="bg-green-600 p-4 rounded-lg">
                      <p className="text-[clamp(1.25rem,3vw,1.5rem)] font-black mb-1">{story.increase}</p>
                      <p className="text-sm opacity-90">{story.period}</p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white bg-opacity-10 backdrop-blur p-5 sm:p-6 rounded-xl mb-4 border border-white border-opacity-20">
                      <p className="font-bold mb-2" style={{color: '#26abe2'}}>✨ Destaque:</p>
                      <p className="text-[clamp(1rem,2.4vw,1.125rem)] leading-snug break-words">{story.highlight}</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-5 backdrop-blur p-5 sm:p-6 rounded-xl italic border-l-4" style={{borderColor: '#26abe2'}}>
                      <p className="text-[clamp(1rem,2.4vw,1.125rem)] leading-relaxed break-words">"{story.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              className="bg-white w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl transition inline-flex items-center justify-center"
              style={{color: '#2472b3'}}
              href="https://www.unicodrop.com.br/app/?t=cadastrar"
            >
              Quero Resultados Como Esses
              <ArrowRight className="w-6 h-6 inline ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-gray-900 mb-4">
            Como o Único Drop Gera Esses Resultados
          </h2>
          <p className="text-[clamp(1.05rem,2.6vw,1.25rem)] text-gray-600">
            Sistema completo trabalhando 24/7 para você
          </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-12">
            {[
              {
                number: "1",
                title: "Detecta Oportunidades",
                desc: "Identifica carrinhos abandonados, pedidos recusados e clientes inativos em tempo real",
                icon: <Target className="w-8 h-8" />
              },
              {
                number: "2",
                title: "Recupera Automaticamente",
                desc: "Envia sequências otimizadas via WhatsApp, Email e SMS no momento perfeito",
                icon: <Zap className="w-8 h-8" />
              },
              {
                number: "3",
                title: "Mostra Resultados",
                desc: "Dashboard atualizado em tempo real com lucro, conversões e métricas",
                icon: <BarChart3 className="w-8 h-8" />
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border-2 border-gray-200 hover:shadow-lg transition">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl font-black mb-6" style={{background: 'linear-gradient(135deg, #2472b3 0%, #26abe2 100%)'}}>
                  {step.number}
                </div>
                <div className="mb-4 text-gray-700">{step.icon}</div>
                <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-[clamp(1rem,2.4vw,1.125rem)] text-gray-600 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-2xl border-2" style={{borderColor: '#2472b3'}}>
            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-8 text-center">O Que Você Recebe</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Recuperação automática de carrinhos abandonados",
                "Recuperação de pedidos recusados com métodos alternativos",
                "Reativação de clientes inativos",
                "Notificações inteligentes por WhatsApp",
                "Campanhas automatizadas por Email",
                "Mensagens SMS em momentos-chave",
                "Dashboard com lucro real em tempo real",
                "Rastreamento automático de pedidos",         
                "Análise de margem por produto",
                "ROI de campanhas de marketing",
                "Implementação guiada pela equipe",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{color: '#2472b3'}} />
                  <span className="text-gray-700 text-[clamp(1rem,2.4vw,1.125rem)] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <VideoTestimonialsSection />
      <IntegrationsSection />
      <FaqSection />

      {/* CTA Final */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-6">
            Não Deixe Seus Concorrentes Te Ultrapassarem
          </h2>
          <p className="text-[clamp(1.05rem,2.6vw,1.25rem)] mb-8 opacity-90">
            Enquanto você decide, eles estão recuperando vendas no automático. Comece hoje e veja resultados em 24h.
          </p>
          <a
            className="bg-white w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-xl font-bold text-lg sm:text-xl md:text-2xl hover:shadow-2xl transition mb-6 inline-flex items-center justify-center"
            style={{color: '#2472b3'}}
            href="https://www.unicodrop.com.br/app/?t=cadastrar"
          >
            Começar Minha Automação
            <ArrowRight className="w-7 h-7 inline ml-2" />
          </a>
          <div className="pt-8 border-t border-gray-700">
            <p className="text-lg mb-4">Prefere falar com alguém?</p>
            <a
              className="bg-green-600 text-white w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-green-700 transition inline-flex items-center justify-center"
              href="https://wa.me/5511945109907"
            >
              <PhoneCall className="w-5 h-5 inline mr-2" />
              Falar no WhatsApp com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-4 text-center text-slate-400"
        style={{ background: 'linear-gradient(135deg, #1b1464 0%, #2472b3 100%)' }}
      >
        <p>© 2024 Único Drop. Todos os direitos reservados.</p>
      </footer>

      {isDemoOpen && (
        <div
          className="demo-modal__overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseDemo();
            }
          }}
        >
          <div
            className="demo-modal__content"
            role="dialog"
            aria-modal="true"
            aria-label="Demonstração em vídeo"
            ref={demoModalRef}
          >
            <button
              type="button"
              className="demo-modal__close"
              aria-label="Fechar demonstração"
              onClick={handleCloseDemo}
              ref={demoCloseRef}
            >
              ×
            </button>
            <div className="demo-modal__video">
              <iframe
                title="Demonstração"
                src="https://www.youtube.com/embed/M8O4vOj-UOE?autoplay=1&mute=1&rel=0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
