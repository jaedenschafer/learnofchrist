import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 1 — Faith, Love, Hope; Ye Turned to God from Idols
 *
 * "Remembering without ceasing your work of faith, and labour of love, and
 * patience of hope in our Lord Jesus Christ, in the sight of God and our Father."
 * Paul opens with gratitude for the Thessalonian church. They have believed.
 * They have turned from idols. They are waiting for the Son of God to come from
 * heaven. This is the shape of faith: from idolatry to the living God.
 */
export const FIRST_THESSALONIANS_1: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 1,

  intros: [
    'Paul addresses a young church born in difficulty. He had been driven out of Thessalonica by opposition, yet the church remained, and grew. This opening chapter is Paul&apos;s thanksgiving for their steadfastness. They have faith. They have love. They have hope. And they have done something remarkable: they have turned to God from idols.',
    'The Thessalonians became believers in the midst of a pagan world. They rejected the gods of their ancestors. They rejected the spiritual comfort of idolatry. And they chose instead to wait for Jesus Christ—a figure they had never seen, in a kingdom that was not yet visible. This is the shape of conversion.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 1',
    quote:
      'Your faith, love, and hope are remembered. You turned to God from idols, serving the living and true God, waiting for His Son from heaven.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 1 · Study Guide',
  },

  sections: [
    /* ─── 1 Thessalonians 1:1–10 — Conversion from Idols; Waiting for the Son ── */
    {
      ref: '1 Thessalonians 1:1–10',
      title: 'From Idols to the Living God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {{
              number: 3,
              spans: [
                t('Remembering without ceasing your '),
                hp('work of faith, and labour of love, and patience of hope', '1t1-virtues'),
                t(' in our Lord Jesus Christ, in the sight of God and our Father;'),
              ],
            }},
            {{
              number: 4,
              spans: [
                t('Knowing, brethren beloved, your '),
                hg('election of God', '1t1-election'),
                t(';'),
              ],
            }},
            {{
              number: 9,
              spans: [
                t('For they themselves shew of us what manner of entering in we had unto you, and how ye '),
                hp('turned to God from idols to serve the living and true God', '1t1-turned'),
                t(';'),
              ],
            }},
            {{
              number: 10,
              spans: [
                t('And to wait for his Son from heaven, whom he raised from the dead, even Jesus, which delivered us from the wrath to come.'),
              ],
            }},
          ],
        },
        {
          kind: 'commentary',
          id: '1t1-virtues',
          html:
            '"Work of faith, and labour of love, and patience of hope." These three—faith, love, and hope—are not mere emotions. They are works, labors, expressions of commitment. Faith that does not work is dead. Love that is not labored is shallow. Hope that is not patient is mere wishfulness.',
        },
        {
          kind: 'commentary',
          id: '1t1-election',
          html:
            '"Your election of God." Paul grounds their conversion not in their choice alone, but in God&apos;s choice. They were elected, chosen, selected by God. This did not make them passive; it made their response a free cooperation with divine purpose.',
        },
        {
          kind: 'commentary',
          id: '1t1-turned',
          html:
            '"Turned to God from idols." This is the shape of conversion. Not merely an intellectual shift, but a reorientation—a turning away from false gods and a turning toward the true God. The Thessalonians had rejected the spiritual heritage of their ancestors for the gospel.',
        },
        {
          kind: 'greek',
          id: '1t1-aletheia',
          title: 'Aletheia — "True"',
          script: 'ἀληθινός',
          translit: '<strong>Alethinos</strong> · true; genuine; authentic; real',
          description:
            'The "true" God is not one god among many, but the genuinely real God—the one God, the source of all reality. Idols are false because they are not real—they are human inventions, wood and stone.',
        },
        {
          kind: 'christ',
          id: '1t1-christ-wait',
          title: 'Christ Connection — Waiting for Christ&apos;s Return',
          html:
            'The Thessalonians waited for "His Son from heaven." This is the hope of the early church: Christ will return. This was not speculation or fantasy. It was the center of their hope. And this hope was rooted in the resurrection: He was "raised from the dead."',
        },
        {
          kind: 'carry',
          html:
            'The Thessalonians turned from idols. This meant releasing security, releasing tradition, releasing spiritual comfort. They chose instead to follow a Christ they had never seen, waiting for a return they had not witnessed. This is the shape of faith. Not faith based on sight, but faith that sees through the present into God&apos;s future.',
        },
        {
          kind: 'reflection',
          id: '1t1-turn-reflect',
          prompt: 'What idols are you still turning from? What true God are you turning toward?',
        },
      ],
    },
  ],
};
