const integrations = [
  { name: 'Shopify', logo: '/integrations/shopify.svg' },
  { name: 'UnicoPag', logo: '/integrations/unicopag3.svg' },
  { name: 'Yampi', logo: '/integrations/yampi.svg' },
  { name: 'Cartpanda', logo: '/integrations/cartpanda.svg' },
  { name: 'WooCommerce', logo: '/integrations/woocommerce.svg' },
  { name: 'Nuvemshop', logo: '/integrations/nuvemshop.svg' },
  { name: 'LPQV', logo: '/integrations/lpqv.svg' },
  { name: 'Appmax', logo: '/integrations/appmax.svg' },
  { name: 'Mercado Pago', logo: '/integrations/mercadopago.svg' },
  { name: 'PagSeguro', logo: '/integrations/pagseguro.svg' },
  { name: 'Pagar.me', logo: '/integrations/pagarme.svg' },
  { name: 'Yever', logo: '/integrations/yever.svg' },
  { name: 'Kiwify', logo: '/integrations/kiwify.svg' },
  { name: 'Hotmart', logo: '/integrations/hotmart.svg' },
  { name: 'Kirvano', logo: '/integrations/kirvano.svg' },
  { name: 'Braip', logo: '/integrations/braip.svg' },
  { name: 'Pepper', logo: '/integrations/pepper.svg' },
  { name: 'Ticto', logo: '/integrations/ticto.svg' },
  { name: 'Eduzz', logo: '/integrations/eduzz.svg' },
  { name: 'Monetizze', logo: '/integrations/monetizze.svg' },
  { name: 'Lastlink', logo: '/integrations/lastlink.svg' },
  { name: 'Loja Integrada', logo: '/integrations/lojaintegrada.svg' },
  { name: 'WhatsApp', logo: '/integrations/whatsapp.svg' },
  { name: 'Facebook', logo: '/integrations/facebook.svg' },
  { name: 'Google', logo: '/integrations/google.svg' },
  { name: 'TikTok', logo: '/integrations/tiktok.svg' },
  { name: 'Taboola', logo: '/integrations/taboola.svg' },
  { name: 'Correios', logo: '/integrations/correios.svg' },
  { name: 'Shopee', logo: '/integrations/shopee.svg' },
  { name: 'Cainiao', logo: '/integrations/cainiao.svg' },
];

const featuredIntegrations = [
  { name: 'Loggi', logo: '/integrations/loggi.svg' },
  { name: 'J&T', logo: '/integrations/jet.svg' },
  { name: 'Kangu', logo: '/integrations/kangu.svg' },
];

export default function IntegrationsSection() {
  return (
    <section className="py-16 px-4 bg-[#f8f9fa]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 pb-2">
          <h4 className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-gray-900 mb-2">
            Integrações
          </h4>
          <p className="text-[clamp(1rem,2.4vw,1.125rem)] text-gray-600 max-w-2xl mx-auto mb-0">
            Todas as integrações necessárias para crescer o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="mt-4 pt-2">
              <div
                className="flex items-center justify-center p-2 rounded shadow-md bg-[#f8f9fa] border border-gray-200"
                style={{ height: '60px' }}
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="max-h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 mb-4">
          {featuredIntegrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center p-2 rounded shadow-md bg-[#f8f9fa] border border-gray-200"
              style={{ height: '60px', minWidth: '120px' }}
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
