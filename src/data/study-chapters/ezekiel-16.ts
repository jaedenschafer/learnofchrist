import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 16 — The Faithful Bridegroom
 *
 * God found Jerusalem abandoned and dying. He passed by her in her blood,
 * said "Live," and raised her. He washed her, anointed her with oil, clothed
 * her in fine linen and silk, decked her with jewels. He made a covenant with
 * her and she became His. But she played the harlot—prostituting herself,
 * using the gifts meant for her bridegroom with strangers. God swore His fury
 * and jealousy would be upon her. Yet even in judgment, the promise holds:
 * "I will remember my covenant... and I will establish unto thee an everlasting
 * covenant." At the heart of this long, aching allegory is the pattern of
 * covenant love—offered, rejected, punished, and restored.
 */
export const EZEKIEL_16: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 16,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 7 },
  topicTags: ['judgment', 'glory', 'hope', 'second-coming'],
  opener: {
    topical: true,
    caption: 'Ezekiel 16',
  },
  intros: [
    'Ezekiel 16 is one of Scripture&apos;s most sustained and intimate allegories. The prophet describes Jerusalem as an infant, abandoned at birth in the open field, wallowing in her own blood. God passes by and says to her: "Live." He washes her, tends her wounds, clothes her in the finest garments and jewels, and makes a covenant with her. She becomes His. But the allegory darkens. The city—now grown into beauty—forgets who saved her. She becomes a harlot, prostituting herself, using the gifts her bridegroom gave her as payment to strangers. She multiplies her lovers. God&apos;s response is not to abandon her, but to judge her with the jealous fury of a betrayed husband.',
    'Yet beneath the judgment runs an even deeper current. "I will remember my covenant which I made with thee in the days of thy youth: and I will establish unto thee an everlasting covenant." The covenant is not broken. It cannot be broken. The judgment clears away the dross so that grace can work deeper.',
  ],

  sections: [
    {
      ref: 'Ezekiel 16:1–14',
      title: 'Found in Blood, Raised to Beauty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(4, 'As for thy nativity, in the day thou wast born thy navel was not cut, neither wast thou washed in water to supple thee; thou wast not salted at all, nor swaddled at all.'),
            plain(5, 'None eye pitied thee, to do any of these unto thee, to have compassion upon thee; but thou wast cast out in the open field, to the loathing of thy person, in the day that thou wast born.'),
            plain(6, 'And when I passed by thee, and saw thee polluted in thine own blood, I said unto thee when thou wast in thy blood, Live: yea, I said unto thee when thou wast in thy blood, Live.'),
            plain(8, 'Now when I passed by thee, and looked upon thee, behold, thy time was the time of love; and I spread my skirt over thee, and covered thy nakedness: yea, I sware unto thee, and entered into a covenant with thee, saith the Lord God, and thou becamest mine.'),
            plain(12, 'Thus wast thou decked with gold and silver; and thy raiment was of fine linen, and silk, and broidered work; thou didst eat fine flour, and honey, and oil: and thou wast exceeding beautiful, and thou didst prosper into a kingdom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek16-found',
          html: 'The image is almost unbearable in its tenderness. Jerusalem begins not in glory but in abandonment—a newborn left to die, covered in her own blood, with no one to clean her or wrap her in cloth. The city of God&apos;s presence, the place of covenant, begins as an orphan. And then God passes by. He does not pass over her. He does not remain distant. He stops. He sees her. He acts. "Live," He says—and she lives. There is no explanation for why He chooses her, only the fact that He does[res:babylonian-exile-context].',
        },
        {
          kind: 'commentary',
          id: 'ezek16-covenant',
          html: 'What follows is a catalog of gifts—washing, anointing with oil, fine linen and silk, gold and silver ornaments, honey, fine flour, oil. These are not rewards for obedience. They are not earned. They flow from the heart of one who has chosen another "in the time of love." And at the center of it all is the covenant: "I spread my skirt over thee...and I sware unto thee, and entered into a covenant with thee." The marriage formula. The binding of two lives in a promise that will not break[res:sefaria-ezekiel].',
        },
        {
          kind: 'hebrew',
          id: 'ezek16-live',
          title: 'Chay — "Live" (Imperative Life)',
          script: 'חַי',
          translit: '<strong>Chay</strong> · to live, to be alive; the living God',
          description:
            'God does not say "I will keep you alive." He says "Live!"—an imperative, a command that brings life into being. The word chay is not merely biological existence. It is covenant life, the abundant life of one bound to God. Elsewhere, Ezekiel will use this word for the "living creatures" of the heavenly throne. It carries the sense of vitality, presence, belonging.',
        },
        {
          kind: 'christ',
          id: 'ezek16-christ-bride',
          title: 'Christ Connection — The Faithful Bridegroom',
          html: 'Ezekiel&apos;s allegorical marriage points to the New Testament pattern of Christ as Bridegroom and the church as Bride. Paul writes in Ephesians that Christ "loved the church, and gave himself for it...that he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish." Christ does what God does in Ezekiel&apos;s vision—He finds the beloved in weakness and death (spiritually), cleanses her, clothes her with His righteousness, and binds Himself to her in an everlasting covenant. The gift is grace. The response is meant to be love.',
        },
        {
          kind: 'reflection',
          id: 'ezek16-gifts',
          prompt: 'What gifts has God given you? Not achievements, but gifts—things you did not earn. How do you tend them? Do you use them in gratitude, or do you forget their source?',
        },
      ],
    },

    {
      ref: 'Ezekiel 16:15–43',
      title: 'Harlotry and Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(15, 'But thou didst trust in thine own beauty, and playedst the harlot because of thy renown, and pouredst out thy fornications on every one that passed by; his it was.'),
            plain(20, 'Moreover thou hast taken thy sons and thy daughters, whom thou hast borne unto me, and these hast thou sacrificed unto them to be devoured. Is this of thy whoredoms a small matter,'),
            plain(23, 'And it came to pass after all thy wickedness, (woe, woe unto thee! saith the Lord God;)'),
            plain(35, 'Wherefore, O harlot, hear the word of the Lord:'),
            plain(36, 'Thus saith the Lord God; Because thy filthiness was poured out, and thy nakedness discovered through thy whoredoms with thy lovers, and with all the idols of thy abominations, and by the blood of thy children, which thou didst give unto them;'),
            plain(42, 'So will I make my fury toward thee to rest, and my jealousy shall depart from thee, and I will be quiet, and will be no more angry.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek16-harlot',
          html: 'The judgment is not arbitrary. It follows directly from covenant-breaking. Jerusalem—having been found in blood and raised to beauty—uses her beauty not to honor the One who gave it, but to seduce strangers. She gives the gifts meant for her bridegroom to her lovers. Worse, she involves her own children in idolatrous worship. The word "harlotry" carries the weight of betrayal. A harlot gives her body for payment. But Jerusalem does something deeper: she exchanges her covenant for a lie[res:tyre-archaeology].',
        },
        {
          kind: 'commentary',
          id: 'ezek16-fury',
          html: 'God&apos;s fury is not capricious. It is the anger of betrayed love. "I will give thee blood in fury and jealousy." Jealousy in Scripture is not petty. It is the rightful claim of the covenant partner over the beloved. When one is bound in covenant, jealousy is the heat of faithfulness asserting itself. But notice: even in judgment, God speaks. Even in fury, He is present. His judgment is not abandonment. It is correction meant to call His people back.',
        },
        {
          kind: 'carry',
          html: 'Covenant is not conditional on our faithfulness. God swears His covenant with Jerusalem not because she deserves it, but because He has chosen her. Yet covenant is not meaningless either. To break covenant is to invite judgment. Judgment itself becomes a form of love—the refusal to let the beloved remain in destruction. If God were indifferent, He would leave Jerusalem to her harlotries. Instead, He acts in anger to shake her awake.',
        },
        {
          kind: 'reflection',
          id: 'ezek16-unfaithful',
          prompt: 'When have you felt unfaithful to God—using His gifts for other purposes, serving other lovers? What brought you back?',
        },
      ],
    },

    {
      ref: 'Ezekiel 16:44–63',
      title: 'The Everlasting Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(59, 'For thus saith the Lord God; I will even deal with thee as thou hast done, which hast despised the oath in breaking the covenant.'),
            plain(60, 'Nevertheless I will remember my covenant which I made with thee in the days of thy youth: and I will establish unto thee an everlasting covenant.'),
            plain(61, 'Then thou shalt remember thy ways, and be ashamed, when thou shalt receive thy sisters, both thine elder and thy younger: and I will give them unto thee for daughters, but not by thy covenant.'),
            plain(62, 'And I will establish my covenant with thee; and thou shalt know that I am the Lord:'),
            plain(63, 'That thou mayest remember, and be confounded, and never open thy mouth any more because of thy shame, when I am pacified toward thee for all that thou hast done, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek16-remember',
          html:
            'The final word is not judgment. It is remembrance. "I will remember my covenant which I made with thee in the days of thy youth." The covenant made when Jerusalem was nothing—found in blood, raised from death, chosen in love—cannot be erased. God&apos;s faithfulness does not depend on Israel&apos;s faithfulness. This is the scandal and the mercy of it. The covenant is "everlasting," not because it cannot be broken, but because God will not break it.',
        },
        {
          kind: 'commentary',
          id: 'ezek16-confounded',
          html:
            'When God is "pacified"—when His anger has spent itself in judgment and restoration—Jerusalem will remember. Shame will flood her. She will know what she has done. But she will also know that she is forgiven. The shame is not condemnation. It is the awakening of the beloved to the depth of grace. "Thou mayest remember, and be confounded, and never open thy mouth any more because of thy shame." Not the shame of rejection, but the shame of one who has been forgiven everything.',
        },
        {
          kind: 'christ',
          id: 'ezek16-christ-restore',
          title: 'Christ Connection — Covenant Cannot Be Broken',
          html:
            'In Jeremiah 31, God promises a "new covenant" written on the heart. In Hebrews, Jesus is called the "mediator of a better covenant." What Ezekiel articulates—the unbreakable nature of God&apos;s covenant love, His refusal to abandon His people even when they abandon Him—finds its fullest expression in Christ&apos;s sacrifice. At the Cross, Christ enters into Jerusalem&apos;s shame and transforms it. He says, in effect, "I will remember the covenant I made with you in the beginning. I will establish an everlasting covenant." This is the Gospel: covenant love that will not let us go.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s memory is faithful. He forgets nothing—not the covenant, not the promise, not you. In your unfaithfulness, His faithfulness abides. Judgment may come. Shame may come. But not abandonment. The God of Ezekiel is willing to suffer the betrayal of His beloved rather than lose them forever.',
        },
        {
          kind: 'reflection',
          id: 'ezek16-everlasting',
          prompt: 'What would it change in you to truly believe that God&apos;s covenant cannot be broken—that His faithfulness does not depend on yours?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will remember my covenant which I made with thee in the days of thy youth: and I will establish unto thee an everlasting covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 16 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    }
  ],

  hasHebrew: true,
};
