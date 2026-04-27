import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 15 — Laws of Offering & Defiant Sin
 *
 * Sandwiched between the rebellion of Israel (Numbers 14) and the rebellion
 * of Korah (Numbers 16), this chapter lays out detailed laws for grain and
 * drink offerings, the firstfruits cake, and sin offerings. Then abruptly:
 * a stark warning about the person who sins "with a high hand" — defiantly.
 * The man gathering sticks on the Sabbath is executed. The command to make
 * tassels with blue thread follows. The tassels appear on Jesus in Matthew.
 */

export const NUMBERS_15: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 15,

  intros: [
    'Numbers 15 arrives in the shadow of the people&apos;s refusal to enter the land. The older generation will not see Canaan. And yet God speaks to Moses about laws for living in Canaan — laws for how to approach the altar when they settle there, how to make offerings of grain and drink, how to acknowledge the firstfruits. It is an act of sustained tenderness: God speaks as if the promise is still good, because it is.',
    'But the chapter also contains a razor&apos;s edge. It distinguishes carefully between unintentional sin — sins the congregation commits together, or sins an individual commits by accident — and the sin done "with a high hand," with open defiance. For unintentional sin, there is atonement. For defiant sin, there is no atonement: the person is cut off. The Sabbath law is absolute. And at the end, the command to wear tassels — small fringes on the corners of garments with a blue thread, to remember the commandments. When Jesus walked in His own garment, the sick reached for those tassels and were healed.',
  ],

  sections: [
    /* ─── Numbers 15:1–21 — Offerings of Grain and Drink ────────────────── */
    {
      ref: 'Numbers 15:1–21',
      title: 'Grain and Drink Offerings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When ye be come into the land of your habitations, which I give unto you,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And will '),
                hy('make an offering by fire unto the Lord', 'fire-offering'),
                t(', a burnt offering, or a sacrifice in performing a vow, or in a freewill offering, or in your solemn feasts, to make a sweet savour unto the Lord, of the herd, or of the flock:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fire-offering',
          html:
            'This is extraordinary. The older generation — those who have refused the land — will not make these offerings. But Moses is to speak the laws as if the promise is certain. God does not treat the people&apos;s unbelief as if it cancels the future. The laws are written toward a generation not yet born, whose faith may be different.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 4,
              spans: [
                t('Then shall he that offereth his offering unto the Lord bring a '),
                hy('meat offering', 'mincha'),
                t(' of a tenth deal of fine flour mingled with the fourth part of an hin of oil.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the fourth part of an hin of wine for a drink offering shalt thou prepare with the burnt offering or sacrifice, for one lamb.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'mincha',
          title: 'Mincha — "grain offering"',
          script: 'מִנְחָה',
          translit: '<strong>mincha</strong> · a gift brought to the altar',
          description:
            'Originally meant a gift of respect or tribute, mincha came to mean an unbloody offering — grain, oil, flour, incense — brought to accompany the burnt sacrifices. The word captures the idea of drawing near with something precious.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 8,
              spans: [
                t('And when thou preparest a bullock for a burnt offering, or for a sacrifice in performing a vow, or peace offering unto the Lord:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then shall he bring with a bullock a '),
                hg('meat offering of three tenth deals of fine flour mingled with half an hin of oil', 'bullock-portions'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bullock-portions',
          html:
            'The larger the animal — bullock, ram, lamb — the greater the grain and oil and wine that accompany it. There is a proportionality to worship in Israel. You bring what you can. The offering scales to the sacrifice.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 17,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When ye come into the land whither I bring you,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Then it shall be, that, when ye eat of the '),
                hg('bread of the land', 'firstfruit'),
                t(', ye shall offer up an '),
                hg('heave offering', 'terumah'),
                t(' unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'firstfruit',
          html:
            'The arrival in Canaan is assumed. God speaks of eating "the bread of the land" as if it is only a matter of time. This is how sustained faith speaks — from the vantage point of what will be.',
        },
        {
          kind: 'hebrew',
          id: 'terumah',
          title: 'Terumah — "heave offering"',
          script: 'תְּרוּמָה',
          translit: '<strong>terumah</strong> · that which is lifted up and set apart',
          description:
            'A portion lifted off the dough before baking and given to the priests. The word means "that which is separated." The first yield of the land acknowledges the Giver.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 20,
              spans: [
                t('Ye shall offer up a cake of the first of your dough for an heave offering: as ye do the heave offering of the threshingfloor, so shall ye do this.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Of the first of your dough ye shall give unto the Lord an heave offering in your generations.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The law of the firstfruits cake is a law of gratitude. Before you keep bread for yourself, a portion goes back to God. It is not a heavy tax; it is an acknowledgment: <em>This land, this harvest, this life—I know whose hands hold them.</em> What would it mean to be intentional about your firstfruits, not as obligation but as recognition?',
        },
        {
          kind: 'reflection',
          id: 'firstfruits',
          prompt:
            'What is your "firstfruits" — the first yield of something God has given you (time, talent, abundance)? What would it look like to offer that portion back to God intentionally?',
        },
      ],
    },

    /* ─── Numbers 15:22–31 — Unintentional Sin & Defiant Sin ───────────── */
    {
      ref: 'Numbers 15:22–31',
      title: 'Unintentional Sin and the High Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 22,
              spans: [
                t('And if ye have erred, and not observed all these commandments which the Lord hath spoken unto Moses,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Even all that the Lord hath commanded you by the hand of Moses, from the day that the Lord commanded Moses, and henceforward among your generations;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Then it shall be, if ought be committed by ignorance without the knowledge of the congregation, that all the congregation shall offer one young bullock for a burnt offering, for a sweet savour unto the Lord, with his meat offering, and his drink offering, according to the manner, and one kid of the goats for a sin offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'unintentional-congregation',
          html:
            'A single unintentional sin committed by the congregation as a whole — perhaps a mistaken observance of a feast — requires a sin offering. The people are held to their covenant. And there is remedy. The offering covers what was done without knowledge.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 27,
              spans: [
                t('And if any soul sin through ignorance, then he shall bring a '),
                hg('she goat of the first year for a sin offering', 'individual-sin'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the priest shall make an atonement for the soul that sinneth ignorantly, when he sinneth by ignorance before the Lord, to make an atonement for him; and it shall be forgiven him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'individual-sin',
          html:
            'Individual unintentional sin also carries atonement. The sin offering is smaller than for the congregation — a goat, not a bullock — but the mechanism is the same. A life is given, the blood is shed, and the person is covered.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 29,
              spans: [
                t('Ye shall have one law for him that sinneth through ignorance, both for him that is born among the children of Israel, and for the stranger that sojourneth among them.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('But the soul that doeth ought '),
                hp('presumptuously', 'high-hand'),
                t(' — whether he be born in the land, or a stranger — the same reproacheth the Lord; and that soul shall be cut off from among his people.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Because he hath despised the word of the Lord, and hath broken his commandment, that soul shall '),
                hp('utterly be cut off', 'cut-off'),
                t('; his iniquity shall be upon him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'high-hand',
          title: 'Yad Ramah — "with a high hand"',
          script: 'יָד רָמָה',
          translit: '<strong>yad ramah</strong> · hand raised in defiance or arrogance',
          description:
            'To sin "with a high hand" is to sin openly, knowingly, defiantly. It is not a mistake or an accident. It is a raising of the fist against God&apos;s word, a refusal of the covenant relationship itself.',
        },
        {
          kind: 'commentary',
          id: 'cut-off',
          html:
            'The repeated emphasis — "utterly be cut off" — marks the severity. There is no atonement for defiant sin within Israel&apos;s system. The person severs themselves from the covenant community. This is not God&apos;s execution; it is the person&apos;s own choice made visible in their exile from Israel. Under the new covenant, even this kind of sin finds forgiveness (Acts 2:38, 1 John 1:9), but here, in covenant Israel, the line is absolute.',
        },
        {
          kind: 'carry',
          html:
            'The chapter distinguishes between stumbling and rejecting. A believer stumbles — does something wrong by ignorance, accident, or weakness — and there is always a way back, always atonement, always a covering. But if you wake up and decide to reject the covenant itself, to raise your fist against God&apos;s word in full knowledge and defiance, you step outside the system of grace. The good news of Numbers 15 is that most of life is not lived with a raised fist. Most of it is lived in the spaces where stumbling is covered, mistakes are forgiven, and the door remains open.',
        },
        {
          kind: 'reflection',
          id: 'high-hand',
          prompt:
            'Where do you see yourself in this chapter — in the stumbling, in the ignorance that needs atonement, or ever tempted to raise your hand in defiance? How does knowing one carries atonement and one does not shape how you move forward?',
        },
      ],
    },

    /* ─── Numbers 15:32–41 — The Sabbath Breaker & the Tassels ──────────── */
    {
      ref: 'Numbers 15:32–41',
      title: 'The Sabbath and the Tassels',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 32,
              spans: [
                t('And while the children of Israel were in the wilderness, they found a '),
                hg('man that gathered sticks upon the Sabbath day', 'sabbath-sticks'),
                t('.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And they that found him gathering sticks brought him unto Moses and Aaron, and unto all the congregation.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And they put him in ward, because it was not declared what should be done to him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sabbath-sticks',
          html:
            'The man is gathering sticks on the Sabbath. It is a small thing in appearance — not murder, not theft, not blasphemy. Just firewood. But the Sabbath in Israel is not a minor commandment. It is a sign of the covenant (Exodus 31:13, 16). To break it openly, defiantly, is to repudiate the covenant itself. It is a high-hand offense. The people bring the man to Moses because they do not yet know the sentence. Moses seeks the Lord.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 35,
              spans: [
                t('And the Lord said unto Moses, The man shall be surely put to death: '),
                hp('all the congregation shall stone him with stones', 'stone-him'),
                t(' without the camp.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And all the congregation brought him without the camp, and stoned him with stones, and he died; as the Lord commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'stone-him',
          html:
            'In the covenant community of Israel, the Sabbath is inviolable. The sentence is stark. But notice: it is the congregation that executes the judgment, not God&apos;s direct hand. The people themselves enact the boundary. In the age after Christ, our reading of this must be careful. Under the new covenant, no human authority stones for Sabbath-breaking or any other sin — we are told explicitly that Christ came not to condemn but to save, and that mercy triumphs over judgment. But we must not erase the seriousness with which God held the Sabbath in Israel. The Sabbath was a sign of the covenant, and to break it deliberately was to step outside the covenant. When Jesus rose on the third day, He gave us a new sign of the covenant. But the gravity of covenant-breaking remains real.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 37,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Speak unto the children of Israel, and bid them that they make them '),
                hy('fringes in the borders of their garments', 'tzitzit'),
                t(' throughout their generations, and that they put upon the fringe of the borders a '),
                hy('wreathed band of blue', 'blue-thread'),
                t(':'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And it shall be unto you for a fringe, that ye may look upon it, and remember all the commandments of the Lord, and do them; and that ye seek not after your own heart and your own eyes, after which ye use to go a whoring:'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'tzitzit',
          title: 'Tzitzit — "fringes" or "tassels"',
          script: 'צִיצִית',
          translit: '<strong>tzitzit</strong> · tassels at the corners of a garment',
          description:
            'Small fringes knotted at the four corners of a prayer shawl or the edge of a robe. They were visible reminders, worn on the body, of the commandments. In the later Jewish tradition, the word is also connected to the idea of "flourishing" or "blossoming" — the commandments are not fetters but flowers.',
        },
        {
          kind: 'hebrew',
          id: 'blue-thread',
          title: 'Blue Dye — Royal and Priestly',
          script: 'תְּכֵלֶת',
          translit: '<strong>tekheleth</strong> · blue dye, dyed from an ancient sea creature',
          description:
            'The blue thread in the tzitzit was dyed from a creature in the Mediterranean sea, expensive and rare. Blue was the color of royalty and the priestly garment. The command to wear a blue thread among white fringes was a way of marking every wearer as belonging to a royal priesthood, a people set apart.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 40,
              spans: [
                t('That ye may remember, and do all my commandments, and be holy unto your God.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('I am the Lord your God, which brought you out of the land of Egypt, to be your God: I am the Lord your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'remember-commandments',
          html:
            'The tassels are a visual prayer. Every time you reach into your clothing, every time you wrap yourself, you remember. The blue thread in particular marks you as covenantal — belonging to a royal priesthood of people called to be holy. Holiness here means separation to God&apos;s purposes, not moral superiority. You are set apart because you are His.',
        },
        {
          kind: 'christ',
          id: 'christ-tassels',
          title: 'Christ Connection — The Healer&apos;s Tassels',
          html:
            'In Matthew 9:20, a woman with "an issue of blood" — twelve years of bleeding, unclean, separated from the community — comes behind Jesus to touch the hem of His garment. The Greek word is <em>kraspedon</em>, the tassel. "And, behold, a woman, which was diseased with an issue of blood twelve years, came behind him, and touched the hem of his garment: for she said within herself, If I may but touch his garment, I shall be whole" (Matthew 9:21–22). Again in Matthew 14:36, the sick "besought him that they might only touch the hem of his garment: and as many as touched were made perfectly whole." The tassels Jesus wore carried the same blue thread. And they were healing. This is not because a piece of cloth has power. It is because touching Jesus — even the edge of His garment — is touching the One who keeps all the commandments perfectly, who fulfills the entire law, who embodies the covenant. The woman touches the reminder and finds the One being reminded of.',
        },
        {
          kind: 'carry',
          html:
            'The tassels speak to a truth that Numbers 15 has been building toward: you need reminders. You need something to look at when your heart begins to wander toward your own eyes, your own desires, the things you think you want rather than the things you promised to seek. The tassels are not a burden. They are a mercy. They are saying: <em>This is who you are. This is whose you are. Remember.</em> What is your tassel — your visible reminder of the covenant, the calling, the God you belong to?',
        },
        {
          kind: 'reflection',
          id: 'tassels-and-memory',
          prompt:
            'Numbers 15 closes with a command to remember. What do you need to remember? And what would be your "tassel" — what visible, recurring reminder might anchor you back to that truth when you feel yourself drifting?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 15',
    quote:
      'God distinguishes between the stumbling that carries atonement and the defiant sin that severs the covenant. He commands His people to wear tassels — blue reminders of the commandments — and these tassels appear on Jesus, who is touched by the sick and heals them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 15 · Study Guide',
  },

  hasHebrew: true,
};
