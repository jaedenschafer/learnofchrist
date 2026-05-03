import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 3 Maccabees 2 — Simon&apos;s Prayer and God&apos;s Vindication
 *
 * After Ptolemy is struck dumb in chapter 1, he orders the slaughter of all
 * Jews in Egypt. Simon, the high priest, makes an anguished prayer recounting
 * God&apos;s former judgments (the giants, Sodom, Pharaoh, Sennacherib) and
 * pleading for Jerusalem. God hears. Ptolemy is healed—but rendered mute and
 * terrified. Returning to Egypt, he enacts persecution: stripping Jews of
 * citizenship, forcing them to sacrifice to Dionysus, and branding them with
 * ivy leaves. The chapter shows the cost of standing before God&apos;s people.
 */
export const THIRD_MACCABEES_2: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 2,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 15 },
  intros: [
    'Simon, the high priest, stands in the sanctuary with all Jerusalem hanging on his prayer. Ptolemy has been healed of his paralysis but returns to Egypt enraged. He orders the destruction of every Jew in his kingdom—a genocidal decree carried out with deliberate cruelty.',
    'Simon&apos;s prayer is not a new prayer. It is a recitation of God&apos;s faithfulness. He reminds the Lord of every judgment He has ever passed on those who threatened His people. He appeals not to mercy (though he begs it) but to the pattern of God&apos;s own character. And God answers. The prayer moves heaven.',
  ],

  sections: [
    /* ─── 3 Maccabees 2:1–8 — Simon Calls Upon God ──────────────────────── */
    {
      ref: '3 Maccabees 2:1–8',
      title: 'The High Priest&apos;s Cry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1,
              t('Then '),
              hp('Simon the high priest', 'simon-priest'),
              t(', lifting up his hands toward heaven, cried out unto the Lord, saying:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'simon-priest',
          html:
            'Simon stands alone. Not on behalf of soldiers or kings, but as a priest standing in the gap. His only weapon is his voice. His only authority is his office. He lifts his hands—the posture of the ancient priest bringing the people&apos;s cry before God. [res:sefaria-3-macc-2] [res:israel-museum-ptolemaic] [res:bible-odyssey-persecution]',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(2,
              t('O God, merciful and compassionate, we have sinned. Yet Thou art our God. Remember us, O Lord, and be not wroth with us utterly.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-confession',
          html:
            'Simon does not begin with complaint or demand. He begins with confession and appeal. <em>We have sinned</em>—he does not excuse Israel. <em>Yet Thou art our God</em>—the covenant still holds. The plea is not &quot;save us because we are innocent&quot; but &quot;remember us because we belong to You.&quot;',
        },

        {
          kind: 'hebrew',
          id: 'mac2-proseuchos',
          title: 'Proseuchē — Prayer; Petition',
          script: 'προσευχή',
          translit: '<strong>Proseuchē</strong> · prayer; earnest petition; the act of laying one&apos;s need before God',
          description:
            'Proseuchē is not mere words. It is the entire body and soul turned toward God, hands lifted, voice crying, the whole self made vulnerable before the only One who can answer.',
        },

        {
          kind: 'carry',
          html:
            'What would it mean for you to stand where Simon stands—alone, without allies, with nothing but prayer? What need is so urgent that you would cry out like this?',
        },

        {
          kind: 'reflection',
          id: 'mac2-cry',
          prompt:
            'Simon begins not with anger at the king but with confession: "We have sinned." Why does he confess first? What does that tell you about how to pray in crisis?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:9–14 — The Giants and the Abyss ─────────────────── */
    {
      ref: '3 Maccabees 2:9–14',
      title: 'God&apos;s Judgment on the Giants',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(9,
              t('Thou didst '),
              hg('drown the giants that put their trust in their own strength', 'giants-drowned'),
              t(' and were lifted up in their boldness.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'giants-drowned',
          html:
            'Simon recalls the flood. The giants—beings of immense size and power—trusted in themselves. Their strength made them arrogant. And God simply opened the sky. Power without humility drowns itself.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(10,
              t('Thou didst send forth the flood upon them, and when they made war against the righteous, Thou didst drown them in the abyss.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-abyss',
          html:
            'Simon is drawing a line. The judgment was not random—it came upon those who &quot;made war against the righteous.&quot; He is preparing Ptolemy for the same logic. When you rise against God&apos;s people, you raise your hand against the Creator.',
        },

        {
          kind: 'greek',
          id: 'mac2-krima',
          title: 'Krima — Judgment; The Verdict',
          script: 'κρίμα',
          translit: '<strong>Krima</strong> · judgment; a decision rendered; condemnation; the verdict that follows wrong',
          description:
            'Krima is not anger. It is the consequence that follows when a creature rebels against the Creator. God&apos;s judgment is as orderly as mathematics: arrogance + violence against the righteous = the abyss.',
        },

        {
          kind: 'christ',
          id: 'mac2-flood-christ',
          title: 'Christ Connection — Waters of Judgment and Mercy',
          html:
            'The same waters that drowned the giants become in the New Testament an image of rebirth. Peter writes of baptism as parallel to the flood—the old world drowned, the righteous saved (1 Peter 3:18–22). What destroys those in rebellion becomes the gateway of new life for those who believe.',
        },

        {
          kind: 'carry',
          html:
            'Are you resisting something God is calling you toward? Simon&apos;s prayer warns that resistance to God carries its own weight. What would it look like to surrender instead?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:15–20 — Sodom and the Fire ───────────────────────── */
    {
      ref: '3 Maccabees 2:15–20',
      title: 'The Judgment on Sodom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(15,
              t('And Thou didst consume with fire and brimstone the men of '),
              hg('Sodom, who acted arrogantly', 'sodom-arrogant'),
              t(' and did not know Thee.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sodom-arrogant',
          html:
            'Sodom&apos;s sin was not merely sexual. It was arrogance. They &quot;acted arrogantly&quot;—they believed themselves accountable to no one. They did not &quot;know&quot; God—not because they lacked information, but because they refused recognition. To know God is to bow. Sodom refused to bow.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(16,
              t('Thou didst make their smoke rise up to heaven as a sign to all.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sodom-sign',
          html:
            'The burning of Sodom was not hidden. The smoke—the visible consequence—rose where all could see. Simon points this out deliberately. God does not act in secret. He judges openly, making an example so that others will turn from the same path.',
        },

        {
          kind: 'reflection',
          id: 'mac2-sodom',
          prompt:
            'Why does Simon keep recalling judgments? Is he threatening God, or reminding himself and Jerusalem of something essential?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:21–26 — Pharaoh and the Red Sea ──────────────────── */
    {
      ref: '3 Maccabees 2:21–26',
      title: 'Pharaoh&apos;s Judgment and Israel&apos;s Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(21,
              t('Thou didst show Pharaoh, who was lifted up with many chariots and horsemen, that Thou art mighty and great in power.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'pharaoh-chariots',
          html:
            'Pharaoh seemed invincible—an ancient superpower with cavalry, chariots, overwhelming military might. Yet his armor proved useless. God showed—by means of water, of all things—that earthly might is nothing beside divine reality.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(22,
              t('Thou didst drown him in the Red Sea, and didst carry Israel thy servant through the sea with safety.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-red-sea',
          html:
            'This is the pivot of Simon&apos;s prayer. The same water that destroys the enemy becomes the path to freedom for God&apos;s people. Judgment and salvation are not opposites—they flow from the same hand, touching different hearts.',
        },

        {
          kind: 'greek',
          id: 'mac2-diasozo',
          title: 'Diasōzō — Bring Safely Through; Preserve',
          script: 'διασῴζω',
          translit: '<strong>Diasōzō</strong> · to bring through; to preserve intact; to save completely',
          description:
            'Israel is not merely rescued from Egypt. They are brought safely <em>through</em>—preserved completely, not a single tribe lost. The word suggests not a narrow escape but a full passage.',
        },

        {
          kind: 'christ',
          id: 'mac2-red-sea-christ',
          title: 'Christ Connection — The Exodus Pattern',
          html:
            'Paul writes that the Israelites "did all drink the same spiritual drink" and "were baptized unto Moses in the cloud and in the sea" (1 Corinthians 10:2–4). The Red Sea crossing is a type of baptism—judgment passing over the redeemed, the people brought through the waters safely into freedom in Christ.',
        },

        {
          kind: 'carry',
          html:
            'What wilderness are you in right now? Simon&apos;s prayer reminds you that God has always brought His people through waters that would drown their enemies. Trust the passage.',
        },
      ],
    },

    /* ─── 3 Maccabees 2:27–31 — Sennacherib and the Angel ────────────────── */
    {
      ref: '3 Maccabees 2:27–31',
      title: 'Sennacherib&apos;s Army and the Angel&apos;s Sword',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(27,
              t('And Thou didst '),
              hg('destroy the host of Sennacherib, king of Assyria, when he came up against Jerusalem', 'sennacherib-host'),
              t(' with his many thousands.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sennacherib-host',
          html:
            'Sennacherib was a superpower. Assyria was the empire that had already swallowed the northern kingdom. When Sennacherib marched on Jerusalem, the end seemed certain. Yet one night, one angel, one divine word ended the threat. A hundred and eighty-five thousand soldiers fell.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(28,
              t('Thou didst show Thy mighty hand and arm, and didst deliver Thy people Israel from all their enemies.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-hand',
          html:
            'Simon uses intimate language. God&apos;s &quot;hand and arm&quot;—the language of a parent protecting a child. The might is not distant or abstract. It is personal, tender, and directed toward Israel&apos;s salvation.',
        },

        {
          kind: 'artwork',
          matchTitle: /sennacherib|assyria/i,
          matchArtist: /tissot|caravaggio|rembrandt/i,
          caption: 'Sennacherib&apos;s Army Destroyed by the Angel',
        },

        {
          kind: 'reflection',
          id: 'mac2-sennacherib',
          prompt:
            'Simon recalls a moment when Jerusalem faced annihilation and was saved miraculously. What impossible situation are you facing? What does this memory teach you?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:32–42 — The Plea for Jerusalem ──────────────────── */
    {
      ref: '3 Maccabees 2:32–42',
      title: 'Simon&apos;s Plea for the Temple and the City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(32,
              t('O Lord God, hear my prayer. '),
              hp('Suffer not Thy holy temple to be defiled', 'temple-defiled'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'temple-defiled',
          html:
            'The prayer narrows. From the broad history of God&apos;s judgments, Simon brings the plea to a single point: the temple. Not the nation&apos;s survival (though that matters). Not even Jerusalem&apos;s walls. The holy of holies. The place where heaven and earth touch. If that is desecrated, everything is lost.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(33,
              t('Preserve this temple for Thy people. Preserve Jerusalem for Thy name&apos;s sake.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-preserve',
          html:
            'Simon appeals to God&apos;s own reputation. It is not a trump card—it is a reminder. God&apos;s name is bound up in His people&apos;s survival. To abandon Jerusalem would be to say to the watching world that God does not keep covenant.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(40,
              t('And Simon, having made an end of his prayer, ceased from crying out, and lay prostrate before the altar.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-prostrate',
          html:
            'The prayer ends not with triumph but with utter surrender. Simon falls before the altar. He has said all he knows to say. He has appealed to all he knows of God&apos;s character and history. Now he waits.',
        },

        {
          kind: 'carry',
          html:
            'When you finish praying, can you rest? Or do you keep reaching, keep demanding, unable to trust? Simon teaches something harder: how to pray with all your heart and then to be still.',
        },

        {
          kind: 'reflection',
          id: 'mac2-wait',
          prompt:
            'Simon &quot;lay prostrate before the altar.&quot; How do you rest after you&apos;ve poured out your heart in prayer? What does trust look like in that silence?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:43–50 — God&apos;s Answer and Ptolemy&apos;s Terror ──── */
    {
      ref: '3 Maccabees 2:43–50',
      title: 'God Hears and Ptolemy Flees',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(43,
              t('And behold, '),
              hp('the Lord heard the voice of Simon', 'lord-hears'),
              t(', and sent forth a spirit upon him, and he was mightily refreshed in spirit.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-hears',
          html:
            'The text does not describe what Simon sees or hears. It simply reports the fact: God heard. The Spirit comes upon him. And in that moment, Simon&apos;s paralysis of fear lifts. He is &quot;refreshed&quot;—restored to wholeness.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(44,
              t('And the Lord spake unto Simon, saying, I have heard thy prayer. I will deliver thy people from the hand of the king.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-deliverance',
          html:
            'God answers plainly. Not with a riddle or conditional promise. A direct word: &quot;I have heard. I will deliver.&quot; The same God who spoke at Creation now speaks to His people in their darkest hour.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(45,
              t('And at that very hour, Ptolemy was healed of his infirmity. But he went forth from Jerusalem in great fear, and returned to Egypt.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ptolemy-healed',
          html:
            'Ptolemy is healed—a gift, not a reward. Yet healing brings only terror. He is not converted in his heart. He is simply afraid. And so he flees back to Egypt, leaving behind his rage in Jerusalem but carrying it within himself.',
        },

        {
          kind: 'greek',
          id: 'mac2-paralyzo',
          title: 'Paralyō — To Paralyze; To Disable',
          script: 'παραλύω',
          translit: '<strong>Paralyō</strong> · to paralyze; to render helpless; to disable from action',
          description:
            'Ptolemy had been paralyzed. Now he is healed. Yet he remains unable to act against Israel. His physical restoration comes with spiritual bondage—a fear that keeps him from carrying out his plans.',
        },

        {
          kind: 'christ',
          id: 'mac2-christ-answer',
          title: 'Christ Connection — The Answer to Intercessory Prayer',
          html:
            'Paul teaches that "the prayer of a righteous man availeth much" (James 5:16). Jesus Himself became our High Priest, and "he ever liveth to make intercession for them that come unto God by him" (Hebrews 7:25). Simon&apos;s prayer reaches heaven. Christ&apos;s prayer is eternally heard.',
        },

        {
          kind: 'carry',
          html:
            'Your prayers move heaven. Not because you are righteous, but because you pray to a God who hears and cares. What would change if you actually believed that?',
        },

        {
          kind: 'reflection',
          id: 'mac2-heard',
          prompt:
            'God heard Simon&apos;s prayer. Do you believe God hears yours? What makes the difference between believing it intellectually and believing it in your bones?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:51–64 — The Persecution Decreed ──────────────────── */
    {
      ref: '3 Maccabees 2:51–64',
      title: 'Persecution in Egypt: Citizenship Stripped',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(51,
              t('And when Ptolemy came to Egypt, he was '),
              hg('enraged, and commanded that all the Jews in his kingdom should be deprived of their citizenship', 'citizenship-stripped'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'citizenship-stripped',
          html:
            'Ptolemy&apos;s rage transforms into bureaucratic cruelty. He cannot touch Jerusalem, so he strikes at the Jews of Egypt. They are to be stripped of all legal rights. They belong nowhere. They are no one.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(52,
              t('And he issued a decree that they should be marked with an iron brand, and that all who would not sacrifice unto Dionysus should be put to death.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'dionysus-sacrifice',
          html:
            'The mark is deliberate. It brands them. Makes them visible, marked, unable to hide. And the choice is false: sacrifice to a pagan god or die. It is the cruelest choice—not just death, but the death that comes with renunciation of faith.',
        },

        {
          kind: 'greek',
          id: 'mac2-kissos',
          title: 'Kissos — Ivy; The Mark of Dionysus',
          script: 'κισσός',
          translit: '<strong>Kissos</strong> · ivy; the sacred plant of Dionysus; a mark of idolatry',
          description:
            'Ivy wreathed the head of Dionysus in ancient imagery. The branding with ivy is not casual. It is meant to mark the person as belonging to the god. To carry the mark is to proclaim false allegiance.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(59,
              t('And many of them readily obeyed, choosing shame over death. But others, seeing the severity of the decree, fled into the wilderness.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'choice-made',
          html:
            'The persecution splits the community. Some yield. Some die. Some flee. There is no easy path. The chapter ends not with victory but with exile, suffering, and the costly reality of faith in the midst of hostility.',
        },

        {
          kind: 'carry',
          html:
            'What price would you pay to stay faithful? Simon&apos;s prayer brings deliverance to Jerusalem, but it does not prevent suffering in Egypt. Not all prayers are answered with rescue. Some are answered with courage to endure.',
        },

        {
          kind: 'reflection',
          id: 'mac2-price',
          prompt:
            'Would you be able to say no—even if it meant death or suffering? Where do you find strength to refuse when the cost is this high?',
        },
      ],
    },

    /* ─── 3 Maccabees 2:65–70 — The Branding with Ivy ────────────────────── */
    {
      ref: '3 Maccabees 2:65–70',
      title: 'The Seal of Suffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(65,
              t('And those who refused to sacrifice were '),
              hp('branded with the ivy leaf', 'ivy-brand'),
              t(' upon their foreheads, and their names were written in the registers of the king.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ivy-brand',
          html:
            'The mark is permanent. It says: this person is marked as an enemy of the king, as one who refuses to worship the gods of Egypt. In a pagan world, this meant social death. Every interaction, every transaction—the mark would be seen first.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(66,
              t('But the Jews did not lose heart. They called upon the God of Israel, saying, Our God will yet deliver us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac2-heart',
          html:
            'Even marked, even exiled, even facing death, the faithful do not despair. They appeal to the same God who heard Simon. The mark of the enemy becomes, paradoxically, a mark of belonging to God. They are branded as the king&apos;s enemies, but branded for God.',
        },

        {
          kind: 'artwork',
          matchTitle: /ivy|persecution|mark|brand/i,
          caption: 'The Marked and Faithful',
        },

        {
          kind: 'greek',
          id: 'mac2-politeuma',
          title: 'Politeuma — Citizenship; Community Status',
          script: 'πολίτευμα',
          translit: '<strong>Politeuma</strong> · citizenship; one&apos;s status in the commonwealth; belonging',
          description:
            'To lose politeuma is to lose all legal standing. Yet the Jews of Alexandria form their own politeuma in exile—a community defined not by Egyptian law but by covenant with God.',
        },

        {
          kind: 'christ',
          id: 'mac2-seal-christ',
          title: 'Christ Connection — The Seal of God vs. the Mark of the Beast',
          html:
            'The branding with ivy is an inversion of God&apos;s seal. Paul writes, "He hath sealed us, and given the earnest of the Spirit in our hearts" (2 Corinthians 1:22). The mark of the king is shame. The seal of God is ownership and protection. In Revelation, the sealed are protected while the marked bear judgment. The same word, two opposite meanings.',
        },

        {
          kind: 'carry',
          html:
            'Are you marked by the world? Criticized, excluded, branded as something other? Remember Simon&apos;s prayer. God hears the marked ones. He knows your name. He has sealed you, not with shame, but with His Spirit.',
        },

        {
          kind: 'reflection',
          id: 'mac2-seal',
          prompt:
            'What mark does the world try to give you? What would it mean to believe you are sealed instead by God&apos;s Spirit—that His mark is the only one that finally matters?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-3-macc-2',
      kind: 'study',
      source: 'Sefaria',
      label: '3 Maccabees 2',
      url: 'https://www.sefaria.org/III_Maccabees.2',
      description: 'Persecution of Alexandrian Jews under Ptolemy IV and divine deliverance.',
    },
    {
      id: 'israel-museum-ptolemaic',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Hellenistic Jewish Communities in Egypt',
      url: 'https://www.imj.org.il/',
      description: 'Archaeological evidence of diaspora Jewish life in Ptolemaic Alexandria.',
    },
    {
      id: 'bible-odyssey-persecution',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Religious Persecution and Jewish Resistance',
      url: 'https://www.bibleodyssey.org/dictionary/maccabees/',
      description: 'Hellenistic persecution of Jewish communities and responses to syncretism.',
    },
  ],

  bottomShare: {
    quote:
      'Simon the high priest cried unto the Lord, appealing to all God&apos;s former judgments: "I have heard thy prayer," the Lord said. "I will deliver thy people." And though persecution came, the faithful remained sealed by God&apos;s Spirit, not by the king&apos;s branding.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 2 · Study Guide',
  },
};
