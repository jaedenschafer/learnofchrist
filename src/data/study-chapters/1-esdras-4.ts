import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FIRST_ESDRAS_4: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 4,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 13 },
  intros: [
    'Three young men stand before the Persian king Darius and answer his riddle: what is strongest in the world? The first answers "wine." The second, "the king." But Zerubbabel, the future builder of the second temple, offers a third answer—women—then adds something that changes everything: "but above all things truth beareth away the victory." His words about truth&apos;s unshakeable power capture the king&apos;s imagination.',
    'What Zerubbabel describes is not merely honesty or accuracy. He describes truth as the foundation of all order, all justice, all meaning. When a king recognizes truth, he recognizes his own legitimacy. Darius hears the argument and grants everything Zerubbabel asks: the exiles may return home, the temple will be rebuilt, and the king himself will fund it. Truth, once seen clearly, bends even earthly power toward the purposes of God.',
  ],

  opener: {
    matchTitle: /truth|king|darius/i,
    matchArtist: /tissot/i,
    caption: 'The Contest Before King Darius',
  },

  sections: [
    /* ─── Wine is Strongest ────────────────────────────────────────────── */
    {
      ref: '1 Esdras 4:1–12',
      title: 'Wine is Strongest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1, t('And the first said, Wine is the strongest.')),
            verse(3, t('Then the first began, and said, Sirs, ye men are not strong: for wine is strong. It causeth all men that drink it to err; it maketh the mind of the king and of the fatherless child to be all one; of the bond and of the free it maketh all equal.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-wine-claim',
          html: 'The first bodyguard makes his case: wine levels all distinctions. Rich and poor, slave and free, king and peasant—all become equally intoxicated. Wine appears to blur every line, to equalize every station, to overcome every resistance. It is a seductive argument. Wine&apos;s power seems absolute. [res:sefaria-1-esdras-3-4] [res:topostext-zerubbabel]',
        },
        {
          kind: 'carry',
          html: 'Wine appears victorious because it makes us forget what matters. We live in a world of smaller intoxicants—status, wealth, approval, distraction—each promising the same forgetting. You know in your bones that forgetfulness is not strength, yet you reach for it anyway. What would it look like this week to stay awake?',
        },
        {
          kind: 'reflection',
          id: 'e4-intoxicant',
          prompt: 'What intoxicates you—what makes you forget what is true about yourself and your life? Name it. What sobers you back up?',
        },
      ],
    },

    /* ─── The King is Strongest ────────────────────────────────────────── */
    {
      ref: '1 Esdras 4:13–32',
      title: 'The King is Strongest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13, t('Then the second, that had spoken of the strength of the king, began to say,')),
            verse(14, t('Sirs, are not men strongest, that bear rule over sea and land, and all things in them? But yet the king is stronger; for he is lord of all these things, and hath dominion over them; and whatsoever he commandeth them they do.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-king-claim',
          html: 'The second guard argues that the king surpasses even wine&apos;s apparent power. The king commands armies. He commands the elements. Whatever he decrees is carried out. He is the visible seat of all earthly power. What could stand against the one who holds the scepter?',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(26, t('Yet if he say to them, Make war one against another, they do it; if he send them out against the enemies, they go, and overcome, and return to him with glory.')),
          ],
        },
        {
          kind: 'carry',
          html: 'Authority feels absolute when you are standing under it. The boss, the government, the system—they appear to hold the ultimate power. We organize our whole lives around their commands. But notice what happens when power encounters something it cannot control. The king&apos;s dominion extends only where he can force obedience. Over the human heart—over truth—he has no final say.',
        },
        {
          kind: 'reflection',
          id: 'e4-authority',
          prompt: 'What authority have you given ultimate power in your life? What would change if you remembered that no human authority is ultimate?',
        },
      ],
    },

    /* ─── Women are Strongest ──────────────────────────────────────────── */
    {
      ref: '1 Esdras 4:33–40',
      title: 'Women are Strongest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(33, t('Women have borne the king and all the people that bear rule by sea and land.')),
            verse(34, t('Even of them they have been brought up: and they have nourished their kings and those that bear rule; and without women cannot men be.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-women-power',
          html: 'Zerubbabel&apos;s third answer reframes the entire debate. Women bear and nourish all men—even kings. They shape the very lives that hold power. Wine passes through the mouth; kingdoms pass through the generations born of women. The human person itself comes from the feminine. Kings, for all their authority, are born, nursed, sustained by women.',
        },
        {
          kind: 'greek',
          id: 'e4-isxys',
          title: 'Ischys — Strength; Might',
          script: 'ἰσχύς',
          translit: '<strong>Ischys</strong> · strength; might; power',
          description: 'The Greek ischys means raw force—the strength to overcome resistance. Yet the text hints that there is a deeper strength than force: the strength to generate life itself. Women&apos;s strength is generative, not coercive.',
        },
        {
          kind: 'carry',
          html: 'The world&apos;s definition of strength is coercive: the power to make others obey. But generative strength—the power to create, nurture, shape, sustain life—is deeper. It works invisibly, over years and generations. You may not see yourself as powerful by the world&apos;s measure. But if you are shaping a life, nourishing someone, creating something that will outlast you, you are wielding a strength the mighty cannot match.',
        },
        {
          kind: 'reflection',
          id: 'e4-generative',
          prompt: 'Where are you exercising generative strength in someone&apos;s life—shaping, nurturing, sustaining? What does that strength require from you?',
        },
      ],
    },

    /* ─── But Above All, Truth is Strongest ──────────────────────────── */
    {
      ref: '1 Esdras 4:35–36',
      title: 'But Above All, Truth is Strongest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(35, t('Now ye may see that women are strong; for thus have I spoken, and the king and all the people held their peace.')),
            verse(36, t('Then said he, Sirs, are not these things strong, seeing women are such? but '),
            hp('truth beareth away the victory', 'e4-truth-claim'),
            t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-truth-claim',
          html: 'Zerubbabel pauses. His argument for women has captivated the court. Then he makes his move. Even women&apos;s generative power, even the hidden strength of nurture and life—these pale before truth. Truth is not a force that works through coercion, nor through hidden channels. Truth works by being seen. The moment it is recognized, it claims victory.',
        },
        {
          kind: 'greek',
          id: 'e4-aletheia',
          title: 'Aletheia — Truth; Uncovered Reality',
          script: 'ἀλήθεια',
          translit: '<strong>Aletheia</strong> · truth; what is not hidden; reality as it actually is',
          description: 'Aletheia means &ldquo;what cannot be hidden.&rdquo; It is truth not as opinion but as uncovered reality. The thing that stands when all illusions fall away.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-truth',
          title: 'Christ Connection — &ldquo;I am the Truth&rdquo;',
          html: 'Jesus says to His disciples: &ldquo;I am the way, the truth, and the life&rdquo; (John 14:6). He does not offer truth as information or teaching alone. He embodies it. He is the unbroken thing. He is the one reality that cannot be spun, reinterpreted, or covered over. When Jesus stands before the authorities, before the accusations, before the cross, He remains unshaken because He is identical with what is true. &ldquo;Thou sayest that I am a king,&rdquo; He tells Pilate. &ldquo;To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth&rdquo; (John 18:37).',
        },
        {
          kind: 'carry',
          html: 'You may have tried to speak truth and felt it fail. The court mocked you. Power turned against you. You wondered if truth mattered at all. But truth has a persistence that force cannot match. Truth does not depend on the room&apos;s applause. It stands because it is so. And though the powers may not recognize it today, the persistence of truth works in hidden ways. Align yourself with what is actually true, and you align yourself with the deepest current of the world.',
        },
        {
          kind: 'reflection',
          id: 'e4-persistence',
          prompt: 'When have you seen truth persist even when power opposed it? What did that teach you about how the world actually works?',
        },
      ],
    },

    /* ─── Magna est veritas et praevalet ────────────────────────────── */
    {
      ref: '1 Esdras 4:33–40',
      title: 'Great is Truth and Shall Prevail',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(33, t('Truth is great, and '),
            hp('stronger than all things', 'e4-cosmic-order'),
            t('. All the earth crieth out for the truth, and the heaven blesseth it: all works shake and tremble at it.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-cosmic-order',
          html: 'Zerubbabel articulates a vision of cosmic order. Truth is not merely an ideal or virtue—an opinion that competes with other opinions. Truth is the foundation of reality itself. All just order rests on it. All creation is built upon it. When truth is recognized and honored, the whole creation aligns with its own nature. This is why truth "conquers"—because it is aligned with how the world actually is.',
        },
        {
          kind: 'greek',
          id: 'e4-katischyo',
          title: 'Katischyo — To Prevail; To Overcome',
          script: 'κατισχύω',
          translit: '<strong>Katischyo</strong> · to prevail; to overcome; to win the victory',
          description: 'This is not mere dominance through force. It is victory through the weight of reality itself. Truth prevails because it is so.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(36, t('For truth endureth, and is always strong; it liveth and conquereth for evermore. With her there is no accepting of persons or rewards; but she doeth the things that are just, and refraineth from all unjust and wicked works; and all men do approve her works.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-permanence',
          html: 'Note what the text does not say about truth. It does not say truth is winning right now, or that the clever escape detection, or that the clever prosper. It says truth is permanent. It cannot be bribed. It cannot be swayed by favor or flattery. It works what is just. And because it is just, everyone recognizes it—consciously or not.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-freedom',
          title: 'Christ Connection — Truth and Freedom',
          html: 'Jesus tells His followers, &ldquo;If ye continue in my word… ye shall know the truth, and the truth shall make you free&rdquo; (John 8:31–32). Truth is not primarily information. It is liberation. The freedom Jesus offers is not the freedom to do as you please, but the freedom from illusion, from lies, from the tyranny of what is false. When you stand in truth, you stand in freedom, because truth is aligned with reality, and reality is where freedom actually dwells.',
        },
        {
          kind: 'carry',
          html: 'The world rewards the lie. The clever flourish, the unjust grow rich, the cruel hold power—for a season. But you are called to build your life on something deeper. Build on what is true. Build on what is just. Build on what endures. The kingdom does not run on the same fuel as the world.',
        },
        {
          kind: 'reflection',
          id: 'e4-enduring',
          prompt: 'What in your life are you building on what is actually true, not on what appears to work right now? Where do you need to realign?',
        },
      ],
    },

    /* ─── Blessed be the God of Truth ──────────────────────────────── */
    {
      ref: '1 Esdras 4:40',
      title: 'Blessed be the God of Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(40, t('Blessed be '),
            hp('the God of truth', 'e4-blessing'),
            t('!')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-blessing',
          html: 'Zerubbabel&apos;s argument does not end in abstraction. It ends in worship. Truth is not a principle to be contemplated. Truth has a source. There is a God who is true, who cannot lie, who anchors all reality in His faithfulness. To bless the God of truth is to recognize that your standing in reality depends not on your cleverness but on alignment with the God who is true.',
        },
        {
          kind: 'hebrew',
          id: 'e4-emet',
          title: 'Emet — Truth; Faithfulness',
          script: 'אֱמֶת',
          translit: '<strong>Emet</strong> · truth; faithfulness; reliability; permanence',
          description: 'Emet carries a sense not merely of factual correctness but of faithfulness and reliability. God&apos;s emet means He is trustworthy, consistent, true to His word, unshaken by circumstance. A person of emet is one who can be depended on.',
        },
        {
          kind: 'carry',
          html: 'The moment you stop treating truth as a neutral fact and start treating it as the character of God, everything changes. You are no longer asking, "What truth can I get away with ignoring?" You are asking, "What does faithfulness to the God of truth look like in my life today?" That question reshapes everything.',
        },
        {
          kind: 'reflection',
          id: 'e4-trustworthy',
          prompt: 'How do you experience God as faithful? Where are you being invited to become more trustworthy yourself?',
        },
      ],
    },

    /* ─── The King&apos;s Grant and Zerubbabel&apos;s Petition ───────────────────── */
    {
      ref: '1 Esdras 4:42–57',
      title: 'The King&apos;s Grant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(42, t('Then Darius the king arose, and kissed him, and '),
            hy('wrote letters for him', 'e4-darius-moved'),
            t('.')),
            verse(47, t('Now therefore I make a decree: that all they that have passed out of their own country, when ye return home, the treasures of the people shall be restored to them, and that no officer shall molest them.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-darius-moved',
          html: 'The king is moved not by flattery but by the clarity of truth. He does not grant permission grudgingly. He kisses Zerubbabel, embraces him. The king recognizes wisdom when he hears it. Truth, once spoken clearly, bends even earthly power toward God&apos;s purposes.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(50, t('And the king said unto him, Thou hast asked of me, and I have granted thee all that I am able; for thou art wise, Zerubbabel, and thy words are good.')),
            verse(57, t('And I myself will cause the treasure to be paid for the building of the house of God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-grant-detail',
          html: 'What Zerubbabel asked was not granted because he was clever, but because he spoke truth. The exiles are released. Their possessions are restored. The king himself will fund the temple. What had been blocked by opposition is now advanced by the highest earthly authority. The path home is clear. Rebuilding can begin.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-vindicated',
          title: 'Christ Connection — Vindication and Restoration',
          html: 'Jesus speaks truth to power. The authorities condemn Him. He is executed. Yet in the resurrection, God vindicates Him. What appeared as defeat is revealed as total victory. Jesus rises not alone but with all His followers, as the first fruits of a new humanity. All that was lost is restored. &ldquo;I am alive for evermore… and have the keys of hell and of death&rdquo; (Rev. 1:18).',
        },
        {
          kind: 'carry',
          html: 'When you speak truth, be prepared for opposition. But also be prepared for vindication. The opposition will pass. The truth will remain. And God, who sees what is hidden, who knows what is just, will restore what was unjustly taken. Wait for His restoration with faith.',
        },
        {
          kind: 'reflection',
          id: 'e4-vindication',
          prompt: 'What has been unjustly taken from you? What would it mean to wait for God&apos;s vindication and restoration rather than trying to seize it yourself?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-1-esdras-3-4',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Esdras 3-4 — The Three Youths Contest',
      url: 'https://www.sefaria.org/I_Esdras.3',
      description: 'Unique Hellenistic narrative about truth, loyalty, and women in Esdras tradition.',
    },
    {
      id: 'topostext-zerubbabel',
      kind: 'archaeology',
      source: 'ToposText',
      label: 'Zerubbabel and Jerusalem Restoration',
      url: 'https://topostext.org/',
      description: 'Archaeological sites of Second Temple Jerusalem and temple reconstruction.',
    },
  ],

  bottomShare: {
    label: 'Share 1 Esdras 4',
    quote: 'Truth is great, and stronger than all things. For truth endureth and is always strong; it liveth and conquereth for evermore. Blessed be the God of truth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 4 · Study Guide',
  },

  hasHebrew: true,
};
