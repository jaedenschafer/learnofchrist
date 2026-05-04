import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 23 — Balaam's First Two Oracles
 *
 * Balak, king of Moab, hires the prophet Balaam to curse Israel.
 * Instead, God compels Balaam to bless them. The chapter contains
 * some of the Bible's most stunning affirmations about God's
 * faithfulness and the irreversibility of His blessing.
 */
export const NUMBERS_23: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 23,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 13 },
  intros: [
    'Balaam is a hired prophet with a gift for seeing and speaking. King Balak of Moab pays him to curse Israel—a people Balak fears. But when Balaam opens his mouth, God overrides his will. Instead of curses, blessings pour out. The chapter shows the impossibility of reversing what God has blessed.',
    `For every believer who has felt cursed by circumstance, rejected, or condemned—this chapter whispers a radical truth: you cannot be cursed if God has blessed you. Your circumstances may be hard. Your reputation may be damaged. But the blessing God has declared over you cannot be reversed by any voice but His own. This is Balaam's uncomfortable discovery: he is a tool in God\'s hand, not a master of his own words.`,
  ],

  opener: {
    matchArtist: /watercolor|tissot/i,
    matchTitle: /balaam|moab|blessing|curse/i,
    caption: 'Balaam Sees Israel from the Heights',
  },

  bottomShare: {
    label: 'Share Numbers 23',
    quote:
      'How shall I curse, whom God hath not cursed? God is not a man, that he should lie. Behold, I have received commandment to bless: and he hath blessed; and I cannot reverse it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 23 · Study Guide',
  },

  sections: [
    /* ─── Numbers 23:1–12 — The First Oracle ───────────────────────────── */
    {
      ref: 'Numbers 23:1–12',
      title: 'The First Oracle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('And Balaam said unto Balak, Build me here '),
                hg('seven altars', 'c-altars'),
                t(', and prepare me here seven bullocks and seven rams.'),
              ],
            },
            {
              number: 2,
              spans: [t('And Balak did as Balaam had spoken; and Balak and Balaam offered on every altar a bullock and a ram.')],
            },
            {
              number: 3,
              spans: [
                t('And Balaam said unto Balak, Stand by thy burnt offering, and I will go: '),
                hg('peradventure the LORD will come to meet me', 'c-the-lord'),
                t(': and whatsoever he sheweth me I will tell thee. And he went to a high place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altars',
          html:
            'Balaam builds seven altars—a full number, a complete number. He performs the ritual actions that belong to blessing, not cursing. But here is the deep irony: Balaam does not control what God will do. He can build the altar, but he cannot build the word. God alone speaks the blessing.',
        },
        {
          kind: 'commentary',
          id: 'c-the-lord',
          html:
            'Balaam is hired to curse, yet he seeks God with the language of divination—waiting for the LORD to meet him, to reveal His will. Balaam is more pious than his employer wants. He cannot force God to cooperate with human plans.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 4,
              spans: [
                t('And God met Balaam: and he said unto him, I have prepared seven altars, and I have offered upon every altar a bullock and a ram.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the LORD '),
                hg('put a word', 'c-put-word'),
                t(` in Balaam\'s mouth, and said, Return unto Balak, and thus thou shalt speak.`),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-put-word',
          html:
            `God <em>puts</em> the word in Balaam's mouth. This is not Balaam choosing his words. This is divine possession of his speech—God rendering Balaam helpless to say anything but what He commands. Balaam is a instrument, not an author.`,
        },
        {
          kind: 'carry',
          html:
            'When you feel trapped between two kingdoms—your boss demanding one thing, your conscience demanding another; your culture saying one thing, your faith saying another—remember Balaam. God is not helpless. He has a thousand ways to redirect the words that come out of your mouth. He can make you bless when you were hired to curse. He can use you against your own ambitions, for His glory.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 6,
              spans: [t('And he returned unto him, and, lo, he stood by his burnt offering, he and all the princes of Moab.')],
            },
            {
              number: 7,
              spans: [
                t('And he took up his parable, and said, Balak the king of Moab hath brought me from Aram, out of the mountains of the east, saying, Come, curse me Jacob, and come, defy Israel.'),
              ],
            },
            {
              number: 8,
              spans: [
                t(''),
                hp('How shall I curse, whom God hath not cursed?', 'christ-blessed'),
                t(' and how shall I defy, whom the LORD hath not defied?'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-blessed',
          title: 'Christ Connection — Blessed Before the Foundation',
          html:
            `Balaam voices one of Scripture\'s greatest paradoxes. You cannot curse what God has blessed. Paul later anchors all of Christian assurance in this truth: "If God be for us, who can be against us?" (Rom. 8:31). And deeper: "For whom he did foreknow, he also did predestinate… What shall we then say to these things? If God be for us, who can be against us?" (Rom. 8:29–31). The believer is blessed not by earthly circumstance but by election—by the eternal counsel of God. That blessing cannot be reversed. Balaam discovers what the cross makes irreversible: the Father\'s "Yes" spoken over His people.`,
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 9,
              spans: [
                t('For from the top of the rocks I see him, and from the hills I behold him: lo, '),
                hg('the people shall dwell alone', 'c-alone'),
                t(', and shall not be reckoned among the nations.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Who can count the dust of Jacob, and the number of the fourth part of Israel? '),
                hp('Let me die the death of the righteous', 'c-death-righteous'),
                t(', and let my last end be like his!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-alone',
          html:
            `Israel is set apart—separated, distinct. Not by military might or cultural superiority, but by God\'s choosing. The very isolation Balak fears—Israel standing apart—is a mark of blessing, not weakness. To be chosen by God often means to be set apart, misunderstood, even hated by the world.`,
        },
        {
          kind: 'christ',
          id: 'c-death-righteous',
          title: 'A Righteous Death',
          html:
            `Balaam is so struck by the blessing he\'s forced to pronounce that he asks for it himself. "Let me die the death of the righteous." This is the language of envy—not malice, but a pagan prophet glimpsing something he wants: to die in the faith, to end as the righteous end. It is a wanting without having. He sees the blessing and cannot claim it for himself. The chapter does not mock him for this; it mourns him.`,
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 11,
              spans: [t('And Balak said unto Balaam, What hast thou done unto me? I took thee to curse mine enemies, and, behold, thou hast blessed them altogether.')],
            },
            {
              number: 12,
              spans: [
                t('And he answered and said, Must I not take heed to speak that which the LORD hath put in my mouth?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-must-take-heed',
          html:
            `Balaam's answer is not defiant. It is resigned, almost helpless. Of course he must speak what God has put in his mouth. What choice does a hired prophet have against the word of the living God? This is his helplessness and his honor.`,
        },
        {
          kind: 'reflection',
          id: 'first-oracle',
          prompt:
            `Where in your life have you felt trapped between two masters? What would it look like to trust that God can put words in your mouth, even when you\'re under pressure?`,
        },
      ],
    },

    /* ─── Numbers 23:13–26 — The Second Oracle ──────────────────────────── */
    {
      ref: 'Numbers 23:13–26',
      title: 'The Second Oracle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 13,
              spans: [
                t('And Balak said unto him, Come, I pray thee, with me unto another place, from whence thou mayest see them: thou shalt see but the utmost part of them, and shalt not see them all: and curse me them from thence.'),
              ],
            },
            {
              number: 14,
              spans: [t('And he brought him into the field of Zophim, to the top of Pisgah, and built seven altars, and offered a bullock and a ram on every altar.')],
            },
            {
              number: 15,
              spans: [
                t('And he said unto Balak, Stand here by thy burnt offering, while I meet the LORD yonder.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-another-place',
          html:
            `Balak's strategy is to try again from another vantage point—perhaps a partial view will yield a partial curse, a more manageable magic. But God\'s blessing is not a formula that yields to technique or position. You cannot curse Israel from any angle, any hill, any altar.`,
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 16,
              spans: [t('And the LORD met Balaam, and put a word in his mouth, and said, Go again unto Balak, and say thus.')],
            },
            {
              number: 17,
              spans: [t('And when he came to him, behold, he stood by his burnt offering, and the princes of Moab with him. And Balak said unto him, What hath the LORD spoken?')],
            },
            {
              number: 18,
              spans: [
                t('And he took up his parable, and said, Rise up, Balak, and hear; hearken unto me, thou son of Zippor:'),
              ],
            },
            {
              number: 19,
              spans: [
                t(''),
                hy('God is not a man, that he should lie', 'hebrew-god-not-man'),
                t('; neither the '),
                hy('son of man', 'hebrew-son-man'),
                t(', that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-god-not-man',
          title: 'God Is Not a Man',
          script: 'לא אנוש אלהים',
          translit: '<strong>lo enosh Elohim</strong> · God is not human',
          description:
            'Balaam declares the nature of God itself: God does not operate by human logic, human emotion, or human limitation. When God speaks, His word does not depend on circumstance or mood. It is eternally binding.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-son-man',
          title: 'Son of Man',
          script: 'בן אדם',
          translit: '<strong>ben adam</strong> · son of humanity',
          description:
            'The contrast with "son of man" makes the difference stark. Humans change their minds. Humans lie. Humans renege. God does not. What He has said, He will do.',
        },
        {
          kind: 'carry',
          html:
            'In a world where promises are broken, commitments shifted, covenants rewritten—where even your own will changes day to day—God speaks a word and holds it. "Hath he said, and shall he not do it?" This is the nerve of faith. God does not lie like men lie. God does not repent like men repent. What He has said about you, He means. What He has blessed, stays blessed.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 20,
              spans: [
                t('Behold, '),
                hg('I have received commandment to bless', 'c-commandment-bless'),
                t(': and he hath blessed; and I cannot reverse it.'),
              ],
            },
            {
              number: 21,
              spans: [t('He hath not beheld iniquity in Jacob, neither hath he seen perverseness in Israel: the LORD his God is with him, and the shout of a king is among them.')],
            },
            {
              number: 22,
              spans: [t('God brought them out of Egypt; he hath as it were the strength of an unicorn.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-commandment-bless',
          html:
            'This is the turning point of the whole chapter. Balaam has been given a <em>commandment</em> to bless. Not a request, not a suggestion—a commandment from God Himself. And once God has blessed, once the commandment to bless has been given, Balaam declares: "I cannot reverse it." Not "I will not," but "I cannot." The word of God is not something a prophet can undo.',
        },
        {
          kind: 'commentary',
          id: 'c-strength-unicorn',
          html:
            `The "strength of a unicorn" (Hebrew: <em>re\'em</em>) refers likely to the wild ox or aurochs—a symbol of untamable power. Israel is not a weak people Balak can easily curse. They are a strong people under God\'s protection. Their strength is not their own, but the LORD's.`,
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 23,
              spans: [
                t('Surely there is no enchantment against Jacob, neither is there any divination against Israel: according to this time it shall be said of Jacob and of Israel, What hath God wrought!'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Behold, the people shall rise up as a great lion, and lift up himself as a young lion: he shall not lie down until he eat of the prey, and drink the blood of the slain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-enchantment',
          html:
            `There is no magic strong enough to curse what God has blessed. No divination can reverse His blessing. This would be scandalous to a pagan world where magic and counter-magic were the fabric of spiritual reality. Balaam declares instead: blessing is not a power game. It is God\'s will, and it stands.`,
        },
        {
          kind: 'carry',
          html:
            'In your own life, you may feel cursed. By your circumstances, by your past, by the words spoken over you in shame or anger. But Balaam says plainly: there is no enchantment against the blessed. If God has blessed you—and the Scripture says He has, in Christ—then the curse has no power. It has no standing. What you have heard spoken against yourself cannot stand against what God has already spoken. The comfort of this chapter is that you cannot curse what God has blessed, no matter how hard you try, no matter how much others agree with the curse.',
        },

        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 25,
              spans: [
                t('And Balak said unto Balaam, Neither curse them at all, nor bless them at all.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But Balaam answered and said unto Balak, Told not I thee, saying, All that the LORD speaketh, that I must do?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-neither-nor',
          html:
            `Balak's desperation is clear. If he can\'t get a curse, he\'ll settle for neutrality. But God does not offer neutrality. The chosen are blessed. The blessing is active, alive, unavoidable. Balaam reminds Balak of what he said at the beginning: he must speak what the LORD commands. There is no middle ground with God.`,
        },
        {
          kind: 'reflection',
          id: 'second-oracle',
          prompt:
            'What has God blessed in your life that feels difficult to receive? What would it mean to stop trying to reverse His blessing through doubt or self-condemnation?',
        },
      ],
    },

    /* ─── The Irrevocability of Blessing ──────────────────────────────────── */
    {
      ref: 'The Theme of Numbers 23',
      title: 'The Blessing That Cannot Be Reversed',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-irrevocable',
          title: 'Christ Connection — The Irrevocable Gift',
          html:
            `Paul draws a direct line from Balaam\'s discovery to the certainty of Christian salvation: "For the gifts and calling of God are without repentance" (Rom. 11:29). The Greek word is <em>ametameleton</em>—not to be regretted, not to be revoked. God does not change His mind about His blessing. In Romans 8:31–39, Paul builds the entire architecture of assurance on this: God has blessed the elect, and that blessing cannot be reversed by circumstance, by demonic power, by law, by accusation, or by our own doubt. What Balaam was forced to see—that blessing spoken by God cannot be cursed—is the foundation of the believer\'s peace. You are blessed in Christ, and no voice, no circumstance, no enemy can undo that.`,
        },
        {
          kind: 'commentary',
          id: 'c-voice',
          html:
            `One of the hardest truths in Numbers 23 is that the voice most likely to curse you is your own. You will tell yourself you are not blessed. You will rehearse your failures, your sins, your unworthiness. But Balaam teaches us: your voice cannot reverse God\'s blessing. The commandment to bless has already been given. You cannot undo what God has declared.`,
        },
        {
          kind: 'carry',
          html:
            `Balaam\'s poetry is gorgeous—some of the most stirring lines in the Bible flow from a pagan prophet forced to speak blessings he didn\'t choose to give. That\'s the whole point. The blessing doesn\'t depend on the vessel. It depends on the God who speaks it. And what He speaks, stands. In your own story, wherever you feel accused, diminished, or cursed by life—remember Balaam, remember the LORD who overrides human will, and remember that the blessing on Israel is the blessing on you if you are in Christ. No enchantment can touch it. No divination can undo it. What God has blessed, no one can curse.`,
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'whole-chapter',
          prompt:
            `Balaam couldn\'t curse what God had blessed. What blessing has God spoken over your life that you\'ve been tempted to curse or undo? How might you speak His blessing back to yourself this week?`,
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-23',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 23',
      url: 'https://www.sefaria.org/Numbers.23',
      description: 'Text and commentary on Balaam&apos;s first two oracles blessing Israel despite Balak&apos;s attempts to hire a curse.',
    },
    {
      id: 'sefaria-balaam-oracles',
      kind: 'study',
      source: 'Sefaria',
      label: 'Balaam&apos;s Oracles (23–24)',
      url: 'https://www.sefaria.org/Numbers.23-24',
      description: 'Complete text of the four Balaamide oracles and their theological significance in blessing Israel.',
    },
    {
      id: 'balaam-blessing-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Numbers 23 ↔ Romans 4:20–21',
      url: 'https://intertextual.bible/search?q=Numbers+23+Romans+4+20',
      description: 'Connection between Balaam&apos;s declaration that God cannot lie and Paul&s theology of faith in God&apos;s promises.',
    },
  ],
};
