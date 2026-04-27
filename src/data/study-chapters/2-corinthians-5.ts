import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 5 — New Creature; Ambassadors; Reconciliation
 *
 * Paul speaks of the believer&apos;s future resurrection body and present renewal.
 * &quot;If any man be in Christ, he is a new creature.&quot; Old things pass away. All
 * things become new. Believers are ambassadors of reconciliation, entrusted with
 * the message that God has reconciled the world to Himself through Christ.
 */
export const SECOND_CORINTHIANS_5: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 5,

  intros: [
    'Paul has described the present reality of affliction. Now he lifts the gaze to what lies beyond. The believer groans, longing for the resurrection body. But that future hope does not paralyze the present. Instead, it energizes it. The believer is being renewed now. Old identity passes away. A new identity forms. The believer becomes an ambassador of reconciliation.',
    'The heart of this chapter is the doctrine of reconciliation: God has reconciled us to Himself through Christ, and now we are entrusted with the message of reconciliation to a world at enmity with Him. This is the purpose of the believer—to be a herald of peace.',
  ],

  sections: [
    {
      ref: '2 Corinthians 5:1–10',
      title: 'Renewal and the New Creature',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'For we know that if our earthly house of this tabernacle were dissolved, we have a building of God, an house not made with hands, eternal in the heavens.'),
            plain(2, 'For in this we groan, earnestly desiring to be clothed upon with our house which is from heaven:'),
            plain(7, 'For we walk by faith, not by sight:'),
            plain(15, 'And that he died for all, that they which live should not henceforth live unto themselves, but unto him which died for them, and rose again.'),
            plain(17, 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-5-building',
          html:
            'Paul speaks of a future &quot;building of God, an house not made with hands, eternal in the heavens.&quot; The present body is a &quot;tabernacle&quot;—temporary, shakable. But the future body is eternal, &quot;not made with hands&quot;—the work of God alone.',
        },
        {
          kind: 'greek',
          id: 'cor2-5-kainOS',
          title: 'Kainos — New',
          script: 'καινός',
          translit: '<strong>Kainos</strong> · new; fresh; never worn; of a different character',
          description:
            'Kainos is not merely &quot;new in time&quot; but &quot;new in kind.&quot; The creature in Christ is not reformed; it is fundamentally remade. Old categories of identity and sin no longer apply.',
        },
        {
          kind: 'commentary',
          id: 'cor2-5-new-creature',
          html:
            '&quot;If any man be in Christ, he is a new creature.&quot; This is not gradual reformation. This is resurrection-level transformation. The old identity has passed away. What comes is entirely new.',
        },
        {
          kind: 'christ',
          id: 'cor2-5-christ-died',
          title: 'Christ Connection — Died and Rose for All',
          html:
            'Christ &quot;died for all, that they which live should not henceforth live unto themselves, but unto him which died for them, and rose again.&quot; This is the basis of new identity: we are bought with a price. We no longer belong to ourselves.',
        },
        {
          kind: 'carry',
          html:
            'You are a new creature. The old you—with its shame, its strategies, its self-centeredness—has been dissolved in Christ. You now live not for yourself but for Him. Everything about your identity is remade.',
        },
        {
          kind: 'reflection',
          id: 'cor2-5-new',
          prompt: 'In what areas has Christ made you &quot;new&quot;? Where are you still clinging to the &quot;old things&quot; that have passed away?',
        },
      ],
    },

    {
      ref: '2 Corinthians 5:18–21',
      title: 'Ambassadors of Reconciliation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(18, 'And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation;'),
            plain(19, 'To wit, that God was in Christ, reconciling the world unto himself, not imputing their trespasses unto them; and hath committed unto us the word of reconciliation.'),
            plain(20, 'Now then we are ambassadors for Christ, as though God did beseech you by us: we pray you in Christ&apos;s stead, be ye reconciled to God.'),
            plain(21, 'For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-5-reconciled',
          html:
            'God has &quot;reconciled us to himself by Jesus Christ.&quot; The breach between God and humanity has been closed. God has taken the initiative. &quot;God was in Christ, reconciling the world unto himself.&quot; This is the gospel—the announcement of reconciliation already accomplished.',
        },
        {
          kind: 'greek',
          id: 'cor2-5-presbeuo',
          title: 'Presbeuo — To Be an Ambassador',
          script: 'πρεσβεύω',
          translit: '<strong>Presbeuo</strong> · to be an ambassador; to represent; to act on behalf of',
          description:
            'Believers are presbeuo—ambassadors for Christ. An ambassador represents a foreign power in a hostile land. The believer represents the kingdom of heaven in a world at enmity with God.',
        },
        {
          kind: 'commentary',
          id: 'cor2-5-ambassador',
          html:
            '&quot;We are ambassadors for Christ, as though God did beseech you by us.&quot; The Corinthians are not merely hearing Paul. They are hearing God. This is the awesome responsibility and privilege of the ambassador—to speak on behalf of the King.',
        },
        {
          kind: 'christ',
          id: 'cor2-5-christ-reconciliation',
          title: 'Christ Connection — Christ Made Reconciliation Possible',
          html:
            'Christ was &quot;made sin for us, who knew no sin; that we might be made the righteousness of God in him.&quot; The exchange is complete: our sin is transferred to Him; His righteousness is transferred to us.',
        },
        {
          kind: 'carry',
          html:
            'You are an ambassador. Your words, your life, your presence declare: God is offering reconciliation. The breach can be healed. Peace is available. This is your message. This is your mission.',
        },
        {
          kind: 'reflection',
          id: 'cor2-5-ambassador-message',
          prompt: 'What does it mean to be an ambassador for Christ? What is the message you are meant to carry? Who needs to hear it from you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 5 · Study Guide',
  },

  hasHebrew: false,
};
