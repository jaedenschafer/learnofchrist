import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jude — Contend for the Faith
 *
 * Jude, a servant of Jesus Christ, writes urgently: earnestly contend for the faith
 * which was once delivered unto the saints. For there are certain men crept in, ungodly
 * men, turning the grace of God into lasciviousness. The Lord Jesus saved a people out
 * of Egypt, yet some believed not. Build yourselves up in your most holy faith. Keep
 * yourselves in the love of God. Now unto Him that is able to keep you from falling.
 */
export const JUDE_1: RichChapterContent = {
  bookSlug: 'jude',
  bookName: 'Jude',
  chapter: 1,

  intros: [
    'Jude writes with urgency and passion. He had intended to write about salvation, but instead he feels compelled to address a crisis: false teachers have infiltrated the church. These men distort grace, turning it into permission for sin. They deny the Lord. Jude calls the faithful to stand firm, to contend for the faith once delivered.',
    'Jude reminds his readers of God&apos;s judgment on those who refused to believe—even after seeing His mighty works. Yet he offers hope: build yourselves up in faith, pray in the Spirit, keep yourselves in God&apos;s love. The closing doxology is among the most magnificent in Scripture: to Him that is able to keep you from falling, to present you faultless before the presence of His glory, be glory forever.',
  ],

  sections: [
    /* ─── Jude 1–13 — False Teachers ───────────────────────────────── */
    {
      ref: 'Jude 1–13',
      title: 'Contend for the Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Jude, the servant of Jesus Christ, and brother of James, to them that are sanctified by God the Father, and preserved in Jesus Christ, and called:'),
            plain(3, 'Beloved, when I gave all diligence to write unto you of the common salvation, I was constrained to write unto you to earnestly contend for the faith which was once delivered unto the saints.'),
            plain(4, 'For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ.'),
            plain(8, 'Likewise also these filthy dreamers defile the flesh, despise dominion, and speak evil of dignities.'),
            plain(12, 'These are spots in your feasts of charity, when they feast with you, feeding themselves without fear: clouds they are without water, carried about of winds; trees whose fruit withereth, without fruit, twice dead, plucked up by the roots;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jude1-contend',
          html:
            'Jude identifies his purpose: to call believers to contend earnestly for the faith. The word "earnestly" emphasizes intensity and passion. This is not a gentle suggestion. It is a call to active defense of the gospel against false teaching. The faith has been "once delivered"—it is not evolving or changing. It has been given once for all.',
        },
        {
          kind: 'greek',
          id: 'jude1-epagonizomai',
          title: 'Epagonizomai — Contend',
          script: 'ἐπαγωνίζομαι',
          translit: '<strong>Epagonizomai</strong> · to contend earnestly; to struggle valiantly; to fight for something',
          description:
            'This is not polite disagreement but vigorous defense. The word carries the image of an athlete straining in competition or a soldier fighting. Defending the faith requires effort and courage.',
        },
        {
          kind: 'commentary',
          id: 'jude1-false-teachers',
          html:
            'Jude describes the false teachers graphically. They have crept in—infiltrated the church. They are ungodly. They turn grace into lasciviousness—they use the doctrine of God&apos;s grace as permission for sexual sin and immorality. They deny the Lord Jesus. They are "filthy dreamers"—men whose imaginations are corrupted, whose teaching leads others astray.',
        },
        {
          kind: 'christ',
          id: 'jude1-christ-denied',
          title: 'Christ Connection — Denying the Only Lord',
          html:
            'To deny the Lord Jesus is the fundamental sin. This is not merely intellectual disagreement. It is practical rebellion—refusing His authority, rejecting His teaching, living as if He does not matter. Such denial is not innocent but destructive.',
        },
        {
          kind: 'carry',
          html:
            'Jude uses vivid imagery to describe false teachers: clouds without water—promising refreshment but delivering nothing. Trees whose fruit withers—barren, unproductive. Twice dead—dead both spiritually and socially useless, plucked up by the roots. These are not neutral figures. They are destructive. They must be recognized and resisted.',
        },
        {
          kind: 'reflection',
          id: 'jude1-discernment',
          prompt: 'How do you recognize false teaching? What anchors you in true faith?',
        },
      ],
    },

    /* ─── Jude 14–25 — Build & Keep ────────────────────────────────── */
    {
      ref: 'Jude 14–25',
      title: 'Build Yourselves Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(17, 'But, beloved, remember ye the words which were spoken before of the apostles of our Lord Jesus Christ;'),
            plain(20, 'But ye, beloved, building yourselves up on your most holy faith, praying in the Holy Ghost,'),
            plain(21, 'Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.'),
            plain(24, 'Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy,'),
            plain(25, 'To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jude1-remember',
          html:
            'Against false teachers, Jude calls believers to remember. Remember the words spoken by the apostles of Christ. Scripture is your anchor. The teaching of Christ and the apostles is your foundation. When false voices arise, return to the authoritative word.',
        },
        {
          kind: 'greek',
          id: 'jude1-epiokodomeo',
          title: 'Epiokodomeo — Build Up',
          script: 'ἐποικοδομέω',
          translit: '<strong>Epiokodomeo</strong> · to build up; to build upon a foundation; to edify',
          description:
            'Building requires foundation and effort. Believers build themselves up by prayer, by faith, by mutual encouragement. This is active spiritual discipline, not passive reception.',
        },
        {
          kind: 'commentary',
          id: 'jude1-holy-ghost',
          html:
            'Prayer in the Holy Ghost is not prayer according to human wisdom or desire, but prayer shaped and guided by the Spirit. The Spirit teaches us to pray, empowers our prayers, and intercedes for us. Prayer rooted in the Spirit is prayer that reaches God&apos;s heart.',
        },
        {
          kind: 'christ',
          id: 'jude1-mercy-eternal-life',
          title: 'Christ Connection — Looking for His Mercy',
          html:
            'Keep yourselves in the love of God, looking for the mercy of Christ unto eternal life. This is the Christian posture: gratitude for present grace, watchfulness for false teaching, and hope in Christ&apos;s return. Our future is secure in His mercy.',
        },
        {
          kind: 'carry',
          html:
            'Jude closes with one of Scripture&apos;s greatest doxologies. God is able to keep you from falling. He will present you faultless before His glory with exceeding joy. This is not earned or deserved. It is the work of God&apos;s grace. To Him be glory, majesty, dominion, and power forever. This is where faith rests—not in our strength, but in His.',
        },
        {
          kind: 'reflection',
          id: 'jude1-kept',
          prompt: 'What gives you confidence that God will keep you? How does His ability to preserve you strengthen your faith?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Earnestly contend for the faith which was once delivered unto the saints. Building yourselves up on your most holy faith, praying in the Holy Ghost, keep yourselves in the love of God. Now unto him that is able to keep you from falling. To the only wise God, be glory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jude · Study Guide',
  },

  hasHebrew: false,
};
