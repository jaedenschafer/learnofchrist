import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 2 — Rahab and the Spies
 *
 * A narrative of faith without sight, covenant kindness across enemy lines,
 * and the scarlet cord — a vivid foreshadow of the blood that saves.
 */
export const JOSHUA_2: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 2,

  intros: [
    'Joshua 2 opens with two spies crossing into enemy territory, and ends with a prostitute risking everything to hide them. Before Israel lands a single blow, God has already placed a rescuer inside the walls of Jericho. Rahab is a Canaanite woman, a harlot by profession, utterly outside the covenant. Yet she sees what the kings of Canaan cannot: the Lord is God.',
    'The chapter is a study in faith moving faster than evidence. Rahab has not yet seen Israel&apos;s army. She has only heard rumors of the Red Sea and Egypt, events decades old. Yet her conviction is unshakeable — "the Lord your God, he is God in heaven above, and in earth beneath." And that faith, coupled with her willingness to act, becomes the hinge on which the conquest turns. A scarlet cord in the window will mark the one house that survives when Jericho falls.',
  ],

  sections: [
    /* ─── Joshua 2:1–2 — The Spies Sent ─────────────────────────────────── */
    {
      ref: 'Joshua 2:1–2',
      title: 'Spies Sent to Jericho',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And Joshua the son of Nun sent out of Shittim two men to '),
                hg('spy secretly', 'spy-covert'),
                t(', saying, Go view the land, even Jericho. And they went, and came into an harlot&apos;s house named '),
                hy('Rahab', 'hebrew-rahab'),
                t(', and lodged there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spy-covert',
          html:
            'Joshua sends two men to spy &ldquo;secretly&rdquo; — not to scout military strength, but to view the land. The word suggests a reconnaissance of what God has already promised to give. They are not hunting for permission; they are scoping out what belongs to them by covenant. Their path leads them to Rahab&apos;s house, and there begins the hinge of the story.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rahab',
          title: 'Rahab — &ldquo;wide&rdquo;',
          script: 'רָחָב',
          translit: '<strong>rahab</strong> · spacious, wide; also a verb meaning to make wide',
          description:
            'Her name carries irony: Rahab means &ldquo;wide&rdquo; or &ldquo;spacious.&rdquo; Yet she is hemmed in by her own reputation and the walls of Jericho. Her faith will open a passage through both.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('And it was told the king of Jericho, saying, Behold, '),
                hg('there came men', 'threat-recognized'),
                t(' unto thee this night of the children of Israel to search out the country.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'threat-recognized',
          html:
            'News travels instantly through Jericho. The king feels the threat before it materializes. Fear is spreading through the city — not from the sound of hoofbeats or war cries, but from rumors and dread. God is working on the hearts of Jericho long before the walls shake.',
        },
        {
          kind: 'carry',
          html:
            'The spies went in quietly, but the king felt the tremor. Sometimes the most powerful work God does happens in places you&apos;ll never see — conversations you miss, a shift in someone&apos;s thinking, the slow erosion of a stronghold before anything visible crumbles. You may not be called to be the one who shouts; you may be the quiet scout, the small voice ahead of something larger God is moving.',
        },
      ],
    },

    /* ─── Joshua 2:3–7 — Rahab Hides the Spies ────────────────────────────── */
    {
      ref: 'Joshua 2:3–7',
      title: 'Rahab Hides the Spies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('And the king of Jericho sent unto Rahab, saying, Bring forth the men that are come to thee, which are entered into thine house: for they be come to search out all the country.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'king-command',
          html:
            'The king&apos;s authority is absolute. Rahab is a woman of no standing, living in her trade. The order is not a request. To hide the spies is to betray her king and risk death. Yet in that instant, she chooses a different loyalty.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And the woman took the two men, and '),
                hg('hid them', 'hide-action'),
                t(', and said, '),
                hy('True, men came unto me', 'no-lie'),
                t(', but I wist not whence they were:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it came to pass about the time of shutting of the gate, when it was dark, that the men went out: whither the men went I wot not: pursue after them quickly; for ye shall overtake them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hide-action',
          html:
            'Rahab acts with speed and cunning. She hides them under stalks of flax on her roof — a place no searcher would think to look. Then she misdirects the king&apos;s messengers toward the Jordan. The text does not condemn her lie or commend it. It simply marks that she has made her choice: to shelter the spies of Israel&apos;s God.',
        },
        {
          kind: 'commentary',
          id: 'no-lie',
          html:
            'Scripture&apos;s silence on whether her deception was right or wrong has troubled faithful readers for two thousand years. Augustine wrestled with it; Calvin justified it as a lesser duty overriding a greater (covenant fidelity overriding civic duty). What the text does highlight is not her dishonesty, but what that dishonesty served: faith in God, and protection of God&apos;s emissaries. The lie matters far less than what it reveals about her loyalties.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [t('(But she had brought them up to the roof of the house, and hid them with the stalks of flax, which she had laid in order upon the roof.)')],
            },
            {
              number: 7,
              spans: [t('And the men pursued after them the way to Jordan unto the fords: and as soon as they which pursued after them were gone out, they shut to the gate.')],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'Rahab&apos;s action is not heroic in the storytelling sense. She does not announce her faith from the rooftop. She hides the men, speaks quickly, and lets the authorities leave chasing the wrong direction. Sometimes faithfulness looks like quiet action in the dark: the word spoken in defense of someone the group has turned on, the door opened to someone society has written off, the risk taken when no one will know you took it.',
        },
        {
          kind: 'reflection',
          id: 'hiding',
          prompt:
            'When have you had to act on faith without knowing how things would turn out? What made you willing to risk something to protect or help someone else?',
        },
      ],
    },

    /* ─── Joshua 2:8–11 — Rahab&apos;s Great Confession ──────────────────── */
    {
      ref: 'Joshua 2:8–11',
      title: 'The Confession of a Gentile Woman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [t('And before they were laid down, '), hp('she came up unto them', 'faith-approach'), t(' upon the roof;')],
            },
            {
              number: 9,
              spans: [
                t('And she said unto the men, '),
                hg('I know that the Lord hath given you the land', 'c-land-given'),
                t(', and that your '),
                hy('terror is fallen upon us', 'hebrew-chesed'),
                t(', and that all the inhabitants of the land faint because of you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'faith-approach',
          html:
            'Before the spies sleep, Rahab comes to them. There is an intimacy and courage in the act — she comes to them alone, in her own house, in darkness. She is not going to beg for her life. She is going to confess what she believes.',
        },
        {
          kind: 'commentary',
          id: 'c-land-given',
          html:
            'Her opening sentence is stunning: &ldquo;I know that the Lord hath given you the land.&rdquo; Not &ldquo;I hope&rdquo; or &ldquo;perhaps&rdquo; — <em>I know.</em> She has no army at her back, no proof. She has only heard stories. Yet her conviction is absolute. This is faith: to see what God has promised as already done, though the evidence is not yet in hand.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chesed',
          title: 'Chesed — &ldquo;covenant kindness&rdquo;',
          script: 'חֶ֫סֶד',
          translit: '<strong>chesed</strong> · steadfast love, covenant loyalty, merciful kindness',
          description:
            'Rahab uses language of covenant even though she is not yet part of Israel. She recognizes that the Lord stands in covenant relationship with this people — and by the end of the chapter, she will enter it herself.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('For we have heard how the Lord dried up the water of the Red sea for you, when ye came out of Egypt; and what ye did unto the two kings of the Amorites, that were on the other side Jordan, '),
                hg('Sihon and Og', 'c-kings'),
                t(', whom ye utterly destroyed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kings',
          html:
            'Rahab knows the history — the Red Sea split, the Egyptian plagues, the victories over Sihon and Og. These events happened years before, yet they have shaped the entire story of Canaan. The conquest is not beginning now; it has been visible to those with eyes to see for decades.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And as soon as we had heard these things, our hearts did melt, neither did there remain any more courage in any man, because of you: for '),
                hp('the Lord your God, he is God in heaven above, and in earth beneath', 'christ-god-sovereign'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hearts-melt',
          html:
            'The terror in Jericho is not cowardice — it is recognition. The people have watched their neighbors fall to a God they cannot fight. That God has already moved on their behalf before a single sword is drawn. Rahab articulates what the whole city feels: this God is real, He is sovereign, and He is working.',
        },
        {
          kind: 'christ',
          id: 'christ-god-sovereign',
          title: 'Christ Connection — God over All',
          html:
            'Rahab confesses the sovereignty of God before any Israelite hears her voice. &ldquo;The Lord your God, he is God in heaven above, and in earth beneath.&rdquo; This is the foundational creed of Israel, and a Canaanite prostitute articulates it with perfect clarity. She recognizes what so many in Israel will forget: God&apos;s power and his presence go before His people. Paul echoes her logic in Colossians: if Christ is &ldquo;over all principalities and powers,&rdquo; then the conquest of every city, every heart, is already His (Col. 1:16–17).',
        },
        {
          kind: 'carry',
          html:
            'What kingdom am I actually invested in? Rahab heard rumors and staked her life on the God behind them. Most of us have far more evidence than she had — Scripture, testimonies, the quiet voice of the Spirit. Yet we are often slower to move than she was. This week, name one area where you have been holding back because the victory is not yet visible. Then move as if it already is.',
        },
      ],
    },

    /* ─── Joshua 2:12–14 — The Scarlet Cord Covenant ────────────────────── */
    {
      ref: 'Joshua 2:12–14',
      title: 'The Covenant of the Scarlet Cord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('Now therefore, I pray you, swear unto me by the Lord, since I have shewed you '),
                hg('kindness', 'c-kindness-given'),
                t(', that ye will also shew '),
                hy('kindness unto my father&apos;s house', 'hebrew-tiqvah'),
                t(', and give me a true token:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kindness-given',
          html:
            'Rahab reminds the spies what she has done for them. She is not begging; she is appealing to a covenant logic. She has shown them kindness (<em>chesed</em>, covenant loyalty). Now she asks them to reciprocate the same toward her household. Her faith issues in a request — that the God she trusts might extend His covenant mercy to her family.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tiqvah',
          title: 'Tiqvah — &ldquo;cord&rdquo;',
          script: 'תִּקְוָה',
          translit: '<strong>tiqvah</strong> · cord, rope, line; also hope, expectation',
          description:
            'The word for the scarlet cord is <em>tiqvah</em>, which also means &ldquo;hope.&rdquo; Rahab&apos;s hope — and her family&apos;s survival — hangs on a cord of red.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('And that ye will save alive my father, and my mother, and my brethren, and my sisters, and all that they have, and '),
                hg('deliver our lives from death', 'c-lives-saved'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lives-saved',
          html:
            'Rahab&apos;s faith extends beyond herself. She will hide the spies; she will lie to the king. But her deepest concern is her family&apos;s survival. In asking for their lives, she shows the heart that will later place her in the line of David. She understands that faith matters because people matter.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('And the men answered her, Our life for yours, if ye utter not this our business: and it shall be, when the Lord hath '),
                hp('given us the land', 'blood-covenant'),
                t(', that we will deal kindly and truly with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-men-answer',
          html:
            'The spies pledge themselves: &ldquo;Our life for yours.&rdquo; They have entered a covenant. Their survival is bound to hers. When Jericho falls, the spies will remember Rahab&apos;s roof and the scarlet cord. They will move heaven and earth to spare the house where it hangs.',
        },
        {
          kind: 'christ',
          id: 'blood-covenant',
          title: 'Christ Connection — The Scarlet Cord',
          html:
            'The scarlet cord that marks Rahab&apos;s house echoes the blood on the doorposts at Passover — a mark of salvation, a sign that the firstborn inside is safe. By Matthew 1:5, Rahab has married Boaz and entered the lineage of David. She is in the genealogy of Christ. The cord that saved her from death becomes the thread that ties her to Jesus Himself. The blood that marks our houses today is not cord or animal blood, but His.',
        },
        {
          kind: 'carry',
          html:
            'Rahab asked for her household to be saved, and they were. But her salvation did not end there — it became generational. She became the mother of Boaz, who married Ruth, who was the grandmother of David, who was the ancestor of Christ. When God saves a life, He is often saving a lineage, a future you cannot see. Whatever God is redeeming in your story right now, trust that the reach of His kindness extends further than you can follow.',
        },
        {
          kind: 'reflection',
          id: 'covenant',
          prompt:
            'Who has shown you kindness when they had no obligation to? How has that kindness changed the trajectory of your life or your family?',
        },
      ],
    },

    /* ─── Joshua 2:15–21 — The Window and the Mark ─────────────────────── */
    {
      ref: 'Joshua 2:15–21',
      title: 'Escape and the Scarlet Sign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('Then she let them down by a cord through the window: for her house was upon '),
                hg('the town wall', 'c-wall-position'),
                t(', and she dwelt upon the wall.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wall-position',
          html:
            'Rahab&apos;s house is positioned on Jericho&apos;s wall — a detail that marks her social standing. She is not respectable enough to live inside the city proper. Yet her very marginality becomes her salvation. The spies escape down the wall itself, and she becomes the hinge between two worlds.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('And she said unto them, Get you to the mountain, lest the pursuers meet you; and hide yourselves there three days, until the pursuers be returned: and afterward ye may go your way.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the men said unto her, We will be blameless of this thine oath which thou hast made us swear:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spies-depart',
          html:
            'Rahab gives them a path to safety: the mountain, three days of hiding, then freedom. The number three echoes through Scripture — Jonas in the belly, the resurrection on the third day. Rahab is orchestrating their escape with the precision of someone who has thought through every step.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('Behold, when we come into the land, thou shalt bind this '),
                hy('scarlet line', 'c-scarlet-line'),
                t(' in the window which thou lettest us down by: and thou shalt bring thy father, and thy mother, and thy brethren, and all thy father&apos;s household, home unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-scarlet-line',
          html:
            'The scarlet line is the sign and seal. A Canaanite woman in an enemy city binds this cord into the very window through which the spies escaped. She is marking her house for salvation, making a visible, tangible statement: I trust this God. I will bind your sign. Save my family. The cord that let them escape becomes the cord that saves her.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 19,
              spans: [
                t('And whosoever shall go out of the doors of thy house into the street, his blood shall be upon his head, and we will be guiltless: and whosoever shall be with thee in the house, his blood shall be on our head, if any hand be upon him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blood-condition',
          html:
            'The covenant is clear: safety inside the marked house, death outside it. Those who stay with Rahab will be preserved. Those who venture out take their fate into their own hands. The spies are not requiring faith from her family — they are simply marking the boundary where protection dwells.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 20,
              spans: [
                t('And if thou utter this our business, we will be guiltless of the oath which thou hast made us to swear.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And she said, According unto your words, so be it. And she sent them away, and they departed: and she bound the '),
                hp('scarlet line', 'c-mark-bound'),
                t(' in the window.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mark-bound',
          html:
            'The chapter ends with the scarlet line in the window. Rahab has done her part. She hid the spies, heard their report, made a covenant with them, sent them safely away, and bound the sign. Now she waits. Her entire family&apos;s survival depends on her faith in a God she has only heard about, and on the promise of men she has only just met.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes faith means binding a scarlet cord in a window and then waiting. It means doing the part you can do — protecting, speaking truth, making your boundary clear — and then trusting that the God you have pledged yourself to will remember you when the walls shake. That waiting period, where you cannot control the outcome and can only trust, is not a weakness of faith. It is the fullest expression of it.',
        },
        {
          kind: 'reflection',
          id: 'scarlet-cord',
          prompt:
            'What is your scarlet cord — the visible sign of your faith? How is God asking you to make your trust tangible and observable?',
        },
      ],
    },

    /* ─── Joshua 2:22–24 — The Spies Report ───────────────────────────────── */
    {
      ref: 'Joshua 2:22–24',
      title: 'The Report Returns',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 22,
              spans: [
                t('And they departed, and came unto the mountain, and abode there three days, until the pursuers were returned: and the pursuers sought them throughout all the way, but found them not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-safe-mountain',
          html:
            'The spies reach the mountain exactly as Rahab instructed. Three days of hiding, and the pursuers give up. The plan works perfectly. But the reason it works is that Rahab thought through the enemy&apos;s likely moves and gave them the right way to go. Her practical wisdom, rooted in her faith, has saved them.',
        },

        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 23,
              spans: [
                t('So the two men returned, and descended from the mountain, and passed over, and came to Joshua the son of Nun, and told him all things that befell them:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they said unto Joshua, Truly '),
                hg('the Lord hath delivered into our hands all the land', 'c-faith-report'),
                t('; for even all the inhabitants of the country do faint because of us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faith-report',
          html:
            'The spies return with a report of absolute certainty. They have not seen the Canaanite armies or weapons. What they have seen is the faith of a Canaanite woman — and through her eyes, they have glimpsed something larger: that God has already won the hearts of Jericho. The land is not being conquered by Israel&apos;s strength. It is being surrendered by Canaan&apos;s fear.',
        },
        {
          kind: 'carry',
          html:
            'Rahab never got to see the walls of Jericho fall from the safety of her house. She had to trust that the scarlet cord would be remembered, that the spies would tell Joshua, that the commander of Israel&apos;s army would care about a Canaanite harlot&apos;s family. In our own lives, we often cannot trace the whole path from faith to fulfillment. We do what we can, bind what we can bind, and then trust that the God who sees works through means we will never fully understand.',
        },
        {
          kind: 'reflection',
          id: 'victory-won',
          prompt:
            'Where in your life has God already won a victory that you have not yet seen manifest? What does your scarlet cord — your visible statement of trust — look like?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 2',
    quote:
      'A Canaanite woman named Rahab hid the spies of Israel and confessed faith in the God of Israel. She bound a scarlet cord in her window as a sign that her household would be saved when Jericho fell.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 2 · Study Guide',
  },
};
