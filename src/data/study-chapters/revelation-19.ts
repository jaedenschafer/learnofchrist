import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 19 — The Marriage of the Lamb and the Coming King
 *
 * The only chapter in the New Testament that contains "Alleluia" — and it appears
 * four times. After all the judgment, all the plagues, all the fall of Babylon,
 * heaven erupts in praise. The Bride of Christ is made ready. And then the heavens
 * open to reveal the Rider on the white horse, called Faithful and True, King of
 * Kings and Lord of Lords. The long story of redemption moves toward its wedding.
 */
export const REVELATION_19: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 19,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 18 },
  intros: [
    'Revelation 19 contains the only four occurrences of "Alleluia" in the New Testament — a word born in Hebrew worship (hallelu-Yah, "praise the Lord") that erupts at the climax of John&apos;s vision. After all the trumpets and bowls, after the fall of Babylon, heaven does not whisper or grieve. Heaven shouts: Salvation and glory and honor and power belong to God alone. The reason is a wedding. The marriage of the Lamb is come.',
    'Then John sees heaven itself open. A rider sits on a white horse, called Faithful and True. His eyes are a flame of fire. From His mouth goes a sharp sword. On His thigh is written the greatest name: KING OF KINGS, AND LORD OF LORDS. The beast and the false prophet are taken and cast into the lake of fire. The long story moves from wedding feast to the appearing of the King.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /revelation.*rider|white horse.*revelation/i,
    caption: 'The Rider on the White Horse',
  },

  bottomShare: {
    label: 'Share Revelation 19',
    quote:
      '&quot;Blessed are they which are called unto the marriage supper of the Lamb.&quot; And I saw a white horse, and he that sat upon him was called Faithful and True.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 19 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-113-hallelujah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 113 — The Hallelujah Psalms',
      url: 'https://www.sefaria.org/Psalms.113-118',
      description: 'The Hallel psalms sung at Passover — foundation for the Hallelujahs of Revelation 19.',
    },
    {
      id: 'sefaria-isaiah-34-rider',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 34 — The Day of Vengeance',
      url: 'https://www.sefaria.org/Isaiah.34',
      description: 'Apocalyptic vision of judgment — the Rider on the white horse comes in righteousness and vengeance.',
    },
    {
      id: 'bibleodyssey-marriage-lamb',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Marriage of the Lamb Symbolism',
      url: 'https://www.bibleodyssey.org/dictionary/marriage-supper-of-the-lamb/',
      description: 'The wedding feast imagery in Jewish and Christian eschatology.',
    },
  ],

  sections: [
    /* ─── Revelation 19:1 — The First Alleluia ───────────────────────────── */
    {
      ref: 'Revelation 19:1',
      title: 'The First Alleluia',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              1,
              t('And after these things I heard a great voice of much people in heaven, saying, '),
              hy('Alleluia', 'greek-alleluia'),
              t('; '),
              hg('Salvation, and glory, and honour, and power', 'c-first-doxology'),
              t(', unto the Lord our God:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-first-doxology',
          html:
            'The heavens do not celebrate the downfall of Babylon alone — they celebrate <em>salvation</em>. The great work is not destruction but redemption. The pattern has been the same from the beginning of Scripture: God does not defeat evil primarily by annihilating it, but by saving His people out of it. Salvation, glory, honor, power — these are the attributes of the God who wins not by becoming like the darkness, but by remaining Light.',
        },
        {
          kind: 'greek',
          id: 'greek-alleluia',
          title: 'Allēlouia — &ldquo;Praise the Lord&rdquo;',
          script: 'ἁλληλουϊά',
          translit: '<strong>allēlouia</strong> · "praise Yah," Greek transliteration of Hebrew hallelu-Yah',
          description:
            'This word appears only here in the New Testament, yet it is the chorus of the Hebrew Psalms — especially Psalms 113–118 (the Passover Psalms) and Psalms 146–150 (the final Psalms). The oldest words of praise in the Jewish prayer book are brought to their climactic moment in John&apos;s vision.',
        },
        {
          kind: 'carry',
          html:
            'You have a right to be exhausted by the news of the world — the news in Revelation is all judgment and falling. But the truth John is showing you is stranger than weariness: the moment judgment is finished, the only response heaven knows is praise. Not <em>despite</em> the work God has done, but <em>because</em> of it. The loudest shout of joy in Scripture comes after the deepest grief.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-praise',
          prompt: 'Where in your story do you see salvation that is also the end of something you thought you could not live without?',
        },
      ],
    },

    /* ─── Revelation 19:4 — The Lord God Omnipotent ─────────────────────── */
    {
      ref: 'Revelation 19:4–6',
      title: 'The Lord God Omnipotent Reigneth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              4,
              t('And the four and twenty elders and the four beasts fell down and worshipped God that sat on the throne, saying, Amen; Alleluia.'),
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              6,
              t('And I heard as it were the voice of a great multitude, and as the voice of many waters, and as the voice of mighty thunderings, saying, '),
              hy('Alleluia', 'greek-alleluia-2'),
              t(': for the '),
              hg('Lord God omnipotent reigneth', 'c-omnipotent'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-omnipotent',
          html:
            'All-powerful reigns. Not: <em>will one day reign</em>. Not: <em>is preparing to reign</em>. <em>Reigneth</em> — present tense. The verb speaks as though it is already done. In Revelation, future and present collapse into one. The thing hoped for is spoken as if it is already present because, from heaven&apos;s viewpoint, it is. The King sits on the throne not as a candidate but as a fait accompli.',
        },
        {
          kind: 'greek',
          id: 'greek-alleluia-2',
          title: 'Pantokratōr — &ldquo;Omnipotent, Almighty&rdquo;',
          script: 'παντοκράτωρ',
          translit: '<strong>pantokratōr</strong> · pan (all) + kratein (to hold, have power); all-holding, all-ruling',
          description:
            'The word does not mean merely "very powerful." It means power that holds <em>all things</em> — not some kingdoms, not the loud ones, but the whole architecture of creation. Every atom moves under the hand that speaks the word. The throne does not wait for the problem to be solved; the throne is already occupied.',
        },
        {
          kind: 'carry',
          html:
            'Your day probably has moments when the news, the workplace, the family crisis, the system that will not budge — all of it looks like it holds the real power. Revelation invites you into heaven&apos;s vantage point for just a moment: the throne is occupied. Not anxiously, not with any question about the outcome. <em>Omnipotent</em>. All-holding. Your panic does not change that. Your doubt does not unsettle it.',
        },
      ],
    },

    /* ─── Revelation 19:7–8 — The Marriage of the Lamb ──────────────────── */
    {
      ref: 'Revelation 19:7–8',
      title: 'The Marriage of the Lamb Is Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              7,
              t('Let us be glad and rejoice, and '),
              hg('give honour to him', 'c-honour-bride'),
              t(': for '),
              hp('the marriage of the Lamb is come', 'christ-marriage'),
              t(', and '),
              hg('his wife hath made herself ready', 'c-bride-ready'),
              t('.'),
            ),
            verse(
              8,
              t('And to her was granted that she should be arrayed in fine linen, clean and white: for the fine linen is '),
              hy('the righteousness of saints', 'greek-dikaiosyne'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-honour-bride',
          html:
            'The verb is singular: "let us be glad." The heavens are gathered into one voice of joy. A wedding is not a private moment; it is a gathering, a <em>communion</em>. Every redeemed soul, every angel, the whole company of heaven — all are invited to the delight of a Lamb receiving a bride.',
        },
        {
          kind: 'commentary',
          id: 'c-bride-ready',
          html:
            'Notice the verb: she <em>made herself ready</em>. Not: she was forced into the role, not: she was decorated like an object. She chose to be ready. All through Scripture, the Bride is called to make herself ready — to be sanctified, to be cleansed, to consent to the union. The marriage of the Lamb is not a conquest; it is a yes.',
        },
        {
          kind: 'greek',
          id: 'greek-dikaiosyne',
          title: 'Dikaiosynē — &ldquo;righteousness&rdquo;',
          script: 'δικαιοσύνη',
          translit: '<strong>dikaiosynē</strong> · right standing, being made right, alignment with justice',
          description:
            'Not earned, but granted. The Bride is arrayed in the righteousness of the saints — not her own righteousness, but the accumulated, shared righteousness of all who have said yes to Christ. Her finery is not her achievement; it is His gift.',
        },
        {
          kind: 'christ',
          id: 'christ-marriage',
          title: 'Christ Connection — The Bridegroom and the Bride',
          html:
            'Paul writes to the Ephesians: "Husbands, love your wives, even as Christ also loved the church… that he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish" (Ephesians 5:25–27). The entire marriage metaphor is about how Christ has already been making His Bride ready — cleansing her, sanctifying her, preparing her for the day when He walks into the wedding feast and calls her His own.',
        },
        {
          kind: 'carry',
          html:
            'If you are in Christ, you are the Bride. Not someday, but now. The wedding is written into what He has already done. He has paid the bride price. He is waiting at the feast. And the invitation has your name on it.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-bride',
          prompt: 'What would it mean to "make yourself ready" for the marriage supper of the Lamb this week? What does readiness look like in your daily choices?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Revelation 19:9 — Blessed Are They Called ────────────────────────── */
    {
      ref: 'Revelation 19:9',
      title: 'Blessed Are They Which Are Called',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              9,
              t('And he saith unto me, '),
              hp('Write, Blessed are they which are called unto the marriage supper of the Lamb', 'c-blessing-called'),
              t('. And he saith unto me, These are the '),
              hg('true sayings of God', 'c-true-sayings'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessing-called',
          html:
            'The angel commands John to write this down — to make it a permanent record. "Blessed" is not a wish; it is an announcement. The state of being called to the marriage supper of the Lamb is, by its very nature, a blessed state. Not because the Bride has earned it or deserves it, but because of what it means to be called by Him.',
        },
        {
          kind: 'commentary',
          id: 'c-true-sayings',
          html:
            'The angel underlines it: these words are <em>true</em>. Not poetry, not metaphor (though they are also those), but true statements about reality. The wedding is happening. You are invited. That is not a symbol; it is a fact.',
        },
        {
          kind: 'carry',
          html:
            'If you have been told your whole life that you are not enough, that you are behind, that you are disqualified — the angel is speaking to you directly. <em>You are called.</em> Not because you were perfect last Tuesday. Not because you will be perfect next Monday. <em>Blessed are they which are called.</em> That word, "called," means you are chosen, invited, wanted at the table.',
        },
      ],
    },

    /* ─── Revelation 19:10 — The Testimony of Jesus ───────────────────────── */
    {
      ref: 'Revelation 19:10',
      title: 'The Testimony of Jesus Is the Spirit of Prophecy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              10,
              t('And I fell at his feet to worship him. And he said unto me, See thou do it not: I am thy fellowservant, and of thy brethren that have the testimony of Jesus: '),
              hy('worship God', 'c-worship-only'),
              t(': for '),
              hg('the testimony of Jesus is the spirit of prophecy', 'c-testimony-jesus'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-worship-only',
          html:
            'John tries to worship the angel, and the angel stops him. Not out of humility (angels are servants, after all), but out of clarity: there is only one worthy of worship. The whole structure of heaven is organized around refusal to accept what belongs to God alone. Every being — angel, elder, saint — points away from themselves toward the throne.',
        },
        {
          kind: 'commentary',
          id: 'c-testimony-jesus',
          html:
            'The key sentence: the testimony of Jesus <em>is</em> the spirit of prophecy. Every prophet who ever spoke the word of the Lord was speaking the testimony of Jesus. Every Scripture that pointed forward to Him was prophesying. Every Scripture that now looks back at Him is testifying. The whole Bible, from end to end, is the testimony of One Person.',
        },
        {
          kind: 'christ',
          id: 'christ-testimony',
          title: 'Christ Connection — The Center of All Scripture',
          html:
            'Jesus Himself said: "Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me" (John 5:39). Every law that prepared the way, every prophecy that aimed at the future, every tabernacle and temple and sacrifice — all of it was testifying. The spirit that moves through all the prophets is the Spirit pointing to Jesus.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt lost in the Old Testament, if the laws have seemed distant, if the genealogies felt like ancient debris — John is telling you something different. Every verse you read in Scripture, if you look closely, has the fingerprints of Jesus on it. The Bible is not a general instruction manual. It is a testimony. A love letter. A story that moves from first word to last with one Person at the center.',
        },
      ],
    },

    /* ─── Revelation 19:11–13 — Heaven Opened, Faithful and True ─────────── */
    {
      ref: 'Revelation 19:11–13',
      title: 'Heaven Opened: The Faithful and True One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              11,
              t('And I saw heaven opened, and behold a '),
              hg('white horse', 'c-white-horse'),
              t('; and he that sat upon him was called '),
              hp('Faithful and True', 'christ-faithful-true'),
              t(', and in righteousness he doth judge and make war.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-white-horse',
          html:
            'In Revelation, white is the color of victory, purity, resurrection. The white horse is not a gentle mount; it is the mount of the Conqueror. Yet this Conqueror wears no crown of thorns, no appearance of shame. He is called by names of fidelity, not force: Faithful and True.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              13,
              t('And he was clothed with a vesture dipped in blood: and '),
              hp('his name is called The Word of God', 'christ-logos'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-logos',
          title: 'Logos — &ldquo;The Word&rdquo;',
          script: 'λόγος',
          translit: '<strong>logos</strong> · the Word, reason, divine utterance',
          description:
            'John uses the same word from the opening of his Gospel: "In the beginning was the Word, and the Word was with God, and the Word was God." The same One who spoke creation into being, the same One who dwelt among us in flesh, now rides in judgment wearing vesture dipped in His own blood.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful-true',
          title: 'Christ Connection — Faithful and True',
          html:
            'In Revelation 1, John saw the risen Christ with eyes like a flame of fire and a voice like many waters. In Revelation 19, John sees that same Christ again — still with eyes of flame, still with unshakable authority. But here He is called Faithful and True. Faithful to every promise He made, True to every word He spoke. The Judge who comes is not capricious; He is perfectly aligned with justice and with mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-logos',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'John 1:1 opens: "In the beginning was the Word." Revelation 19:13 is the fulfillment: that same Word now returns, having shed His blood for the redemption of the world. The vesture dipped in blood is not the blood of His enemies; it is His own. He conquers not by overwhelming force but by the power of what He has already finished.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever wondered whether God really understands the weight of what it means to be human, to suffer, to bleed — Revelation shows you a King whose robe is stained with His own sacrifice. He is not ruling from a distance. He is the One who paid the price Himself.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-faithful',
          prompt: 'When you face something that seems true but unjust, how does it matter to you that the Judge is called Faithful and True — that He will never be less than both?',
        },
      ],
    },

    /* ─── Revelation 19:15 — The Sharp Sword ──────────────────────────────── */
    {
      ref: 'Revelation 19:15',
      title: 'Out of His Mouth Goeth a Sharp Sword',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              15,
              t('And '),
              hg('out of his mouth goeth a sharp sword', 'c-mouth-sword'),
              t(', that with it he should smite the nations: and he shall rule them with a rod of iron: and he treadeth the winepress of the fierceness and wrath of Almighty God.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mouth-sword',
          html:
            'The Rider carries no sword in His hand. The sword comes from His mouth — from His word. This is the Word of God made fully visible: creation is spoken into being by His word, judgment is executed by His word, redemption is sealed by His word. The only weapon that matters is the weapon of truth. He speaks, and reality realigns itself to obey.',
        },
        {
          kind: 'carry',
          html:
            'In a world of swords and spears and nuclear warheads, in a day when power is measured in missiles and money, Revelation is telling you something almost unthinkable: the only real power is the Word of God. Kingdoms rise and fall by decree. Lies eventually crumble under truth. And the Rider is not afraid of the noise; He speaks.',
        },
      ],
    },

    /* ─── Revelation 19:16 — King of Kings and Lord of Lords ──────────────── */
    {
      ref: 'Revelation 19:16',
      title: 'KING OF KINGS, AND LORD OF LORDS',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              16,
              t('And '),
              hg('he hath on his vesture and on his thigh a name written', 'c-thigh-name'),
              t(', '),
              hp('KING OF KINGS, AND LORD OF LORDS', 'c-greatest-name'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thigh-name',
          html:
            'In the ancient world, a king would wear his name and titles on his thigh — visible when riding a horse, a declaration of dominion. The placement is not incidental. The greatest title the Bible knows is written on Him: not on His forehead or chest, but on the thigh where every eye can see it as He rides. This is not a name He is becoming; this is His name revealed.',
        },
        {
          kind: 'commentary',
          id: 'c-greatest-name',
          html:
            'Kings have lords. Presidents answer to systems. Emperors submit to time. But KING OF KINGS means a sovereignty so absolute that every other throne is subordinate to it. And LORD OF LORDS means a dominion that rules not just over land and people, but over the very nature of lordship itself. There is no category of power outside His power.',
        },
        {
          kind: 'christ',
          id: 'christ-king-of-kings',
          title: 'Christ Connection — Every Knee Shall Bow',
          html:
            'Paul writes: "That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father" (Philippians 2:10–11). Revelation 19:16 is that moment arriving. Not a distant prophecy, but the reality toward which all of history moves.',
        },
        {
          kind: 'carry',
          html:
            'Whatever crown you have bent to — whatever authority convinced you it was the highest, whatever power made you feel small — Revelation is announcing a claim older than your fear and deeper than any throne that frightened you. KING OF KINGS. The final word is not given to empires or systems or voices that roar. The final word belongs to Him.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-king-of-kings',
          prompt: 'What is one place in your life where you have stopped believing that Christ is truly the King of Kings? What would change if you believed it again?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Revelation 19:19–21 — The Beast and False Prophet Cast Into the Lake ── */
    {
      ref: 'Revelation 19:19–21',
      title: 'The Beast and False Prophet Cast Into the Lake of Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              19,
              t('And I saw the beast, and the kings of the earth, and their armies, gathered together to make war against him that sat upon the horse, and against his army.'),
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(
              20,
              t('And the '),
              hg('beast was taken', 'c-beast-taken'),
              t(', and with him the '),
              hg('false prophet that wrought miracles before him, with which he deceived them that had received the mark of the beast, and them that worshipped his image', 'c-false-prophet'),
              t('. These both were '),
              hg('cast alive into a lake of fire burning with brimstone', 'c-lake-of-fire'),
              t(':'),
            ),
            verse(
              21,
              t('And the remnant were slain with the sword of him that sat upon the horse, which sword proceeded out of his mouth: and all the fowls were filled with their flesh.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beast-taken',
          html:
            'The language is almost anticlimactic: "the beast was taken." After chapters of war and destruction, the moment of reckoning is described in a single clause. No battle is described. No resistance that lasted even a moment. The beast that filled nations with terror, that seemed undefeated, is taken as simply as a thief is arrested. The outcome was never in question.',
        },
        {
          kind: 'commentary',
          id: 'c-false-prophet',
          html:
            'The false prophet — the one who works wonders, who deceives through signs and lying miracles — is cast down alongside the beast. Deception is exposed for what it is. In that moment, every false word, every manipulation, every lie that mimicked truth is revealed in its true nature. There is no redemption for the one who willingly chose deception over truth.',
        },
        {
          kind: 'commentary',
          id: 'c-lake-of-fire',
          html:
            'Cast alive — not annihilated, not dissolved into nothing. Alive in a state of separation from God, burning with the consequence of having chosen everything except Him. This is the only image Scripture gives us of the end of the one who wars against the Lamb. Not revenge, not cruelty, but the simple inevitability of casting away from oneself the only source of life.',
        },
        {
          kind: 'carry',
          html:
            'You may have been deceived. You may have bowed to systems that seemed undefeatable. You may have believed lies whispered by the father of lies. But if you are still reading Scripture, still searching, still capable of turning — your ending is not written in that lake. The beast was taken. The false prophet was cast down. And you — you are invited to the marriage supper of the Lamb.',
        },
        {
          kind: 'reflection',
          id: 'rev19-ref-deception',
          prompt: 'What false word has ruled your life the longest? What would it mean to stand with the Word of God and simply refuse to let that lie have power over you again?',
        },
        {
          kind: 'artwork',
          matchTitle: /revelation.*beast|judgment|rider/i,
          caption: 'Revelation 19 · The Victory and the Wedding',
        },
      ],
    },
  ],
};
