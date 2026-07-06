'use client';

import { useEffect, useState } from 'react';

/**
 * Strava OAuth callback bridge.
 *
 * Strava redirects here after the user authorizes Movitalis
 * (https://movitalis.app/strava-callback?code=...&scope=...).
 * This page forwards the query parameters into the iOS app via its
 * custom URL scheme and shows a manual fallback link in case the
 * automatic redirect is blocked.
 */
export default function StravaCallback() {
  const [appUrl, setAppUrl] = useState<string | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('error')) {
      setDenied(true);
      return;
    }

    const url = `movitalis://strava-callback?${params.toString()}`;
    setAppUrl(url);
    window.location.href = url;
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      {denied ? (
        <>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Conectarea cu Strava a fost anulată
          </h1>
          <p style={{ opacity: 0.7 }}>
            Poți închide această pagină și încerca din nou din aplicație.
          </p>
        </>
      ) : (
        <>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Conectare la Strava…
          </h1>
          <p style={{ opacity: 0.7 }}>
            Te redirecționăm înapoi în aplicația Movitalis.
          </p>
          {appUrl && (
            <a
              href={appUrl}
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                background: '#FC4C02',
                color: '#fff',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Deschide Movitalis
            </a>
          )}
        </>
      )}
    </main>
  );
}
