import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 15 — The Woes Against the Nations
 *
 * 2 Esdras 15–16 are the "Christian additions" to the 2 Esdras apocalypse,
 * sometimes called 6 Ezra in scholarly tradition. Where chapters 3–14 wrestle
 * with theodicy in the wake of the temple&apos;s destruction, chapters 15–16
 * shift to prophetic oracles in the voice of Ezra, announcing judgment upon
 * the wicked nations—Egypt, Babylon, Asia—and consolation for the faithful
 * who will face persecution yet remain God&apos;s own.
 *
 * Chapter 15 opens with the word of the Lord coming through Ezra: woes upon
 * the proud nations, sword and famine and plague, the judgment of God falling
 * not out of arbitrary cruelty but out of the righteousness of the one true God.
 * Yet even as judgment is announced, the faithful are called to endure, knowing
 * that God knows His own and will preserve them.
 */
export const SECOND_ESDRAS_15: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 15,

  estimatedMinutes: { 5: 8, 10: 13, 15: 17 },
  intros: [
    'Chapters 15–16 are Christian additions to the 2 Esdras apocalypse, sounding like the voice of prophetic judgment itself. Ezra speaks woes against the nations—Egypt, Babylon, Asia—each warned of the sword, famine, fire, and plague that God will send upon those who have grown proud, forgotten their Maker, and persecuted the righteous.',
    'The voice is not glee but grief. These are urgent calls to turn back before the edge of judgment is reached. And woven through the judgment is the promise that the faithful shall be persecuted but not forsaken—God knows them, preserves them, even as the cities around them fall.',
  ],

  sections: [
    /* ─── 2 Esdras 15:1–3 — The Word of the Lord ─────────────────────────── */
    {
      ref: '2 Esdras 15:1–3',
      title: 'The Word of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                hp('Behold, speak thou in the ears of my people the words of prophecy, which I will put in thy mouth', 'ezra-mouth'),
                t(', saith the Lord;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And cause them to be written in paper: for they are faithful and true.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra-mouth',
          html:
            'The word is given to Ezra the scribe, not as private revelation but as speech meant to be written and preserved. The prophecy that follows is placed directly in the mouth of God. What Ezra speaks, God speaks.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 3,
              spans: [
                t('And thou shalt speak it in the ears of the chosen people, and cause them to hear thy words. '),
                hg('For they are the word of the Lord, and thy words are my words', 'word-my-word'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'word-my-word',
          html:
            'The prophecy is God&apos;s word traveling through Ezra&apos;s mouth. What the prophet utters is not his own interpretation but the very speech of God. It is a claim of absolute authority: these words carry the weight of the Almighty.',
        },

        {
          kind: 'christ',
          id: 'christ-word-prophet',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'In John 1:1, the Word is not merely something God speaks—the Word <em>is</em> God. Jesus steps into the role of the prophetic word itself: "I am the light of the world" (John 8:12), "I am the way, the truth, and the life" (John 14:6). Where the prophets carried God&apos;s words, Christ <em>is</em> the Word. And to reject Him is to reject not a messenger but the message itself.',
        },

        {
          kind: 'carry',
          html:
            'You are hearing God&apos;s voice now—through Scripture, through the witness of the Spirit, through the faithful voices of those who have gone before. What Ezra was called to do—to speak God&apos;s word in the ears of the chosen—is the calling of every believer. Not to add to His word, but to declare it faithfully.',
        },

        {
          kind: 'reflection',
          id: 'prophetic-speak',
          prompt:
            'When was the last time you spoke God&apos;s word into someone else&apos;s life? What made you hesitate? What would it mean to speak as Ezra speaks—knowing the words you carry are not your own?',
        },
      ],
    },

    /* ─── 2 Esdras 15:4–27 — Judgment on Egypt ───────────────────────────── */
    {
      ref: '2 Esdras 15:4–27',
      title: 'Woe Upon Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('Thus saith the Lord unto Ezra, Tell the people that '),
                hg('there is no peace in the earth', 'no-peace-earth'),
                t(': neither shall they know strife and battle and much trouble till the end of the world.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-peace-earth',
          html:
            'This is the announcement of judgment&apos;s scope. It is not isolated to one nation but sweeps the earth—until the end of the world. There is no hiding place, no corner safe from the judgment of God upon those who have forgotten Him. The woes are universal.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 7,
              spans: [
                t('Therefore be not afraid. '),
                hp('Behold, I go forth to shew forth evil upon the world, and to send plague and destruction and famine and sword unto the nations', 'evil-forth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-forth',
          html:
            'The weaponry of judgment is laid bare: plague, destruction, famine, sword. These are not accidents of history but the direct sending of God. Yet God says to His people: "Be not afraid." The judgment touches the world; it does not touch the faithful.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 13,
              spans: [
                t('Behold, I say unto you, '),
                hg('Woe be unto thee, thou Egypt, and to the inhabitants thereof! For thy time is come, and the time of thy pride shall be made low', 'egypt-woe'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'egypt-woe',
          html:
            'Egypt stands first among the wicked nations, not by accident. Egypt was the place of Israel&apos;s bondage, and Egypt becomes the symbol of all human pride opposed to God. The woe is not random but historical—the nations that have ground the faithful under their heel will themselves be brought low.',
        },

        {
          kind: 'greek',
          id: 'greek-tribulatio',
          title: 'Thlipsis — "Tribulation; Pressure"',
          script: 'θλῖψις',
          translit: '<strong>Thlipsis</strong> · tribulation; pressure; the squeezing that comes from external persecution or divine judgment',
          description:
            'In the New Testament, thlipsis describes both the persecution the faithful endure and the judgment God sends. The word carries the sense of pressure that cannot be escaped, the weight of justice falling.',
        },

        {
          kind: 'christ',
          id: 'christ-egypt-judgment',
          title: 'Christ Connection — Plagues and the Lamb&apos;s Wrath',
          html:
            'In Revelation 6:16, John describes the judgment of God poured out: the nations cry to the mountains and rocks, "Fall on us, and hide us from the face of him that sitteth on the throne, and from the wrath of the Lamb." The plagues that Ezra announces find their fulfillment in the Lamb&apos;s judgment. Yet Christ also cries from the cross, "Father, forgive them; for they know not what they do" (Luke 23:34). The same Christ who judges is also the One who pleads for mercy on behalf of those who persecute Him.',
        },

        {
          kind: 'carry',
          html:
            'The woes of chapter 15 are not written for your comfort but for your sobering. They remind you that God is not indifferent to injustice, that the pride of the nations will not stand forever, that the structures of power that seem so unshakable are actually fragile. If that shakes you, that is by design—it is meant to root you in the God who alone endures.',
        },

        {
          kind: 'reflection',
          id: 'egypt-pride',
          prompt:
            'Egypt represents human pride opposed to God. Where do you see that pride in the world around you? In yourself? What does it mean that God has warned in advance that such pride will fall?',
        },
      ],
    },

    /* ─── 2 Esdras 15:28–39 — Judgment on Babylon ─────────────────────────── */
    {
      ref: '2 Esdras 15:28–39',
      title: 'Babylon&apos;s Ruin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 28,
              spans: [
                t('And thou shalt say unto them, Thus saith the Lord God; '),
                hp('Behold, I will bring upon Babylon all the plagues that I have brought upon Sodom and Gomorrah', 'babylon-plagues'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'babylon-plagues',
          html:
            'Babylon is compared to Sodom and Gomorrah—the archetypal examples of cities destroyed by divine judgment for their corruption. The comparison is not accidental. Babylon has become, like Sodom, a byword for the city that forgets God and pays the price.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 33,
              spans: [
                t('And the sun shall suddenly shine again after dark days. And '),
                hg('thy merchants shall utterly fail in that day', 'merchants-fail'),
                t(', saith the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'merchants-fail',
          html:
            'Babylon&apos;s signature is trade and commerce—the wealth that comes from buying and selling. The judgment specifically targets what Babylon trusts in most. The merchants who have grown rich by exploitation will find their wealth worthless when the day of the Lord comes.',
        },

        {
          kind: 'christ',
          id: 'christ-babylon-revelation',
          title: 'Christ Connection — The Fall of Babylon',
          html:
            'Revelation 18 paints the fall of Babylon in vivid detail: "For thy merchants were the great men of the earth; for by thy sorceries were all nations deceived" (Revelation 18:23). John describes the lament of the merchants as the city burns: "Standing afar off for the fear of her torment, saying, Alas, alas that great city Babylon… For in one hour is thy judgment come" (Revelation 18:10). The woe that Ezra announces finds its fullest expression in the judgment of the great city of the end times.',
        },

        {
          kind: 'artwork',
          matchTitle: /babylon/i,
          caption: '2 Esdras 15:28–39 · The Fall of Babylon',
        },

        {
          kind: 'carry',
          html:
            'The judgment on the merchants is an uncomfortable mirror. How much of your own security rests on the accumulation of things? How much does your trust in yourself rest on what you own? Babylon&apos;s catastrophe is the collapse of a system that has forgotten that God alone is Provider and Judge.',
        },

        {
          kind: 'reflection',
          id: 'babylon-trust',
          prompt:
            'Where have you, like the merchants of Babylon, made your trust in wealth or status? What would it feel like to lose that security? Who would you be if it were gone?',
        },
      ],
    },

    /* ─── 2 Esdras 15:40–63 — Sword, Famine, Fire ──────────────────────────── */
    {
      ref: '2 Esdras 15:40–63',
      title: 'Sword, Famine, and Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 44,
              spans: [
                t('Hear therefore, O ye nations that hear me; know ye the things that are to come of you. '),
                hg('The sword that I send upon you shall not turn away', 'sword-not-turn'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sword-not-turn',
          html:
            'The judgment is inevitable. The sword is already in God&apos;s hand. To the nations, the word comes: you cannot turn it away, cannot negotiate it away, cannot escape it. The only escape is repentance—and even that door, though implied, is not yet explicitly opened at this point in the text.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 46,
              spans: [
                t('A fire shall go forth from his wrath, and shall consume all things; and '),
                hy('it shall burn even unto the foundations of the earth', 'fire-foundations'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fire-foundations',
          html:
            'The fire is total. It does not stop at buildings or fields but burns down to the very foundations of the earth. The judgment is cosmic in scope—not merely military or natural disaster, but the unmaking of creation itself where the wicked have ruled.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 49,
              spans: [
                t('Hear me therefore, and I will speak unto thee. For as a woman with child travaileth and the child within her maketh haste to issue forth in the ninth month, so also shall the pangs come upon the earth, and she shall bring forth soon. For the child shall be delivered by force of travail.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'woman-travail',
          html:
            'The metaphor is of labor pain—unavoidable, mounting, inevitable. The judgment comes upon the earth like a birth that cannot be delayed. The pain is real, the outcome certain. The image echoes Matthew 24:8, where Jesus describes the "beginning of sorrows" that will precede the end.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-chevlei',
          title: 'Chevlei — "Travail; Birth Pangs"',
          script: 'חֶבְלֵי',
          translit: '<strong>Chevlei</strong> · the pangs of childbirth; labor pain; the beginning of woes',
          description:
            'In Hebrew prophecy, chevlei often describe the judgment that precedes the end of the age. They are not random but ordered, like the stages of labor—each one more intense than the last, all leading to a conclusion that cannot be forestalled.',
        },

        {
          kind: 'carry',
          html:
            'The image of labor pain is meant to strip away your illusions about judgment. You cannot negotiate with labor pain, slow it down, or escape it by cleverness. It will come. And when it comes, the only way through is forward. The question is not whether the judgment will come but whether you will be standing on the side of the faithful when it does.',
        },

        {
          kind: 'reflection',
          id: 'labor-inevitability',
          prompt:
            'What &quot;pangs&quot; is God sending into your life now—trials, convictions, pressures—that you cannot escape by running? What would change if you stopped trying to escape them and instead moved through them?',
        },
      ],
    },

    /* ─── 2 Esdras 15:8–35 — The Faithful Fleeing ────────────────────────── */
    {
      ref: '2 Esdras 15:8–35',
      title: 'The Faithful Shall Flee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 8,
              spans: [
                t('For many kingdoms shall rise up one against another, and they shall so destroy one another, that they all come to ruin. But before these things come to pass, I will send upon the earth troublings, famine and sword, that all nations may know the judgments of God. '),
              ],
            },
            {
              number: 9,
              spans: [
                t('And '),
                hp('yet many of them shall yet be left, that shall escape these evils, and shall see my salvation in my land, and within my borders', 'faithful-escape'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'faithful-escape',
          html:
            'The turning point. For all the woes announced, a remnant shall escape. They shall see God&apos;s salvation, not in some distant heaven, but "in my land, and within my borders"—a promise of restoration on the very earth where judgment has fallen. This is the hope that runs beneath all the judgment passages.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 10,
              spans: [
                t('And those that have now despised my ways shall astonish themselves; and those that have been cast off shall dwell in the places of the astonished. For I will judge them that dwell upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'despise-astonish',
          html:
            'A reversal is coming. Those who despised God&apos;s ways will be astonished at the outcome. Those who were despised and rejected—the faithful who were cast out—will inherit the places the proud have abandoned. This is the theme of Scripture: the exalted are brought low, the humble are lifted up.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 34,
              spans: [
                t('Hear ye therefore, O my servants, the words of the prophecy of the Lord, and lay them up in your hearts; for they are faithful and true. And the Lord God hath shown them unto you, and hath not hid them.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Wherefore fear ye not, and let not the troubles of the world move you; for the Lord your God leadeth you, and he will not forsake you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-leadeth',
          html:
            'Even as judgment falls on the nations, God&apos;s servants are called to "fear not." The reason is ancient and simple: the Lord leads you. He will not forsake you. This is the promise that runs from Abraham through the psalms to Jesus: the presence of God is with the faithful, regardless of what happens around them.',
        },

        {
          kind: 'christ',
          id: 'christ-fear-not',
          title: 'Christ Connection — Fear Not, Little Flock',
          html:
            'Jesus says to His disciples: "Fear not, little flock; for it is your Father&apos;s good pleasure to give you the kingdom" (Luke 12:32). The command is repeated across the New Testament: "Fear not, I am with thee" (Revelation 1:17). The faithful are called to trust in the presence of God, not in the safety of their circumstances. Judgment may fall on the world; the beloved are under His hand.',
        },

        {
          kind: 'carry',
          html:
            'You live in a time when troubling things happen. Markets crash, leaders fail, sickness comes, loss accumulates. Yet if you are truly the Lord&apos;s, you are called to "fear not"—not because the world is safe, but because the Lord is faithful. What would change in you if you truly believed He will not forsake you, even when everything around you crumbles?',
        },

        {
          kind: 'reflection',
          id: 'fear-not-crumbles',
          prompt:
            'Where are you afraid right now? What would it look like to "fear not" while trusting that the Lord will lead you through that fear, not around it?',
        },
      ],
    },

    /* ─── 2 Esdras 15:21–27 — "The Lord Knoweth Them That Are His" ─────────────── */
    {
      ref: '2 Esdras 15:21–27',
      title: 'God Knoweth His Own',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 21,
              spans: [
                t('And in those days, when thou goest through many tribulations, they shall say unto thee, Why hast thou so sad a countenance? And thou shalt answer and say unto them, '),
                hg('Because I am afraid of the judgment that is to come upon the earth', 'afraid-judgment'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'afraid-judgment',
          html:
            'The faithful will look different from the world. While others deny or ignore the judgment, the servant of God acknowledges it, grieves over it, carries the burden of it. This sorrow is not weakness but faithfulness—a sign that you are aligned with God&apos;s heart, which grieves even as it judges.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 24,
              spans: [
                t('Hear me, O my people; prepare thee to the battle, and be in the midst of the troubles: as one that is in the world. '),
                hp('Let him that is in a city depart into the field, and let him that is in the field turn not back unto the city. Neither look behind thee', 'depart-not-back'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'depart-not-back',
          html:
            'The command echoes Lot fleeing Sodom (Genesis 19:17) and Jesus&apos; warning about the end times (Luke 17:31). "Look not behind thee" is the warning against nostalgia, against the desire to return to the security you knew, even if that security was built on unrighteousness. The faithful must move forward, whatever is being left behind.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 25,
              spans: [
                t('And in that time '),
                hp('blessed is he that endureth; for he shall be saved', 'blessed-endureth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'blessed-endureth',
          html:
            'This is the call of every apocalyptic text: endurance. Not passive acceptance but active faithfulness under pressure. The word "blessed" recalls the Beatitudes—blessed are those who mourn, who hunger, who are persecuted. The blessedness belongs to those who do not break under judgment.',
        },

        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 26,
              spans: [
                t('And he that transgresseth and doeth the opposite, '),
                hy('cursed is he that heareth and obeyeth not', 'cursed-obey-not'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Hear me, O ye children, and be ye instructed in the statutes of the Lord. There shall come a tempest upon your mother&apos;s land; there shall be great sorrow and lamentation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cursed-obey-not',
          html:
            'The choice is stark. Obedience leads to blessing and salvation; transgression leads to curse. There is no middle ground in apocalyptic language. Yet the blessing is always offered first—the door to obedience is open, even as the woes are announced.',
        },

        {
          kind: 'greek',
          id: 'greek-hupomone',
          title: 'Hupomone — "Endurance; Patient Perseverance"',
          script: 'ὑπομονή',
          translit: '<strong>Hupomone</strong> · endurance; standing under pressure; patient persistence',
          description:
            'In the New Testament, hupomone is the virtue of the persecuted church. It is not passive resignation but active loyalty under trial. "By your endurance (hupomone) ye shall gain your souls" (Luke 21:19).',
        },

        {
          kind: 'christ',
          id: 'christ-endurance-salvation',
          title: 'Christ Connection — "The Lord Knoweth Them That Are His"',
          html:
            'Paul writes: "Nevertheless the foundation of God standeth sure, having this seal, The Lord knoweth them that are his" (2 Timothy 2:19). In the midst of the judgment of the great house, those who belong to God are marked and known. They may face persecution, as Ezra says; they may be scattered; they may be forced to flee. Yet God knows them. This is the consolation that undergirds the entire passage: judgment falls on the wicked nations, but the faithful are sealed with the knowledge of God Himself.',
        },

        {
          kind: 'carry',
          html:
            'The persecution of the faithful is real—the text does not soft-pedal this. Yet throughout, the word comes: the Lord knows you. He will not lose you in the crowd. When everything that seemed solid crumbles, when you are forced to flee and cannot look back, when your endurance is tested to the breaking point, you are not forgotten. You are known by name.',
        },

        {
          kind: 'artwork',
          matchTitle: /persecution|escape/i,
          caption: '2 Esdras 15:24–27 · The Flight of the Faithful',
        },

        {
          kind: 'reflection',
          id: 'known-by-god',
          prompt:
            'What would it change in you to truly believe that God knows you—your name, your struggles, your faithfulness, your fears—even when the world around you seems to be falling apart? Where do you doubt that He sees you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 15',
    quote:
      'Yet many of them shall yet be left, that shall escape these evils, and shall see my salvation in my land. And those that have been cast off shall dwell in the places of the astonished. Hear ye therefore, O my servants, the words of the prophecy of the Lord, and lay them up in your hearts; for they are faithful and true.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 15 · Study Guide',
  },

  hasHebrew: true,
};
