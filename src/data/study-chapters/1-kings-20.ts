import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 20 — Ben-hadad's Wars: God's Power Over Nations
 *
 * King Ben-hadad of Syria lays siege to Samaria with a coalition of 32 allied
 * kings, demanding Ahab surrender his treasures, wives, and children. Ahab agrees
 * to the first demand but refuses the second. War erupts. A prophet tells Ahab that
 * the Lord will give him victory: "Hereby thou shalt know that I am the Lord."
 * Israel defeats the Syrians so thoroughly that 100,000 die in one day, and another
 * 27,000 perish when the wall of Aphek collapses. Ben-hadad surrenders and humbles
 * himself before Ahab. Moved by false mercy, Ahab spares Ben-hadad's life and makes
 * a covenant with him. A prophet immediately rebukes Ahab through a parable: a man
 * entrusted with a prisoner lets him escape, and the consequence is death. "Because
 * thou hast let go out of thy hand a man whom I appointed to utter destruction,
 * therefore thy life shall go for his life." Partial obedience is disobedience.
 * God will use even a broken king to display His power, but the covenant we break
 * with heaven cannot be repaired by human compassion.
 */
export const KINGS_1_20: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 20,

  estimatedMinutes: { beginner: 4, intermediate: 10, deep: 14 },
  intros: [
    'Ahab is not a good king. He has married Jezebel, who leads him into the worship of Baal. He has built an altar to a foreign god in Samaria. Yet in this chapter, God demonstrates His power not because Ahab deserves it, but because His name is at stake. Ben-hadad, the king of Syria, comes with overwhelming force — 32 allied kings at his side, a siege laid against the capital of Israel. The situation appears hopeless. But the Lord has other plans.',
    'This is a chapter about victory, mercy, and the danger of partial obedience. Ahab will win a battle he could not possibly have won. He will extend mercy to an enemy who came to destroy him. And yet, in that mercy, he will commit a sin so grave that a prophet will pronounce his own death as the consequence. In the story of 1 Kings 20, we see the tension between human compassion and divine command — and we learn that when God decrees destruction, mercy becomes betrayal.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 20',
    quote:
      'God demonstrated His power through Ahab&apos;s victory, yet Ahab&apos;s mercy on Ben-hadad violated God&apos;s judgment. The prophet&apos;s word stands: "Because thou hast let go out of thy hand a man whom I appointed to utter destruction, therefore thy life shall go for his life." Partial obedience is full disobedience.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 20 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-solomon-reign',
      kind: 'study',
      source: 'Sefaria',
      label: 'Solomon&apos;s Reign and Temple',
      url: 'https://www.sefaria.org/1_Kings.1',
      description: 'Solomon&apos;s ascension to the throne and his building of the first temple.',
    },
    {
      id: 'israel-museum-solomonic',
      kind: 'museum',
      source: 'Israel Museum',
      label: 'Solomonic Period Artifacts',
      url: 'https://www.imj.org.il/',
      description: 'Museum collection of objects from Solomon&apos;s era revealing 10th-century Iron Age culture.',
    },
    {
      id: 'iaa-solomon-period',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeology of the Solomonic Period',
      url: 'https://www.antiquities.org.il/',
      description: 'Excavation evidence for urban centers and building projects attributed to Solomon.',
    },
  ],

  sections: [
    /* ─── 1 Kings 20:1–11 — Ben-hadad's Demands ──────────────────────── */
    {
      ref: '1 Kings 20:1–11',
      title: 'The Siege and the Demand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'And Ben-hadad the king of Syria gathered all his host together: and there were thirty and two kings with him, and horses, and chariots: and he went up and besieged Samaria, and warred against it.'),
            plain(2, 'And he sent messengers to Ahab king of Israel into the city, and said unto him, Thus saith Ben-hadad,'),
            plain(3, 'Thy silver and thy gold is mine; thy wives also and thy children, even the goodliest, are mine.'),
            plain(4, 'And the king of Israel answered and said, My lord, O king, according to thy saying, I am thine, and all that I have.'),
            plain(5, 'And the messengers came again, and said, Thus speaketh Ben-hadad, saying, Although I have sent unto thee, saying, Thou shalt deliver me thy silver, and thy gold, and thy wives, and thy children;'),
            plain(6, 'Yet I will send my servants unto thee to morrow about this time, and they shall search thine house, and the houses of thy servants; and it shall come to pass, that whatsoever is pleasant in thine eyes, they shall put it in their hand, and take it away.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k20-arameans-siege',
          html:
            'Ben-hadad brings horses and chariots—the ancient equivalent of overwhelming force. Syria surrounds Samaria, and the city is besieged with maximum pressure. The enormity of the threat prepares us for God&apos;s deliverance. Impossible odds reveal where faith must rest.[res:sefaria-solomon-reign][res:israel-museum-solomonic][res:iaa-solomon-period]',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(7, 'Then the king of Israel called all the elders of the land, and said, Mark, I pray you, and see how this man seeketh a quarrel: for he sent unto me for my wives, and for my children, and for my silver, and for my gold; and I denied him not.'),
            plain(8, 'And all the elders and all the people said unto him, Hearken not unto him, nor consent.'),
            plain(9, 'Wherefore he said unto the messengers of Ben-hadad, Tell my lord the king, All that thou didst send for to thy servant at the first I will do: but this thing I cannot do. And the messengers departed, and brought him word again.'),
            plain(10, 'And Ben-hadad sent unto him, and said, The gods do so unto me, and more also, if the dust of Samaria shall suffice for handfuls for all the people that follow me.'),
            plain(11, 'And the king of Israel answered and said, Tell him, Let not him that girdeth on his harness boast himself as he that putteth it off.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'siege-coalition',
          html:
            'Ben-hadad commands a coalition of 32 kings — a confederation of power unprecedented in scale. The siege of Samaria has the appearance of irresistible military force. Ahab is greatly outnumbered. The situation appears genuinely hopeless.',
        },
        {
          kind: 'commentary',
          id: 'escalation',
          html:
            'Notice the escalation of demands. First, Ben-hadad asks for silver, gold, wives, and children. Ahab agrees immediately. But the second demand is more humiliating: Ben-hadad will send his servants to search Ahab&apos;s house and take whatever they please. This is not a military demand — it is an assertion of utter dominance, a reduction of Ahab&apos;s sovereignty to nothing.',
        },
        {
          kind: 'commentary',
          id: 'elders-counsel',
          html:
            'Ahab consults the elders of Israel, and they urge him to refuse. "Hearken not unto him, nor consent." There is wisdom in recognizing the moment when further submission becomes surrender of all dignity. The difference between prudent compromise and total capitulation matters.',
        },
        {
          kind: 'hebrew',
          id: 'ben-hadad-name',
          title: 'בֶּן־הֲדַד — Ben-hadad',
          script: 'בֶּן־הֲדַד',
          translit: '<strong>Ben-hadad</strong> · "Son of Hadad" (the storm god)',
          description:
            'Ben-hadad&apos;s name itself is a claim to divine power. Hadad was the Syrian storm god, bringer of rain and military victory. Ben-hadad presents himself as the chosen son of divine power. Yet this chapter will demonstrate that his power, great as it is, is no match for the God of Israel.',
        },
        {
          kind: 'carry',
          html:
            'We face moments when capitulation seems easier than confrontation. The pressure is overwhelming, the threat immense, and surrender would at least bring temporary peace. Yet there are lines that, once crossed, make us no longer ourselves. Ahab&apos;s refusal of the second demand shows moral clarity: there are battles worth fighting, not because we will win, but because surrendering would destroy what we are meant to protect.',
        },
        {
          kind: 'reflection',
          id: 'ben-hadad-siege',
          prompt: 'When have you faced pressure to surrender something non-negotiable — your dignity, your principles, or your authority? How did you find the courage to say no?',
        },
      ],
    },

    /* ─── 1 Kings 20:12–21 — The First Victory ──────────────────────── */
    {
      ref: '1 Kings 20:12–21',
      title: 'The Prophet&apos;s Word: Victory Decreed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(12, 'And it came to pass, when Ben-hadad heard this message, as he was drinking, he and the kings in the pavilions, that he said unto his servants, Set yourselves in array. And they set themselves in array against the city.'),
            plain(13, 'And, behold, there came a prophet unto Ahab king of Israel, saying, Thus saith the Lord, Hast thou seen all this great multitude? behold, I will deliver it into thine hand this day; and thou shalt know that I am the Lord.'),
            plain(14, 'And Ahab said, By whom? And he said, Thus saith the Lord, By the young men of the princes of the provinces. Then he said, Who shall order the battle? And he answered, Thou.'),
            plain(15, 'Then he numbered the young men of the princes of the provinces, and they were two hundred and thirty and two: and after them he numbered all the people, even all the children of Israel, being seven thousand.'),
            plain(16, 'And they went out at noon. But Ben-hadad was drinking himself drunk in the pavilions, he and the kings, the thirty and two kings that helped him.'),
            plain(17, 'And the young men of the princes of the provinces went out first; and Ben-hadad sent out, and they told him, saying, There are men come out of Samaria.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k20-prophets-word',
          html:
            'Two prophecies, both true, but with different weight. The first promises victory without condition; the second critiques the king&apos;s folly. Both voices speak for God, but faith must choose which wisdom to follow. Truth sometimes comes in competing calls.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(18, 'And he said, Whether they come out for peace, take them alive; or whether they come out for war, take them alive.'),
            plain(19, 'So these young men of the princes of the provinces came out of the city, and the army which followed them.'),
            plain(20, 'And they slew every one his man: and the Syrians fled; and Israel pursued them: and Ben-hadad the king of Syria escaped on an horse with the horsemen.'),
            plain(21, 'And the king of Israel went out, and smote the horses and chariots, and slew the Syrians with a great slaughter.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k20-prophets-word-2',
          html:
            'Two prophets deliver word after word—the first speaks of victory, the second calls the king foolish. The parallel prophecies test Ahab&apos;s faith. Both speak truth, but only one promises salvation. The king must choose whose voice to follow.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
          ],
        },
        {
          kind: 'commentary',
          id: 'prophet-word',
          html:
            'A prophet comes to Ahab before the battle and gives him a word from the Lord: "I will deliver it into thine hand this day; and thou shalt know that I am the Lord." This is not about Ahab&apos;s merit or his righteousness. It is about God&apos;s name. God will demonstrate His power precisely in a situation where human power is insufficient. The victory will make clear that only God can save.',
        },
        {
          kind: 'commentary',
          id: 'young-men-princes',
          html:
            'The text specifies that the initial attack will be led by "the young men of the princes of the provinces" — a force of only 232 men, followed by 7,000 of Israel&apos;s army. Against 32 allied kingdoms with horses and chariots, these numbers seem absurd. And yet this is exactly the point: no military advantage will account for what is about to happen. Only God&apos;s hand will explain it.',
        },
        {
          kind: 'commentary',
          id: 'ben-hadad-drunk',
          html:
            'Ben-hadad and the kings feast and drink in their pavilions, utterly confident in their superiority. The contrast could not be clearer: while the enemy carouses, Ahab mobilizes. While Ben-hadad assumes his overwhelming numbers guarantee victory, he has not accounted for the God of Israel. Confidence without humility invites disaster.',
        },
        {
          kind: 'carry',
          html:
            'God uses impossible circumstances to demonstrate His power. When the situation is hopeless, when human strength fails, that is when the work of God becomes unmistakable. We do not see God&apos;s hand in our natural competence — only in what we could not possibly accomplish alone.',
        },
        {
          kind: 'reflection',
          id: 'prophet-victory',
          prompt: 'Has there been a time in your life when circumstances seemed impossible, yet God worked in a way that made His presence unmistakable? What did you learn about His power in that moment?',
        },
      ],
    },

    /* ─── 1 Kings 20:22–30 — "Their Gods Are Gods of the Hills" ────────── */
    {
      ref: '1 Kings 20:22–30',
      title: 'Victory on the Plain: God Reigns Everywhere',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(22, 'And the prophet came to the king of Israel, and said unto him, Go, strengthen thyself: and mark, and see what thou doest: for at the return of the year the king of Syria will come up against thee.'),
            plain(23, 'And the servants of Ben-hadad said unto him, Their gods are gods of the hills; therefore they were stronger than we; but let us fight against them in the plain, and surely we shall be stronger than they.'),
            plain(24, 'And do this thing, Take the kings away, every man out of his place, and put captains in their rooms:'),
            plain(25, 'And number thee an army, like the army that thou hast lost, horse for horse, and chariot for chariot: and we will fight them in the plain, and surely we shall be stronger than them. And he hearkened unto their counsel, and did so.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k20-battle-covenants',
          html:
            'The first battle is lost; but now comes the second—the king learns that keeping covenant brings victory.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(26, 'And it came to pass at the return of the year, that Ben-hadad numbered the Syrians, and went up to Aphek, to fight against Israel.'),
            plain(27, 'And the children of Israel were numbered, and were all present, and went against them: and the children of Israel pitched before them like two little flocks of kids; but the Syrians filled the country.'),
            plain(28, 'And there came a man of God, and spake unto the king of Israel, and said, Thus saith the Lord, Because the Syrians have said, The Lord is God of the hills, but he is not God of the valleys, therefore will I deliver all this great multitude into thine hand, and ye shall know that I am the Lord.'),
            plain(29, 'And they pitched one over against the other seven days. And so it was, that in the seventh day the battle was joined: and the children of Israel slew of the Syrians an hundred thousand footmen in one day.'),
            plain(30, 'But the rest fled to Aphek, into the city; and there a wall fell upon them that were left; and he slew twenty and seven thousand: and Ben-hadad fled, and came into the city, into an inner chamber.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gods-hills',
          html:
            'Ben-hadad&apos;s advisors explain their defeat: "Their gods are gods of the hills; therefore they were stronger than we." They interpret the loss not as a failure of strategy, but as a failure of cosmic power. The gods of Israel dominate the hills and mountains, they reason, and so the Syrians were defeated in the hills. But if they fight on the plain, the balance will shift. This is ancient polytheistic logic: gods have jurisdictions, domains, territories. But the God of Israel has no such limits.',
        },
        {
          kind: 'commentary',
          id: 'plain-battle',
          html:
            'The Syrians reorganize their forces and return the following year to fight on the plain at Aphek. The numbers are again in their favor — the text says they "filled the country" while Israel appeared like "two little flocks of kids." Yet again, the outcome is determined not by numbers but by the word of God. Israel slaughters 100,000 Syrians in a single day. The remaining soldiers flee to the city of Aphek, and a wall collapses, killing another 27,000.',
        },
        {
          kind: 'hebrew',
          id: 'cherem-destruction',
          title: 'חֵ֫רֶם — Cherem: "Devoted Destruction"',
          script: 'חֵ֫רֶם',
          translit: '<strong>Cherem</strong> · devoted destruction; sacred war; curse',
          description:
            'Ben-hadad has been marked for cherem — devoted destruction — by the God of Israel. This is not merely military defeat. This is the sacred consequence of standing against the Lord. Cherem appears throughout Israel&apos;s holy war traditions: nations marked for destruction are given over completely to the judgment of God. That Ben-hadad survives this chapter is a mercy he will not deserve when his ultimate reckoning comes.',
        },
        {
          kind: 'christ',
          id: 'christ-all-dominion',
          title: 'Christ Connection — The King Whose Authority Knows No Bounds',
          html:
            'The God of Israel is Lord of the hills and the valleys, the mountains and the plains. His dominion knows no territory where He is weaker, no domain where His power fades. This truth reaches its fulfillment in Christ, who declared: "All power is given unto me in heaven and in earth" (Matthew 28:18). Christ is not a god of certain spheres — He is sovereign everywhere. When we walk with Him, we are not trusting in a local deity with limited jurisdiction. We are trusting in the King of all creation, whose authority extends to every circumstance, every place, every moment of our lives.',
        },
        {
          kind: 'carry',
          html:
            'We sometimes unconsciously limit God&apos;s power to certain areas of our lives: He is strong in my faith, but not in my finances. He cares about my soul, but not about my daily struggles. He is present in church, but not in my workplace. But the God revealed in Scripture is the God of the hills and the valleys — everywhere. He claims dominion over every domain, and invites us to trust His power in all of it.',
        },
        {
          kind: 'reflection',
          id: 'gods-hills-2',
          prompt: 'In what area of your life have you unconsciously limited God&apos;s power or authority? How might it change your faith to recognize His absolute dominion there?',
        },
      ],
    },

    /* ─── 1 Kings 20:31–43 — Ahab Spares Ben-hadad ──────────────────────── */
    {
      ref: '1 Kings 20:31–43',
      title: 'Mercy That Becomes Betrayal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(31, 'And his servants said unto him, Behold now, we have heard that the kings of the house of Israel are merciful kings: let us, I pray thee, put sackcloth on our loins, and ropes upon our heads, and go out to the king of Israel: peradventure he will save thy life.'),
            plain(32, 'So they girded sackcloth on their loins, and put ropes on their heads, and came to the king of Israel, and said, Thy servant Ben-hadad saith, I pray thee, let me live. And he said, Is he yet alive? he is my brother.'),
            plain(33, 'Now the men did diligently observe whether any thing would come from him, and did quickly catch it: and they said, Thy brother Ben-hadad. Then said he, Go ye, bring him. So Ben-hadad came forth unto him; and he caused him to come up into the chariot.'),
            plain(34, 'And Ben-hadad said unto him, The cities which my father took from thee, I will restore; and thou shalt make streets for thee in Damascus, as my father made in Samaria. Then said Ahab, I will let thee go with this covenant. So he made a covenant with him, and let him go.'),
            plain(35, 'And a certain man of the sons of the prophets said unto his fellow by the word of the Lord, Smite me, I pray thee. And the man refused to smite him.'),
            plain(36, 'Then said he unto him, Because thou hast not obeyed the voice of the Lord, behold, as soon as thou art departed from me, a lion shall slay thee. And as soon as he was departed from him, a lion met him, and slew him.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k20-lion-judgment',
          html:
            'The prophet speaks God&apos;s word, and the word carries judgment. One man refuses to strike—disobedience. A lion slays him. Another man strikes—obedience. He wounds the prophet. Words of judgment are not spoken casually; they carry the weight of God&apos;s intention. The prophet walks into Ahab&apos;s path to deliver the word he has been given.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(37, 'Then he found another man, and said, Smite me, I pray thee. And the man smote him, so that in smiting he wounded him.'),
            plain(38, 'So the prophet departed, and waited for the king by the way, and disguised himself with ashes upon his face.'),
            plain(39, 'And as the king passed by, he cried unto the king: and he said, Thy servant went out into the midst of the battle; and, behold, a man turned aside, and brought a man unto me, and said, Keep this man: if by any means he be missing, then shall thy life be for his life, or else thou shalt pay a talent of silver.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-20-mid-39',
          html:
            '<p>A royal shift: the narrative moves from succession planning to operational rule.</p>',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(40, 'And as thy servant was busy here and there, he was gone. And the king of Israel said unto him, So shall thy judgment be; thyself hast decided it.'),
            plain(41, 'And he hasted, and took the ashes away from his face; and the king of Israel discerned him that he was of the prophets.'),
            plain(42, 'And he said unto him, Thus saith the Lord, Because thou hast let go out of thy hand a man whom I appointed to utter destruction, therefore thy life shall go for his life, and thy people for thy people.'),
            plain(43, 'And the king of Israel went to his house heavy and displeased.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'merciful-kings',
          html:
            'Ben-hadad&apos;s servants understand that Israel has a reputation for mercy. They count on Ahab&apos;s compassion, putting on sackcloth and ropes in the classic gestures of submission and supplication. Ben-hadad himself comes to Ahab in humility. And Ahab, seeing his defeated enemy in this posture, is moved. He calls Ben-hadad his "brother" — an expression of fraternity, of willingness to treat him as an equal rather than as a conquered enemy.',
        },
        {
          kind: 'commentary',
          id: 'covenant-breach',
          html:
            'Ahab makes a covenant with Ben-hadad, promising to restore cities that Ben-hadad&apos;s father had taken from Israel, and allowing Ben-hadad to set up trading streets in Damascus. Ahab restores Ben-hadad to life and power. But there is something Ahab has forgotten, or deliberately ignored: God has marked Ben-hadad for "utter destruction" — cherem, devoted destruction. The king of Israel has just undone the judgment of God.',
        },
        {
          kind: 'commentary',
          id: 'prophet-parable',
          html:
            'A prophet approaches Ahab disguised in ashes and delivers a parable. He claims to be a soldier who was entrusted with a prisoner during battle. He became distracted, and the prisoner escaped. For this failure, he tells the king, he is forfeit — his life for the prisoner&apos;s life. Ahab agrees immediately: "So shall thy judgment be; thyself hast decided it." The king of Israel has just sentenced himself.',
        },
        {
          kind: 'carry',
          html:
            'We often imagine that our compassion is always good, that mercy is always the right choice. But there is a mercy that disobeys, a kindness that betrays. When God has decreed a judgment, when He has made clear what justice requires, mercy that overrides that decree becomes complicity with evil. Ahab&apos;s mercy on Ben-hadad was not virtue — it was the refusal to accept God&apos;s authority. He thought himself more merciful than God, more just in his compassion. He was wrong. And the consequence would be his own death.',
        },
        {
          kind: 'reflection',
          id: 'ahab-mercy',
          prompt: 'Have you ever confused your own compassion with wisdom, or refused a hard obedience because you thought you could be kinder than you were asked to be? What did that cost you?',
        },
      ],
    },

    /* ─── 1 Kings 20:42 — The Prophet's Verdict ─────────────────────────── */
    {
      ref: '1 Kings 20:42',
      title: 'Partial Obedience Is Disobedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(42, 'And he said unto him, Thus saith the Lord, Because thou hast let go out of thy hand a man whom I appointed to utter destruction, therefore thy life shall go for his life, and thy people for thy people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'appointed-destruction',
          html:
            'The prophet&apos;s judgment is clear and terrible. Ben-hadad has been "appointed to utter destruction" by the Lord. Ahab&apos;s release of him, his covenant with him, his restoration of his power — all of this is a direct contradiction of God&apos;s will. It matters not that Ahab&apos;s motive was mercy. It matters that the Lord had decreed otherwise. Partial obedience — obeying when it is convenient, when it feels right, when it aligns with our compassion — is no obedience at all.',
        },
        {
          kind: 'commentary',
          id: 'life-for-life',
          html:
            '"Thy life shall go for his life, and thy people for thy people." The consequence extends beyond Ahab to his entire nation. This echoes the principle established with Saul: when a king disobeys, the cost is paid by the whole people. Ahab&apos;s partial obedience will bring catastrophe upon Israel.',
        },
        {
          kind: 'hebrew',
          id: 'ahab-name',
          title: 'אַחְאָב — Ahab',
          script: 'אַחְאָב',
          translit: '<strong>Ahab</strong> · possibly "father&apos;s brother" or compound form',
          description:
            'Ahab&apos;s name carries no inherent meaning of the rebellion he will embody. Yet the text has made abundantly clear that Ahab is a king who cannot fully obey. Even when God grants him victory, when a prophet speaks directly to him, when the path is made plain — Ahab chooses his own way. He is a king who would rather be merciful on his own terms than obedient on God&apos;s.',
        },
        {
          kind: 'christ',
          id: 'christ-full-obedience',
          title: 'Christ Connection — The One Who Fully Obeyed',
          html:
            'Ahab was given a clear command and a clear consequence for disobedience. Yet he chose to follow his own judgment. Christ was given the hardest command of all: "Not my will, but thine, be done" (Luke 22:42). He faced the agony of Gethsemane, the cross, the separation from His Father. And He did not negotiate. He did not ask for mercy on His own terms. He said to the Father: I will do what You have decreed, whatever the cost. Where Ahab failed, Christ fully obeyed. Where Ahab spared his enemy and brought judgment on his people, Christ took the judgment upon Himself so that His people might live.',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture that celebrates nuance, that teaches us to follow the spirit of a law rather than its letter, to make exceptions where our hearts tell us to. But there is a radical freedom in simple obedience — in saying "yes" to God, in accepting His judgment even when it contradicts our own sense of what is right. Ahab lost everything because he could not fully surrender his own will. What might we gain if we did?',
        },
        {
          kind: 'reflection',
          id: 'partial-obedience',
          prompt: 'Where in your life are you practicing partial obedience — following God where it is convenient, but holding back where it costs something? What would full obedience look like?',
        },
      ],
    },
  ],
};
