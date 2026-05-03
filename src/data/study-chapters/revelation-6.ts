import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Revelation 6 — The Seven Seals
 *
 * John sees the Lamb—the slaughtered yet exalted Jesus—open the scroll that
 * holds the future. With each breaking seal, a new vision unfolds. The first
 * six seals reveal conquest, war, famine, death, the cry of the martyrs, and
 * the shaking of creation itself. Each seal is a moment of judgment. Each is
 * also a window into the church&apos;s story—suffering, faithful witness, and
 * the certainty of Christ&apos;s return. The chapter ends with a question that
 * Revelation 7 alone can answer: "Who shall be able to stand?"
 */
export const REVELATION_6: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 6,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 18 },
  intros: [
    'Revelation 6 opens the scroll. With each broken seal, a vision unfolds—not random chaos, but a deliberate unrolling of judgment and promise. The white horse rides forth, then the red, then the black. Death himself appears on a pale horse. Beneath the altar, the souls of the slain cry out: "How long?" And when the sixth seal breaks, creation trembles.',
    'None of these seals are loose accidents. The Lamb opens them. Christ holds the scroll. Everything you see—conquest and war, famine and death, martyrdom and cosmic upheaval—happens under His hand. The chapter ends with a people in terror, hiding in the rocks, asking the question that will define everything after: "Who shall be able to stand?"',
  ],

  opener: {
    matchArtist: /john/i,
    matchTitle: /seven seals|revelation|scroll/i,
    caption: 'The Lamb Breaks Open the Seals',
  },

  sections: [
    /* ─── Introduction to the Seals ──────────────────────────────────── */
    {
      ref: 'Revelation 6:1',
      title: 'The Scroll Opens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('And I saw when '),
                hp('the Lamb opened one of the seals', 'lamb-seals'),
                t(', and I heard, as it were the noise of thunder, one of the four beasts saying, Come and see.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lamb-seals',
          html:
            'The Lamb is the slaughtered Christ (Rev. 5:6). He alone is worthy to open the scroll (Rev. 5:5). This is not John guessing at the future—it is John witnessing Christ deliberately, purposefully, opening the seals one by one. Nothing in history happens outside His knowledge or His will.',
        },
        {
          kind: 'christ',
          id: 'christ-lamb-lord',
          title: 'Christ Connection — The Lamb Is Lord of History',
          html:
            'In John 10:18, Jesus says of His own life: "I lay it down of myself." The same sovereignty that governed His death governs all history. He laid down His life; He also holds the scroll. The same hands that were pierced now open the seals. History is not out of control. Christ is not surprised. He is opening each seal.',
        },
        {
          kind: 'carry',
          html:
            'When you wake up to hard news or read about injustice or suffering, you are seeing one of these seals. You can trust that Christ sees it too. He is not absent. He is not surprised. He is neither the one causing the suffering nor indifferent to it. He is the one who opened the seal—the one whose authority is over it. That does not mean you stop working for justice or stop grieving. It means you grieve under the cross.',
        },
      ],
    },

    /* ─── FIRST SEAL: White Horse ────────────────────────────────────── */
    {
      ref: 'Revelation 6:2',
      title: 'The First Seal — The White Horse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 2,
              spans: [
                t('And I saw, and behold a '),
                hg('white horse', 'c-white-horse'),
                t(': and he that sat on him had a bow; and a crown was given unto him: and he went forth '),
                hy('conquering, and to conquer', 'rev6-nikon'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-white-horse',
          html:
            'White typically signifies purity or victory in Revelation. Yet here the white horse rides at the breaking of the first seal—a seal of judgment. Some scholars see this as Christ Himself. Others see it as a false messiah or worldly power dressed in the appearance of righteousness. The bow (not the sword) suggests conquest by persuasion or false promise. The crown is given, not earned—power granted by God, yet used for deception.',
        },
        {
          kind: 'greek',
          id: 'rev6-nikon',
          title: 'Nikōn—"Conquering"',
          script: 'νικῶν',
          translit: '<strong>nikōn</strong> · present participle of <em>nikaō</em>, to conquer, overcome, be victorious',
          description:
            'The white horse goes forth conquering and to conquer—<em>nikōn</em> and <em>nikēsē</em>. Conquest is not a single act but an ongoing dominion. Yet the Bible also uses <em>nikaō</em> for spiritual victory—overcoming through faith (Rev. 3:21, 1 John 5:4). The same word can mean worldly dominion and faithful endurance. Context determines which.',
        },
        {
          kind: 'carry',
          html:
            'Watch out for conquests that look pure. White horses carry false messiahs and false gospels. Ideologies that promise to conquer all opposition. Leaders who ride forth with a crown given too quickly. The first seal reminds us: not everything that looks victorious is true victory.',
        },
        {
          kind: 'reflection',
          id: 'seal-1-conquest',
          prompt: 'What voices in your world promise conquest? Which ones wear white horses? What would it look like to remain faithful when worldly power looks more impressive than the cross?',
        },
      ],
    },

    /* ─── SECOND SEAL: Red Horse ─────────────────────────────────────── */
    {
      ref: 'Revelation 6:3–4',
      title: 'The Second Seal — The Red Horse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('And when he had opened the second seal, I heard the second beast say, Come and see.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 4,
              spans: [
                t('And there went out another horse that was '),
                hg('red', 'c-red-war'),
                t(': and power was given to him that sat thereon to '),
                hy('take peace from the earth', 'rev6-eirene'),
                t(', and that they should kill one another: and there was given unto him a great sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-red-war',
          html:
            'Red is the color of blood. War follows conquest. The first seal rides forth dressed as victory; the second seal reveals what conquest actually costs. The rider is given power to take peace from the earth. Not that he creates war out of nothing—rather, the consequences of unchecked power, false promise, and human rebellion finally explode into violence.',
        },
        {
          kind: 'greek',
          id: 'rev6-eirene',
          title: 'Eirēnē—"Peace"',
          script: 'εἰρήνη',
          translit: '<strong>eirēnē</strong> · peace; rest; the absence of conflict; reconciliation',
          description:
            'The red horse takes <em>eirēnē</em> from the earth. Biblical peace is not merely the absence of war; it is the presence of right relationship—with God, with others, with yourself. When that peace is taken, war rushes in. Jesus offers <em>eirēnē</em> (John 14:27); the red horse offers its violent removal.',
        },
        {
          kind: 'carry',
          html:
            'Conquest and war follow one after another. The illusions of the white horse shatter into the violence of the red horse. Yet the church is not called to fight with swords but to be peacemakers (Matt. 5:9). In a world where peace is constantly threatened, your faithfulness to seek peace—not appeasement, but real reconciliation—is a prophetic act.',
        },
        {
          kind: 'reflection',
          id: 'seal-2-war',
          prompt: 'Where do you see the promise of the white horse followed by the violence of the red horse in history or in your own time? How do you maintain a commitment to peace in a world of conflict?',
        },
      ],
    },

    /* ─── THIRD SEAL: Black Horse ────────────────────────────────────── */
    {
      ref: 'Revelation 6:5–6',
      title: 'The Third Seal — The Black Horse and the Balances',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('And when he had opened the third seal, I heard the third beast say, Come and see. And I beheld, and lo a '),
                hg('black horse', 'c-black-famine'),
                t('; and he that sat on him had a pair of '),
                hy('balances', 'rev6-zugos'),
                t(' in his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('And I heard a voice in the midst of the four beasts say, A '),
                hy('measure of wheat for a penny', 'rev6-measure'),
                t('; and three measures of barley for a penny; and see thou hurt not the oil and the wine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-black-famine',
          html:
            'Black signals famine and scarcity. The balance represents scarcity measured out—rationing, inflation, a world where food becomes currency and survival becomes the only concern. War leads to famine. The conquering ideology promised abundance; what arrives is hunger. Yet the oil and wine—luxury goods—remain untouched. Even in famine, the wealthy keep their abundance while the poor starve.',
        },
        {
          kind: 'greek',
          id: 'rev6-zugos',
          title: 'Zugos—"Balance" or "Yoke"',
          script: 'ζυγός',
          translit: '<strong>zugos</strong> · balance, scales; yoke; measure of labor',
          description:
            'A <em>zugos</em> was used to weigh goods and measure rations. Jesus uses the same word when He says, "My yoke is easy" (Matt. 11:30). But here it measures out scarcity. Famine is not random—it is apportioned, weighed, controlled. Life becomes about survival ratios instead of flourishing.',
        },
        {
          kind: 'commentary',
          id: 'rev6-measure',
          html:
            'A choinix (measure) of wheat cost a denarius—a full day&apos;s wages. In normal times, a denarius would buy ten times as much. The prices reflect not just scarcity but catastrophic inflation. A person working all day could barely feed themselves. The detail that oil and wine—symbols of luxury and celebration—remain unharmed suggests that while the poor starve, the rich preserve their pleasures.',
        },
        {
          kind: 'carry',
          html:
            'Famine is not new. It has not disappeared from the earth. Millions today face scarcity while others feast. You may not control economic systems, but you can choose not to feast while others starve. The third seal calls the church to witness what war and conquest actually produce: hunger, inequality, a world measured by rationing instead of grace.',
        },
        {
          kind: 'reflection',
          id: 'seal-3-famine',
          prompt: 'What do you consume without thinking about the cost to others? How might the image of the balance—measuring out scarcity—change the way you think about justice and generosity?',
        },
      ],
    },

    /* ─── FOURTH SEAL: Pale Horse (Death) ────────────────────────────── */
    {
      ref: 'Revelation 6:7–8',
      title: 'The Fourth Seal — The Pale Horse and Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 7,
              spans: [
                t('And when he had opened the fourth seal, I heard the voice of the fourth beast say, Come and see.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('And I looked, and behold a '),
                hg('pale horse', 'c-pale-death'),
                t(': and his name that sat on him was '),
                hy('Death', 'rev6-thanatos'),
                t(', and Hell followed with him. And power was given unto them over the fourth part of the earth, to kill with sword, and with hunger, and with death, and with the beasts of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pale-death',
          html:
            'The pale horse is named. Its rider is Death. Hell follows. This is the consequence of the previous three seals—they culminate in death itself. Not metaphorical death, but the actual consequence of unchecked power, violence, and scarcity. Death is given authority over a fourth of the earth. This is not random destruction; it is the inevitable outcome of rebellion.',
        },
        {
          kind: 'greek',
          id: 'rev6-thanatos',
          title: 'Thanatos—"Death"',
          script: 'θάνατος',
          translit: '<strong>thanatos</strong> · death; the grave; the power of death; mortality',
          description:
            'Death is personified here as a rider with power. In Romans 6:9, Paul says Christ &ldquo;died once for all&rdquo; and &ldquo;death has no more power over him.&rdquo; In 1 Corinthians 15:55-57, Paul taunts death: &ldquo;O death, where is thy sting? O grave, where is thy victory?&rdquo; The Lamb who opens this seal has already conquered death. The pale horse rides, but Christ rides higher.',
        },
        {
          kind: 'christ',
          id: 'christ-conqueror-death',
          title: 'Christ Connection — The One Who Conquered Death',
          html:
            'The Lamb opens the seal that releases death. Yet the Lamb Himself has already died and risen (Rev. 1:18). He holds the keys of death and hell (Rev. 1:18). Death rides forth with power given to it, but not ultimate power. Christ has already stripped death of its finality. For those who belong to Him, death is no longer the end; it is the doorway to His presence.',
        },
        {
          kind: 'carry',
          html:
            'The pale horse is real. Death comes for all. But you are not riding with Death; you are riding with the Lamb. The fourth seal names the worst thing the world can offer—death itself—and announces that Christ has already walked through it and come out the other side. That changes everything about how you live.',
        },
        {
          kind: 'reflection',
          id: 'seal-4-death',
          prompt: 'How does knowing that Christ has conquered death change your fear of it? How does it free you to love others without clinging to them or yourself?',
        },
      ],
    },

    /* ─── FIFTH SEAL: The Souls Under the Altar ──────────────────────── */
    {
      ref: 'Revelation 6:9–11',
      title: 'The Fifth Seal — The Cry of the Martyrs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 9,
              spans: [
                t('And when he had opened the fifth seal, I saw '),
                hg('under the altar', 'c-altar'),
                t(' the souls of them that were slain for the word of God, and for the testimony which they held:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('And they cried with a loud voice, saying, '),
                hp('How long, O Lord, holy and true, dost thou not judge and avenge our blood', 'christ-cry-martyrs'),
                t(' on them that dwell on the earth?'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 11,
              spans: [
                t('And white robes were given unto every one of them; and it was said unto them, that they should '),
                hy('rest yet for a little season', 'rev6-chronos'),
                t(', until their fellowservants also and their brethren, that should be killed as they were, should be fulfilled.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar',
          html:
            'The altar is where sacrifice is made. These souls are positioned beneath the altar—not as dead, inert witnesses, but as living sacrifices. Their blood cries out (Gen. 4:10). They are not forgotten. They are not alone. And their cry is not answered with immediate vengeance but with white robes and a call to wait. More witnesses are coming. The full number must be reached before judgment.',
        },
        {
          kind: 'greek',
          id: 'rev6-chronos',
          title: 'Chronos—"Season" or "Time"',
          script: 'χρόνος',
          translit: '<strong>chronos</strong> · time; a period of time; season; delay',
          description:
            'God asks the martyrs to rest <em>chronos</em> yet—for a little season. Not forever, but not immediately. Kairos (God&apos;s appointed time) is different from chronos (chronological time). The martyrs cry for <em>kairos</em> justice; they are asked to wait through <em>chronos</em>. Patience in suffering is one of the hardest calls Jesus makes.',
        },
        {
          kind: 'christ',
          id: 'christ-cry-martyrs',
          title: 'Christ Connection — The Answer to the Martyrs&apos; Cry',
          html:
            'The martyrs cry out to the Lord—and He hears. He does not dismiss their suffering as insignificant. He does not say they are overreacting. He does not explain it away. He gives them white robes—a sign of victory and purity—and He acknowledges their pain. Their blood matters. Their witness matters. And their cry for justice will be answered. But not yet. All the witnesses must complete their testimony. Then Christ will return and every injustice will be made right (Rev. 19:1-8).',
        },
        {
          kind: 'carry',
          html:
            'If you have suffered for your faith—or for righteousness, or for speaking truth—your suffering is seen. The souls cry out, and Christ hears them. You are not bearing it alone. You are not wasting it. Your witness is being added to theirs. And the day will come when every tear is answered and every injustice is addressed. Until then, rest in white robes. Your vindication is coming.',
        },
        {
          kind: 'reflection',
          id: 'seal-5-cry',
          prompt: 'What does it mean to cry out for justice? How do you hold together both the urgency of suffering and the call to patient endurance?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── SIXTH SEAL: The Great Earthquake ──────────────────────────── */
    {
      ref: 'Revelation 6:12–14',
      title: 'The Sixth Seal — The Earthquake',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('And I beheld when he had opened the sixth seal: and, lo, there was a '),
                hg('great earthquake', 'c-earthquake'),
                t('; and the sun became black as sackcloth of hair, and the moon became as blood;'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('And the stars of heaven fell unto the earth, even as a fig tree casteth her untimely figs, when she is shaken of a mighty wind.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 14,
              spans: [
                t('And '),
                hy('the heaven departed as a scroll when it is rolled together', 'rev6-ouranos'),
                t('; and every mountain and island were moved out of their places.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-earthquake',
          html:
            'Creation itself convulses. The sun blackens. The moon becomes blood. Stars fall. The sky rolls away like a scroll. This is not localized disaster—this is cosmic upheaval. The seals have moved from human history (conquest, war, famine, death) to the very fabric of creation. Everything fixed and solid becomes unstable. The universe itself declares that judgment is coming.',
        },
        {
          kind: 'greek',
          id: 'rev6-ouranos',
          title: 'Ouranos—"Heaven" or "Sky"',
          script: 'οὐράνιος',
          translit: '<strong>ouranos</strong> · heaven; the sky; the expanse; God&apos;s throne',
          description:
            'The heaven itself departs. In Isaiah 34:4, the prophet declares: &ldquo;All the host of heaven shall be dissolved... the heavens shall be rolled together as a scroll.&rdquo; John is drawing on Isaiah&apos;s prophecy of the final day. What seems immovable—sun, moon, stars, heaven itself—will move. Nothing physical endures forever. Only Christ is eternal.',
        },
        {
          kind: 'christ',
          id: 'christ-creator-judge',
          title: 'Christ Connection — The Creator Returns as Judge',
          html:
            'Through Christ, Colossians 1:16 says, &ldquo;all things were created.&rdquo; The very cosmos that Christ created is now convulsing at the opening of His seals. He is both Creator and Judge. The universe obeys Him. Creation groans and trembles because the one who made it is now acting as its judge. That is why the final redemption (Rev. 21:1-4) includes a new creation—the old one, stained and broken, passes away.',
        },
        {
          kind: 'carry',
          html:
            'You live in a cosmos that Christ made and Christ judges. Everything you see—the mountains, the stars, the solid ground—is answerable to Him. That should strip away your fear of any earthly power and anchor your hope in the One who holds all things together. When everything else shakes, He does not shake.',
        },
        {
          kind: 'reflection',
          id: 'seal-6-earthquake',
          prompt: 'What feels immovable and permanent in your life? How would your choices change if you truly believed that only Christ is permanent?',
        },
      ],
    },

    /* ─── The Question ─────────────────────────────────────────────── */
    {
      ref: 'Revelation 6:15–17',
      title: '"Who Shall Be Able to Stand?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('And the kings of the earth, and the great men, and the rich men, and the chief captains, and the mighty men, and every bondman, and every free man, '),
                hg('hid themselves in the dens and in the rocks of the mountains', 'c-hiding'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And said to the mountains and rocks, Fall on us, and hide us from the face of him that sitteth on the throne, and from the wrath of the Lamb:'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('For the great day of his wrath is come; and '),
                hp('who shall be able to stand', 'christ-stand'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hiding',
          html:
            'Creation is not just passive—it is rejecting the very people who ruled it. Kings and rich men beg the mountains to hide them. They prefer to be crushed by stone than to face the presence of the Lamb. Notice the list: it includes everyone—rulers and slaves, mighty and weak. No status, no power, no alliance saves you from having to face Christ. All the horsemen, all the seals, all the suffering—they lead to this one inescapable reality: you will stand before Him.',
        },
        {
          kind: 'greek',
          id: 'rev6-orge',
          title: 'Orgē—"Wrath"',
          script: 'ὀργή',
          translit: '<strong>orgē</strong> · wrath; anger; indignation; justice expressed in judgment',
          description:
            'The wrath of the Lamb sounds like a paradox. But the Lamb is Christ—the same one who drove the money-changers from the temple (John 2:14-17). The same one who condemned the Pharisees&apos; hypocrisy in Matthew 23. Jesus is not weak. His anger is real. His judgment is just. The Lamb has <em>orgē</em>.',
        },
        {
          kind: 'christ',
          id: 'christ-stand',
          title: 'Christ Connection — Who Can Stand?',
          html:
            'The answer to &ldquo;Who shall be able to stand?&rdquo; is answered in Revelation 7. The 144,000 marked with the seal of God stand before the throne. But longer, in Matthew 24:13, Jesus says, &ldquo;He that shall endure unto the end, the same shall be saved.&rdquo; And in Hebrews 10:39, Paul writes, &ldquo;We are not of them who draw back unto perdition; but of them that believe to the saving of the soul.&rdquo; Those who stand are those who belong to Christ. Those who have trusted the Lamb, not the white horse. Those whose names are written in the book of life.',
        },
        {
          kind: 'carry',
          html:
            'This is the hardest question in Revelation. And the answer is not &ldquo;everyone&rdquo; or &ldquo;nobody&rdquo;—it is &ldquo;those who have made their alliance with the Lamb.&rdquo; The white horse promised conquest; it delivered death. The Lamb promises you Himself—His presence, His forgiveness, His protection. When the great day comes and everything shakes, you will be able to stand not because you are strong, but because you belong to the one who broke the seals and holds all things together.',
        },
        {
          kind: 'reflection',
          id: 'seal-6-stand',
          prompt: 'What would it look like to live now as though you believe Christ is returning? What would change in how you invest your time, your fear, your hope?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'How long, O Lord, holy and true, dost thou not judge and avenge our blood on them that dwell on the earth?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 6 · Study Guide',
  },

  hasHebrew: false,
};
