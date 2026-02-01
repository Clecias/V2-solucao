import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'promo_60off_state_v1';
const SESSION_KEY = 'promo_60off_session_v1';
const DELAY_MS = 10000;

const getState = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (error) {
    return {};
  }
};

const setState = (patch) => {
  const current = getState();
  const next = { ...current, ...patch };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch (error) {
    // noop
  }
  return next;
};

const setSessionFlag = () => {
  try {
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch (error) {
    // noop
  }
};

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMiniVisible, setIsMiniVisible] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Copiar cupom');
  const codeRef = useRef(null);
  const timeoutRef = useRef(null);

  const showModal = () => {
    setIsVisible(true);
    setIsMiniVisible(false);
    setSessionFlag();
    setState({ shown: true, minimized: false });
  };

  const hideModalToMini = () => {
    setIsVisible(false);
    setIsMiniVisible(true);
    setState({ minimized: true });
  };

  useEffect(() => {
    const state = getState();
    if (state.dismissed) return;

    timeoutRef.current = setTimeout(showModal, DELAY_MS);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isVisible) {
        event.preventDefault();
        hideModalToMini();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  const handleCopy = async () => {
    const code = codeRef.current?.textContent?.trim() ?? '';
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel('Copiado!');
      setTimeout(() => setCopyLabel('Copiar cupom'), 1200);
      return;
    } catch (error) {
      // fallback
    }

    const range = document.createRange();
    if (codeRef.current) {
      range.selectNode(codeRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    setCopyLabel('Selecione e copie');
    setTimeout(() => setCopyLabel('Copiar cupom'), 1600);
  };

  return (
    <>
      <div
        id="promo-overlay"
        aria-hidden={!isVisible}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            hideModalToMini();
          }
        }}
        style={{ display: isVisible ? 'flex' : 'none' }}
      >
        <div id="promo-modal" role="dialog" aria-modal="true" aria-labelledby="promo-title">
          <button id="promo-close" aria-label="Fechar" type="button" onClick={hideModalToMini}>
            ×
          </button>

          <div id="promo-header">
            <h2 id="promo-title">3 dias grátis + 60% OFF no 1º mês</h2>
            <p id="promo-subtitle">Use o cupom abaixo e garanta o desconto agora.</p>
          </div>

          <div id="promo-body">
            <div id="promo-coupon">
              <div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Cupom</div>
                <div id="promo-code" ref={codeRef}>
                  60OFF
                </div>
              </div>
              <button className="promo-btn" id="promo-copy" type="button" onClick={handleCopy}>
                {copyLabel}
              </button>
            </div>

            <a
              id="promo-cta-link"
              href="https://www.unicodrop.com.br/app/?t=cadastrar&utm_source=popup&utm_campaign=60OFF&utm_id=LPV2"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <span className="promo-btn" id="promo-cta">
                Criar conta e ativar desconto
              </span>
            </a>

            <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
              Você pode fechar e reabrir depois pelo botão no canto inferior direito.
            </div>
          </div>
        </div>
      </div>

      <div id="promo-mini" style={{ display: isMiniVisible ? 'block' : 'none' }}>
        <button type="button" id="promo-mini-btn" onClick={showModal}>
          Desconto 60%
        </button>
      </div>
    </>
  );
}
