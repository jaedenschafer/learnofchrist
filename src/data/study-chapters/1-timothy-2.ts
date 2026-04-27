import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Timothy 2 — Prayer and the One Mediator
 *
 * Paul instructs Timothy on the central practice of the church: prayer. Prayers,
 * intercessions, and giving of thanks should be made for all men—emperors and
 * magistrates included. Beneath this seemingly simple exhortation lies profound
 * theology: there is one God, and one mediator between God and men, the man
 * Christ Jesus, who gave Himself a ransom for all.
 */
export const FIRST_TIMOTHY_2: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 2,

  intros: [
    'The church at Ephesus lived under Roman rule. The emperor was treated as divine. Tax collectors were despised. Social order seemed oppressive and unjust. Into this tension, Paul brings a radical command: pray for everyone. Pray for those in authority. Not because they are righteous, but because God desires all men to come to the knowledge of the truth.',
    'Paul&apos;s theology here overturns earthly hierarchies. There is no special class of people—only those who have encountered the one true God through the one mediator. This is not a command that diminishes the suffering caused by injustice, but a proclamation that God&apos;s intention spans beyond every earthly boundary.',
  ],

  sections: [
    /* ─── 1 Timothy 2:1–7 — Prayer for All ───────────────────────────── */
    {
      ref: '1 Timothy 2:1–7',
      title: 'Prayer for All Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men;'),
            plain(2, 'For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty.'),
            plain(3, 'For this is good and acceptable in the sight of God our Saviour;'),
            plain(4, 'Who will have all men to be saved, and to come unto the knowledge of the truth.'),
            plain(5, 'For there is one God, and one mediator between God and men, the man Christ Jesus;'),
            plain(6, 'Who gave himself a ransom for all, to be testified in due time.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-prayer',
          html:
            'Prayer is listed first—not as an afterthought or optional piety, but as essential to the church&apos;s life. Four types are named: supplications (requests for needs), prayers (sacred conversations with God), intercessions (pleading on behalf of others), and giving of thanks. Together they form a complete prayer life. And the scope is universal: all men.',
        },
        {
          kind: 'greek',
          id: 'tim2-deesis',
          title: 'Deesis — Supplication',
          script: 'δέησις',
          translit: '<strong>Deesis</strong> · supplication; petition; earnest request',
          description:
            'Deesis implies personal need, urgency, sometimes even tears. It is not formal prayer but the pouring out of the heart before God. It acknowledges dependence. When Paul calls for deesis for all men, he is calling the church to feel the weight of others&apos; needs as though they were their own.',
        },
        {
          kind: 'commentary',
          id: 'tim2-king',
          html:
            '"For kings, and for all that are in authority." This was countercultural. The emperor Nero was on the throne. He would later persecute believers. Yet Paul calls the church to intercede for him. Not because he is worthy, but because God desires his salvation too. This is revolutionary: even your oppressor is within God&apos;s redemptive scope.',
        },
        {
          kind: 'christ',
          id: 'tim2-christ-ransom',
          title: 'Christ Connection — The One Mediator',
          html:
            'Jesus stands alone as the bridge between a holy God and sinful humanity. He is not one mediator among many, not a step in a longer chain. He is the exclusive passage. His body is the price—a ransom paid once, applicable to all who receive it. Every distinction of status, nationality, and power collapses before this reality.',
        },
        {
          kind: 'carry',
          html:
            'You are called to pray for those you oppose, those who seem undeserving, even those who persecute you. This is not passive acceptance of injustice. It is the fierce hope that no one is beyond the reach of God&apos;s intention to save. Whom are you tempted not to pray for? Who in your life seems "too far gone"? That person is exactly whom Paul tells you to intercede for.',
        },
        {
          kind: 'reflection',
          id: 'tim2-intercessory',
          prompt: 'What changes when you truly believe "God will have all men to be saved"? How does this reshape your prayers for those you struggle with?',
        },
      ],
    },

    /* ─── 1 Timothy 2:8–15 — Men and Women in Worship ────────────────── */
    {
      ref: '1 Timothy 2:8–15',
      title: 'Decorum in Worship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(8, 'I will therefore that men pray every where, lifting up holy hands, without wrath and doubting.'),
            plain(9, 'In like manner also, that women adorn themselves in modest apparel, with shamefacedness and sobriety; not with broided hair, or gold, or pearls, or costly array;'),
            plain(12, 'But I suffer not a woman to teach, nor to usurp authority over the man, but to be in silence.'),
            plain(13, 'For Adam was first formed, then Eve.'),
            plain(14, 'And Adam was not deceived, but the woman being deceived was in the transgression.'),
            plain(15, 'Notwithstanding she shall be saved through childbearing, if they continue in faith and charity and holiness with sobriety.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-prayer-posture',
          html:
            'Prayer is to be accompanied by "holy hands"—hands lifted in the ancient posture of openness and worship. But the inward condition matters: prayer without "wrath and doubting" is powerless. You cannot stand before God while nursing anger toward a brother or harboring skepticism about His goodness.',
        },
        {
          kind: 'greek',
          id: 'tim2-kosmios',
          title: 'Kosmios — Orderly, Modest',
          script: 'κόσμιος',
          translit: '<strong>Kosmios</strong> · orderly; well-arranged; modest; respectable',
          description:
            'Kosmos means "order" or "world." Kosmios means to be in order—not chaos, not drawing unnecessary attention through vanity. Paul is not forbidding beauty but calling for simplicity that reflects a heart fixed on God rather than on display.',
        },
        {
          kind: 'commentary',
          id: 'tim2-decorum',
          html:
            'The passage addresses roles in the assembly—specifically, teaching authority. The language is challenging in any era. But Paul&apos;s concern is not that women are inferior (he affirms Priscilla as teacher, Phoebe as deacon). His concern in this letter to Timothy is order in a specific congregation where false teaching is rampant. Different seasons call for different arrangements. The underlying principle endures: the church gathers to hear the word of God, not the opinions of fallen humans.',
        },
        {
          kind: 'christ',
          id: 'tim2-christ-salvation',
          title: 'Christ Connection — Saved Through Childbearing',
          html:
            'This difficult verse has taxed interpreters. Some read it as limitation. Paul reads salvation—the grand work of Christ—through the lens of the Fall and redemption. Women, though deceived in Eden, are not abandoned. They are included in God&apos;s redemptive purpose. The particular expression (childbearing) points to the larger story: God&apos;s promise of a Savior came through a woman, Mary. Salvation comes to all who are "in Christ," regardless of gender.',
        },
        {
          kind: 'carry',
          html:
            'Decorum in worship means placing the focus where it belongs: on God. Whether you are praying, teaching, listening, or serving, ask: Are my actions drawing attention to myself or to Christ? Am I stirring up wrath or peace? Am I doubting or trusting?',
        },
        {
          kind: 'reflection',
          id: 'tim2-worship-focus',
          prompt: 'What distracts you most in worship—either in yourself or in others? How can you cultivate a heart that sees through external forms to the God they are meant to honor?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For there is one God, and one mediator between God and men, the man Christ Jesus; Who gave himself a ransom for all, to be testified in due time.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 2 · Study Guide',
  },

  hasHebrew: false,
};
