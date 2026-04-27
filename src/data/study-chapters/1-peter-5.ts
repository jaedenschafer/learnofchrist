import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Peter 5 — Shepherds & Stewards
 *
 * Peter addresses the elders of the church, calling them to shepherd the flock with
 * humble care rather than domineering control. Young believers are to respect their
 * elders. All are called to cast their cares on God, for He cares for them. Be vigilant
 * against the enemy, resist steadfast in faith. Humble yourselves under God&apos;s mighty
 * hand, and He will exalt you in due time.
 */
export const FIRST_PETER_5: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 5,

  intros: [
    'Peter now speaks to the elders—the pastors and leaders of the church. Their task is to shepherd the flock of God. This is not a position of power but of service. They are to feed, guide, and protect the sheep. And they must do it not for money or honor, but because they have been commissioned by Christ Himself, the Chief Shepherd.',
    'He then addresses all believers: cast your anxieties on God, for He cares for you. Be watchful. The adversary prowls about like a roaring lion. Yet your faith is your shield. Resist him, standing firm. Humble yourself before God. He opposes the proud but gives grace to the humble. And in due time, He will exalt you.',
  ],

  sections: [
    /* ─── 1 Peter 5:1–11 — Shepherding & Care ──────────────────────── */
    {
      ref: '1 Peter 5:1–11',
      title: 'Leadership & Trust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'The elders which are among you I exhort, who am also an elder, and a witness of the sufferings of Christ, and also a partaker of the glory that shall be revealed:'),
            plain(2, 'Feed the flock of God which is among you, taking the oversight thereof, not by constraint, but willingly; not for filthy lucre, but of a ready mind;'),
            plain(3, 'Neither as being lords over God&apos;s heritage, but being ensamples to the flock.'),
            plain(5, 'Likewise, ye younger, submit yourselves unto the elder. Yea, all of you be subject one to another, and be clothed with humility: for God resisteth the proud, and giveth grace to the humble.'),
            plain(6, 'Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time:'),
            plain(7, 'Casting all your care upon him; for he careth for you.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-elders',
          html:
            'Peter addresses the elders as a fellow elder. He has witnessed Christ&apos;s sufferings and is a partaker of His coming glory. He speaks with authority born of experience. The elders are to feed the flock—not merely manage them, but nourish them with the word, help them grow, care for the wounded and lost.',
        },
        {
          kind: 'greek',
          id: '1pet5-poimainw',
          title: 'Poimaino — To Shepherd',
          script: 'ποιμαίνω',
          translit: '<strong>Poimaino</strong> · to shepherd; to tend a flock; to care for with protective love',
          description:
            'Shepherding is not a position of dominion but of care. A shepherd knows each sheep, protects them from danger, leads them to pasture, binds up their wounds. This is the model for church leadership.',
        },
        {
          kind: 'commentary',
          id: '1pet5-voluntary',
          html:
            'Elders are not to shepherd by compulsion but willingly—not for money but with a willing mind. This is a gift of the Spirit, not a career path. The shepherd who leads for status or wealth has betrayed the trust. The true shepherd serves because he has been captured by the love of Christ and desires to care for His sheep.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-shepherd',
          title: 'Christ Connection — The Chief Shepherd',
          html:
            'Jesus is the Chief Shepherd. All other shepherds serve under His authority and care for His sheep on His behalf. When Christ appears and gathers His flock, all faithful shepherds will receive a crown of glory that does not fade away. Their reward comes from Him alone.',
        },
        {
          kind: 'carry',
          html:
            'Peter then calls all believers to cast their cares on God. This is not resignation but trust. You have worries—about your health, your future, your security. But God cares for you. He knows you by name. He sees every fear. Bring all of it to Him and leave it in His hands. This is the freedom of the Christian life.',
        },
        {
          kind: 'reflection',
          id: '1pet5-care',
          prompt: 'What care or anxiety do you need to cast on God? What would it mean to truly trust Him with it?',
        },
      ],
    },

    /* ─── 1 Peter 5:12–14 — Final Exhortations ────────────────────── */
    {
      ref: '1 Peter 5:12–14',
      title: 'Steadfast in Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(8, 'Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour:'),
            plain(9, 'Whom resist stedfast in the faith, knowing that the same afflictions are accomplished in your brethren that are in the world.'),
            plain(10, 'But the God of all grace, who hath called us into his eternal glory by Christ Jesus, after that ye have suffered a while, make you perfect, stablish, strengthen, and settle you.'),
            plain(11, 'To him be glory and dominion for ever and ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-adversary',
          html:
            'Peter does not minimize the reality of spiritual opposition. The devil is active, seeking those he might destroy. But the believer is not helpless. Resist him—stand firm in faith. You are not alone in this struggle. Believers everywhere face the same temptations, the same trials. You are part of a vast company of faithful ones.',
        },
        {
          kind: 'greek',
          id: '1pet5-antistasis',
          title: 'Antistasis — Resistance',
          script: 'ἀντίστασις',
          translit: '<strong>Antistasis</strong> · resistance; firm opposition; steadfast standing against',
          description:
            'Resistance is not aggressive counterattack but firm refusal to yield. When tempted to despair, to doubt, to turn back, the believer stands firm in faith. This firmness is itself the victory.',
        },
        {
          kind: 'commentary',
          id: '1pet5-suffer-while',
          html:
            'Peter acknowledges that believers will suffer. It is temporary—"a while"—and it serves a purpose. Through it, God perfects us, establishes us, strengthens us, settles us. Suffering is not punishment but part of the process by which we are made ready for glory. God will not leave us incomplete.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-glory',
          title: 'Christ Connection — Called to His Eternal Glory',
          html:
            'We are called into Christ&apos;s eternal glory. This is not a distant, abstract promise. It is the goal toward which all of our suffering and growth points. Christ has opened the way. We are journeying toward the fullness of His presence and the revelation of His glory.',
        },
        {
          kind: 'carry',
          html:
            'The epistle closes with doxology—"To him be glory and dominion for ever and ever." All authority, all honor, all power belongs to God. In the midst of trial, opposition, and uncertainty, this is the bedrock truth. God reigns. His kingdom will be fully revealed. Our faithfulness, our endurance, our love—all matter in light of His eternal dominion.',
        },
        {
          kind: 'reflection',
          id: '1pet5-glory',
          prompt: 'How does God&apos;s eternal glory and dominion change the way you face your current struggles?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Feed the flock of God which is among you. Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time. Casting all your care upon him; for he careth for you. Resist stedfast in the faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 5 · Study Guide',
  },

  hasHebrew: false,
};
