import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 6 — The Floating Axe-Head, Chariots of Fire, and Siege
 *
 * In this chapter, Elisha moves through a spectrum of miracles and trials.
 * A borrowed axe-head is recovered from the waters — small, but revealing
 * God's care for detail. Syrian spies pursue the prophet, but the servant&apos;s
 * eyes are opened to see an invisible host: "the mountain was full of horses
 * and chariots of fire." Enemies are struck with blindness and led, with mercy
 * instead of slaughter, back to their master. And then comes Ben-hadad&apos;s siege
 * of Samaria — a city so starved that women boil their own children. In this
 * descent into horrors unfold the consequences of covenant-breaking, and the
 * deepening questions: where is God when His people hunger? What does faith
 * demand when mercy has been extended but rejected?
 */
export const KINGS_2_6: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 6,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 21 },
  intros: [
    'The sons of the prophets gather before Elisha with a humble request: their dwelling place has grown too small. Let them go to the Jordan and cut timber to build a larger compound. Elisha agrees — and as one man fells a beam, an axe-head slips into the water. "Alas, master! for it was borrowed," he cries. In this small moment lies a profound truth: God&apos;s providence extends to borrowed tools, to the details that weigh on an honest heart.',
    'But borrowed axes are not the only crisis facing Elisha. The king of Syria wages a war whose outcome seems foreordained — Syrian armies advance, and only Elisha&apos;s word stands between Israel and ambush. Yet when the Syrians come to capture the prophet at Dothan, Elisha&apos;s servant awakens to a vision of fire: "the mountain was full of horses and chariots of fire round about Elisha." The visible world is small. The invisible world is vast beyond measure.',
    'When the Syrian army is struck blind and led into Samaria, Elisha does not permit their slaughter. Instead, he commands bread and water — an act of mercy that seems to break the cycle of war, at least for a season. But then comes Ben-hadad&apos;s siege: a starvation so complete that the city falls into cannibalism, the ultimate covenant curse from Deuteronomy realized in flesh. And the king, in his despair, seeks Elisha&apos;s life. In this chapter, Elisha moves through the whole arc: small miracles, invisible glory, mercy extended, judgment withheld — and then the terrible silence of God when the king rejects His word.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 6',
    quote:
      'They that be with us are more than they that be with them. When the eyes of the servant were opened, he saw the mountain full of horses and chariots of fire. The reality of God&apos;s power transcends what we can see.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 6 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 6:1–7 — The Floating Axe-Head ──────────────────────────── */
    {
      ref: '2 Kings 6:1–7',
      title: 'The Floating Axe-Head',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              1,
              'And the sons of the prophets said unto Elisha, Behold now, the place where we dwell with thee is too strait for us.'
            ),
            plain(2, 'Let us go, we pray thee, unto Jordan, and take thence every man a beam, and let us make us a place there, where we may dwell. And he answered, Go ye.'),
            plain(3, 'And one said, Be content, I pray thee, and go with thy servants. And he answered, I will go.'),
            plain(4, 'So he went with them. And when they came to Jordan, they cut down wood.'),
            {
              number: 5,
              spans: [
                t('But as one was felling a beam, the '),
                hy('axe head', '6-axe-head'),
                t(' fell into the water: and he cried, and said, Alas, master! for it was '),
                hg('borrowed', '6-borrowed'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the man of God said, Where fell it? And he shewed him the place. And he cut down a stick, and cast it in thither; and the iron did swim.'),
              ],
            },
            plain(7, 'Therefore said he, Take it up to thee. And he put out his hand, and took it.'),
          ],
        },
        {
          kind: 'commentary',
          id: '6-axe-head',
          html:
            'The axe-head is small, ordinary. It is not a sword or a scepter. It is a tool for work, and like many tools, it slips from the hands of men. But watch how Elisha responds: not with dismissal, not with "it is only an axe," but with attention. He asks where it fell. He acts. He recovers it. The miraculous power of God is not reserved for battles and kingdoms. It reaches down to borrowed tools and the tears of honest men.',
        },
        {
          kind: 'commentary',
          id: '6-borrowed',
          html:
            'The word "borrowed" carries moral weight. The man who loses the axe does not own it. He is accountable to another. His cry—"Alas, master!"—is the cry of someone bound by obligation, bound by honesty. And Elisha hears it. God hears the burden of those who have borrowed and lost.',
        },
        {
          kind: 'hebrew',
          id: '6-barzel',
          title: 'Barzel — "Iron"',
          script: 'בַּרְזֶל',
          translit: '<strong>Barzel</strong> · iron; a tool of work and conflict',
          description:
            'Iron in Scripture is the metal of work, of implements, of tools that bend human labor to earth. It is also the metal of weapons. Here, a piece of iron—an axe-head—sinks into water, defying its nature. Water should not hold iron; iron should not float. Yet it does. The very stuff of earthly labor is subject to the voice of the prophet who speaks the word of God.',
        },
        {
          kind: 'carry',
          html:
            'Do you carry the weight of borrowed things? Of obligations unpaid, of tools not your own whose loss would trouble you? Elisha teaches us that God notices. The miraculous is not reserved for the grand. A borrowed axe-head, recovered from the river, speaks to a God who cares about the small debts, the small honesty, the small integrity we strain to maintain. Where in your life are you carrying the weight of something borrowed? How might trust in God&apos;s providence lighten that burden?',
        },
        {
          kind: 'reflection',
          id: 'floating-axe',
          prompt:
            'The man cried out because the axe was borrowed and his accountability mattered to him. When have you felt the weight of being responsible for something not your own? What did it reveal about your character?',
        },
      ],
    },

    /* ─── 2 Kings 6:8–12 — The Spied Counsel ────────────────────────────── */
    {
      ref: '2 Kings 6:8–12',
      title: 'The King&apos;s Bedchamber is Betrayed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              8,
              'Then the king of Syria warred against Israel: and he took counsel with his servants, saying, In such and such a place shall be my camp.'
            ),
            {
              number: 9,
              spans: [
                t('And the man of God sent unto the king of Israel, saying, Beware that thou pass not such a place; for thither the Syrians are '),
                hg('come down', '6-come-down'),
                t('.'),
              ],
            },
            plain(10, 'And the king of Israel sent to the place which the man of God told him and warned him of, and saved himself there, not once nor twice.'),
            {
              number: 11,
              spans: [
                t('Therefore the heart of the king of Syria was sore troubled by this matter: and he called his servants, and said unto them, Will ye not shew me which of us is for the king of Israel?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And one of his servants said, None, my lord, O king: but '),
                hy('Elisha', '6-elisha-betrayed'),
                t(', the prophet that is in Israel, telleth the king of Israel the words that thou speakest in thy '),
                hg('bedchamber', '6-bedchamber'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '6-come-down',
          html:
            'Elisha sends word to the king of Israel: avoid this place, for the Syrians have come down there. Again and again, the trap is sprung—and again and again, the king escapes. Elisha operates in the realm of intelligence that no spy network can breach. He speaks words before armies camp, reveals plans before they are executed. The king of Israel is living in a kind of constant rescue, a perpetual narrowness of escape.',
        },
        {
          kind: 'commentary',
          id: '6-elisha-betrayed',
          html:
            'When the king of Syria realizes his plans are always discovered, he does not think first of God. He thinks of traitors. Someone in his household is feeding intelligence to Israel. He summons his servants and demands to know who among them is disloyal. But the truth is far stranger than a spy: a prophet of Israel is hearing the very words spoken in the Syrian king&apos;s private chambers.',
        },
        {
          kind: 'commentary',
          id: '6-bedchamber',
          html:
            'The word "bedchamber" speaks to the most private, intimate space—where a man speaks to those closest to him, unguarded. It is where he lays bare his strategies, his fears, his schemes. Yet Elisha knows. There is nowhere to hide from the prophet whose ear is attuned to the voice of God. Privacy, in the presence of such a word, becomes a false refuge.',
        },
        {
          kind: 'carry',
          html:
            'How does it feel to imagine that someone hears your unguarded words? Perhaps not literally, as the king of Syria did, but in the sense that what we speak into the darkness, what we confess in secret, is known to God. This is not primarily a threat. It is an invitation: to speak truth even in the bedchamber, to let your private words align with your public ones, to have nothing to hide because there is nothing hidden from the One who loves you.',
        },
        {
          kind: 'reflection',
          id: 'bedchamber',
          prompt:
            'The king of Syria&apos;s private words were known to Elisha. What difference might it make in your life if you lived as though your unguarded, private speech was also known and heard by God?',
        },
      ],
    },

    /* ─── 2 Kings 6:13–17 — "They That Be With Us Are More" ────────────── */
    {
      ref: '2 Kings 6:13–17',
      title: 'The Eyes of the Servant Are Opened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              13,
              'Therefore sent he thither horses and chariots, and a great host: and they came by night, and compassed the city about.'
            ),
            {
              number: 14,
              spans: [
                t('Therefore when the servant of the man of God was risen early, and gone forth, behold, an host compassed the city both with horses and chariots. And his servant said unto him, Alas, my master! how shall we do?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he answered, '),
                hp('Fear not', '6-fear-not'),
                t(': for '),
                hp('they that be with us are more than they that be with them', '6-more-with-us'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Elisha prayed, and said, Lord, I pray thee, '),
                hp('open his eyes', '6-open-eyes'),
                t(', that he may see. And the Lord opened the eyes of the young man; and he saw: and, behold, the '),
                hy('mountain was full of horses and chariots of fire', '6-chariots-fire'),
                t(' round about Elisha.'),
              ],
            },
            plain(17, 'And when they came down to him, Elisha prayed unto the Lord, and said, Smite this people, I pray thee, with blindness. And he smote them with blindness according to the word of Elisha.'),
          ],
        },
        {
          kind: 'commentary',
          id: '6-fear-not',
          html:
            'Elisha&apos;s first word to his frightened servant is "Fear not." This is not a comfort based on what is visible. It is a comfort based on what is true. The servant looks out and sees an overwhelming force. But Elisha knows another calculus entirely. He does not say the Syrian army is not there. He says: there is another reality more populous, more powerful, more real than what you can see.',
        },
        {
          kind: 'commentary',
          id: '6-more-with-us',
          html:
            'This statement—"they that be with us are more than they that be with them"—is among the most arresting in Scripture. It reverses all calculation of power. Numerically, visibly, the Syrian army overwhelms Elisha and his servant. But there is a dimension of reality—the spiritual, the invisible—where the weight is inverted. God&apos;s hosts are infinite. The measure of power is not what you count with human eyes.',
        },
        {
          kind: 'hebrew',
          id: '6-rekev-esh',
          title: 'Rekev Esh — "Chariot of Fire"',
          script: 'רֶ֫כֶב אֵשׁ',
          translit: '<strong>Rekev esh</strong> · chariot of fire; the war-chariot of the divine armies',
          description:
            'The phrase "chariot of fire" (rekev esh) appears at pivotal moments when the veil between the visible and invisible worlds is torn open. Elijah will be taken to heaven in a chariot of fire (2 Kings 2:11). Here, the mountain is full of them—not one, but a multitude, encompassing the prophet. Fire in Scripture often signifies the presence of God, holiness, judgment, power. A chariot of fire is therefore a vehicle of divine power and protection.',
        },
        {
          kind: 'commentary',
          id: '6-open-eyes',
          html:
            'Elisha prays: "Open his eyes, that he may see." The servant&apos;s eyes are already open—he is not blind in the physical sense. But he is blind to the reality that surrounds him. Prayer here is a request not for new knowledge but for new perception, for the removal of a veil that limits what we can comprehend. The Lord opens the eyes of the young man, and he sees.',
        },
        {
          kind: 'commentary',
          id: '6-chariots-fire',
          html:
            'The servant&apos;s vision is now expanded. He sees what Elisha has known all along: the mountain is full of horses and chariots of fire. These are not Elisha&apos;s chariots—they are the chariots of God, the invisible host that surrounds and protects the faithful. The supernatural world is not emptier than the natural world. It is more densely populated. More real.',
        },
        {
          kind: 'christ',
          id: '6-christ-opens-eyes',
          title: 'Christ Connection — Opening Blind Eyes',
          html:
            'Throughout the Gospels, Jesus opens the eyes of the blind. A man born blind, a man struck blind on the Damascus road, a woman bent double who cannot lift her gaze to heaven—all are healed. But the deepest blindness is spiritual: the inability to see the kingdom of God, the realm where God is present and acting. "Blessed are the pure in heart: for they shall see God" (Matthew 5:8). When Christ opens our eyes, He reveals what has always been true but invisible to us: that we are not abandoned, that we are surrounded by mercy, that the kingdom of heaven is at hand. Like the servant at Dothan, we are invited to see reality as it truly is.',
        },
        {
          kind: 'carry',
          html:
            'You are surrounded. The invisible realm is more densely populated with help than the visible one. This is not sentiment; it is what Elisha knew and what he invites us to trust. When you feel alone, outnumbered, surrounded by forces that seem overwhelming, remember: the mountains around you may be full of fire. Your eyes may simply need to be opened.',
        },
        {
          kind: 'reflection',
          id: 'eyes-opened',
          prompt:
            'The servant&apos;s eyes were opened, and he saw the reality that was always there. What spiritual reality do you need your eyes opened to see? What invisible presence or protection do you struggle to believe in?',
        },
      ],
    },

    /* ─── 2 Kings 6:18–23 — Mercy on the Blinded Syrians ─────────────────── */
    {
      ref: '2 Kings 6:18–23',
      title: 'Bread and Water for Enemies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(18, 'And when they came down to him, Elisha said unto them, This is not the way, neither is this the city: follow me, and I will bring you to the man whom ye seek. But he led them to Samaria.'),
            {
              number: 19,
              spans: [
                t('And it came to pass, when they were come into Samaria, that Elisha said, Lord, '),
                hg('open', '6-open-again'),
                t(' the eyes of these men, that they may see. And the Lord opened their eyes; and, behold, they were in the midst of Samaria.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the king of Israel said unto Elisha, when he saw them, My father, shall I smite them? shall I smite them?'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he answered, Thou shalt not smite them: wouldest thou smite those whom thou hast taken captive with thy sword and with thy bow? set '),
                hp('bread and water', '6-bread-water'),
                t(' before them, that they may eat and drink, and go to their master.'),
              ],
            },
            plain(22, 'And he prepared great provision for them: and when they had eaten and drunk, he sent them away, and they went to their master. So the bands of Syria came no more into the land of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: '6-open-again',
          html:
            'When the Syrian army arrives in Samaria, they are still blind. Elisha again prays, and again the Lord opens eyes—but this time, the opened eyes see not horses and chariots of fire, but their own vulnerability. They are surrounded by an Israeli army. They have walked into a city they came to conquer, now utterly at the mercy of the king they pursued.',
        },
        {
          kind: 'commentary',
          id: '6-bread-water',
          html:
            'The king of Israel, seeing the Syrian captives, asks Elisha: "Shall I smite them?" It is a natural question. These men came to kill him. War would say: strike them down. But Elisha forbids it. Instead: "set bread and water before them, that they may eat and drink, and go to their master." It is an answer from another realm—the realm of mercy, of the reversal of enmity, of the kind of love that feeds those who would have starved you.',
        },
        {
          kind: 'hebrew',
          id: '6-sanverim',
          title: 'Sanverim — "Blindness"',
          script: 'סְוַרְוָרִים',
          translit: '<strong>Sanverim</strong> · blindness; a closing of the eyes',
          description:
            'The Hebrew word for the blindness Elisha strikes upon the Syrians (sanverim) carries the sense of a shuttering, a closure. The eyes remain open to light, but the mind cannot interpret what they see. It is a condition of disorientation, of being turned around. Elisha leads them by the hand through a landscape they cannot navigate.',
        },
        {
          kind: 'commentary',
          html:
            'This passage echoes an ancient call in Scripture: "If thine enemy hunger, feed him; if he thirst, give him drink: for in so doing thou shalt heap coals of fire on his head" (Romans 12:20). The mercy is not weakness. It is a radical reckoning. By showing kindness to those bent on your destruction, you transform the encounter. You refuse to meet hatred with hatred. You offer instead the opportunity for the enemy to become something other than an enemy.',
        },
        {
          kind: 'carry',
          html:
            'It is harder than you think to feed your enemies, to set bread and water before those who came to kill you. The king&apos;s first instinct was to strike. But Elisha calls him to a harder path: the path of mercy, where you use your power not to destroy but to return the enemy to his master, changed perhaps, or at least fed, at least given a reason to question whether this man is truly an enemy at all. What enemy in your life could you feed instead of fight?',
        },
        {
          kind: 'reflection',
          id: 'mercy-enemies',
          prompt:
            'Elisha commanded mercy to soldiers who came to kill him. When you have power over someone who has wronged you, do you tend to use that power to punish or to transform? What would mercy ask of you?',
        },
      ],
    },

    /* ─── 2 Kings 6:24–33 — The Siege of Samaria ──────────────────────────── */
    {
      ref: '2 Kings 6:24–33',
      title: 'The Curse Descends: Famine and Cannibalism',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              24,
              'And it came to pass after this, that Ben-hadad king of Syria gathered all his host, and went up, and besieged Samaria.'
            ),
            {
              number: 25,
              spans: [
                t('And there was a great '),
                hg('famine in Samaria', '6-famine'),
                t(': and, behold, they besieged it, until an ass&apos;s head was sold for fourscore pieces of silver, and the fourth part of a cab of dove&apos;s dung for five pieces of silver.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And as the king of Israel was passing by upon the wall, there cried a woman unto him, saying, Help, my lord, O king.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he said, If the Lord do not help thee, whence shall I help thee? out of the barnfloor, or out of the winepress?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k6-famine-siege',
          html:
            'The siege brings famine; the king tears his clothes—despair rises, but deliverance is on the horizon.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 28,
              spans: [
                t('And the king said unto her, What aileth thee? And she answered, This woman said unto me, Give thy son, that we may eat him today, and we will eat my son tomorrow. So we '),
                hg('boiled my son, and did eat him', '6-cannibalism'),
                t(': and I said unto her on the next day, Give thy son, that we may eat him: and she hath hid her son.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And when the king heard the words of the woman, he '),
                hg('rent his clothes', '6-rent-clothes-king'),
                t('; and he passed by upon the wall: and the people looked, and, behold, he had sackcloth within upon his flesh.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Then he said, God do so and more also to me, if the head of Elisha the son of Shaphat shall stand on him this day.'),
              ],
            },
            plain(
              31,
              'But Elisha sat in his house, and the elders sat with him; and the king sent a man from before him: but ere the messenger came to him, he said to the elders, See ye how this son of a murderer hath sent to take away my head? look, when the messenger cometh, shut to the door, and hold him fast at the door: is not the sound of his master&apos;s feet behind him?'
            ),
            plain(
              32,
              'And while he yet spake with them, behold, the messenger came down unto him: and he said, Behold, this evil is of the Lord; what should I wait for the Lord any longer?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '6-famine',
          html:
            'The famine is so severe that an ass&apos;s head—an animal considered unclean, worthy only for garbage—sells for eighty pieces of silver. Dove&apos;s dung, which has no nutritional value, is bought as food. The city has reached a point of absolute want. There is nothing left to eat but the unclean, the worthless, the inedible. The hierarchy of food has collapsed entirely.',
        },
        {
          kind: 'commentary',
          id: '6-cannibalism',
          html:
            'Two women make a covenant of desperation: they will boil and eat their own children. One woman does so, feeding her own son to hunger. The next day, she expects the other woman to do the same. But the other woman has hidden her son. The covenant is broken. The first woman cries out to the king for justice against this treachery—as though the crime is the breaking of the compact, not the eating of a child. This is what famine does: it inverts all categories of right and wrong. It makes the unthinkable not merely possible but negotiable.',
        },
        {
          kind: 'commentary',
          html:
            'This horror is not incidental to the 2 Kings 6 narrative. It is the fulfillment of a curse explicitly named in Deuteronomy 28:53–57: "Thou shalt eat the fruit of thine own body, the flesh of thy sons and of thy daughters... thou shalt eat it in the siege, and in the straitness, wherewith thine enemies shall distress thee." The covenant curses have come upon Israel. This is not random misfortune. This is judgment.',
        },
        {
          kind: 'commentary',
          id: '6-rent-clothes-king',
          html:
            'When the king hears the woman&apos;s testimony, he tears his clothes. The gesture is the same one David made when he wept for Saul. But here, the tearing is an outward sign of an inward collapse. The king is wearing sackcloth beneath his robes—a sign of mourning, of repentance. Yet his first response to the horror is not repentance but anger. He blames Elisha. He vows to kill the prophet.',
        },
        {
          kind: 'carry',
          html:
            'When judgment comes, our first instinct is often to blame God, to rage against the prophet who spoke the word we refused to hear. But the siege itself is testimony. The famine speaks. The mothers who boil their children speak. These are not arbitrary afflictions sent by a capricious God. These are the natural consequences, amplified by covenant, of a people who have turned from the God who feeds them. The king cannot see this. He can only see his own hunger, his own rage, his own need for someone to strike down. Do you listen to what judgment is saying, or do you rage against the messenger?',
        },
        {
          kind: 'reflection',
          id: 'siege-famine',
          prompt:
            'When you face consequences for choices—your own or your community&apos;s—do you turn to find someone to blame, or do you listen to what the situation is trying to teach you?',
        },
      ],
    },

    /* ─── 2 Kings 7 Prologue — Elisha&apos;s Word Stands ────────────────────── */
    {
      ref: '2 Kings 6:32–33',
      title: 'The King Seeks the Prophet&apos;s Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              32,
              'And while he yet spake with them, behold, the messenger came down unto him: and he said, Behold, this evil is of the Lord; what should I wait for the Lord any longer?'
            ),
            plain(
              33,
              'Then Elisha said, Hear ye the word of the Lord; Thus saith the Lord, To morrow about this time shall a measure of fine flour be sold for a shekel, and two measures of barley for a shekel, in the gate of Samaria.'
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The messenger arrives before the king, carrying news of the siege. His first words reveal despair: "This evil is of the Lord; what should I wait for the Lord any longer?" The king has reached the place of giving up. He cannot see beyond the walls of Samaria. He cannot see beyond the famine. He cannot see beyond his own empty hands.',
        },
        {
          kind: 'commentary',
          html:
            'But Elisha hears. And Elisha speaks. Even in the midst of the king&apos;s despair, a word comes: "To morrow about this time shall a measure of fine flour be sold for a shekel." Abundance is coming. The reversal is not far off. But the king cannot hear it yet. A messenger will scoff at this word. An officer will be trampled in the gate. And Israel will learn—again—that the word of the Lord stands, even when all visible hope is gone.',
        },
        {
          kind: 'christ',
          id: '6-christ-remnant',
          title: 'Christ Connection — The Word That Stands',
          html:
            'The promise Elisha speaks—that famine will turn to plenty in a single day—seems impossible while the siege lasts. But it is the nature of God&apos;s word that it does not bend to visible circumstances. "My word... shall not return unto me void, but it shall accomplish that which I please" (Isaiah 55:11). In the New Testament, Jesus faces a hungry crowd and feeds five thousand with five loaves and two fish. A physical impossibility becomes evidence of a deeper reality: that the word of the One who feeds all creation can satisfy any hunger. When we are surrounded by famine, Christ calls us to trust in a provision that transcends what we can see.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a siege. The walls may be high, the hunger real, the darkness complete. But the word of the Lord stands. Elisha speaks it while the king rages, while the people starve, while the city writhes in despair. Your role is not to make the word come true. Your role is to hear it, to trust it, and to wait for the One who keeps His word.',
        },
        {
          kind: 'reflection',
          id: 'word-stands',
          prompt:
            'What promise of God do you find hardest to believe when circumstances suggest it cannot be true? How might trusting God&apos;s word, rather than your circumstances, change the way you wait?',
        },
      ],
    },
  ],
};
