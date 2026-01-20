const STORAGE_KEY = 'trackingParams';
const PARAM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'msclkid'
];
const EXPIRATION_MS = 30 * 24 * 60 * 60 * 1000;

const getStoredParams = () => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    if (!parsed.storedAt || !parsed.values || typeof parsed.values !== 'object') return null;

    if (Date.now() - parsed.storedAt > EXPIRATION_MS) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch (error) {
    return null;
  }
};

const saveStoredParams = (values, storedAt) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      storedAt,
      values
    })
  );
};

const extractParamsFromUrl = (href) => {
  const values = {};
  let hasAny = false;

  try {
    const url = new URL(href, window.location.origin);
    PARAM_KEYS.forEach((key) => {
      if (url.searchParams.has(key)) {
        values[key] = url.searchParams.get(key) || '';
        hasAny = true;
      }
    });
  } catch (error) {
    return { values: {}, hasAny: false };
  }

  return { values, hasAny };
};

const isSkippableHref = (href) => {
  if (!href) return true;
  const lowered = href.toLowerCase();
  return (
    lowered.startsWith('#') ||
    lowered.startsWith('mailto:') ||
    lowered.startsWith('tel:') ||
    lowered.startsWith('javascript:')
  );
};

const decorateLinks = (values) => {
  if (!values || Object.keys(values).length === 0) return;
  const links = document.querySelectorAll('a[href]');

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (isSkippableHref(href)) return;

    let url;
    try {
      url = new URL(href, window.location.href);
    } catch (error) {
      return;
    }

    if (url.origin !== window.location.origin) return;

    let changed = false;
    PARAM_KEYS.forEach((key) => {
      if (!values[key]) return;
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, values[key]);
        changed = true;
      }
    });

    if (changed) {
      link.setAttribute('href', `${url.pathname}${url.search}${url.hash}`);
    }
  });
};

const fillFormFields = (values) => {
  if (!values || Object.keys(values).length === 0) return;
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    PARAM_KEYS.forEach((key) => {
      const value = values[key];
      if (!value) return;

      const existingInput = form.querySelector(`input[name="${key}"]`);

      if (existingInput) {
        if (existingInput.type === 'hidden') {
          existingInput.value = value;
        }
        return;
      }

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });
  });
};

const applyTrackingToDom = () => {
  const stored = getStoredParams();
  if (!stored) return;

  decorateLinks(stored.values);
  fillFormFields(stored.values);
};

const createApplyScheduler = () => {
  let scheduled = false;

  return () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyTrackingToDom();
    });
  };
};

export const initTracking = () => {
  if (typeof window === 'undefined') return;
  if (window.__trackingInitialized) return;
  window.__trackingInitialized = true;

  const stored = getStoredParams();
  const { values: newValues, hasAny } = extractParamsFromUrl(window.location.href);
  let mergedValues = stored?.values ?? {};
  let storedAt = stored?.storedAt ?? Date.now();

  if (hasAny) {
    mergedValues = { ...mergedValues, ...newValues };
    storedAt = Date.now();
    saveStoredParams(mergedValues, storedAt);
  } else if (stored) {
    mergedValues = stored.values;
  }

  const scheduleApply = createApplyScheduler();

  const runAfterReady = () => {
    scheduleApply();
    const observer = new MutationObserver(() => scheduleApply());
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['href', 'action']
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAfterReady, { once: true });
  } else {
    runAfterReady();
  }

  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function pushState(...args) {
    originalPushState.apply(this, args);
    scheduleApply();
  };

  history.replaceState = function replaceState(...args) {
    originalReplaceState.apply(this, args);
    scheduleApply();
  };

  window.addEventListener('popstate', scheduleApply);
};
