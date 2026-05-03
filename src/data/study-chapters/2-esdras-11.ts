import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Esdras 11 — The Vision of the Eagle
 *
 * In the aftermath of the temple&apos;s destruction, Ezra receives a symbolic vision:
 * a great eagle with twelve wings and three heads rises from the sea and rules over
 * the whole earth with oppression and injustice. The wings rule in succession and
 * fall. The heads consume one another in fury. The vision portrays empire&apos;s brief
 * dominion and inevitable judgment. In chapter 12, the angel interprets the eagle
 * as the fourth kingdom Daniel saw—the vision of empires under God&apos;s scrutiny,
 * their strength temporary, their doom certain. For the Christian reader, the eagle
 * stands as a type of worldly power that will be overcome when Christ returns to
 * establish a kingdom of peace that shall never pass away.
 */
export const SECOND_ESDRAS_11: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 11,

  estimatedMinutes: { 5: 4, 10: 11, 15: 14 },
  intros: [
    'In a symbolic vision that echoes Daniel 7, Ezra sees a great eagle rise from the sea—twelve wings that rule one after another, three heads that consume each other in conflict. The eagle holds dominion over all the earth, yet the vision itself subverts its power: the angel tells Ezra the eagle&apos;s reign is not eternal. History is not the triumph of empires; it is the unfolding of God&apos;s judgment upon them.',
    'The chapter calls you to perceive the times as God perceives them. Worldly power dazzles and terrifies. But through Ezra&apos;s eyes, you see behind the curtain. The eagle rises from chaos, rules with violence, and falls at God&apos;s command. Your calling is not to be mastered by what the world calls ultimate, but to remember: only God&apos;s kingdom is permanent. Only Christ&apos;s reign is eternal. The rest—no matter how vast—is already measured for the grave.',
  ],

  opener: {
    matchTitle: /eagle|vision|rome/i,
    matchArtist: /tissot|dore|rembrandt/i,
    caption: 'An Empire&apos;s Shadow',
  },

  sections: [
    /* ─── The Eagle Rising from the Sea ───────────────────────────────────── */
    {
      ref: '2 Esdras 11:1–3',
      title: 'The Eagle Rising from the Sea',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'And I saw in the night visions, and, behold, there came up from the sea an eagle, which had upon her wings twelve feathers, and upon her head three crests, and her wings were spread over all the earth, and all the winds of the air were subject unto her, and the clouds gathered themselves together to her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-sea-chaos',
          html:
            'The eagle does not descend from heaven or arise from the land. She comes <em>from the sea</em>—the realm of chaos and upheaval, just as the beasts in Daniel rose from the waters of tumult. The sea in Scripture is the domain of disorder, the place where God&apos;s creation is still contested. That the eagle emerges from there tells you something crucial: worldly empires, for all their pomp, are rooted in chaos, not order. They are not the foundation of the world; they are upheavals upon it.',
        },
        {
          kind: 'hebrew',
          id: 'esdras11-yam',
          title: 'Yam—The Sea',
          script: 'יָם',
          translit: '<strong>Yam</strong> · sea; chaos; the abyss',
          description: 'In ancient Near Eastern mythology, Yam is the chaos-waters, the force opposed to creation. In Scripture, the sea is where God&apos;s sovereignty is most tested, where the depths hide what humans cannot see. That kingdoms rise from the sea means they are upheavals, not permanences. God rules the waters; He permits the eagle to rise, and He will command her to sink.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(3, 'And I looked, and behold, all the earth was afraid of her. And behold, she set her nest in the earth; and there was held dominion over all the earth and over all the winds thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-fear',
          html:
            'The eagle&apos;s very appearance terrifies. She spreads her wings over the earth; all the winds obey her. Her dominion is visible, enforced, undeniable. She nests on the land as if to make clear: <em>I have taken your world</em>. The earth is afraid. And here is the vision&apos;s power: it names fear as the first response to empire. But fear is not the last word. The vision will dismantle the eagle, and in doing so, it unmasks what the world calls ultimate power as temporary and doomed.',
        },
        {
          kind: 'carry',
          html:
            'What kingdoms in your world command fear and absolute obedience? What structures or powers make the whole earth tremble? The vision of the eagle teaches you to see through the terror. Yes, she is vast. Yes, she rules. But her dominion is not eternal. God permits her; God will judge her. Your fear can be converted to faith when you remember that the One who sees the eagle—the angel, and behind him, God Himself—has already decreed her end.',
        },
      ],
    },

    /* ─── Twelve Wings, Three Heads ──────────────────────────────────────── */
    {
      ref: '2 Esdras 11:4–12',
      title: 'Twelve Wings, Three Heads',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(4, 'For I saw that she had distributed the wings unto herself; and behold, there came up with her twelve feathered wings, which were very small and next unto her; and there were beside them other eight small feathers upon her wings.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-wings-divide',
          html:
            'The eagle has not one pair of wings but twelve feathered wings. And here is the first sign of her undoing: the wings are <em>distributed</em>—fragmented. The eagle&apos;s power is not unified; it is divided into succession. Each wing will have its turn to rule. Already, in the very structure of her dominion, we see impermanence written into the design. She is not one eternal power but a succession of temporary regimes, each rising and falling in turn. No single wing holds forever.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(5, 'And I looked, and behold, upon her right side there arose three crests, and behold, one of them was greater than the rest, and it was higher than the other twain; and it was mighty and strong, and it had great dominion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-three-heads',
          html:
            'But the eagle&apos;s most distinctive mark is her <em>three heads</em>. Heads are the seat of judgment and command. Three heads suggest competing powers, conflicted rule. One head grows mightier than the others, dominating for a time. But the very existence of three heads signals that power here is contested, unstable. A house divided against itself cannot stand forever. The heads will turn on one another, and in that self-consumption, the eagle&apos;s strength will be exhausted.',
        },
        {
          kind: 'artwork',
          matchTitle: /eagle|throne|dominion/i,
          matchArtist: /tissot/i,
          caption: 'Empire in its Height',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(7, 'And I beheld, and lo, she rose up upon her talons, and cried with a loud voice to all the earth, saying, Look not upon me, nor any that be like me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-cry',
          html:
            'The eagle cries out: "Look not upon me." This is the paradox of tyranny: it demands absolute submission while forbidding examination. The eagle wants dominion without scrutiny, obedience without question. But Ezra&apos;s vision is precisely that forbidden gaze—a seeing-through of the eagle&apos;s pretense. The angel is teaching you to do the same: to look, to perceive, to understand that what the world forbids—critical sight—is exactly what faith requires.',
        },
        {
          kind: 'carry',
          html:
            'Oppressive systems always demand that you stop looking. They say: "Accept. Obey. Do not question." But Ezra&apos;s vision is an act of permission—permission to look, to see, to interpret what worldly powers wish to hide. You have been given eyes to see through power&apos;s deceptions. Use them.',
        },
      ],
    },

    /* ─── Wings Rule and Fall ─────────────────────────────────────────────── */
    {
      ref: '2 Esdras 11:13–35',
      title: 'Wings Rule and Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(13, 'And I beheld, and, lo, one wing arose, and it held the dominion over all the earth. And so it was, that when it held the dominion the end of it came, and the place thereof appeared no more: then arose another wing, and held the dominion, and it reigned a long time.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-wing-succession',
          html:
            'This is the pattern of history as God sees it: one wing rises, claims dominion, and then <em>its end comes</em>. Another rises in its place, reigns for a time, then falls. There is a relentless succession, a turning of the wheel. The eagle imagines itself permanent, but the vision reveals the truth: each regime is temporary. Each wing holds power briefly, then vanishes. The cycle repeats. No single power ever truly "holds" anything; it merely borrows dominion for a season, then surrenders it to the next aspirant.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(29, 'And I looked, and, lo, as the time passed the feathers that followed were set in order upon the right side, that they might hold the dominion of the earth.'),
            plain(30, 'And I saw that some of them were set in order, but suddenly they vanished away.'),
            plain(31, 'And I looked, and, lo, the rest of the feathers of the wings appeared not: but there were only two feathers left in the wings of her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-feathers-fail',
          html:
            'The pattern accelerates. Wing after wing rises, promises dominion, and dissolves. Some feathers are set in order to rule—but "suddenly they vanish away." There is no grandeur in this, no glorious succession. It is rapid, almost comic: one moment a wing seems to be taking power, the next it is gone. By the time Ezra&apos;s vision reaches this point, most of the eagle&apos;s feathers have failed. Only two remain. What began as vast and terrible is now diminished, exhausted, near its end.',
        },
        {
          kind: 'artwork',
          matchTitle: /fall|ruin|decay/i,
          matchArtist: /dore/i,
          caption: 'The Dissolution of Power',
        },
        {
          kind: 'reflection',
          id: 'esdras11-wing-reflection',
          prompt: 'What powers or ambitions in your own life or your world seemed permanent but proved temporary? How does that memory reshape your faith?',
        },
      ],
    },

    /* ─── The Heads Consume Each Other ──────────────────────────────────────── */
    {
      ref: '2 Esdras 11:36–43',
      title: 'The Heads Consume Each Other',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(36, 'And I saw that the two feathers remaining also became divided from her; and they held the dominion of the earth. And I saw that there was no more wings: and behold, the three heads upon her rested.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-heads-emerge',
          html:
            'As the wings exhaust themselves, the three heads come to prominence. They are no longer hidden beneath the eagle&apos;s dominion but now openly contend for power. The eagle has devoured her own wings in the effort to sustain dominion. Now the three heads—the competing powers at the eagle&apos;s core—move toward each other not in alliance but in conflict.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(37, 'And I looked, and, lo, one of the heads that remained took unto itself all the earth, and had dominion thereupon with great oppression; and it held the dominion of the earth and of all things therein much longer time than the wings.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-head-dominion',
          html:
            'One head rises, absorbing what the wings could not hold. It rules with <em>great oppression</em>—the oppression here is active, deliberate, the violence of a power consolidating control through fear and force. This head seems to endure longer than the wings. But Ezra&apos;s vision is already moving toward its reckoning. The head&apos;s strength will prove as fleeting as the wings&apos;.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(38, 'And I looked, and, lo, the head that was upon the right side devoured the one that was upon the left side.'),
            plain(39, 'And I heard a voice which said unto me, Look before thee, and consider the thing that thou seest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-devouring',
          html:
            'The right head consumes the left. This is the eagle consuming herself. The angel invites Ezra—and through Ezra, you—to <em>look and consider</em>. What you are witnessing is not the strength of empires but their self-destruction. They do not fall because an external enemy defeats them; they fall because their own internal divisions, their own competing powers, turn against each other until the structure consumes itself from within. The angel commands you to perceive this clearly: empire devours itself.',
        },
        {
          kind: 'greek',
          id: 'esdras11-katalambano',
          title: 'Katalambano—To Consume, Seize, Overcome',
          script: 'κατακατάλαμβάνω',
          translit: '<strong>Katalambano</strong> · to seize, overtake, consume; to master completely',
          description: 'When the right head devours the left, the Greek word carries not merely eating but violent seizure—complete mastery, total absorption. The heads do not compromise or coexist; one annihilates the other. This is the logic of worldly power: conflict until one dominator remains. But even that dominator is temporary.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world where powers consume one another in the pursuit of absolute dominion. But you have been shown something those powers do not see: their self-destruction is already written in their nature. You do not need to fear the outcome. The eagle eats herself. History is not the triumph of empires; it is their self-consumption. Your task is to refuse to be consumed with them. Stand apart. Wait for the judgment.',
        },
      ],
    },

    /* ─── The Eagle's Reign and Its Justice ─────────────────────────────────── */
    {
      ref: '2 Esdras 11:44–45',
      title: 'The Eagle&apos;s Reign and Its Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(44, 'And I looked, and, lo, the head took the whole earth under its dominion, and bare rule in the same with much oppression; and it held the dominion of all things longer than ever the wings or feathers had done.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-oppression-reign',
          html:
            'In its final configuration, the eagle holds unified dominion. But this is dominion purchased by <em>oppression</em>. One head rules all, suppressing all rival claims with force. This is the logic of worldly power at its most naked: submission enforced through violence, order achieved through cruelty. The eagle may rule longer than any single wing or feather, but it rules by breaking every will but its own. This is the only kind of unity empire knows.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(45, 'And I looked, and, lo, the head became conscious, and ruled over the whole earth and brought all the earth into a great conspiracy against me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-consciousness',
          html:
            'The head "became conscious"—it <em>knows</em> what it is doing. The eagle&apos;s oppression is not accident or ignorance; it is deliberate. The head actively builds "a great conspiracy against me"—against God. The whole earth is drawn into rebellion against the divine order. What the eagle calls dominion is really apostasy. Her rule is the systemic refusal of God&apos;s sovereignty. And in that refusal, she has organized all the forces under her power—military, economic, spiritual—into a unified campaign against God&apos;s will.',
        },
        {
          kind: 'christ',
          id: 'esdras11-christ-overcome',
          title: 'Christ Connection—The Power That Overcomes',
          html:
            'In Revelation, Jesus says, "I have overcome the world" (John 16:33). The kingdoms that conspire against God, that organize oppression and violence into systems, are already conquered in Christ. He does not fight them with their own weapons. He conquers by truth, by resurrection, by the power of a love that cannot be destroyed. The eagle in her oppression imagines she is supreme. Christ, in His meekness, already holds the ultimate victory. His kingdom "will not be left to other people. It will break in pieces all these kingdoms and bring them to an end" (Daniel 2:44).',
        },
        {
          kind: 'reflection',
          id: 'esdras11-conspiracy',
          prompt: 'Where do you see the world organizing itself in rebellion against God? Where are you tempted to be part of that conspiracy? What would it mean to withdraw your allegiance from it?',
        },
      ],
    },

    /* ─── The Judgment and the Rising ──────────────────────────────────────────── */
    {
      ref: '2 Esdras 11:46–46',
      title: 'The Judgment Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(46, 'And it came to pass, that when I had thus spoken unto the eagle, the eagle also began to cry out with a loud voice, and said, My reign I will defend and maintain.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-eagle-defends',
          html:
            'In Ezra&apos;s presence, as the angel interprets, the eagle cries out in defiance: "My reign I will defend." This is the moment when empire becomes aware that it is being judged. The eagle hears the interpretation and tries to assert its permanence: <em>I will maintain</em>. But the very desperation of the cry reveals what Ezra&apos;s vision has already shown: the eagle is not eternal. It is being tested. It is being weighed. And the judgment is already in motion.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(47, 'And I was much afeared, and I swoon away: and I lay as one dead; and my flesh was discoloured; and my spirit was oppressed; and, lo, from beneath the earth there came a voice unto me, saying, Prepare thee, Ezra, and gird up thy loins; for I will speak unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras11-fear-and-word',
          html:
            'The vision overwhelms Ezra. He faints, his flesh becomes discolored, his spirit oppressed. But then a voice comes from beneath—from the depths, from the place where God&apos;s judgment originates. God speaks. The message is not condemnation for Ezra&apos;s fear; it is a call to strength: "Gird up thy loins." Ezra must be ready. There is more to hear. The vision of the eagle&apos;s dominion is only half the story. The other half—the judgment, the overthrow, the answer to the eagle&apos;s oppression—is yet to come in chapter 12. Ezra must prepare himself to receive it.',
        },
        {
          kind: 'artwork',
          matchTitle: /judgment|throne|heaven/i,
          matchArtist: /michelangelo|blake/i,
          caption: 'The Voice from the Depths',
        },
        {
          kind: 'carry',
          html:
            'When you see the world&apos;s power at its most terrible, when oppression seems victorious and the eagle cries out to defend her reign—that is when you hear the deepest call: <em>prepare</em>. God is already in motion. The judgment has already begun. You do not need to fear what the world does; you need to be ready for what God is about to do. Gird yourself. The vision continues, and God is about to answer the eagle&apos;s defiance with His own.',
        },
      ],
    },

    /* ─── The Voice from Heaven ──────────────────────────────────────────────── */
    {
      ref: '2 Esdras 11 Summary',
      title: 'The Voice from Heaven',
      blocks: [
        {
          kind: 'commentary',
          id: 'esdras11-summary',
          html:
            'Chapter 11 ends with Ezra still shaken, still afraid, but called to girdle himself for what comes next. The angel&apos;s interpretation is not finished. The eagle has been shown: its twelve wings in succession, its three heads in conflict, its final dominion built on oppression, its conspiracy against God. But the vision does not end in the eagle&apos;s power. It ends in Ezra&apos;s call to listen for the judgment. In chapter 12, the angel will explain: the eagle is the fourth kingdom Daniel saw, the empire that rules before the final age. And after the eagle—after Rome, after all the earthly powers—comes the Son of Man, coming with clouds of glory, whose kingdom shall have no end.',
        },
        {
          kind: 'christ',
          id: 'esdras11-christ-kingdom',
          title: 'Christ Connection—The Kingdom That Cannot Be Shaken',
          html:
            'Where the eagle rises from chaos, Christ comes from heaven. Where the eagle rules by oppression, Christ reigns by redemption. Where the eagle conspires against God, Christ fulfills God&apos;s will perfectly. The book of Revelation takes up this vision and shows its fulfillment: "The kingdoms of the world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever" (Revelation 11:15). The eagle in all her terror is already conquered. The Lion of the tribe of Judah has prevailed. The Lamb is the King of Kings. And those who belong to Him inherit an everlasting kingdom (Daniel 7:27).',
        },
        {
          kind: 'carry',
          html:
            'You live between the eagle&apos;s dominion and Christ&apos;s return. The world around you—political systems, economic powers, cultural forces—carries the eagle&apos;s mark: oppression, self-interest, the demand for absolute allegiance. But you have been shown what is hidden from the world: the eagle is temporary. The kingdoms of this world are already measured for the grave. Your loyalty, your hope, your allegiance belong to a kingdom "not of this world," a kingdom that is even now advancing to fill the earth. Do not be mastered by the eagle. Do not invest your hope in empires. The judgment has begun. The voice from heaven is calling. Prepare yourself to receive what comes next.',
        },
        {
          kind: 'reflection',
          id: 'esdras11-final',
          prompt: 'In the quiet of your own heart, where do you still bow before the eagle? Where has the world&apos;s power convinced you that it is ultimate? What would it mean to withdraw that allegiance today and place it solely on Christ, whose kingdom cannot be shaken?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And I saw in the night visions, and, behold, there came up from the sea an eagle, which had upon her wings twelve feathers, and upon her head three crests...And the Lord saith unto me, This eagle that thou sawest rising out of the sea is the kingdom that shall reign in the last days.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 11 · Study Guide',
    label: 'Share 2 Esdras 11',
  },

  hasHebrew: true,
};
