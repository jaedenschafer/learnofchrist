import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Timothy 1 — The Charge Against False Teachers
 *
 * Paul writes to Timothy, his trusted companion in ministry, entrusting him with
 * the oversight of the church at Ephesus. The apostle&apos;s first concern is not
 * organization or comfort, but doctrinal soundness. False teachers have arisen,
 * peddling endless genealogies and speculations rather than the gospel of Christ.
 * Paul calls Timothy to stand firm: this calling is a warfare, a good fight of faith.
 */
export const FIRST_TIMOTHY_1: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 1,

  intros: [
    'Paul addresses Timothy not as a subordinate to be commanded, but as a fellow worker—someone he has trained, tested, and trusted with the life of an entire congregation. The church at Ephesus was no isolated village gathering. It was a city caught between pagan sophistication and the claims of the gospel. Into this tension, Timothy is sent to "charge some that they teach no other doctrine."',
    'Paul&apos;s opening is urgent. False teachers had infiltrated the assembly, men "desirous of being teachers of the law, understanding neither what they say, nor whereof they affirm." They spoke with confidence but without substance. They multiplied genealogies—endless tracing of ancestry—when what the church needed was love, faith, and a good conscience. Paul will circle back to this repeatedly: truth matters. Right doctrine leads to right living. Deviance leads to shipwreck.',
  ],

  sections: [
    /* ─── 1 Timothy 1:1–7 — The Charge ────────────────────────────────── */
    {
      ref: '1 Timothy 1:1–7',
      title: 'The Charge to Timothy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, an apostle of Jesus Christ by the commandment of God our Saviour, and Lord Jesus Christ, which is our hope;'),
            plain(2, 'Unto Timothy, my own son in the faith: Grace, mercy, and peace, from God our Father and Jesus Christ our Lord.'),
            plain(3, 'As I besought thee to abide still at Ephesus, when I went into Macedonia, that thou mightest charge some that they teach no other doctrine,'),
            plain(4, 'Neither give heed to fables and endless genealogies, which minister questions, rather than godly edifying which is in faith: so do.'),
            plain(5, 'Now the end of the commandment is charity out of a pure heart, and of a good conscience, and of faith unfeigned:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-apostle',
          html:
            'Paul opens with the weight of apostolic authority. He is not speaking as one opinion among many, but as one "by the commandment of God our Saviour." Timothy is "my own son in the faith"—not merely a protégé, but a spiritual heir, one whom Paul has discipled in the gospel. The charge given is not arbitrary. It flows from the authority of the gospel itself.',
        },
        {
          kind: 'greek',
          id: 'tim1-paraggelia',
          title: 'Paraggelia — Charge, Command',
          script: 'παραγγελία',
          translit: '<strong>Paraggelia</strong> · charge; command; instruction',
          description:
            'This word carries military force—the kind of order given by a commander to soldiers. Yet it is not tyrannical. It is the transmission of truth from one who knows it to one trusted to guard and teach it. Timothy is not micromanaged but empowered with clarity about what matters most.',
        },
        {
          kind: 'commentary',
          id: 'tim1-genealogies',
          html:
            'Why would false teachers "give heed to fables and endless genealogies"? Speculation abounded in first-century Judaism about angels, cosmic orders, and secret names. Some teachers hawked these as inner wisdom. Paul cuts through it: such talk "minister questions, rather than godly edifying." True doctrine produces fruit—charity, a pure heart, a good conscience. False doctrine produces only controversy.',
        },
        {
          kind: 'christ',
          id: 'tim1-christ-hope',
          title: 'Christ Connection — Our Hope',
          html:
            'Christ is our hope. Not speculation, not secret knowledge, not human cleverness. The person and work of Jesus—His incarnation, death, and resurrection—are the solid ground on which faith stands. Every other doctrine is measured against this center. Does it point to Him? Does it produce love and a clear conscience? If not, it is noise.',
        },
        {
          kind: 'carry',
          html:
            'Paul says the end of the commandment is "charity out of a pure heart, and of a good conscience, and of faith unfeigned." This is the acid test for every doctrine you hear—and every doctrine you hold. Does it make you more loving? Does it clear your conscience? Does it deepen genuine faith? If not, no matter how impressive the argument, set it aside.',
        },
        {
          kind: 'reflection',
          id: 'tim1-endgoal',
          prompt: 'What doctrines or teachings do you hold that produce "charity," "a pure heart," and "a good conscience"? Where are you tempted by beliefs that do the opposite—that produce fear, shame, or division?',
        },
      ],
    },

    /* ─── 1 Timothy 1:12–17 — Christ Jesus Came to Save ────────────────── */
    {
      ref: '1 Timothy 1:12–17',
      title: 'Christ Jesus Came to Save Sinners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'And I thank Christ Jesus our Lord, who hath enabled me, for that he counted me faithful, putting me into the ministry;'),
            plain(13, 'Who was before a blasphemer, and a persecutor, and injurious: but I obtained mercy, because I did it ignorantly in unbelief.'),
            plain(14, 'And the grace of our Lord was exceeding abundant with faith and love which is in Christ Jesus.'),
            plain(15, 'This is a faithful saying, and worthy of all acceptation, That Christ Jesus came into the world to save sinners; of whom I am chief.'),
            plain(16, 'Howbeit for this cause I obtained mercy, that in me first Jesus Christ might shew forth all longsuffering, as a pattern to them which should hereafter believe on him to life everlasting.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-paul-mercy',
          html:
            'Paul is not speaking abstractly. He remembers his former life—he hunted Christians, voted for their execution, blasphemed the name of Christ. By every human standard, he deserved judgment. Yet he obtained mercy. Why? "Because I did it ignorantly in unbelief." This is not an excuse. It is a statement of fact: he was blind before grace opened his eyes.',
        },
        {
          kind: 'greek',
          id: 'tim1-eleos',
          title: 'Eleos — Mercy',
          script: 'ἔλεος',
          translit: '<strong>Eleos</strong> · mercy; compassion; pity',
          description:
            'Mercy is not getting what you deserve—death, judgment, separation from God. It is the gift of a second chance. Paul did not earn mercy. It was given to him. And now, in ministry, he is living proof that no sinner is beyond the reach of Christ&apos;s transforming grace.',
        },
        {
          kind: 'commentary',
          id: 'tim1-faithful-saying',
          html:
            '"This is a faithful saying, and worthy of all acceptation." Paul marks this as doctrinal bedrock. Not speculation. Not philosophy. Not the opinion of one teacher. This is the core truth that all who follow Christ must hold: Christ Jesus came into the world to save sinners. Not the righteous, not the self-sufficient, not the powerful. Sinners. Those who know they are lost.',
        },
        {
          kind: 'christ',
          id: 'tim1-christ-mission',
          title: 'Christ Connection — Purpose and Pattern',
          html:
            'Jesus came not to condemn but to save. His entire earthly ministry was oriented toward reclaiming those who were far from God—tax collectors, prostitutes, demon-possessed outcasts. And His pattern does not end with the twelve or the early church. Every believer who encounters Him becomes a living witness to His longsuffering.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt beyond redemption, Paul&apos;s testimony speaks directly to you. He was a murderer of the saints. Yet he obtained mercy. Christ&apos;s "longsuffering" means He does not give up quickly. He waits. He calls. He holds out grace even to those who resist Him longest. Where in your life do you need to believe this is true?',
        },
        {
          kind: 'reflection',
          id: 'tim1-chief-sinner',
          prompt: 'Paul calls himself "chief" among sinners. What does it mean for you to accept that label for yourself? And how does that acceptance free you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This is a faithful saying, and worthy of all acceptation, That Christ Jesus came into the world to save sinners; of whom I am chief.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 1 · Study Guide',
  },

  hasHebrew: false,
};
