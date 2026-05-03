import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * James 5 — Judgment, Patience & Prayer
 *
 * James closes with a stark warning to the rich who hoard wealth and exploit workers,
 * then pivots to exhort the suffering to patient endurance. The coming of the Lord is near.
 * Prayer is the wellspring of faith—the prayer of faith heals the sick, forgives sins, and
 * accomplishes much. Confess your faults to one another. The patience of Job and the
 * example of Elijah show us that ordinary believers can change the course of history through
 * faithful prayer and steadfast trust.
 */
export const JAMES_5: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 5,

  intros: [
    'James opens with a direct warning to the rich. Their hoarded riches will rot. Gold and silver rust. The wages they have withheld cry out against them—God hears the pleas of the exploited. But this warning is not the heart of the chapter. The real message is for the suffering poor: wait. Be patient. The Lord is coming.',
    'He then turns to prayer and healing, the true power of the believing community. Sickness is met not with resignation but with the prayer of faith. Sins are forgiven through confession and intercession. Elijah was a man like us, yet his earnest prayer stopped the rain. This is the power available to every believer—not in ourselves, but in prayer offered in faith to a God who hears and responds.',
  ],

  sections: [
    /* ─── James 5:1–3 — Ye Rich Men, Weep and Howl ──────────────────────── */
    {
      ref: 'James 5:1–3',
      title: 'Ye Rich Men, Weep and Howl',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Go to now, ye rich men, weep and howl for your miseries that shall come upon you.'),
            plain(2, 'Your riches are corrupted, and your garments are motheaten.'),
            plain(3, 'Your gold and silver is cankered; and the rust of them shall be a witness against you, and shall eat your flesh as it were fire. Ye have heaped treasure together for the last days.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-weep',
          html:
            'James does not address the rich with soft words. "Weep and howl"—the language of one calling for repentance before judgment falls. Their riches, which they trusted in and hoarded, will betray them. Garments rot. Gold tarnishes. The very things they thought would secure them will become witnesses against them in the day of judgment.',
        },
        {
          kind: 'greek',
          id: 'jam5-katanusso',
          title: 'Katarussis — Corrosion; Canker',
          script: 'κατάρυσσις',
          translit: '<strong>Katarussis</strong> · corrosion; the rust that eats through metal; literal and spiritual decay',
          description:
            'The word captures not just the physical reality that rust eats through precious metals, but the moral rot that wealth untethered from God\'s justice creates. What men treasure becomes their judge.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-treasure',
          title: 'Christ Connection — Treasures in Heaven',
          html:
            'Jesus taught: "Lay not up for yourselves treasures upon earth… But lay up for yourselves treasures in heaven" (Matt. 6:19–20). He confronted a rich young ruler who could not let go of his wealth. The rich in this passage have chosen earth over heaven, and their choice will be their undoing. Christ calls us to a radically different ordering of values.',
        },
        {
          kind: 'carry',
          html:
            'If you find yourself anxious about money—hoarding it, fearing its loss, defining your security by its amount—hear James. The rust will come. Not as judgment necessarily, but as reality. Money cannot save you. Only God can. The freedom you seek through wealth will never come. It comes only through release, through trust, through putting your treasure where Christ is.',
        },
        {
          kind: 'reflection',
          id: 'jam5-weep-refl',
          prompt: 'What are you trusting in to secure your future? How might letting go of that actually set you free?',
        },
      ],
    },

    /* ─── James 5:4 — Your Riches Are Corrupted ────────────────────────────── */
    {
      ref: 'James 5:4',
      title: 'The Wages Cry Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(4, 'Behold, the hire of the labourers who have reaped down your fields, which is of you kept back by fraud, crieth: and the cries of them which have reaped are entered into the ears of the Lord of sabaoth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-fraud',
          html:
            'This is perhaps the most damning verse in the chapter. The rich have withheld wages—the bread that workers need to live—through fraud. These cries do not go unheard. The Lord of sabaoth—the Lord of armies, the sovereign judge—hears them. God sides with the exploited. Their cries have entered His ears, and judgment follows.',
        },
        {
          kind: 'greek',
          id: 'jam5-misthos',
          title: 'Misthos — Wages; Hire; Reward',
          script: 'μισθός',
          translit: '<strong>Misthos</strong> · wages earned by labor; what is justly due; reward',
          description:
            'The word emphasizes that workers have earned what is being withheld. This is not charity James is calling for, but justice. Workers deserve their wages. To keep them back is theft, a violation of the most basic human dignity.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-judge',
          title: 'Christ Connection — The Judge Stands at the Door',
          html:
            'Later in Revelation, Jesus says: "Behold, I stand at the door, and knock" (Rev. 3:20). But there is also a day of judgment coming. He who hears the cry of the oppressed will judge the oppressor. Christ identifies with the poor and the wronged. Those who exploit them face His judgment.',
        },
        {
          kind: 'carry',
          html:
            'Whether you are a laborer waiting for just wages or an employer with the power to give or withhold them, hear this: God hears the cries of those who are wronged. He takes their side. The path to blessing is not in hoarding but in justice, in paying what is owed, in treating those under you with dignity and fairness.',
        },
      ],
    },

    /* ─── James 5:7–8 — Be Patient unto the Coming of the Lord ──────────────── */
    {
      ref: 'James 5:7–8',
      title: 'The Husbandman Waiteth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(7, 'Be patient therefore, brethren, unto the coming of the Lord. Behold, the husbandman waiteth for the precious fruit of the earth, and hath long patience for it, until he receive the early and latter rain.'),
            plain(8, 'Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-husbandman',
          html:
            'The farmer cannot rush the harvest. He plants, he tends, he waits. He trusts in the seasons—the early rain that makes seeds germinate, the latter rain that fills the grain. This is the patience James calls for. Not passive resignation, but active trust in the one who controls the seasons. Your life is not a crop you force. It is a harvest you tend and trust.',
        },
        {
          kind: 'greek',
          id: 'jam5-makrothumia',
          title: 'Makrothumia — Long Patience; Steadfast Endurance',
          script: 'μακροθυμία',
          translit: '<strong>Makrothumia</strong> · patience; longsuffering; the long soul that does not quickly lose hope',
          description:
            'This is not passive waiting but the strength to continue under difficulty without yielding to despair. It is the patience of a farmer, of one who knows that the harvest takes time and trusts in the timing.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-parousia',
          title: 'Christ Connection — The Coming of the Lord',
          html:
            'The "coming of the Lord" (Greek: parousia) is the hope that anchors all patience. Christ will return. Every injustice will be addressed. Every tear will be wiped away. This is not escapism but the deepest realism—the conviction that history does not drift, it converges toward the return of Christ and the consummation of all things.',
        },
        {
          kind: 'carry',
          html:
            'You are being called to the patience of a farmer, not of a stone. Stablish your hearts. Strengthen them. The coming is near. This does not mean close in time necessarily, but near in the sense that it is certain, that it is the axis around which all history turns. Whatever you endure now has an end. Whatever injustice you witness will be judged. Hold on.',
        },
        {
          kind: 'reflection',
          id: 'jam5-patience-refl',
          prompt: 'In what area of your life are you being called to have the patience of a farmer—to plant, tend, and wait without forcing the harvest?',
        },
      ],
    },

    /* ─── James 5:9–11 — The Judge Standeth Before the Door ────────────────── */
    {
      ref: 'James 5:9–11',
      title: 'The Judge Standeth Before the Door',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(9, 'Grudge not one against another, brethren, lest ye be condemned: behold, the judge standeth before the door.'),
            plain(10, 'Take, my brethren, the prophets, who have spoken in the name of the Lord, for an example of suffering affliction, and of patience.'),
            plain(11, 'Behold, we count them happy which endure. Ye have heard of the patience of Job, and have seen the end of the Lord; that the Lord is very pitiful, and of tender mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-grudge-not',
          html:
            'As you wait for the coming of the Lord, do not turn on one another. Do not harbor resentment within the community. The judge is near—He will make all things right. Your task is not to judge your brother but to endure with him. This is the call to internal community cohesion in the face of external pressure.',
        },
        {
          kind: 'greek',
          id: 'jam5-stenazō',
          title: 'Stenazō — To Groan; To Complain',
          script: 'στενάζω',
          translit: '<strong>Stenazō</strong> · to sigh; to complain against; to harbor grudges',
          description:
            'The word captures the quiet rot of unspoken resentment. Do not let bitterness grow in your hearts. Do not groan against your brothers. The time is too short, the coming too near.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-judge-door',
          title: 'Christ Connection — Christ Judges; We Must Not',
          html:
            'Jesus said, "Judge not, that ye be not judged" (Matt. 7:1). The role of judge belongs to Christ alone. We are called to mercy toward one another. Our grumbling and judging will be recorded against us in the day when Christ returns as judge. Let that thought silence the complaints.',
        },
        {
          kind: 'carry',
          html:
            'James lifts up the prophets as examples—they spoke God\'s word and suffered for it. But the supreme example is Job, a man righteous yet afflicted beyond measure, who did not curse God, who endured, and whom the Lord ultimately restored "with much compassion." The end the Lord brought for Job was not his death but his redemption. So it will be for you.',
        },
        {
          kind: 'reflection',
          id: 'jam5-judge-refl',
          prompt: 'Where are you harboring grudges against others in your community? What would it mean to release them to the one true judge?',
        },
      ],
    },

    /* ─── James 5:12 — Swear Not; Let Your Yea Be Yea ────────────────────────── */
    {
      ref: 'James 5:12',
      title: 'Swear Not at All; Let Your Yea Be Yea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(12, 'But above all things, my brethren, swear not, neither by heaven, neither by the earth, neither by any other oath: but let your yea be yea; and your nay, nay; lest ye fall into condemnation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-oaths',
          html:
            'James calls for absolute simplicity and truthfulness in speech. Do not buttress your words with elaborate oaths and appeals to heaven and earth. Let your word be enough. Yes means yes. No means no. This is not a command against oaths in legal proceedings but against the spiritual disease of trying to make your word credible through external props rather than through the integrity of your life.',
        },
        {
          kind: 'greek',
          id: 'jam5-omnuō',
          title: 'Omnuō — To Swear; To Take an Oath',
          script: 'ὀμνύω',
          translit: '<strong>Omnuō</strong> · to swear; to take an oath; to appeal to a power as witness',
          description:
            'The practice James warns against is not court oaths but the casual swearing by heaven or earth that reflects a heart not fully present, not fully committed to truthfulness. Such oaths suggest your yes and no are not reliable without supernatural backup.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-word',
          title: 'Christ Connection — His Word Is Truth',
          html:
            'Jesus taught similarly: "But I say unto you, Swear not at all" (Matt. 5:34). His own word required no oath. "I am the way, the truth, and the life" (John 14:6). In him, we have absolute truth. We are called to reflect that truth in our simplicity and directness.',
        },
        {
          kind: 'carry',
          html:
            'This command cuts to the heart of character. Are you known for your word? When you say you will do something, do you do it? When you say no, do you mean it? Or do you hedge, qualify, appeal to circumstances? The Christian is called to be a person of simple, unadorned truth. Your integrity is your bond.',
        },
      ],
    },

    /* ─── James 5:14–15 — Is Any Sick Among You? Let Him Call for the Elders ── */
    {
      ref: 'James 5:14–15',
      title: 'The Prayer of Faith Shall Save the Sick',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(14, 'Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord:'),
            plain(15, 'And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-sick',
          html:
            'Sickness comes. In that hour, the response of the church is prayer. Not judgment, not suspicion, but intercession. The elders anoint with oil—a sign of healing, of the Spirit\'s power. And the prayer of faith saves. Not faith in the prayer itself, but faith in the God to whom the prayer is offered. Sometimes He grants healing. Sometimes He grants grace to endure. Always He is present to those who call.',
        },
        {
          kind: 'greek',
          id: 'jam5-epaleiphein',
          title: 'Aleiphō — To Anoint',
          script: 'ἀλείφω',
          translit: '<strong>Aleiphō</strong> · to anoint; to rub with oil; to consecrate',
          description:
            'The anointing with oil is a sign act—a visible expression of the Spirit\'s work. Oil heals, soothes, and sets apart. In this context, it signifies the church\'s designation of the sick person to God\'s healing care.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-healer',
          title: 'Christ Connection — He Healed the Sick',
          html:
            'Jesus made it a centerpiece of His ministry to heal the sick. He taught His disciples to pray for and expect healing as a sign of the kingdom of God. He sits now at the right hand of the Father, making intercession for us. When we pray for the sick in His name, we join Him in that intercession.',
        },
        {
          kind: 'carry',
          html:
            'If you are sick, do not suffer alone. Call for the elders. Let the church gather around you in prayer. Do not be ashamed of your body or your need. God meets us in our weakness. And note: healing comes wrapped with forgiveness. Often our sicknesses are bound to our sins. Prayer opens the door to both.',
        },
        {
          kind: 'reflection',
          id: 'jam5-sick-refl',
          prompt: 'What sickness—physical, emotional, spiritual—are you carrying alone? Who could you call to pray with and for you?',
        },
      ],
    },

    /* ─── James 5:16–17 — Confess Your Faults & Pray One for Another ───────── */
    {
      ref: 'James 5:16–17',
      title: 'Confess Your Faults; Pray One for Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(16, 'Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.'),
            plain(17, 'Elias was a man subject to like passions as we are, and he prayed earnestly that it should not rain: and it rained not on the earth by the space of three years and six months.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-confess',
          html:
            'The church is a place of confession. Not to shame each other, but to heal each other. When you confess your sin to a brother or sister, something shifts—the sin loses its power to isolate you. You are no longer alone with it. And when you pray for one another, healing comes. Not just forgiveness, but restoration, integration back into community.',
        },
        {
          kind: 'greek',
          id: 'jam5-energoumene',
          title: 'Energoumenos — Effectual; Energized; Working',
          script: 'ἐνεργέω',
          translit: '<strong>Energoumenos</strong> · working; operative; effectual; having power to accomplish',
          description:
            'The prayer of a righteous man is not merely spoken; it works. It has effect. It accomplishes something in the spiritual realm. This is not magic but the reality that God hears and responds to the prayer of those aligned with Him.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-intercessor',
          title: 'Christ Connection — The Perfect Intercessor',
          html:
            'Jesus made intercession His chief work. "He ever liveth to make intercession for them" (Heb. 7:25). He is the righteous one whose prayer has infinite power. We are invited into that prayer, to join Him in bringing the needs of others before the Father.',
        },
        {
          kind: 'carry',
          html:
            'James gives the example of Elijah—a man subject to the same passions as you. Not superhuman. Not especially holy. Yet his earnest prayer changed the course of history. Rain did not fall for three and a half years. Then he prayed again, and the heavens opened. This is the power within reach of every believer who will pray with faith and persistence.',
        },
        {
          kind: 'reflection',
          id: 'jam5-confess-refl',
          prompt: 'What sin or struggle are you keeping hidden? Who could you safely confess it to? What difference might it make?',
        },
      ],
    },

    /* ─── James 5:18–20 — And He Prayed Again ────────────────────────────────── */
    {
      ref: 'James 5:18–20',
      title: 'Save a Soul From Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(18, 'And he prayed again, and the heaven gave rain, and the earth brought forth her fruit.'),
            plain(19, 'Brethren, if any of you do err from the truth, and one convert him;'),
            plain(20, 'Let him know, that he which converteth the sinner from the error of his way shall save a soul from death, and shall hide a multitude of sins.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-convert',
          html:
            'The chapter closes not with individual prayer but with the call to bring back those who have wandered. If a brother errs from the truth, someone must convert him—not through judgment but through faithful witness. And that act—turning one soul from error back to God—is saving work. It is the work of love.',
        },
        {
          kind: 'greek',
          id: 'jam5-planethē',
          title: 'Planē — Error; Straying; Deception',
          script: 'πλάνη',
          translit: '<strong>Planē</strong> · error; wandering from the path; deception that leads astray',
          description:
            'To err is to wander. Not always willfully, sometimes unknowingly. But the effect is the same—distance from God. To turn someone from this error is to put them back on the path that leads to life.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-save-soul',
          title: 'Christ Connection — Saving Souls',
          html:
            'Jesus is the good shepherd who leaves the ninety-nine to find the one that is lost. He came to seek and to save that which was lost. When we turn a sinner from his error, we are doing Christ\'s work. We are extending His saving love to one who is wandering.',
        },
        {
          kind: 'carry',
          html:
            'This is the final word of James: you have power you may not recognize. When you faithfully witness to someone who has strayed, when you lovingly call them back to truth, you are saving a soul from death. You are hiding a multitude of sins—not covering them up, but bringing them to Christ where they are forgiven. This is the calling of every believer.',
        },
        {
          kind: 'reflection',
          id: 'jam5-save-soul-refl',
          prompt: 'Who in your life has wandered from the truth? How might God be calling you to lovingly turn them back?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share James 5 — The Closing Word',
    quote: 'Be patient therefore, brethren, unto the coming of the Lord. The prayer of faith shall save the sick. Confess your faults one to another, and pray one for another. He which converteth the sinner from the error of his way shall save a soul from death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 5 · Study Guide',
  },

  hasHebrew: false,
};
