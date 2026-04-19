import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const SIZE = { width: 1200, height: 630 };

function clamp(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trim() + '…';
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const quote = clamp(searchParams.get('quote') || '', 320);
  const ref = clamp(searchParams.get('ref') || '', 60);
  const snippet = clamp(searchParams.get('snippet') || '', 240);
  const variant = (searchParams.get('variant') || 'verse') as 'verse' | 'insight';

  const isInsight = variant === 'insight';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #FFFFFF 0%, #F5F8FF 40%, #EFEEFF 100%)',
          position: 'relative',
          fontFamily: '"New York", "Iowan Old Style", Georgia, serif',
        }}
      >
        {/* Decorative corner blob */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 210,
            background: isInsight
              ? 'radial-gradient(closest-side, #5856D633, transparent)'
              : 'radial-gradient(closest-side, #007AFF33, transparent)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: 210,
            background: 'radial-gradient(closest-side, #FFCC0022, transparent)',
            display: 'flex',
          }}
        />

        {/* Top row: eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: isInsight ? '#5856D6' : '#007AFF',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: isInsight ? '#5856D6' : '#007AFF',
              display: 'block',
            }}
          />
          {isInsight ? 'Insight' : 'Scripture'}
        </div>

        {/* Quote */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            padding: '40px 0',
          }}
        >
          <div
            style={{
              fontSize: quote.length > 180 ? 44 : 56,
              lineHeight: 1.2,
              color: '#1D1D1F',
              fontStyle: isInsight ? 'normal' : 'italic',
              letterSpacing: '-0.01em',
            }}
          >
            {isInsight ? quote : `“${quote}”`}
          </div>
          {snippet && (
            <div
              style={{
                marginTop: 32,
                fontFamily:
                  '-apple-system, "SF Pro Text", system-ui, sans-serif',
                fontSize: 22,
                lineHeight: 1.45,
                color: '#48484A',
              }}
            >
              {snippet}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 32,
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div
              style={{
                fontFamily:
                  '-apple-system, "SF Pro Text", system-ui, sans-serif',
                fontSize: 22,
                fontWeight: 700,
                color: '#1D1D1F',
                letterSpacing: '-0.01em',
              }}
            >
              {ref || 'Learn of Christ'}
            </div>
            {ref && (
              <div
                style={{
                  fontFamily:
                    '-apple-system, "SF Pro Text", system-ui, sans-serif',
                  fontSize: 16,
                  color: '#86868B',
                }}
              >
                learnofchrist.com
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #007AFF, #5856D6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontFamily:
                  '-apple-system, "SF Pro Display", system-ui, sans-serif',
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              L
            </div>
            {!ref && (
              <div
                style={{
                  fontFamily:
                    '-apple-system, "SF Pro Text", system-ui, sans-serif',
                  fontSize: 18,
                  color: '#86868B',
                }}
              >
                learnofchrist.com
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    SIZE,
  );
}
