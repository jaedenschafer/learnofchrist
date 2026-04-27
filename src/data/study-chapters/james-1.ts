import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * James 1 — Faith Tested & Refined
 *
 * James opens his epistle with a call to joy in the midst of trials. Temptations
 * are not the voice of God&apos;s judgment, but the occasion for faith to grow.
 * Every good gift flows from the Father of lights—our trials are meant to complete
 * us, not destroy us. The Christian is called to be a doer of the word, not a
 * hearer only, for faith without works is empty.
 */
export const JAMES_1: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 1,

  intros: [
    'James writes to believers scattered abroad, facing trials and opposition. His letter is pastoral and direct—he speaks not as a theorist but as one who knows the life of a faith community under pressure. Where does joy come from when circumstances threaten? Not from the absence of hardship, but from the presence of God through it. James teaches that trials are the proving ground where faith becomes real.',
    'He then turns to a central theme: the source of all good. Every perfect gift comes down from the Father of lights—unchanging, generous, utterly good. From Him comes no shadow or temptation to evil, only the light of truth. The Christian who keeps the word of God is called to be a doer, not a hearer alone. Faith that does not issue in action is dead, mere profession without power.',
  ],

  sections: [
    /* ─── James 1:1–4 — Count It All Joy ────────────────────────────────── */
    {
      ref: 'James 1:1–4',
      title: 'Joy in Trials',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'James, a servant of God and of the Lord Jesus Christ, to the twelve tribes which are scattered abroad, greeting.'),
            plain(2, 'My brethren, count it all joy when ye fall into divers temptations;'),
            plain(3, 'Knowing this, that the trying of your faith worketh patience.'),
            plain(4, 'But let patience have her perfect work, that ye may be perfect and entire, wanting nothing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-joy',
          html:
            'James does not say trials will be pleasant. He says they are the occasion for joy. This is not happiness in suffering itself, but the deep satisfaction that comes from knowing God is at work in us. The word "temptations" carries the sense of testings—moments that reveal and strengthen what is real in faith. When you face such moments, you know something genuine is being forged.',
        },
        {
          kind: 'greek',
          id: 'jam1-dokimion',
          title: 'Dokimion — Testing',
          script: 'δοκίμιον',
          translit: '<strong>Dokimion</strong> · a test; that which proves authenticity; the trial of genuineness',
          description:
            'The Greek word dokimion refers to a test applied to determine whether something is genuine or counterfeit. Gold is tested by fire to prove its purity. Faith is tested by adversity to prove it is real. The testing is not arbitrary punishment. It is the means by which faith becomes mature and whole.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-trials',
          title: 'Christ Connection — Tested & Perfected',
          html:
            'Jesus was tested in all things yet without sin. His trials did not defeat Him but perfected His obedience and proved His faithfulness. In the same way, our trials, met with faith, perfect us. We follow the pattern of the One who endured the cross and now sits at the right hand of God.',
        },
        {
          kind: 'carry',
          html:
            'James says patience must have "her perfect work"—the full expression of faith tested and matured. Patience here is not resignation, but the steady holding to faith over time. What trial faces you today that invites this kind of steadfast faith? What would it mean to count it as joy?',
        },
        {
          kind: 'reflection',
          id: 'jam1-joy-trials',
          prompt: 'What is one trial you&apos;re facing right now? Can you see how patience in that trial might strengthen and complete your faith?',
        },
      ],
    },

    /* ─── James 1:5–18 — Every Good Gift ────────────────────────────────── */
    {
      ref: 'James 1:5–18',
      title: 'The Source of All Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.'),
            plain(6, 'But let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed.'),
            plain(17, 'Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.'),
            plain(21, 'Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness the engrafted word, which is able to save your souls.'),
            plain(22, 'But be ye doers of the word, and not hearers only, deceiving your own selves.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam1-wisdom',
          html:
            'James first addresses those who lack wisdom. The Christian facing trials needs understanding—not mere information, but the wisdom to see God&apos;s hand at work. God gives generously, without reproach. He does not shame us for asking. But the asking must be made in faith, not in doubt. To waver is to be unstable, a ship tossed in the sea, incapable of receiving what God freely offers.',
        },
        {
          kind: 'greek',
          id: 'jam1-sophia',
          title: 'Sophia — Wisdom',
          script: 'σοφία',
          translit: '<strong>Sophia</strong> · wisdom; understanding; discernment of truth',
          description:
            'Sophia is not intellectual prowess but the capacity to see and understand rightly. It is the wisdom that perceives God&apos;s purposes, discerns truth from deception, and directs the whole life toward what is good. It is available to anyone who asks in faith.',
        },
        {
          kind: 'commentary',
          id: 'jam1-father-lights',
          html:
            'The Father of lights is a name rich with meaning. God is the source of all light—wisdom, truth, goodness, life itself. With Him there is no variableness, no shadow of turning. He does not change moods. He is not unstable. Unlike creation, which moves through cycles of growth and decay, God is constant, reliable, absolutely good. Every good thing that comes to you comes from this unchanging source.',
        },
        {
          kind: 'christ',
          id: 'jam1-christ-word',
          title: 'Christ Connection — The Engrafted Word',
          html:
            'The word that is able to save our souls is Christ himself—the Word made flesh. To "receive with meekness the engrafted word" is to let Christ&apos;s teaching be planted deep within us, not merely heard but transformed by it. We become not just listeners but transformed people, who live out what we believe.',
        },
        {
          kind: 'carry',
          html:
            'The closing call is stark: be doers of the word, not hearers only. A Christian who hears Scripture but does not let it change how he loves, how he serves, how he treats the poor—such a one deceives himself. Faith without works is not faith. It is the echo of faith, stripped of power.',
        },
        {
          kind: 'reflection',
          id: 'jam1-doers',
          prompt: 'Think of a command from Scripture you know well. How is God calling you to do it, not just hear it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Count it all joy when ye fall into divers temptations, knowing this, that the trying of your faith worketh patience. Every good gift and every perfect gift is from above. Be ye doers of the word, and not hearers only.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 1 · Study Guide',
  },

  hasHebrew: false,
};
