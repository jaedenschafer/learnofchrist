import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 20 — A hard chapter. Miriam dies at Kadesh. The people thirst; God
 * tells Moses to SPEAK to the rock. Moses STRIKES it twice in anger. Water comes
 * anyway, but God bars Moses from the Promised Land for "not believing me, to
 * sanctify me in the eyes of the children of Israel." The waters of Meribah
 * ("strife"). Edom refuses passage. Aaron dies on Mount Hor; his garments
 * transferred to Eleazar. 29 verses.
 *
 * Hebrew wordplay: *Meribah* (strife) echoes the earlier waters of Meribah from
 * Exodus 17, where Moses STRUCK the rock the first time. Here striking again
 * misrepresents the gospel — Christ was struck once for our sin; we only need
 * SPEAK to Him in prayer. Kadesh (holy) wordplay: the holiest place is where
 * God's holiness is most plainly violated.
 *
 * Theology: The transfer of Aaron's priestly garments to Eleazar shows the
 * priesthood continues after death — but Christ's priesthood never transfers
 * because He lives forever (Heb 7:24). God's consequence is severe, yet Moses
 * still leads the people to the border. Hold both his failure and God's mercy.
 */
export const NUMBERS_20: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 20,

  intros: [
    'Numbers 20 is where the wilderness finally breaks Moses. After forty years of leading a rebellious people — complaining about food, water, leadership — the people thirst again at Kadesh. God tells Moses to SPEAK to the rock. But Moses, in anger, STRIKES it twice, and says words that put himself and Aaron at the center instead of God\'s holiness. Water comes anyway, but the consequence is final: neither Moses nor Aaron will enter the Promised Land.',
    'The chapter holds two kinds of grief at once. It is a story of genuine failure — Moses did not believe, did not sanctify God\'s name in the sight of the people. Yet God still leads them forward, still provides water, still continues the priesthood. The rock that Moses struck twice echoes back to Exodus 17, where he struck it once. That first striking pictured Christ struck once for our sin (Isa 53:4). The second striking was never meant to happen — and that\'s why God\'s response is so severe. The gospel was misrepresented. But even in judgment, God\'s character shines: He does not abandon the people. He only bars their leader — who became their greatest argument against God\'s holiness — from leading them into the land.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /meribah|water|rock|moses.*rod/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Numbers 20',
    quote:
      'When the people complained for water, God told Moses to SPEAK to the rock. But Moses, in anger, STRUCK it twice. Water came anyway, but God told Moses he would not enter the Promised Land, because he did not believe and did not sanctify God\'s name before the people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 20 · Study Guide',
  },

  sections: [
    /* ─── Numbers 20:1 — Miriam Dies ──────────────────────────────────── */
    {
      ref: 'Numbers 20:1',
      title: 'Miriam Dies at Kadesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('Then came the children of Israel, even the whole congregation, into the '),
                hy('desert of Zin', 'c-zin'),
                t(' in the first month: and the people abode in '),
                hy('Kadesh', 'hebrew-kadesh'),
                t('; and '),
                hg('Miriam died there', 'c-miriam'),
                t(', and was buried there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-zin',
          html:
            'Zin is the barren place where the people will again demand water. It is forty years after they first left Egypt. A generation has died in the wilderness. The momentum of history is finally catching up.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kadesh',
          title: 'Kadesh — &ldquo;holy&rdquo;',
          script: 'קָדֵשׁ',
          translit: '<strong>kadesh</strong> · holy, set apart',
          description:
            'The irony is sharp: the holiest-named place becomes where God\'s holiness is most plainly violated. Miriam — who once sang God\'s deliverance at the Red Sea, who was called a prophet — dies in silence at the holy place. No mourning is recorded. She simply disappears from the story.',
        },
        {
          kind: 'commentary',
          id: 'c-miriam',
          html:
            'Miriam is one of the most important women in the Bible\'s first half — the sister who watched over baby Moses, the prophet who led the women in song at the Red Sea, the voice that challenged Moses and Aaron. Yet her death is recorded in a single clause. It is the first sign that this chapter belongs to endings, not beginnings.',
        },
      ],
    },

    /* ─── Numbers 20:2–5 — The People Complain ──────────────────────────── */
    {
      ref: 'Numbers 20:2–5',
      title: 'The People Thirst and Complain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 2,
              spans: [
                t('And there was no water for the congregation: and they gathered themselves together '),
                hg('against Moses and against Aaron', 'c-against'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the people '),
                hg('chode with Moses', 'c-chode'),
                t(', and spake, saying, Would God that we had died when our brethren died before the Lord!'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And why have ye brought up the congregation of the Lord into this wilderness, that we and our cattle should die there?'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And '),
                hg('wherefore have ye made us to come up out of Egypt', 'c-egypt-again'),
                t(', to bring us in unto this evil place? it is no place of seed, or of figs, or of vines, or of pomegranates; '),
                hg('neither is there any water to drink', 'c-water-again'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-against',
          html:
            'This is not the first water crisis — they have faced this exact complaint before in Exodus 17. But this time, after forty years of the same cycle, something in Moses breaks. He has heard this accusation too many times.',
        },
        {
          kind: 'commentary',
          id: 'c-chode',
          html:
            'The Hebrew word &ldquo;chode&rdquo; is the word for strife, for quarreling. They are not just thirsty; they are angry at Moses. They want to argue the case that he led them wrong.',
        },
        {
          kind: 'commentary',
          id: 'c-egypt-again',
          html:
            'After forty years in the wilderness, they are still framing Egypt as the better option. They speak as if their only two choices are dying in the wilderness or dying in the desert. They cannot imagine that God is leading them anywhere.',
        },
        {
          kind: 'carry',
          html:
            'The people\'s complaint is not unreasonable — they are thirsty, and there is no water. But their <em>framing</em> of it is the problem. They see a crisis and forget every miracle. They see a difficulty and conclude they are being led wrong. There is a thirst in your life right now — something you need and don\'t have. The question is not whether it is real. The question is whether you can hold the thirst <em>and</em> trust the hand leading you.',
        },
        {
          kind: 'reflection',
          id: 'complaint',
          prompt:
            'When you face a real need, do you find yourself erasing the history of how God has provided? What would it look like to hold both the thirst and the trust?',
        },
      ],
    },

    /* ─── Numbers 20:6–8 — God\'s Command ─────────────────────────────── */
    {
      ref: 'Numbers 20:6–8',
      title: 'God\'s Command: SPEAK to the Rock',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 6,
              spans: [
                t('And Moses and Aaron went from the presence of the congregation unto the door of the tabernacle of the congregation, and they '),
                hg('fell upon their faces', 'c-faces'),
                t(': and the glory of the Lord appeared unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faces',
          html:
            'Moses does what he has learned to do — he takes the problem to God. He falls on his face before the Lord\'s glory. This moment still shows his reverence, his knowledge that God is the only source. The tragedy is what happens next.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 7,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Take the rod, and '),
                hp('gather thou the congregation together', 'c-gather'),
                t(', thou, and Aaron thy brother, and '),
                hp('speak ye unto the rock before their eyes', 'christ-speak'),
                t('; and it shall give forth his water, and thou shalt bring forth to them water out of the rock: so thou shalt give the congregation and their beasts drink.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gather',
          html:
            'Notice: God says to <em>gather the congregation together</em> — to have the people <em>watch</em>. What happens next is not meant to be a private miracle. It is meant to be a public demonstration of God\'s character and power. That\'s why the instruction is so specific.',
        },
        {
          kind: 'christ',
          id: 'christ-speak',
          title: 'Christ Connection — Speak to the Rock',
          html:
            'God commanded Moses to SPEAK to the rock. In Exodus 17, forty years earlier, Moses <em>struck</em> the rock once, and it gave water. That first striking pictured Christ struck once for our sins (Isaiah 53:4, &ldquo;He was wounded for our transgressions&rdquo;). Now the pattern has changed: we do not strike Christ again. We only speak to Him in prayer. &ldquo;Call upon me in the day of trouble; I will deliver thee&rdquo; (Psalm 50:15). The rock has already been struck. The covenant has already been ratified in blood. We now approach through prayer, not through sacrifice. Moses\' mistake — striking the rock a second time — is a profound misrepresentation of the gospel.',
        },
      ],
    },

    /* ─── Numbers 20:9–13 — Moses Strikes ─────────────────────────────── */
    {
      ref: 'Numbers 20:9–13',
      title: 'Moses Strikes Twice in Anger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 9,
              spans: [
                t('And Moses took the rod from before the Lord, as he commanded him.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Moses and Aaron gathered the congregation together before the rock, and he said unto them, '),
                hp('Hear now, ye rebels', 'c-rebels'),
                t('; '),
                hp('must we fetch you water out of this rock?', 'c-we'),
                t(''),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Moses '),
                hg('lifted up his hand, and with his rod he smote the rock twice', 'c-strike'),
                t(': and the water came out abundantly, and the congregation drank, and their beasts also.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rebels',
          html:
            'Moses has run out of patience. He calls them rebels — not wrong, but spoken with the bitterness of a leader who has been carrying an impossible burden for four decades. The people\'s thirst has become unbearable to him.',
        },
        {
          kind: 'commentary',
          id: 'c-we',
          html:
            'This is the moment of failure: &ldquo;must <em>we</em> fetch you water?&rdquo; Moses makes himself and Aaron the heroes of the story instead of God. He puts himself at the center of the miracle. The rod is in his hand; the water comes out because of his action. This was never the point. The point was God\'s faithfulness displayed before the people.',
        },
        {
          kind: 'commentary',
          id: 'c-strike',
          html:
            'Moses does not speak to the rock — he strikes it. Not once, but twice. He strikes it in his anger, the rod coming down twice against the stone. The water comes out abundantly. The people drink. The miracle <em>happens</em> — but the testimony is ruined. God gave water, yes. But the people saw their leader\'s rage first.',
        },
        {
          kind: 'carry',
          html:
            'There is a thirst you cannot satisfy in this season. A need that keeps being placed on you, and you have nothing left to give. Moses was at that point. What he did was human — he was angry, he was tired, he made himself the hero of his own story instead of pointing to God. And we do that too: we give good things to people we love, but we do it with frustration, with a sense of burden, with the subtext of &ldquo;look what I\'m doing for you.&rdquo; The water still flows. The need still gets met. But the testimony is broken. If you are giving from that place right now, it might be time to stop giving until you can give it with faith instead of rage.',
        },
        {
          kind: 'reflection',
          id: 'anger',
          prompt:
            'Where in your life are you serving out of anger instead of faith? What would it look like to speak to the need instead of striking it in frustration?',
        },
      ],
    },

    /* ─── Numbers 20:12 — The Consequence ──────────────────────────────── */
    {
      ref: 'Numbers 20:12',
      title: 'Barred from the Promised Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 12,
              spans: [
                t('And the Lord spake unto Moses and Aaron, '),
                hp('Because ye believed me not, to sanctify me in the eyes of the children of Israel', 'christ-believe'),
                t(', '),
                hg('therefore ye shall not bring this congregation into the land which I have given them', 'c-exile'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-exile',
          html:
            'This is final. Moses and Aaron, who led the people out of Egypt, who have carried them through the wilderness, will not enter the Promised Land. Aaron will die on a mountain within the year. Moses will see the land from a distance and die in the wilderness at 120 years old. The consequence is absolute.',
        },
        {
          kind: 'christ',
          id: 'christ-believe',
          title: 'Christ Connection — Believe and Sanctify',
          html:
            'The failure is not simply that Moses struck the rock instead of speaking to it. The failure is theological: &ldquo;ye believed me not, to sanctify me in the eyes of the children of Israel.&rdquo; Moses did not believe that God\'s reputation was more important than his own leadership. He did not believe that pointing to God\'s faithfulness mattered more than solving the problem his way. In Hebrews 3:11, this passage is quoted as the reason why a whole generation could not enter God\'s rest — the failure was a failure to believe God and to make His character visible. Jesus came to do what Moses could not: to sanctify God\'s name completely, to finish the work, to bring His people all the way home. &ldquo;Father, I have glorified thee on the earth: I have finished the work which thou gavest me to do&rdquo; (John 17:4).',
        },
        {
          kind: 'carry',
          html:
            'God\'s name is more important than your comfort, your reputation, your ability to solve the problem. When you lose your patience and make yourself the hero, when you step into a situation with rage instead of faith, you are actually saying: &ldquo;My dignity matters more than His name.&rdquo; The most revolutionary act in leadership is to step back, let God solve it, and let Him get the credit. You don\'t have to look good. You just have to point to the One who is.',
        },
        {
          kind: 'reflection',
          id: 'sanctify',
          prompt:
            'What matters more to you right now — that God\'s name is glorified or that you look like you have it together? Where is that choice showing up?',
        },
      ],
    },

    /* ─── Numbers 20:13 — Meribah ─────────────────────────────────────── */
    {
      ref: 'Numbers 20:13',
      title: 'The Waters of Meribah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 13,
              spans: [
                t('This is the water of '),
                hy('Meribah', 'hebrew-meribah'),
                t('; because the children of Israel strove with the Lord, and he was sanctified in them.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-meribah',
          title: 'Meribah — &ldquo;strife&rdquo;',
          script: 'מְרִיבָה',
          translit: '<strong>meribah</strong> · strife, contention, quarreling',
          description:
            'The waters are named after the conflict they arose from — the people\'s complaint, Moses\' rage, the striving with God. Yet the text says &ldquo;he was sanctified in them.&rdquo; Even in the failure, in the strife, God\'s character was made visible. His holiness showed up precisely where rebellion did.',
        },
        {
          kind: 'carry',
          html:
            'The place is named for what went wrong — strife. And yet it is also the place where God was sanctified. Sometimes your greatest failures become the place where God\'s character becomes clearest. Moses\' anger and his punishment will echo through the Bible as a reminder that God\'s name matters more than anyone\'s comfort. You are not defined by your failure. But your failure becomes part of God\'s story, and He uses it to show who He is.',
        },
      ],
    },

    /* ─── Numbers 20:14–21 — Edom Refuses Passage ─────────────────────── */
    {
      ref: 'Numbers 20:14–21',
      title: 'Edom Refuses Passage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 14,
              spans: [
                t('And Moses sent messengers from Kadesh unto the king of Edom, Thus saith thy brother Israel, Thou knowest all the travail that hath befallen us:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('How our fathers went down into Egypt, and we have dwelt in Egypt a long time; and the Egyptians vexed us, and our fathers:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And when we cried unto the Lord, he heard our voice, and sent an angel, and hath brought us forth out of Egypt: and, behold, we are in Kadesh, a city in the uttermost of thy border.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Let us pass, I pray thee, through thy country: we will not pass through the fields, nor through the vineyards, neither will we drink of the water of the wells: we will go by the king\'s high way, we will not turn to the right hand nor to the left, until we have passed thy borders.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Edom said unto him, Thou shalt not pass by me, lest I come out against thee with the sword.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the children of Israel said unto him, We will go by the high way: and if I and my cattle drink of thy water, then I will pay for it: I will only, without doing any thing else, go through on foot.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he said, Thou shalt not pass through. And Edom came out against him with much people, and with a strong hand.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Thus Edom refused to give Israel passage through his border: wherefore Israel turned away from him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Edom is a brother nation — descended from Esau, Jacob\'s twin. Moses makes the appeal as one relative to another. He offers to stay on the road, to touch nothing, to pay for what they use. It is reasonable and humble. And Edom refuses. Israel must turn back and go the long way around. Even the simple request for passage is denied. This is one more grief in a chapter full of them.',
        },
      ],
    },

    /* ─── Numbers 20:22–29 — Aaron Dies; Priesthood Continues ──────────── */
    {
      ref: 'Numbers 20:22–29',
      title: 'Aaron Dies; Eleazar Succeeds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 22,
              spans: [
                t('And the children of Israel, even the whole congregation, journeyed from Kadesh, and came unto mount Hor.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the Lord spake unto Moses and Aaron in mount Hor, by the coast of the land of Edom, saying,'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Aaron shall be gathered unto his people: for he shall not enter into the land which I have given unto the children of Israel, because ye rebelled against my commandment at the water of Meribah.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Take Aaron and Eleazar his son, and bring them up unto mount Hor:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And strip Aaron of his garments, and put them upon Eleazar his son: and Aaron shall be gathered unto his people, and shall die there.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Moses did as the Lord commanded: and they went up into mount Hor in the sight of all the congregation.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Moses stripped Aaron of his garments, and put them upon Eleazar his son; and Aaron died there in the top of the mount: and Moses and Eleazar came down from the mount.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And when all the congregation saw that Aaron was dead, they mourned for Aaron thirty days, even all the house of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Aaron dies within sight of the people. His priestly garments are transferred to Eleazar on the mountain itself, so that the priesthood visibly continues. There is no gap. There is no moment when the priestly office is vacant. As soon as one priest falls, another rises up to take his place.',
        },
        {
          kind: 'christ',
          id: 'christ-priesthood',
          title: 'Christ Connection — The Eternal Priesthood',
          html:
            'The pattern of the Old Testament is always the same: priest dies, successor is appointed, the work continues. But Hebrews breaks that pattern: &ldquo;But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them&rdquo; (Heb 7:24–25). Jesus\' priesthood never transfers to anyone else because He never dies. He is not succeeded; He is eternal. Every time a priest dies in the Old Testament, the text is pointing toward the One Priest who will not. The machinery of transferring garments on a mountain becomes unnecessary once the Priest Himself is alive forever.',
        },
        {
          kind: 'carry',
          html:
            'You are not meant to carry what only Jesus can carry. The priesthood had to transfer from man to man because mortality is real. But you belong to a Priest who is alive and will never pass away, who is always interceding for you, who never has to hand off His work to someone else. When you are exhausted by leading, by serving, by holding the line — remember that the eternal Priest has already entered in, and His work never shifts to someone else\'s shoulders. You are not trying to sustain the unsustainable. You are resting in the One who alone sustains.',
        },
        {
          kind: 'reflection',
          id: 'priest',
          prompt:
            'What burden have you been trying to carry that only an eternal Priest could actually carry? What would it look like to set it down?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
