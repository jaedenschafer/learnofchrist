import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Esdras 16 — The Final Woes and the Call to the Elect
 *
 * The book of 2 Esdras closes with Ezra&apos;s last prophecy: a catalogue of
 * calamities falling upon the nations—Babylon, Asia, Egypt, Syria—each facing
 * sword, famine, plague. The strong grow weak. The fruitful womb brings forth
 * nothing. Bridegrooms&apos; songs turn to lamentations.
 *
 * Yet beneath the judgment runs a steady, tender call. God speaks to His elect,
 * His chosen. &quot;Hear thou therefore... gird your loins... be ready.&quot;
 * The chapter ends not in darkness but in protection: the elect are sealed like
 * a flower in a meadow, and the Lord will preserve them. The woe is for the
 * world; the promise is for those who belong to God.
 */
export const SECOND_ESDRAS_16: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 16,

  estimatedMinutes: { 5: 7, 10: 12, 15: 16 },
  intros: [
    'Chapter 16 is Ezra&apos;s final word—a cascade of woes upon the nations, announced with the weight of heaven behind them. Calamities are coming: sword, famine, plague, fire. The proud will fall. The strong will become weak. But woven through the judgment is a quiet, unshakeable promise: God knows His own. They are sealed. They will be preserved.',
    'The chapter ends the book of 2 Esdras not with fear but with tender protection. Those who love God, who keep His covenant, who gird themselves in faith—they will pass through the woes untouched. The kingdom is prepared for them. And the Lord will hold them as surely as a flower blooms in its appointed season.',
  ],

  sections: [
    /* ─── 2 Esdras 16:1–7 — Woes Upon the Nations ────────────────────────── */
    {
      ref: '2 Esdras 16:1–7',
      title: 'Woes Upon the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(1,
              t('Woe be unto thee, thou '),
              hg('Babylon and Asia', 'woe-babylon-asia'),
              t('!'),
            ),
            verse(2,
              t('Woe be unto thee, thou Egypt and Syria!'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'woe-babylon-asia',
          html:
            'The four great empires of the ancient world stand before God, and each hears the same word: woe. Not because their strength is great, but because they have used that strength to oppose God and grind the faithful under their heel. The woe is the answer of heaven to the pride of earth.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(3,
              hp('Gird up yourselves with sackcloth and hair cloth, and bewail your children, and be sorrowful', 'gird-sackcloth'),
              t('; for your destruction is at hand.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gird-sackcloth',
          html:
            'The call to sackcloth is a call to repentance, to the ancient posture of turning back to God. Yet the tone is not hopeful—the warning comes late. The calamities are already set in motion. Even the summons to mourn is, in a way, too late. This is judgment spoken to those who have had their chance.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(4,
              t('A sword is sent upon you, and '),
              hg('who may turn it back', 'sword-turn-back'),
              t('?'),
            ),
            verse(5,
              t('A fire is kindled among you, and '),
              hy('who shall quench it', 'fire-quench'),
              t('?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sword-turn-back',
          html:
            'The question is rhetorical. No one can turn back God&apos;s judgment. No strength, no diplomacy, no wealth can deflect what God has determined. The sword comes, and resistance is futile. This is the terrible finality of judgment.',
        },
        {
          kind: 'commentary',
          id: 'fire-quench',
          html:
            'The fire that God kindled is unstoppable. It is not a merely physical flame but the burning of divine justice. No water, no human effort, can quench it. This is the comprehensive nature of God&apos;s judgment—nothing escapes, nothing is spared.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-cherev',
          title: 'Cherev — &quot;Sword&quot;',
          script: 'חֶרֶב',
          translit: '<strong>cherev</strong> · sword; judgment; the instrument of God&apos;s justice',
          description:
            'Throughout Scripture, the sword that God sends is not merely a weapon of war but a symbol of His righteous judgment. In the hands of God, the sword executes what is just.',
        },

        {
          kind: 'christ',
          id: 'christ-sword-ready',
          title: 'Christ Connection — The Sword Ready in the Hand of God',
          html:
            'John sees Christ in Revelation with &quot;a sharp two-edged sword&quot; proceeding from His mouth (Revelation 1:16). Jesus spoke of coming not to bring peace but a sword (Matthew 10:34), dividing those who follow Him from those who refuse. The sword that Ezra announces finds its truth in Christ—not as a symbol of hatred but as the instrument of justice, separating the faithful from the world.',
        },

        {
          kind: 'carry',
          html:
            'When you read of God&apos;s judgment falling on the nations, remember: that sword is not raised against those who are His. The woe is for those who have turned from Him. For the faithful, the sword is a promise—that God is not indifferent to injustice, that the proud will not stand forever. Your refuge is not in hiding from judgment but in belonging to the Judge.',
        },

        {
          kind: 'reflection',
          id: 'nations-fall',
          prompt:
            'What kingdoms or powers seem unshakeable in your world? How does it change your perspective to know they are all subject to God&apos;s judgment? What does your own allegiance look like?',
        },
      ],
    },

    /* ─── 2 Esdras 16:8–34 — The Catalogue of Calamities ────────────────────── */
    {
      ref: '2 Esdras 16:8–34',
      title: 'The Calamities Descend',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(8,
              t('Behold, '),
              hg('a sword', 'calamity-sword'),
              t(', and '),
              hg('famine', 'calamity-famine'),
              t(', and '),
              hg('death', 'calamity-death'),
              t(' are sent upon the earth.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'calamity-sword',
          html:
            'The three instruments of God&apos;s judgment are announced together: the sword (war), famine (scarcity), and death (pestilence). These are the classical apocalyptic judgments, the horsemen that ride through history when God withdraws His protection from the proud.',
        },
        {
          kind: 'commentary',
          id: 'calamity-famine',
          html:
            'Famine strips away the illusion that human effort alone can sustain life. When the harvests fail, when provision dries up, humanity confronts the reality: we depend entirely on what God gives. Famine is judgment that teaches this terrible lesson.',
        },
        {
          kind: 'commentary',
          id: 'calamity-death',
          html:
            'Death is the ultimate summons. In judgment, death multiplies—the normal pace of mortality accelerates into plague. What usually seems distant becomes imminent. Death is the word that every proud heart eventually hears.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(15,
              t('And '),
              hg('he that is strong shall become weak', 'strong-weak'),
              t('; and he that hath plenty shall come into want.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'strong-weak',
          html:
            'In a world turned upside down by God&apos;s judgment, strength becomes fragility. The powerful stand revealed as powerless. The abundant are left with nothing. The judgment strips away all false security, all trust in human strength or earthly goods.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(21,
              t('She that travaileth with child shall cry out in the midst of the night, '),
              hg('&quot;I shall bring forth nothing that is good.&quot;', 'barren-cry'),
              t(''),
            ),
            verse(22,
              t('And '),
              hy('the bridegroom shall mourn because of the bridegroom&apos;s song', 'bridegroom-lament'),
              t(', and the bridegroom shall mourn for the loss of his generation.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'barren-cry',
          html:
            'Even the most natural works of God—conception, birth—fail in the judgment. The womb brings forth nothing. This is desolation at the deepest level, the reversal of blessing itself. Life, which is God&apos;s signature gift, becomes impossible.',
        },

        {
          kind: 'greek',
          id: 'greek-lupeo',
          title: 'Lypeō — &quot;To Grieve; To Mourn&quot;',
          script: 'λυπέω',
          translit: '<strong>lypeō</strong> · to grieve; to cause sorrow; to bring low into mourning',
          description:
            'In the judgment, joy turns to sorrow. The natural occasions of joy—weddings, births, generations—become occasions of mourning. Lypeō captures not casual sadness but the soul&apos;s breaking beneath the weight of loss.',
        },

        {
          kind: 'commentary',
          id: 'bridegroom-lament',
          html:
            'The bridegroom&apos;s song, symbol of hope and continuity, becomes a lament. The marriage feast turns to funeral. This is the reversal of all natural hope. The future is closed. Generation gives way to ending.',
        },

        {
          kind: 'christ',
          id: 'christ-bridegroom-sorrow',
          title: 'Christ Connection — The Bridegroom in Sorrow',
          html:
            'Jesus spoke of Himself as the bridegroom (Matthew 25:1–13, John 3:29). When His disciples fasted, He explained: &quot;Can the children of the bridechamber mourn, as long as the bridegroom is with them?&quot; (Matthew 9:15). Yet in His Passion, the bridegroom went to His death, and His disciples wept. Yet from that sorrow came resurrection joy—the ultimate reversal. The bridegroom&apos;s song was silenced, only to be sung again at the marriage supper of the Lamb (Revelation 19:7).',
        },

        {
          kind: 'carry',
          html:
            'The desolation painted here is real. When judgment falls, all the ordinary consolations—children, generations, continuity—become uncertain. Yet this is not the word to the faithful. This is the word to those who have turned from God. For you, the question is not whether you will be safe from calamity, but whether you will be safe with God <em>in</em> the calamity. That is a very different thing.',
        },

        {
          kind: 'reflection',
          id: 'what-remains',
          prompt:
            'If God stripped away all the things you count on—health, family, security, future—what would remain? Would your faith? Would your love for Him?',
        },
      ],
    },

    /* ─── 2 Esdras 16:40–50 — Elect of God, Hear — The Turning Point ───────── */
    {
      ref: '2 Esdras 16:40–50',
      title: 'Elect of God, Hear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(40,
              hp('Hear therefore, ye my servants, saith the Lord; I will speak unto you. I will not turn my face from you', 'hear-elect'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hear-elect',
          html:
            'Here the tone shifts. All the woes have been for the nations that have turned from God. Now God turns His face toward His own. This is the pivot of the chapter—from judgment on the world to comfort for the faithful. The call &quot;hear therefore&quot; is a summons to those who belong to Him.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(43,
              t('Be ye of good comfort, my people; '),
              hp('for your rest shall come', 'rest-come'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rest-come',
          html:
            'Rest is the promise to the faithful. Not absence of trouble—the woes are real—but rest in the sense of arrival, arrival at a place of safety, the fulfillment of the journey. The rest here echoes the rest of Genesis, the rest that remains for God&apos;s people.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-eklektos',
          title: 'Eklektos (Gk.) — &quot;Elect; Chosen&quot;',
          script: 'ἐκλεκτός',
          translit: '<strong>eklektos</strong> · chosen; selected; appointed by God from before the foundation of the world',
          description:
            'The elect are not chosen for merit but for God&apos;s purpose. They are set apart, known by name, destined for preservation. Election in Scripture is always comfort—not an occasion for pride but for gratitude.',
        },

        {
          kind: 'carry',
          html:
            'The shift from woe to promise is abrupt. If you belong to God—if you are among the elect—the calamities of chapter 16 are not your judgment but the clearing of the field so that you might shine. Your rest is coming. Not comfort now, necessarily, but rest finally.',
        },

        {
          kind: 'reflection',
          id: 'chosen-identity',
          prompt:
            'Do you believe you are chosen by God? What would change in your life—your prayers, your choices, your peace—if you actually lived as if you were?',
        },
      ],
    },

    /* ─── 2 Esdras 16:51–72 — Gird Your Loins, Be Ready ────────────────────── */
    {
      ref: '2 Esdras 16:51–72',
      title: 'Gird Your Loins, Be Ready',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(51,
              t('Be ready to the reward of thy kingdom, for the light shall suddenly shine upon you out of darkness, and the whole earth shall see my brightness. '),
            ),
            verse(52,
              t('For thy strength shall be made known in the whole world, '),
              hp('and righteousness shall be openly shewed forth', 'righteousness-shewed'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'righteousness-shewed',
          html:
            'The faithful are promised revelation. Not in hidden places, but openly, before all the world. The righteousness of God, the faithfulness of the elect, will be made manifest when the light shines. Until then, faith walks in darkness. But the darkness is temporary.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(60,
              t('Then shall they see, how that I sat not at all with them that builded up this world: '),
              hg('for they despised them', 'despised-world-builders'),
              t('; but '),
              hp('protected you that are true, and favoured you in every time and place', 'protected-true'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'despised-world-builders',
          html:
            'God was never with the builders of human kingdoms, though they thought they built by His blessing. God favored the faithful instead—the ones the world despised, the hidden, the ones who endured in secret places. The revelation will show who was favored all along.',
        },
        {
          kind: 'commentary',
          id: 'protected-true',
          html:
            'God actively protected those who belonged to Him. Not passively, but with watchful care. In every time and place—whether persecution raged or peace seemed to reign—the hand of God was upon the faithful. This is the eternal constancy of God&apos;s love.',
        },

        {
          kind: 'greek',
          id: 'greek-phylasso',
          title: 'Phylassō — &quot;To Guard; To Preserve&quot;',
          script: 'φυλάσσω',
          translit: '<strong>phylassō</strong> · to guard carefully; to keep safe; to preserve from all harm',
          description:
            'The elect are not merely spared but actively guarded by God. Phylassō suggests the watchful care of a shepherd, the vigilance of one who keeps what is precious. No one can pluck the elect from God&apos;s hand.',
        },

        {
          kind: 'christ',
          id: 'christ-readiness',
          title: 'Christ Connection — Be Ye Also Ready',
          html:
            'Jesus taught His disciples readiness: &quot;Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh&quot; (Matthew 24:44). The readiness Jesus calls for is not nervous preparation but the peace that comes from being right with God. &quot;Gird your loins&quot; echoes Peter&apos;s word: &quot;Gird up the loins of your mind, be sober, and hope to the end&quot; (1 Peter 1:13). Readiness is an attitude of the soul.',
        },

        {
          kind: 'carry',
          html:
            'What does it mean to gird your loins? It means to cinch up your loose garments and prepare for work—to stop drifting and start paying attention. To watch, to wake, to live as if the day were near. Not out of fear, but out of love—you are ready because you belong to someone worth being ready for.',
        },

        {
          kind: 'reflection',
          id: 'readiness-today',
          prompt:
            'What would it look like to gird your loins today? To live in readiness? Is there anything in your life right now—a distraction, a half-heartedness—that needs cinching up?',
        },
      ],
    },

    /* ─── 2 Esdras 16:73–78 — Make Ready, My People ─────────────────────── */
    {
      ref: '2 Esdras 16:73–78',
      title: 'Make Ready, My People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(73,
              hp('Make ready, my people', 'make-ready-people'),
              t('; for I will come unto you, and be merciful unto you; for my mercy shall not depart from you. '),
            ),
            verse(74,
              t('&quot;When shall these things be?&quot; saith the people. '),
              hp('Then shall the signs which I have shewed thee come to pass, and the bride shall be seen, that she now hideth herself', 'bride-hidden'),
              t('. And whosoever is delivered from the aforesaid evils shall see my salvation.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'make-ready-people',
          html:
            'The command to make ready is not a demand for perfection but a call to settle your heart. Make ready means: stop wavering, commit yourself, prepare your spirit. God is coming, and He will come not to condemn but to be merciful. Mercy, not judgment, is the last word to the faithful.',
        },
        {
          kind: 'commentary',
          id: 'bride-hidden',
          html:
            'The bride is the faithful community, hidden now but about to be revealed. Like a bride in her chamber before the wedding feast, the faithful remain hidden from the world&apos;s understanding. But the day comes when she will be seen in all her beauty, made manifest before all creation.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(75,
              t('And '),
              hg('the end of this world shall be in the beginning of the world which shall come after', 'end-begins'),
              t(': when the corruption is passed away, and the weakness of the age is finished, then shall the world be renewed.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'end-begins',
          html:
            'The old world and the new are continuous, not separate. One ends as the other begins. What looks like ending is actually transition. The faithful pass through both, from the old creation into the new. Nothing is wasted.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(78,
              t('Therefore be thou no more doubtful; but believe. And see that the kingdom is prepared for you: &quot;for '),
              hp('the kingdom is prepared... and the rest shall be eternal', 'kingdom-prepared'),
              t('.&quot;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'kingdom-prepared',
          html:
            'The kingdom is not something you earn or build. It is prepared. It exists already, waiting for those who are ready to enter it. And the rest it offers is not temporary respite but eternal repose, the final peace of belonging.',
        },

        {
          kind: 'christ',
          id: 'christ-kingdom-prepared',
          title: 'Christ Connection — The Kingdom Prepared',
          html:
            'Jesus says: &quot;Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world&quot; (Matthew 25:34). The kingdom is not a future hope only; it is prepared, waiting. Christ&apos;s work was to open the way into it. The faithful are made ready not by their own effort but by the grace that has already prepared a place.',
        },

        {
          kind: 'carry',
          html:
            'Doubt is the enemy here. The chapter makes it plain: do not doubt. You have been chosen. A rest is prepared. Mercy is coming. The end of the age is also the beginning of eternal life. To believe all this is not naivety; it is the only rational response to a God who has promised.',
        },

        {
          kind: 'reflection',
          id: 'kingdom-ready',
          prompt:
            'What doubt clings to you most? "Will God really keep me?" "Will the rest really come?" "Do I really belong?" Take one to the cross. What is Christ&apos;s answer?',
        },
      ],
    },

    /* ─── 2 Esdras 16 Closing — The Flower Preserved ──────────────────────── */
    {
      ref: '2 Esdras 16 · Closing',
      title: 'The Flower Preserved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(73,
              t('Behold, I have set before thee '),
              hp('life and good', 'choice-life'),
              t(', and death and evil; that thou mayest choose life, '),
              hy('that thou and thy seed may live', 'seed-live'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'choice-life',
          html:
            'The book of 2 Esdras closes with a choice, as the Bible often does. Not compulsion but invitation. You may choose the life that God offers, or you may refuse it. But the book makes clear what life is—it is belonging to God, being sealed, being preserved.',
        },
        {
          kind: 'commentary',
          id: 'seed-live',
          html:
            'The choice is not merely for yourself but for your seed—your descendants, your spiritual children, all those you influence. To choose life is to choose a legacy. The faithful live not only for themselves but for those who come after.',
        },

        {
          kind: 'greek',
          id: 'greek-anthos',
          title: 'Anthos — &quot;Flower; Blossom&quot;',
          script: 'ἄνθος',
          translit: '<strong>anthos</strong> · a flower; that which blooms; that which is beautiful and brief yet carried through the ages in seed',
          description:
            'The image of 2 Esdras 16 is of the elect as a flower in a meadow. Brief, tender, yet precious to God. And in the flower is seed—continuation, life that passes forward. The faithful are not called to be strong but to be fruitful, to bloom where God has placed them.',
        },

        {
          kind: 'christ',
          id: 'christ-preserved-sheep',
          title: 'Christ Connection — None Shall Snatch Them',
          html:
            'Jesus promises His sheep: &quot;And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand&quot; (John 10:28). The elect of 2 Esdras 16 are the sheep of Christ&apos;s pasture. They are sealed, guarded, preserved. The hand that holds them is stronger than any force in the earth. Not one will be lost.',
        },

        {
          kind: 'artwork',
          matchTitle: /flower|meadow|bloom/i,
          caption: '2 Esdras 16 · The Flower Preserved in the Meadow',
        },

        {
          kind: 'carry',
          html:
            'The woes of chapter 16 fell on the nations, not on you. You are the flower in the meadow, tended by God. Your call is not to be unshakeable but to bloom where you are planted. Not to conquer the world but to live faithfully, to let your seed fall and grow. God is keeping you. That is the final word of Esdras.',
        },

        {
          kind: 'reflection',
          id: 'flower-blooming',
          prompt:
            'What does it mean to &quot;bloom where you are planted&quot; in your current season? What fruit is God asking you to bear? What seed are you planting?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Hear therefore, ye my servants, saith the Lord; I will speak unto you. I will not turn my face from you. Be ye of good comfort, my people; for your rest shall come. Make ready, my people; for I will come unto you, and be merciful unto you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 16 · Study Guide',
  },
};
