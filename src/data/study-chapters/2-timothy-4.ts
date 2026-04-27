import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Timothy 4 — I Have Fought a Good Fight
 *
 * Paul&apos;s final testimony. He has run the race. He has kept the faith. Ahead
 * lies the crown of righteousness. He urges Timothy to preach the word in season
 * and out, to do the work of an evangelist, to fulfill the ministry. The letter
 * ends not in triumph but in abandonment—many have forsaken Paul. Yet he stands.
 * The Lord will deliver him from every evil work and preserve him unto His kingdom.
 */
export const SECOND_TIMOTHY_4: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 4,

  intros: [
    'Paul is at the end. He will be executed soon. But there is no bitterness in his words, only clarity. His life has been a race. He has run it. He has fought the good fight. And he is not afraid. A crown of righteousness awaits him. But before his death, he writes one final charge to Timothy. Hold fast. Preach the word. Fulfill your ministry. Do not be ashamed of the gospel.',
    'The letter ends with vulnerability. Paul is abandoned by many. Demas has loved this present world. Alexander has done him much evil. Yet Paul does not despair. "The Lord stood with me, and strengthened me." This is his final gift to Timothy: not the example of a life free from hardship, but the example of one who endured, held fast, and found strength in Christ.',
  ],

  sections: [
    /* ─── 2 Timothy 4:1–8 — Preach the Word, Fight the Good Fight ────── */
    {
      ref: '2 Timothy 4:1–8',
      title: 'I Have Fought a Good Fight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'I charge thee therefore before God, and the Lord Jesus Christ, who shall judge both the quick and the dead at his appearing and his kingdom;'),
            plain(2, 'Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine.'),
            plain(5, 'But watch thou in all things, endure afflictions, do the work of an evangelist, make full proof of thy ministry.'),
            plain(7, 'I have fought a good fight, I have finished my course, I have kept the faith:'),
            plain(8, 'Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-charge',
          html:
            'Paul places Timothy&apos;s ministry in the ultimate context: before God and Christ, who will judge both living and dead. This is not meant to terrify but to clarify. Timothy&apos;s preaching is not a career. It is a sacred trust. He is accountable to the Judge of all.',
        },
        {
          kind: 'greek',
          id: 'tim4-eukairia',
          title: 'Eukairia — In Season, Out of Season',
          script: 'εὐκαιρία',
          translit: '<strong>Eukairia</strong> · a good time; an opportune moment; season',
          description:
            'Paul is not calling for indiscriminate speech. "In season" means when people are listening, when circumstances favor the message. "Out of season" means when opposition rises, when the audience is hostile, when silence would be safer. Faithfulness demands both.',
        },
        {
          kind: 'commentary',
          id: 'tim4-endurance',
          html:
            '"Watch thou in all things, endure afflictions." Timothy is not promised ease. He will face opposition. The charge is not to avoid it but to endure it. Watchfulness—spiritual vigilance—and endurance are the two marks of a faithful minister. Together they sustain the work.',
        },
        {
          kind: 'christ',
          id: 'tim4-christ-judge',
          title: 'Christ Connection — Judge and Reward',
          html:
            'Christ is the righteous judge. At His appearing, He will judge. But He will also reward. A crown of righteousness awaits not just Paul but "all them also that love his appearing." This is not an elite prize. It is for all who cherish His coming, who live in light of eternity, who run the race with Him in view.',
        },
        {
          kind: 'carry',
          html:
            'Do you preach the word—with your mouth, your choices, your life—in season and out? Are you faithful when it is popular? Are you faithful when it costs you? Paul&apos;s life demonstrates that faithfulness is possible. Not easy. But possible. And it carries its own reward—the knowledge that you have fought well, finished the course, kept the faith.',
        },
        {
          kind: 'reflection',
          id: 'tim4-fight',
          prompt: 'What would it mean for you to "fight the good fight" in your current situation? Where is your particular race?',
        },
      ],
    },

    /* ─── 2 Timothy 4:9–22 — Final Words and Doxology ────────────────── */
    {
      ref: '2 Timothy 4:9–22',
      title: 'The Lord Strengthen Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(9, 'Do thy diligence to come unto me quickly:'),
            plain(10, 'For Demas hath forsaken me, having loved this present world, and is departed unto Thessalonica; Crescens to Galatia, Titus unto Dalmatia.'),
            plain(14, 'Alexander the coppersmith did me much evil: the Lord reward him according to his works:'),
            plain(16, 'At my first answer no man stood with me, but all men forsook me: I pray God that it may not be laid to their charge.'),
            plain(17, 'Notwithstanding the Lord stood with me, and strengthened me; that by me the preaching might be fully known, and that all the Gentiles might hear: and I was delivered out of the mouth of the lion.'),
            plain(18, 'And the Lord shall deliver me from every evil work, and will preserve me unto his heavenly kingdom: to whom be glory for ever and ever. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim4-forsaken',
          html:
            'Paul is alone. Demas has chosen the world. Others have departed. At his trial, no one stood with him. This is not the triumph of a victorious apostle. This is the abandonment of an aged man awaiting execution. Yet there is no self-pity here. Paul simply states the fact and then moves to what matters: the Lord stood with him.',
        },
        {
          kind: 'greek',
          id: 'tim4-stenizo',
          title: 'Stenizo — Stand, Strengthen',
          script: 'στενίζω',
          translit: '<strong>Stenizo</strong> · to stand with; to support; to strengthen',
          description:
            'Even in abandonment, the Lord is not absent. He stands with Paul. He strengthens him. This is not a dramatic intervention but a quiet presence that sustains courage in the face of death. The Lord&apos;s strengthening enabled Paul to preach fully so that all the Gentiles might hear.',
        },
        {
          kind: 'commentary',
          id: 'tim4-lion-mouth',
          html:
            '"Delivered out of the mouth of the lion" likely refers to Paul&apos;s trial. He faced execution. But God delivered him—not from death, but through it, into the certainty of His kingdom. This is the ultimate deliverance: from every evil work, unto His heavenly kingdom.',
        },
        {
          kind: 'christ',
          id: 'tim4-christ-standing',
          title: 'Christ Connection — Standing with the Faithful',
          html:
            'When all men forsook Paul, the Lord stood with him. This mirrors Jesus in Gethsemane, abandoned by disciples, yet sustained by His Father. A faithful servant need not fear abandonment by humans. The One who matters is always present, always strengthening, always faithful.',
        },
        {
          kind: 'carry',
          html:
            'Have you felt abandoned? Have people you trusted turned away? Paul&apos;s testimony is yours too. The Lord will not abandon you. He will stand with you. He will strengthen you. Not to spare you from trial, but to sustain you through it. And His deliverance is sure—into His heavenly kingdom, where nothing evil can touch you.',
        },
        {
          kind: 'reflection',
          id: 'tim4-standing',
          prompt: 'When have you felt the Lord standing with you? How has His presence changed what you could endure?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness. The Lord shall deliver me from every evil work, and will preserve me unto his heavenly kingdom.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 4 · Study Guide',
  },

  hasHebrew: false,
};
