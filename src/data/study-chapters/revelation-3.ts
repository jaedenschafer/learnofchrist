import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 3 — The Letters to Sardis, Philadelphia, and Laodicea
 *
 * Three final churches. The first, Sardis, hears the harshest word in Revelation:
 * you have a reputation for being alive, but you are dead. The second, Philadelphia,
 * is small and weak, yet receives no rebuke—only promise: an open door, the protection
 * of the coming hour, a pillar in the temple of God. The third, Laodicea, is neither
 * hot nor cold but lukewarm, complacent, rich in their own eyes yet spiritually
 * wretched and poor. Yet even to Laodicea, Jesus stands at the door and knocks.
 * All three hear a call to repentance and a promise for those who overcome.
 */
export const REVELATION_3: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 3,

  estimatedMinutes: { 5: 7, 10: 12, 15: 16 },
  intros: [
    'Revelation 3 completes the seven letters to the churches with the three remaining congregations. Sardis carries the reputation of life but harbors the reality of death—the coldest indictment in the whole sequence. Philadelphia, by contrast, receives only tenderness: small, faithful, weak in the world&apos;s eyes, yet promised the protection of the coming judgment and an eternal place in God&apos;s temple. Laodicea stands between them, materially rich yet spiritually bankrupt, lukewarm in faith—so tepid that Jesus says He will spit them out. Yet even to Laodicea comes a knock at the door and an offer of restoration. The pattern across all three is the same: a diagnosis, a call to repentance, and a promise to those who overcome.',
    'These letters were written to real communities in the first century, but they speak to patterns that have echoed through every age. A church that has lost its fire while keeping up appearances. A church that remains faithful in small things and receives great promises. A church that has mistaken comfort for blessing and forgotten that to be loved by Jesus is to be refined by fire. As you read, ask where you find yourself—and listen for the voice of the one who holds the seven Spirits of God and the seven stars.',
  ],

  sections: [
    /* ─── Revelation 3:1–6 — Sardis: The Dead Church ────────────────────────── */
    {
      ref: 'Revelation 3:1–6',
      title: 'Sardis: Alive in Name Only',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1, t('And unto the angel of the church in Sardis write; These things saith he that hath '), hp('the seven Spirits of God', 'c-sardis-spirits'), t(', and '), hp('the seven stars', 'c-sardis-stars'), t(': '), hy('I know thy works', 'greek-ergon'), t(', that '), hg('thou hast a name that thou livest, and art dead', 'c-sardis-reputation'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sardis-spirits',
          html: 'Jesus holds the seven Spirits of God—the fullness of the Holy Spirit. He is not powerless before Sardis; He holds every resource needed for their resurrection. The seven stars represent the seven churches themselves, held in His hand.',
        },
        {
          kind: 'commentary',
          id: 'c-sardis-stars',
          html: 'The seven stars are the angels of the churches—the spiritual guardians of each congregation. Jesus holds them. They rest in His grip. Whatever Sardis faces, they are not abandoned.',
        },
        {
          kind: 'commentary',
          id: 'c-sardis-reputation',
          html: 'The word cuts like flint. Sardis has a <em>name</em>—a reputation, a public face—that speaks of life. But the reality underneath is death. They have kept the forms of worship, perhaps, but lost the fire. They pass for a vital congregation to the outside world, but in the spiritual reality that Jesus sees, they are a tomb.',
        },
        {
          kind: 'greek',
          id: 'greek-ergon',
          title: 'Ergon — &ldquo;Works&rdquo;',
          script: 'ἔργον',
          translit: '<strong>ergon</strong> · work; deed; toil; the fruit of effort',
          description: 'Jesus sees their works—all of it. He is not fooled by what they appear to be doing on the surface. The Greek emphasizes real, concrete work, not intention or profession of faith.',
        },
        {
          kind: 'greek',
          id: 'greek-nekros',
          title: 'Nekros — &ldquo;Dead&rdquo;',
          script: 'νεκρός',
          translit: '<strong>nekros</strong> · dead; corpse; lifeless',
          description: 'The same word used for a body without breath or motion. Sardis looks alive from a distance; up close, there is no pulse.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [verse(2, t('Be watchful, and strengthen the things which remain, that are ready to die: for I have not found thy works perfect before God.'))],
        },
        {
          kind: 'commentary',
          id: 'c-sardis-command',
          html: 'The call is not to destroy and rebuild from scratch. Some things still remain—some faith, some kernel of life. Jesus commands: <em>strengthen those</em>. Pay attention. Tend what is not yet dead. The works that remain are incomplete, imperfect—a shadow of what they once were.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [verse(3, t('Remember therefore how thou hast '), hg('received and heard', 'c-sardis-remember'), t('; and hold fast, and repent. If therefore thou shalt not watch, I will come on thee as a thief, and thou shalt not know what hour I will come upon thee.'))],
        },
        {
          kind: 'commentary',
          id: 'c-sardis-remember',
          html: 'The call is <em>backward</em> first—remember what you received, how you first heard the gospel when it was new and terrible and alive in your chest. The path forward runs through memory. To remember is the beginning of repentance.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [verse(4, t('Thou hast a few names even in Sardis which have '), hy('not defiled their garments', 'c-sardis-garments'), t('; and they shall walk with me in white: for they are worthy.'))],
        },
        {
          kind: 'commentary',
          id: 'c-sardis-garments',
          html: 'Even in a dead church, there are a few who have not compromised. Their garments—their lives, their witness—remain unsoiled. They will walk with Jesus, clothed in white. This is not corruption by the world, but fidelity kept in secret.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [verse(5, t('He that overcometh, the same '), hp('shall be clothed in white raiment', 'christ-white-raiment'), t('; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels.'))],
        },
        {
          kind: 'christ',
          id: 'christ-white-raiment',
          title: 'Christ Connection — Robed in Righteousness',
          html: 'White robes appear throughout Revelation—the garments of victory, holiness, and the wedding feast of the Lamb. Here, the promise to Sardis is that their true name—not the dead reputation they carry now, but their redeemed name—will be confessed before the Father and the angels. Jesus Himself will acknowledge them, claim them, present them. The one who came as a thief in judgment will stand at the throne and say their name aloud.',
        },

        {
          kind: 'carry',
          html: 'If you find yourself in a church or a season of faith where the pulse is faint, where you have been coasting on the memory of what once burned alive, the word to Sardis is also a word to you: <em>remember</em>. Not with guilt, not with despair, but with holy attention. What remains? A single prayer that still aches? A friend whose faithfulness convicts you? A Scripture that still reaches? Strengthen that. Watch. The same Jesus who judges also knocks. It is never too late to wake.',
        },

        {
          kind: 'reflection',
          id: 'sardis-reflect',
          prompt: 'Where in your faith has the reputation survived the reality? What small remnant still burns in you that you have been neglecting to tend?',
        },

        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Revelation 3:7–13 — Philadelphia: The Faithful Few ───────────────────── */
    {
      ref: 'Revelation 3:7–13',
      title: 'Philadelphia: An Open Door',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(7, t('And to the angel of the church in Philadelphia write; These things saith he that is '), hp('holy, he that is true', 'c-phila-holy'), t(', '), hp('he that hath the key of David, that openeth, and no man shutteth; and shutteth, and no man openeth', 'christ-key-david'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-phila-holy',
          html: 'To Philadelphia, Jesus introduces Himself with the titles of absolute truth and holiness. He does not come as judge to this church, but as the one whose word is final and whose character is pure. They are about to face opposition; they will need to know that the one who holds them is unshakeable.',
        },
        {
          kind: 'christ',
          id: 'christ-key-david',
          title: 'Christ Connection — The Key of David',
          html: 'The key of David—from Isaiah 22:22—opens and closes what no one else can. This is the authority of the Messiah. Jesus does not merely open a door; He is the one with absolute say over what opens and what shuts. He has already set before Philadelphia an open door that no enemy can close. They are held by the one with cosmic authority.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [verse(8, t('I know thy works: behold, I have set before thee '), hp('an open door', 'c-open-door'), t(', and no man can shut it: for thou hast a little strength, and hast kept my word, and hast not denied my name.'))],
        },
        {
          kind: 'commentary',
          id: 'c-open-door',
          html: 'The open door is not something Philadelphia built themselves. Jesus set it before them. They are small and weak in the world, but before them lies an opening that no one else can close—access to the Father, the advance of the gospel, divine opportunity.',
        },
        {
          kind: 'greek',
          id: 'greek-thyra',
          title: 'Thyra Anoigmenē — &ldquo;Open Door&rdquo;',
          script: 'θύρα ἀνοιγμένη',
          translit: '<strong>thyra anoigmenē</strong> · a door, opened; opportunity for entry or passage',
          description: 'The open door is not something Philadelphia built themselves. Jesus set it before them. They are small and weak in the world, but before them lies an opening that no one else can close—access to the Father, the advance of the gospel, divine opportunity.',
        },

        {
          kind: 'commentary',
          id: 'c-philadelphia-strength',
          html: 'Philadelphia has little strength—they are obscure, small, without the resources of the great cities. Yet they have kept Jesus&apos; word and not denied His name. In the logic of the gospel, this is worth more than all the strength of Sardis. Faithfulness is not measured in comfort or power, but in covenant kept.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(9, t('Behold, I will make them of the synagogue of Satan, which say they are Jews, and are not, but do lie; behold, I will make them to come and worship before thy feet, and to know that I have loved thee.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-philadelphia-synagogue',
          html: 'Philadelphia has been opposed by those claiming to be the people of God but living in rebellion against Him. Jesus promises something startling: these very opponents will one day come and bow before them. Not out of violence, but out of recognition—they will see that Jesus has loved Philadelphia, and they will know it.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(10, t('Because thou hast kept the word of my patience, I also will keep thee from the hour of temptation which shall come upon all the world, to try them that dwell upon the earth.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-philadelphia-kept',
          html: 'Philadelphia kept the word of Jesus&apos; patience—His willingness to endure with them through trials. In return, Jesus promises protection: not from all suffering, but from the eschatological hour, the final trial that will test all who dwell on the earth. This is the protection of those held in the Father&apos;s hand.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(11, t('Behold, I come quickly: hold that fast which thou hast, that no man take thy crown.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-philadelphia-crown',
          html: 'The return is near. The call is not to acquire more, but to hold what they have. Their crown is their faithfulness, kept in a small place, unnoticed by the powerful. It is worth defending.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(12, t('Him that overcometh will I make a '), hp('pillar in the temple of my God', 'christ-pillar'), t(', and he shall go no more out: and I will write upon him my new name.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-stylos',
          title: 'Stylos — &ldquo;Pillar&rdquo;',
          script: 'στύλος',
          translit: '<strong>stylos</strong> · a pillar, column; something that supports and holds up',
          description: 'A pillar is not ornamental; it bears weight, holds the structure up. To be made a pillar in God&apos;s temple is to be given a place of eternal weight and stability. No more exile, no more wandering. Permanent. Founded.',
        },
        {
          kind: 'christ',
          id: 'christ-pillar',
          title: 'Christ Connection — Founded in God&apos;s Temple',
          html: 'Those who overcome will not only be saved; they will be made into pillars in God&apos;s eternal temple. They will bear weight, hold space, support the whole structure. They are no longer the despised minority outside the gate; they are woven into the very foundation of God&apos;s house. And upon them Jesus will write His new name—a name that belongs only to those whom He has redeemed.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(13, t('He that hath an ear, let him hear what the Spirit saith unto the churches.')),
          ],
        },

        {
          kind: 'carry',
          html: 'Philadelphia had no wealth, no power, no reputation. What they had was faithfulness in secret, a door opened by Jesus, and a word of patience kept even when pressured to deny Him. If you find yourself small and weak in a world that measures everything by size and influence, take heart. The one who holds the key has already opened the door before you. Your faithfulness in a hidden place is seen and held. You will be made a pillar.',
        },

        {
          kind: 'reflection',
          id: 'philadelphia-reflect',
          prompt: 'What &apos;little strength&apos; do you have that has remained faithful? What door has Jesus opened for you that no one else can close?',
        },

        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Revelation 3:14–22 — Laodicea: Lukewarm and Blind ───────────────── */
    {
      ref: 'Revelation 3:14–22',
      title: 'Laodicea: Neither Hot nor Cold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(14, t('And unto the angel of the church of the Laodiceans write; These things saith the Amen, '), hp('the faithful and true witness', 'c-amen'), t(', '), hp('the beginning of the creation of God', 'c-beginning-creation'), t(':')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-amen',
          html: 'To Laodicea, where comfort and self-sufficiency reign, Jesus introduces Himself as the Amen—finality itself. Not a suggestion; not an opinion. The faithful and true witness who speaks what is objectively real. Everything Laodicea believes about itself is about to be contradicted by the one whose word cannot be denied.',
        },
        {
          kind: 'commentary',
          id: 'c-beginning-creation',
          html: 'Jesus is the beginning of the creation of God—the one through whom all things were made. He is not a latecomer to existence; He is the source. To Laodicea, who has forgotten that they depend entirely on Him, He speaks as the one on whom all things depend.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(15, t('I know thy works, that thou art neither cold nor hot: I would thou wert cold or hot.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-chliaros',
          title: 'Chliaros — &ldquo;Lukewarm&rdquo;',
          script: 'χλιαρός',
          translit: '<strong>chliaros</strong> · tepid; neither cold nor hot; lukewarm',
          description: 'Lukewarmness is not a mild problem. Jesus prefers coldness—which at least knows itself as such and might turn. But lukewarm faith, faith that feels satisfactory to itself, faith that has settled into comfort, is worse to Jesus than outright denial.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(16, t('So then because thou art lukewarm, and neither cold nor hot, I will '), hg('spue thee out of my mouth', 'c-laodicea-vomit'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laodicea-vomit',
          html: 'The image is visceral and shocking. Laodicea has become repugnant to Jesus—not because of overt sin, but because of the tepidity of their love. A tepid solution tastes bad in the mouth. Jesus cannot swallow it. This is not the language of gentle correction but of revulsion.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(17, t('Because thou sayest, I am rich, and increased with goods, and have need of nothing; and knowest not that thou art wretched, and miserable, and poor, and blind, and naked:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laodicea-self-deception',
          html: 'Laodicea&apos;s material prosperity has blinded them to their spiritual bankruptcy. They say they need nothing—and in that statement, they reveal they need everything. They are rich in currency and poor in faith, clothed in fine garments and naked before God, able to see the commerce of the marketplace and blind to their own condition.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(18, t('I counsel thee to buy of me gold tried in the fire, that thou mayest be rich; and white raiment, that thou mayest be clothed, and that the shame of thy nakedness do not appear; and anoint thine eyes with eyesalve, that thou mayest see.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-chrysion',
          title: 'Chrysion — &ldquo;Gold Tried in the Fire&rdquo;',
          script: 'χρυσίον',
          translit: '<strong>chrysion</strong> · gold; precious metal tested and refined',
          description: 'This is not ordinary wealth. It is gold that has been refined in fire—faith that has been tested and proved genuine. No amount of earthly commerce can buy it; only Jesus can sell it.',
        },
        {
          kind: 'greek',
          id: 'greek-kolyourion',
          title: 'Kolyourion — &ldquo;Eyesalve&rdquo;',
          script: 'κολλούριον',
          translit: '<strong>kolyourion</strong> · eye salve; ointment to restore sight',
          description: 'Laodicea was famous in antiquity for its eye salve. Jesus uses their own commodity against them: you sell eyesalve to the world, but you are spiritually blind. Only I have the medicine your eyes truly need.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(19, t('As many as I love, I rebuke and chasten: be zealous therefore, and repent.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laodicea-love-rebuke',
          html: 'This is the hinge. The rebuke is not abandonment; it is proof of love. The harshness of these words is the harshness of a father who will not let his child sleepwalk into destruction. Jesus loves Laodicea. And because He loves them, He shakes them awake.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(20, t('Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will '), hp('sup with him, and he with me', 'christ-supper'), t('.')),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-supper',
          title: 'Christ Connection — Supper with the Beloved',
          html: 'After the severest rebuke in the seven letters, Jesus knocks. Not in anger, but in tenderness. He seeks to restore communion—to share a meal, the ancient sign of covenant and intimacy. The one outside the door knocking is not a stranger; He is a lover seeking to be invited back inside. And the promise is not merely that He will welcome them, but that He will share table with them, that intimacy will be restored.',
        },
        {
          kind: 'greek',
          id: 'greek-deipneō',
          title: 'Deipneō — &ldquo;To Sup,&rdquo; &ldquo;To Dine&rdquo;',
          script: 'δειπνέω',
          translit: '<strong>deipneō</strong> · to dine; to share an evening meal; to partake together',
          description: 'This is not a quick snack but a full meal, a time of presence and conversation. Supping together is the deepest sign of covenant in ancient culture. Jesus offers Laodicea not mere forgiveness, but restored intimacy.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(21, t('To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laodicea-throne',
          html: 'The promise does not say they will sit <em>near</em> His throne. They will sit <em>in</em> it—with Him, sharing His authority, His victory, His rest. This is the promise to those who have nothing left to boast of but His faithfulness.',
        },
        {
          kind: 'greek',
          id: 'greek-thronos',
          title: 'Thronos — &ldquo;Throne&rdquo;',
          script: 'θρόνος',
          translit: '<strong>thronos</strong> · throne; seat of power and authority',
          description: 'The throne of God. The seat from which the universe is ruled. Those who overcome are invited to sit there, not as servants but as co-heirs with Christ.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(22, t('He that hath an ear, let him hear what the Spirit saith unto the churches.')),
          ],
        },

        {
          kind: 'carry',
          html: 'If you have drifted into lukewarmness—a faith that feels safe and settled, a commitment that costs you nothing, a relationship with God that is real but cool—the word to Laodicea reaches you across the centuries. The rebuke is not cruelty; it is a knock on the door. The one standing outside has tasted rejection, walked through fire, been refined to purity. He is not asking to be let in because He is lonely; He is asking because <em>you</em> are lonely, even in your comfort. He offers not the brittle security of wealth but the genuine riches of tested faith. He offers to sit with you, not at a great distance, but at the same table. Open the door.',
        },

        {
          kind: 'reflection',
          id: 'laodicea-reflect',
          prompt: 'Where have you settled into lukewarmness? What door are you being asked to open—what first step of renewed devotion would it look like to hear His knock and respond?',
        },

        {
          kind: 'artwork',
          matchTitle: /knock|door|laodicea/i,
          caption: 'Revelation 3:20 · Behold, I Stand at the Door and Knock',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'To Sardis: "Be watchful, and strengthen the things which remain." To Philadelphia: "Behold, I have set before thee an open door." To Laodicea: "Behold, I stand at the door, and knock."',
    snippet: 'Letters from Jesus to three churches — judgment, promise, and an invitation to return.',
    ref: 'Revelation 3 · Study Guide',
  },
};
