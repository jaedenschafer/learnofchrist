import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 4 — Treasure in Earthen Vessels
 *
 * Paul speaks of the gospel as an incomparable treasure, yet it is entrusted to
 * ordinary, fragile human vessels. This paradox—infinite treasure in finite
 * containers—reveals God&apos;s design: the power belongs to Him, not to the
 * vessels. We are afflicted but not crushed, perplexed but not despairing.
 */
export const SECOND_CORINTHIANS_4: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 4,

  intros: [
    'Paul reflects on the glory and the humility of his calling. The gospel is glorious—the revelation of Christ. Yet it has been given to vessels of clay—apostles who are weak, afflicted, sometimes doubting. This is not a flaw. It is by design. When the container is broken, the contents become visible.',
    'The theme of weakness and strength runs through 2 Corinthians. Here Paul articulates it most clearly: we are hard-pressed but not crushed, perplexed but not in despair. Why? Because our trust is not in our own resilience but in Christ&apos;s power working through us.',
  ],

  sections: [
    {
      ref: '2 Corinthians 4:1–12',
      title: 'Afflictions: Pressed but Not Crushed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Therefore seeing we have this ministry, as we have received mercy, we faint not;'),
            plain(5, 'For we preach not ourselves, but Christ Jesus the Lord; and ourselves your servants for Jesus&apos; sake.'),
            plain(7, 'But we have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us.'),
            plain(8, 'We are troubled on every side, yet not distressed; we are perplexed, but not in despair;'),
            plain(9, 'Persecuted, but not forsaken; cast down, but not destroyed;'),
            plain(10, 'Always bearing about in the body the dying of the Lord Jesus, that the life also of Jesus might be made manifest in our body.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-4-treasure',
          html:
            'The gospel is &quot;treasure&quot;—incomparably valuable. Yet it is entrusted to &quot;earthen vessels&quot;—breakable, fragile, mortal containers. Why? &quot;That the excellency of the power may be of God, and not of us.&quot; When the vessel breaks, the light shines through.',
        },
        {
          kind: 'greek',
          id: 'cor2-4-ostrakina',
          title: 'Ostrakina — Earthen; Made of Clay',
          script: 'ὀστράκινα',
          translit: '<strong>Ostrakina</strong> · made of clay; earthen; fragile vessels',
          description:
            'Clay vessels are common, cheap, easily broken. Yet they were used in the ancient world to carry precious things. The fragility of the vessel makes the preciousness of the contents stand out.',
        },
        {
          kind: 'commentary',
          id: 'cor2-4-afflictions',
          html:
            'Paul catalogs his afflictions: troubled on every side, perplexed, persecuted, cast down. Yet: &quot;not distressed, not in despair, not forsaken, not destroyed.&quot; The paradox is sustained. Affliction is real, but it is not final.',
        },
        {
          kind: 'christ',
          id: 'cor2-4-christ-dying',
          title: 'Christ Connection — Bearing Christ&apos;s Dying',
          html:
            'Paul &quot;always bears about in the body the dying of the Lord Jesus.&quot; He identifies his sufferings with Christ&apos;s death, knowing that as he dies with Christ, so he will live with Him.',
        },
        {
          kind: 'carry',
          html:
            'You are an earthen vessel. Fragile, limited, ordinary. God has placed treasure in you. Do not be ashamed of your fragility. It allows the power to show. When you are weak, Christ is strong.',
        },
        {
          kind: 'reflection',
          id: 'cor2-4-treasure-vessel',
          prompt: 'What treasure has God placed in your &quot;earthen vessel&quot;? How does your fragility actually serve to display His power?',
        },
      ],
    },

    {
      ref: '2 Corinthians 4:13–18',
      title: 'Faith and the Eternal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(13, 'We having the same spirit of faith, according as it is written, I believed, and therefore have I spoken; we also believe, and therefore speak;'),
            plain(14, 'Knowing that he which raised up the Lord Jesus shall raise up us also by Jesus, and shall present us with you.'),
            plain(16, 'For which cause we faint not; but though our outward man perish, yet the inward man is renewed day by day.'),
            plain(17, 'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory;'),
            plain(18, 'While we look not at the things which are seen, but at the things which are not seen: for the things which are seen are temporal; but the things which are not seen are eternal.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-4-faith',
          html:
            'Paul grounds his confidence in faith: he believes, therefore he speaks. His faith is rooted in resurrection hope. &quot;He which raised up the Lord Jesus shall raise up us also.&quot; The resurrection is not past or future only. It is the power operating in the present.',
        },
        {
          kind: 'greek',
          id: 'cor2-4-thanatoo',
          title: 'Thanatos — Death',
          script: 'θάνατος',
          translit: '<strong>Thanatos</strong> · death; the end of life',
          description:
            'Though the outward person is dying—decaying—the inward person is renewed day by day. Death is operating in the body, but life is operating in the spirit. This is the mystery of the Christian life.',
        },
        {
          kind: 'commentary',
          id: 'cor2-4-eternal',
          html:
            'Paul calls his afflictions &quot;light affliction, which is but for a moment.&quot; Not because they do not hurt—they do. But because they are weighed against an eternal weight of glory. The temporal is dwarfed by the eternal.',
        },
        {
          kind: 'christ',
          id: 'cor2-4-christ-raise',
          title: 'Christ Connection — Christ&apos;s Resurrection; Our Resurrection',
          html:
            'Christ was raised. By that same power, believers will be raised. Resurrection is not merely future hope. It is present power—the power that renews the inward person day by day.',
        },
        {
          kind: 'carry',
          html:
            'Your outward circumstances may be changing. Your body ages. Your circumstances shift. But look beyond the seen. There is an unseen eternal reality that exceeds all temporal suffering. Fix your eyes there.',
        },
        {
          kind: 'reflection',
          id: 'cor2-4-eternal-weight',
          prompt: 'What present affliction are you facing? How might it be &quot;light&quot; and &quot;momentary&quot; compared to an eternal weight of glory?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But we have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 4 · Study Guide',
  },

  hasHebrew: false,
};
