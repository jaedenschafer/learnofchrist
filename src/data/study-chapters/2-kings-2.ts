import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 2 — Elijah Taken Up; Elisha Receives the Mantle
 *
 * On the day of Elijah's departure, Elisha clings to his master and demands
 * a double portion of his spirit. At the Jordan, Elijah's mantle becomes
 * the bridge between the old prophet and the new: it parts the waters, it falls,
 * it is taken up, and it works again. The chariot of fire arrives not as a
 * reward, but as a sign — the prophetic office is real, it is God's, and it
 * passes from one generation to the next. Then Elisha heals the bitter waters
 * of Jericho, and the darker side of prophetic authority emerges when youths
 * mock the prophet and judgment falls.
 */
export const KINGS_2_2: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 2,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 22 },
  intros: [
    "Elijah&apos;s time has come. The Lord is about to take him to heaven, and he knows it. But Elisha, his apprentice and heir, will not let him go. Three times Elijah tells Elisha to stay behind — at Gilgal, at Bethel, at Jericho. Three times Elisha refuses. &quot;As the Lord liveth, and as thy soul liveth, I will not leave thee.&quot; The bond between master and student is unbreakable.",
    "What follows is a portrait of spiritual succession. As they approach the Jordan, Elijah takes his mantle — the garment that has become the symbol of the prophetic office — and uses it to part the waters. They cross on dry ground. And then, in a moment of cosmic drama, a chariot of fire and horses of fire separate them, and Elijah is taken up in a whirlwind. But he does not leave Elisha empty-handed. The mantle falls. Elisha picks it up. And when he returns to the Jordan and strikes the waters with that same garment, the waters part again. The mantle works. The office has passed. The succession is confirmed.",
  ],

  bottomShare: {
    label: 'Share 2 Kings 2',
    quote:
      'The mantle fell from Elijah to Elisha. The prophetic office, once confirmed by fire, was now in new hands — and the work of healing and authority continued.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 2 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 2:1–6 — The Journey: Three Refusals and One Refusal ──── */
    {
      ref: '2 Kings 2:1–6',
      title: 'The Journey to Jordan — A Refusal That Will Not Break',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when the Lord would '),
                hy('take up Elijah', 'elijah-taken-up'),
                t(' into heaven by a whirlwind, that Elijah went with Elisha from Gilgal.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Elijah said unto Elisha, Tarry here, I pray thee; for the Lord hath sent me to Bethel. And Elisha said, As the Lord liveth, and as thy soul liveth, I will not leave thee. So they went down to Bethel.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the sons of the prophets that were at Bethel came forth to Elisha, and said unto him, Knowest thou that the Lord will take away thy master from thy head today? And he said, Yea, I know it; hold ye your peace.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Elijah said unto him, Elisha, tarry here, I pray thee; for the Lord hath sent me to Jericho. And he said, As the Lord liveth, and as thy soul liveth, I will not leave thee. So they came to Jericho.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the sons of the prophets that were at Jericho came to Elisha, and said unto him, Knowest thou that the Lord will take away thy master from thy head today? And he said, Yea, I know it; hold ye your peace.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Elijah said unto him, Tarry, I pray thee, here; for the Lord hath sent me to Jordan. And he said, As the Lord liveth, and as thy soul liveth, I will not leave thee. And they two went on.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'elijah-taken-up',
          html:
            'The narrative opens with the knowledge that Elijah will be taken up — not through death, but through a whirlwind. In all of Scripture, only two people leave the earth without dying: Enoch in Genesis 5, and now Elijah. This is not an ending; it is a translation. The Greek word used in the Septuagint for Enoch\'s translation is used by the writer to Hebrews when affirming that "Enoch was not; for God took him" (Hebrews 11:5). To be taken up is to be received by God, to be carried into heaven while still living.',
        },
        {
          kind: 'commentary',
          id: 'refusal-trinity',
          html:
            'Elijah tells Elisha to stay behind — not once, but three times. At Gilgal, at Bethel, at Jericho. And three times Elisha refuses with a solemn oath: "As the Lord liveth, and as thy soul liveth, I will not leave thee." It is covenantal language. Elisha is not clinging to Elijah for comfort or safety. He is clinging because he knows that something is being transferred — the prophetic mantle, the authority, the spirit that empowered his master. To leave would be to miss the inheritance.',
        },
        {
          kind: 'commentary',
          id: 'prophets-witness',
          html:
            'At both Bethel and Jericho, the sons of the prophets greet them with the same knowledge: "The Lord will take away thy master from thy head today." They are not warning Elisha of some secret. This is known, anticipated, prepared for. Elisha\'s answer is quietly authoritative: "Yea, I know it; hold ye your peace." He is not interested in commiseration. He is focused on what is about to happen.',
        },
        {
          kind: 'carry',
          html:
            'There are moments in life when we must refuse to let go — not out of fear or selfishness, but out of a deeper knowing that something sacred is being given. Elisha\'s refusal is not disobedience; it is fidelity. He sees that Elijah is not sending him away to protect him, but testing him, teaching him that a true successor must want the inheritance more than comfort, more than rest.',
        },
        {
          kind: 'reflection',
          id: 'refusal-to-leave',
          prompt: 'When have you refused to let go of something or someone because you knew something sacred was being given? What was the cost of holding on, and what was the reward?',
        },
      ],
    },

    /* ─── 2 Kings 2:7–10 — The Mantle and the Double Portion ───────────── */
    {
      ref: '2 Kings 2:7–10',
      title: 'The Mantle and the Double Portion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 7,
              spans: [
                t('And fifty men of the sons of the prophets went, and stood to view afar off: and they two stood by Jordan.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Elijah took his '),
                hy('mantle', 'mantle-symbol'),
                t(', and wrapped it together, and smote the waters: and they were divided hither and thither, so that they two went over on dry ground.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it came to pass, when they were gone over, that Elijah said unto Elisha, Ask what I shall do for thee, before I be taken away from thee. And Elisha said, I pray thee, let a '),
                hy('double portion of thy spirit', 'double-portion'),
                t(' be upon me.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he said, Thou hast asked a hard thing: nevertheless, if thou see me when I am taken from thee, it shall be so unto thee; but if not, it shall not be so.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'mantle-symbol',
          title: 'Adderet — "The Mantle"',
          script: 'אַדֶּ֫רֶת',
          translit: '<strong>Adderet</strong> · a garment or mantle; a prophet\'s distinctive robe',
          description:
            'The mantle is not merely clothing. Throughout the Old Testament, it becomes the symbol of the prophetic office itself. When Elijah casts his mantle upon Elisha earlier (1 Kings 19:19), he is not offering him a coat — he is offering him the prophetic calling. Now, as Elijah departs, the mantle becomes the instrument by which the office is transferred. It is wrapped, used to strike the waters, and then falls. And when Elisha picks it up, he does not become Elijah\'s equal — he becomes Elijah\'s successor.',
        },
        {
          kind: 'commentary',
          id: 'waters-parted',
          html:
            'Before Elijah ascends, he performs one final act as the leading prophet of Israel: he parts the Jordan. The waters divide, and they cross on dry ground. This is not the first time the Lord has divided water for His people — it echoes the Red Sea crossing, the initial entry into Canaan. By this sign, Elijah confirms that the hand of the Lord is with him to the very end.',
        },
        {
          kind: 'hebrew',
          id: 'double-portion',
          title: 'Pil\'ah Shnayim — "A Double Portion"',
          script: 'פִּי־שְׁנַ֫יִם',
          translit: '<strong>Pil\'ah Shnayim</strong> · a double portion; the inheritance of the firstborn',
          description:
            'In Hebrew law, the firstborn son receives a double portion of the father\'s inheritance. Elisha is asking not for twice the miraculous power of Elijah — that is impossible — but for the birthright. He is asking to be recognized as the primary heir to the prophetic office. To receive a double portion is to receive the mantle of leadership, the responsibility to guide Israel in God\'s ways.',
        },
        {
          kind: 'commentary',
          id: 'hard-thing',
          html:
            'Elijah\'s response is striking: "Thou hast asked a hard thing." It is hard because it is precisely what cannot be granted by the will of a man alone — not even by Elijah. The Spirit of the Lord works through whom He chooses. But Elijah then adds a condition: "If thou see me when I am taken from thee, it shall be so unto thee; but if not, it shall not be so." Elisha must witness the translation. He must see with his own eyes that the prophetic mantle is real, that it belongs to the Lord, not to the man. Only then can it pass to him.',
        },
        {
          kind: 'carry',
          html:
            'When we ask for spiritual inheritance, we are asking for something that cannot be earned, only received. And what we receive depends not on our worthiness but on our ability to witness and recognize God\'s work. Elisha must see. He must understand. He must be transformed by beholding what the Lord is doing. That vision becomes the foundation for everything Elisha will do as a prophet.',
        },
        {
          kind: 'reflection',
          id: 'double-portion-ask',
          prompt: 'What spiritual inheritance or calling have you asked for? What has it required you to witness or understand in order to receive it?',
        },
      ],
    },

    /* ─── 2 Kings 2:11–14 — The Chariot of Fire and the Mantle Falls ───── */
    {
      ref: '2 Kings 2:11–14',
      title: 'The Chariot of Fire — The Office Confirmed, The Mantle Passes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And it came to pass, as they still went on, and talked, that, behold, there appeared a '),
                hp('chariot of fire, and horses of fire', 'chariot-fire'),
                t(', and parted them both asunder; and Elijah went up by a whirlwind into heaven.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Elisha saw it, and he cried, '),
                hp('My father, my father', 'father-cry'),
                t(', the chariot of Israel, and the horsemen thereof. And he saw him no more: and he took hold of his own clothes, and '),
                hg('rent them', 'rent-clothes'),
                t(' in two pieces.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('He took up also the '),
                hy('mantle of Elijah', 'mantle-taken'),
                t(' that fell from him, and went back, and stood by the bank of Jordan;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he took the mantle of Elijah that fell from him, and smote the waters, and said, Where is the Lord God of Elijah? and the waters were divided hither and thither: and Elisha went over.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'chariot-fire',
          title: 'Rekev Esh — "Chariot of Fire"',
          script: 'רֶ֫כֶב אֵשׁ',
          translit: '<strong>Rekev Esh</strong> · chariot of fire; the heavenly vehicle',
          description:
            'The chariot of fire is the sign of divine presence and power. It appears at the moment of Elijah\'s departure, neither to reward nor to punish, but to authenticate what is happening. This is not death. This is translation — the removal of a prophet into heaven itself. The fire symbolizes the holiness of the office, the burning presence of the Lord that consumes and purifies. The chariot is the vehicle by which heaven takes back its own.',
        },
        {
          kind: 'commentary',
          id: 'chariot-fire-context',
          html:
            'The appearance of the chariot of fire is sudden, dramatic, and terminal. It does not come as a gentle sign. It comes as a parting — "parted them both asunder." Elijah is taken. The separation is total. And in that moment of cosmic drama, the prophetic succession is sealed. Elisha does not follow. He does not try to hold on. He sees, he grieves, he takes up the mantle that falls, and he turns to do the work.',
        },
        {
          kind: 'commentary',
          id: 'father-cry',
          html:
            'Elisha cries out, "My father, my father, the chariot of Israel, and the horsemen thereof!" The title "my father" is a title of honor and spiritual lineage. Elijah is not his biological father but his spiritual one. And his cry includes the phrase "the chariot of Israel, and the horsemen thereof" — a phrase that in later tradition comes to refer to the prophets themselves, the spiritual defenders and guides of Israel. In losing Elijah, Elisha feels that Israel has lost a defender. The nation is now left without its prophet.',
        },
        {
          kind: 'commentary',
          id: 'rent-clothes',
          html:
            'Elisha tears his clothes — the sign of deepest grief. He has witnessed the translation. He has seen the office leave the earth. And now, in the next moment, he must step into what has been left for him. The tearing is not hesitation. It is acknowledgment of the weight of what he has inherited.',
        },
        {
          kind: 'hebrew',
          id: 'mantle-taken',
          title: 'Adderet Elijah — "The Mantle of Elijah"',
          script: 'אַדֶּ֫רֶת אֵלִיָּֽהוּ',
          translit: '<strong>Adderet Elijah</strong> · Elijah\'s mantle; the passed-down office',
          description:
            'The mantle falls. Elisha picks it up. This is the central symbolic act of the chapter. The mantle is not given in ceremony. It is not handed over formally. It falls, naturally, at the moment of translation, and Elisha takes it. In this act, the prophetic office passes from one generation to the next. Elisha does not ask if he has the authority. He does not wait for confirmation. He takes the mantle and goes back to the Jordan.',
        },
        {
          kind: 'commentary',
          id: 'mantle-works',
          html:
            'Then comes the test. Elisha strikes the waters with the mantle of Elijah, and cries out, "Where is the Lord God of Elijah?" The question is both declaration and prayer. It is not "Does the Lord God of Elijah still exist?" but "Where is He? Let Him show Himself." And the waters divide. The mantle works. Not because Elisha is suddenly powerful, but because the office is real, the Lord is with it, and the succession is confirmed.',
        },
        {
          kind: 'christ',
          id: 'christ-succession',
          title: 'Christ Connection — The Ascension and the Outpouring',
          html:
            'The image of Elijah taken up in a whirlwind prefigures the Ascension of Christ. In Acts 1:9, the disciples watch Jesus ascend into heaven. And in Acts 2, after the Ascension, the Spirit is poured out at Pentecost. The prophetic mantle passes from Christ to His Church. What the disciples do after the Ascension — what Peter does at the gates of the Temple, what Stephen does before his martyrdom, what the apostles do in healing and preaching — is all done in the name of Jesus, in the power of the Spirit He sent. The mantle of the prophetic office continues through the Church. The work does not end with the master\'s departure; it is only beginning with the Spirit\'s arrival.',
        },
        {
          kind: 'carry',
          html:
            'When spiritual mentors leave our lives — through departure, death, or change — we are called to pick up the mantle. Not to become them, but to carry the work forward. The grief is real. The tearing of clothes is real. But the work continues, and the Lord God who stood with our teachers stands with us.',
        },
        {
          kind: 'reflection',
          id: 'chariot-fire',
          prompt: 'Who in your spiritual life has been a "father" or "mother"? When they have departed, what mantle have you been called to pick up?',
        },
      ],
    },

    /* ─── 2 Kings 2:15–22 — The Waters Healed ────────────────────────── */
    {
      ref: '2 Kings 2:15–22',
      title: 'Jericho\'s Bitter Waters Made Sweet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('And when the sons of the prophets which were to view at Jericho saw him, they said, The spirit of Elijah doth rest on Elisha. And they came to meet him, and bowed themselves to the ground before him.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And they said unto him, Behold now, there are with thy servants fifty strong men: let them, I pray thee, go, and seek thy master: lest peradventure the Spirit of the Lord hath taken him up, and cast him upon some mountain, or into some valley. And he said, Ye shall not send.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And when they urged him till he was ashamed, he said, Send. They sent therefore fifty men; and they sought three days, but found him not.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And when they came again to him, (for he tarried at Jericho,) he said unto them, Did I not say unto you, Go not?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the men of the city said unto Elisha, Behold, I pray thee, the situation of this city is pleasant, as my lord seeth: but the water is naught, and the ground barren.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he said, Bring me a new cruse, and put salt therein. And they brought it to him.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he went forth unto the spring of the waters, and cast the salt in there, and said, Thus saith the Lord, I have '),
                hg('healed these waters', 'waters-healed'),
                t('; there shall not be from thence any more death nor barren land.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('So the waters were healed unto this day, according to the saying of Elisha which he spake.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spirit-rests',
          html:
            'The first confirmation comes from the sons of the prophets: "The spirit of Elijah doth rest on Elisha." They see it. They know it. The mantle has descended. But Elisha does not accept their praise or act upon it. When they ask to search for Elijah, thinking perhaps the Spirit has taken him to a mountain or valley, Elisha refuses. He knows what happened. He will not allow the prophetic energy to be wasted on searching for the past. The work ahead demands attention.',
        },
        {
          kind: 'commentary',
          id: 'waters-healing-context',
          html:
            'Elisha\'s first miracle is not a spectacular one. He does not raise the dead or call down fire. Instead, he heals the waters of Jericho. The city is pleasant in situation, but the water is poisoned, barren — bringing death to the land. This is precisely the situation when Elisha becomes the leading prophet of Israel: a land that looks good but is slowly dying from corruption at its source.',
        },
        {
          kind: 'commentary',
          id: 'salt-cruse',
          html:
            'The healing is done with salt in a new cruse. Salt is a preservative, a sign of covenant, a sign of the Lord\'s favor ("Ye are the salt of the earth"). A new cruse — new vessel, unblemished — suggests something that has never been used for unclean purposes. The combination of salt, newness, and the word of the Lord produces healing. This is not magic. This is the power of divine speech.',
        },
        {
          kind: 'hebrew',
          id: 'waters-healed',
          title: 'Rapa\'ah — "Healed"',
          script: 'רָפָֽא',
          translit: '<strong>Rapa\'ah</strong> · to heal; to make whole; to restore',
          description:
            'The verb rapa\'ah appears throughout Scripture as the action of divine restoration. The Lord is the healer. When Elisha casts the salt and speaks, he is not acting in his own power, but in the name and authority of the God who heals. The waters are not merely cleansed; they are healed, made whole, restored to their original purpose of sustaining life.',
        },
        {
          kind: 'commentary',
          id: 'unto-this-day',
          html:
            'The narrative closes with a remarkable statement: "So the waters were healed unto this day, according to the saying of Elisha which he spake." This suggests that the healing persisted, that the waters of Jericho continued to be pure and life-giving in the time when this account was written. The sign of Elisha\'s authority was not a one-time marvel but a permanent transformation. The word spoken by the prophet endured.',
        },
        {
          kind: 'carry',
          html:
            'We all live in places where the water is "naught" — where what should sustain us has been corrupted. Sometimes it is the culture we inhabit, sometimes it is the family systems we come from, sometimes it is the institutions we trust. But the healing does not come through force or through our own strength. It comes when a person filled with the Spirit speaks the word of the Lord — salt, covenant, divine speech — into that bitter source. And the healing persists. It becomes the new reality.',
        },
        {
          kind: 'reflection',
          id: 'waters-naught',
          prompt: 'Where have you experienced waters that were "naught" — something that should have been life-giving but was instead poisoned or barren? How have you seen healing come to that place?',
        },
      ],
    },

    /* ─── 2 Kings 2:23–25 — The Bears and the Darkness of Judgment ──────── */
    {
      ref: '2 Kings 2:23–25',
      title: 'The Youths and the Bears — The Prophet\'s Authority Defended',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 23,
              spans: [
                t('And he went up from thence unto Bethel: and as he was going up by the way, there came forth little children out of the city, '),
                hy('mocked him', 'mocked-context'),
                t(', saying, Go up, thou bald head; go up, thou bald head.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And he turned back, and looked on them, and '),
                hg('cursed them', 'cursed-bears'),
                t(' in the name of the Lord. And there came forth two she bears out of the wood, and tare '),
                hg('forty and two', 'forty-two-number'),
                t(' children of them.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he went from thence to mount Carmel, and from thence he returned to Samaria.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'mocked-context',
          title: 'Naar — "Youth" or "Young Man"',
          script: 'נַעַר',
          translit: '<strong>Naar</strong> · a youth; a young man; a servant',
          description:
            'The Hebrew word "naar" does not necessarily mean "little children," though many English translations render it that way. It more often refers to young men or youths — possibly even young adults. What appears to be childish mockery is likely a more sinister form of organized incitement. These are young people from Bethel, the city that has become an idolatrous center in Israel, who are deliberately mocking the prophet of the Lord. Their insult targets Elisha\'s physical appearance (his baldness) as a way of attacking the authority he represents.',
        },
        {
          kind: 'commentary',
          id: 'bethel-significance',
          html:
            'Bethel is not a neutral location. It was once a place where Jacob met the Lord at the ladder (Genesis 28). But by the time of Elisha, Bethel has become a center of idolatry — Jeroboam I set up a golden calf there to keep Israel from returning to Jerusalem for worship (1 Kings 12:29). The mockery of Elisha at Bethel is therefore not merely personal disrespect. It is a deliberate act of rebellion against YHWH and His prophet, in a city that has already turned away from true worship.',
        },
        {
          kind: 'commentary',
          id: 'cursed-bears',
          html:
            'Elisha does not respond to personal insult by shaming them or sending them away. Instead, he turns and curses them in the name of the Lord. The judgment that follows — two she bears emerging from the wood and killing forty-two of them — is severe and shocking to modern readers. But it serves a critical function in the narrative: it establishes that the prophetic office is real, that it comes from God, and that those who willfully mock it face judgment. The authority cannot be undermined through ridicule. The name of the Lord defends it.',
        },
        {
          kind: 'hebrew',
          id: 'forty-two-number',
          title: 'Arba\'im u-Shnayim — "Forty-two"',
          script: 'אַרְבָּעִים וּשְׁנַ֫יִם',
          translit: '<strong>Arba\'im u-Shnayim</strong> · forty and two; a specific number of judgment',
          description:
            'The number forty-two appears elsewhere in Scripture as a number associated with judgment and wilderness wandering (Israel\'s forty-two camps in the desert). Here, the specific number suggests that this is not random violence but divine judgment. The bears kill a precise number — not all the youths, not a handful, but forty-two. The precision indicates that what happens is within God\'s will, not mere accident or animal instinct.',
        },
        {
          kind: 'commentary',
          id: 'judgment-hard-teaching',
          html:
            'This passage is deeply troubling to modern sensibilities, and it should be. It represents a hard edge of prophetic authority: those who willfully reject and mock the prophet of the Lord face judgment. This is not a pattern for behavior — it is a historical narrative about the cost of rebellion in Israel. Elisha does not go seeking trouble. The youths come out of the city to mock him deliberately. The judgment falls not because the prophet is thin-skinned or easily offended, but because to mock the Lord\'s prophet is to mock the Lord Himself. And in a covenant people, that carries consequences.',
        },
        {
          kind: 'carry',
          html:
            'This passage teaches us something difficult: that words matter, that authority matters, and that rebellion against God\'s messengers is not a light thing. But it does not mean we should curse people who offend us or wish judgment on those who mock. Rather, it calls us to reverence. It asks us to understand that when we mock what is holy, we are playing with something we do not control. The judgment here belongs to God, not to us. Our role is to speak the truth and trust God\'s justice.',
        },
        {
          kind: 'reflection',
          id: 'mockery-judgment',
          prompt: 'Have you witnessed what happens when people willfully mock or reject what is holy? How do you hold both compassion for people and respect for the authority of God?',
        },
      ],
    },
  ],
};
