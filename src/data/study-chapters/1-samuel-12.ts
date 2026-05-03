import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 12 — Samuel's Farewell Address
 *
 * At the threshold of Israel's monarchy, Samuel stands before the nation and
 * offers his farewell. He has walked before them since youth, and now he invites
 * them to examine his life: what ox has he taken? Whom has he defrauded? What
 * bribe has he accepted? The people affirm him. Then Samuel rehearses God's
 * faithfulness — the long arc from Egypt to the judges to this moment — and
 * warns them about the king they have chosen. He calls upon the Lord with
 * thunder in wheat harvest, a sign as clear as the day of judgment itself. Yet
 * even then, Samuel does not abandon them. He promises to pray for them and
 * teach them the good and right way. The chapter is Samuel's letter of
 * recommendation for faithfulness — and a mirror held up to every reader's own
 * choices and allegiances.
 */
export const SAMUEL_1_12: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 12,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  intros: [
    'Samuel has been Israel&apos;s judge for decades. He has led them out of pagan worship, restored their trust in God, and shown them the difference between a leader who serves the Lord and one who serves himself. But now, at his life&apos;s threshold, the people have asked for a king. Samuel has anointed Saul with his own hands. And before he steps aside, Samuel stands before all Israel and offers his farewell address.',
    'This is a chapter about integrity, accountability, and what it means to lead well. Samuel invites the people to examine his record. Then he rehearses God&apos;s entire history with Israel — a pattern of covenant faithfulness that will become the foundation for understanding the gospel itself. And when thunder shakes the harvest, God Himself bears witness to the truth Samuel has spoken. The chapter ends not in judgment but in renewed commitment: Samuel promises to keep praying for a people he is releasing to a new form of rule.',
  ],

  sections: [
    /* ─── 1 Samuel 12:1–5 — Samuel's Integrity Affirmed ────────────────── */
    {
      ref: '1 Samuel 12:1–5',
      title: 'Samuel&apos;s Life of Integrity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'And Samuel said unto all Israel, Behold, I have hearkened unto your voice in all that ye said unto me, and have made a king over you.'),
            plain(2, 'And now, behold, the king walketh before you: and I am old and grayheaded; and, behold, my sons are with you: and I have walked before you from my childhood unto this day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 's12-old-age',
          html:
            'Samuel is stepping aside. He has fulfilled his role as judge, anointed the king, and now he releases power. But before he goes, he wants the record straight. He is old and gray-headed. His sons are there. And he has walked before them from childhood — a complete arc of life lived in public view.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('Behold, here I am: witness against me before the Lord, and before his anointed: '),
                hg('whose ox have I taken? or whose ass have I taken?', 's12-ox-ass'),
                t(' or whom have I defrauded? whom have I oppressed? or of whose hand have I received any '),
                hy('bribe', 's12-bribe'),
                t(' to blind mine eyes therewith? and I will restore it you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-ox-ass',
          html:
            'An ox was wealth. An ass was a beast of burden, livelihood itself. When Samuel asks "whose ox have I taken," he is asking about the fundamental property of common people. He has not used his position to enrich himself. This is the language of accountability — Samuel opens his life to public witness.',
        },
        {
          kind: 'commentary',
          id: 's12-bribe',
          html:
            'A bribe blinds the eyes — it clouds judgment, darkens sight. Samuel invites the people to examine whether he has ever taken anything to compromise his leadership. In ancient courts, the taking of bribes was the corruption that ate away at justice itself.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('And they said, Thou hast not defrauded us, nor oppressed us, neither hast thou taken ought of any man&apos;s hand.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he said unto them, '),
                hp('The Lord is witness against you, and his anointed is witness this day, that ye have not found ought in my hand.', 's12-witness'),
                t(' And they answered, He is witness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-witness',
          html:
            'The people affirm Samuel. He has not robbed them, has not oppressed them. And Samuel calls on two witnesses: the Lord and his anointed, Saul. The record is clean. Before a priest steps aside from one form of leadership and a people move into another, the integrity is sealed.',
        },

        {
          kind: 'carry',
          html:
            'Integrity is something you live openly. Samuel did not keep his hands clean in secret and then ask for credit. He invites public examination. He asks the people directly: where is the evidence against me? This is the opposite of the posture that hides and defends. Wherever you lead — in your home, your work, your community — your life will speak. The question Samuel asks is worth asking of yourself: If someone examined your dealings with the people you care about, what would they find?',
        },
        {
          kind: 'reflection',
          id: 's12-integrity',
          prompt:
            'What relationship or situation in your life requires the kind of openness Samuel showed — inviting examination rather than hiding? What would it look like to live that openly?',
        },
      ],
    },

    /* ─── 1 Samuel 12:6–11 — The Rehearsal of God's Saving Acts ────────── */
    {
      ref: '1 Samuel 12:6–11',
      title: 'God&apos;s Covenant Pattern',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('And Samuel said unto the people, '),
                hp('It is the Lord that advanced Moses and Aaron', 's12-moses-aaron'),
                t(', and that brought your fathers up out of the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-moses-aaron',
          html:
            'Samuel begins a rehearsal of history — not to condemn the people, but to remind them of the pattern. The Lord advanced Moses and Aaron. God did this. He brought them up from Egypt. The entire foundational narrative rests on God&apos;s initiative, not Israel&apos;s achievement.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('Now therefore stand still, that I may '),
                hg('reason with you', 's12-reason'),
                t(' before the Lord of all the righteous acts of the Lord, which he did to you and to your fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-reason',
          html:
            '"Reason with you" — to argue, to make the case, to speak plainly about facts. Samuel is going to lay out the pattern so clearly that the people cannot miss it.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(8, 'When Jacob was come into Egypt, and your fathers cried unto the Lord, then the Lord sent Moses and Aaron, which brought your fathers out of Egypt, and made them dwell in this place.'),
            {
              number: 9,
              spans: [
                t('And when they forgot the Lord their God, he '),
                hg('sold them into the hand of Sisera', 's12-sisera'),
                t(', captain of the host of Jabin king of Canaan, and into the hand of the Philistines, and into the hand of the king of Moab; and they fought against them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-sisera',
          html:
            'When Israel forgot the Lord, God sold them into the hands of their enemies — Sisera, the Philistines, Moab. This is the pattern: faith brings deliverance; unfaithfulness brings oppression. The people are not victims of fate. They are reaping what they have sown.',
        },

        {
          kind: 'hebrew',
          id: 's12-shekachu',
          title: 'Shekachu — "They Forgot"',
          script: 'שָׁכַח',
          translit: '<strong>Shekachu</strong> · forgot; abandoned; ceased to remember',
          description:
            'The Hebrew word for "forgot" here is not mere mental lapse. To forget the Lord is to cease remembering covenant, to abandon relationship. It is an active turning away from who God is and what He has done.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                t('And they cried unto the Lord, and said, We have sinned, because we have forsaken the Lord, and have served Baalim and Ashtaroth: but now deliver us out of the hand of our enemies, and we will serve thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-confession',
          html:
            'The pattern turns. When oppression comes, the people cry out. And they confess: "We have sinned. We have forsaken the Lord." The confession is specific. They have served Baalim and Ashtaroth — pagan gods, the fertility deities of Canaan. And they make a promise: deliver us, and we will serve you.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 11,
              spans: [
                t('And the Lord sent Jerubbaal, and Bedan, and Jephthah, and Samuel, and delivered you out of the hand of your enemies on every side, and ye dwelled safe.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-deliverers',
          html:
            'God sends deliverers. Jerubbaal is Gideon (Judges 6:32), whose name itself means "let Baal contend." Bedan may refer to Barak. Jephthah is the judge of Judges 11. And Samuel — the speaker himself — is in this company of deliverers. God raises up people to turn the tide.',
        },

        {
          kind: 'carry',
          html:
            'The pattern Samuel rehearses is the gospel pattern: faithfulness brings blessing; unfaithfulness brings consequence; repentance brings restoration. You live in this same cycle. When you turn from the Lord and toward lesser things, you will feel the weight of consequence. When you return and cry out, He listens. And He sends help — sometimes in the form of other people, sometimes in the form of a turning of circumstances, sometimes in the form of a choice available to you that was not visible before. The pattern is not punishment for its own sake. It is invitation. Come back.',
        },
        {
          kind: 'reflection',
          id: 's12-pattern',
          prompt:
            'Where do you see this pattern — faithfulness bringing peace, unfaithfulness bringing trouble, repentance bringing deliverance — in your own life? What does it teach you about how God treats His people?',
        },
      ],
    },

    /* ─── 1 Samuel 12:12–15 — "Yet You Asked for a King" ────────────────── */
    {
      ref: '1 Samuel 12:12–15',
      title: 'The Request for a King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 12,
              spans: [
                t('And when ye saw that Nahash the king of the children of Ammon came against you, ye said unto me, Nay; but a king shall reign over us: '),
                hg('when the Lord your God was your king', 's12-god-king'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-god-king',
          html:
            'Here is the crisis of the chapter. Nahash, king of Ammon, threatens Israel. And instead of crying out to the Lord — as the pattern requires — Israel says: "We want a king." They are replacing the God who has been their deliverer with a human ruler. Samuel does not hide this. He states it plainly.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 13,
              spans: [
                t('Now therefore behold the king whom ye have chosen, and whom ye have desired! and, behold, '),
                hg('the Lord hath set a king over you', 's12-lord-set-king'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-lord-set-king',
          html:
            'Samuel does not reject the kingship. The Lord has set a king over them. But notice the sequence: they asked for a king from fear; the Lord granted their request. This is not the Lord abandoning them. It is the Lord honoring their choice — but with consequences attached.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('If ye will fear the Lord, and serve him, and obey his voice, and not rebel against the commandment of the Lord, then shall both ye and also the king that reigneth over you '),
                hg('continue following the Lord your God', 's12-continue'),
                t(':'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But if ye will not obey the voice of the Lord, but rebel against the commandment of the Lord, then shall the hand of the Lord be against you, as it was against your fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-continue',
          html:
            'Samuel lays out the terms. The kingship is not a replacement for the covenant. The king can rule, but only if he and the people fear the Lord and obey His voice. The moment they rebel, the hand of the Lord will be against them — just as it was against their fathers who forgot and served Baalim.',
        },

        {
          kind: 'carry',
          html:
            'You may have asked God for something — a way, a relationship, a role, a place of security — because you were afraid. And God may have granted it. But the granting does not change the fundamental covenant. You still must fear Him. You still must obey His voice. You cannot use the thing you asked for as an excuse to forget where it came from. If you do, you will feel His hand against you. Not in anger, but in consequence. Not to destroy, but to call you back.',
        },
        {
          kind: 'reflection',
          id: 's12-fear-request',
          prompt:
            'What have you asked for from God because you were afraid? If He granted it, have you found yourself tempted to stop fearing Him and obey Him, and instead start trusting the thing He gave you? What would it mean to return to Him?',
        },
      ],
    },

    /* ─── 1 Samuel 12:16–18 — Thunder in Wheat Harvest ───────────────────── */
    {
      ref: '1 Samuel 12:16–18',
      title: 'The Sign in the Sky',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 16,
              spans: [
                t('Now therefore stand ye still and see this great thing, which the Lord will do before your eyes.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Is it not wheat harvest to day? I will call upon the Lord, and he shall send '),
                hg('thunder and rain', 's12-thunder-rain'),
                t('; that ye may perceive and see that ye have done wickedness in the sight of the Lord, in asking you a king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-thunder-rain',
          html:
            'Wheat harvest is in the spring, the dry season. Rain at harvest time is not merely unusual — it is virtually unknown. Thunder and rain at that moment would be unmistakable. Samuel is asking the Lord to do something that shatters the natural order so completely that no one can explain it away. This is not a gentle hint. This is God shaking the heavens.',
        },

        {
          kind: 'hebrew',
          id: 's12-matar',
          title: 'Matar — "Rain"',
          script: 'מָטָר',
          translit: '<strong>Matar</strong> · rain; to rain; the gift of water from heaven',
          description:
            'In the ancient Near East, rain was the primary sign of God&apos;s blessing. To withhold rain was judgment; to send rain out of season was a violation of the natural order, a signature of divine will. Matar is the bounty of heaven breaking through.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 18,
              spans: [
                t('So Samuel called upon the Lord; and the Lord sent '),
                hg('thunder and rain that day', 's12-thunder-day'),
                t(': and all the people greatly feared the Lord and Samuel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-thunder-day',
          html:
            'Samuel prays. And the Lord answers. Thunder and rain come in wheat harvest. The impossible becomes fact. And the people fear — not in the sense of cowering, but in the sense of awe. They perceive that they are in the presence of something far greater than themselves.',
        },

        {
          kind: 'carry',
          html:
            'There are moments when God breaks the order of things. Not often. Not for show. But sometimes, when His people need to be shaken awake, when they need to know that He is real and alive and will not be ignored — He acts. The thunder is not cruelty. It is love. It says: Wake up. I am here. You are not abandoned. And the natural order you thought was unbreakable is nothing compared to the God who made it.',
        },
        {
          kind: 'reflection',
          id: 's12-thunder',
          prompt:
            'When has God shaken your comfortable understanding of how the world works? What did that revelation teach you about who He is?',
        },
      ],
    },

    /* ─── 1 Samuel 12:19–25 — "Pray for Us" and the Promise to Continue ─── */
    {
      ref: '1 Samuel 12:19–25',
      title: 'Even Now, Samuel Will Not Abandon Them',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 19,
              spans: [
                t('And all the people said unto Samuel, '),
                hg('Pray for thy servants unto the Lord thy God', 's12-pray'),
                t(', that we die not: for we have added unto all our sins this evil, to ask us a king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-pray',
          html:
            'The thunder has done its work. The people see themselves clearly. And they cry out to Samuel: Pray for us. Do not abandon us. We are afraid. Samuel, who is stepping aside, is still the one they turn to in fear.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 20,
              spans: [
                t('And Samuel said unto the people, Fear not: ye have done all this wickedness: yet turn not aside from following the Lord, but serve the Lord with all your '),
                hp('heart', 's12-heart'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-heart',
          html:
            '"Yet turn not aside" — even now, after thunder and rain, even after the people have seen their sin, the path forward is not despair. It is more obedience. The word "yet" is crucial. The past is real, but it is not final. Turn back. Serve with all your heart.',
        },

        {
          kind: 'greek',
          id: 's12-kardia',
          title: 'Kardia — "Heart"',
          script: 'καρδία',
          translit: '<strong>Kardia</strong> · heart; the center of will, emotion, and understanding',
          description:
            'When Scripture speaks of the heart, it does not mean sentiment. The heart is where understanding lives, where will resides, where the deepest choices are made. To serve "with all your heart" is to serve with every part of your being that is capable of choice.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 21,
              spans: [
                t('And turn ye not aside: for then should ye go after vain things, which cannot profit nor deliver; for they are vain.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('For the Lord will not forsake his people for his great name&apos;s sake: because it hath pleased the Lord to make you his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-forsake',
          html:
            'And here is the gospel at the heart of judgment. The Lord will not forsake His people. Not because they deserve it. Not because they have earned His loyalty. But because He has chosen to make them His people, and His name is at stake in that choice. To abandon Israel would be to make God a liar about who He is.',
        },

        {
          kind: 'christ',
          id: 's12-king-we-asked',
          title: 'Christ Connection — The King We Asked For',
          html:
            'Israel asked for a king like the nations around them. And God said yes — and the consequences came. But centuries later, Israel would ask for a king again, this time from the depths of poverty and desperation. And God would send One who came not to be like the kings of the earth, but to overturn everything those kings stood for. "My kingdom is not of this world," Jesus said (John 18:36). And yet He came as a king — anointed, crowned, carrying a scepter. The kingdom He offers is not the security of military might or the assurance of a flawed human ruler. It is the kingdom of one who dies to save His people, who does not gather tribute but pours out life. In Christ, we have not the king we asked for, but the King we needed.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 23,
              spans: [
                t('Moreover as for me, God forbid that I should sin against the Lord in '),
                hg('ceasing to pray for you', 's12-cease-pray'),
                t(': but I will teach you the good and the right way:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-cease-pray',
          html:
            'Samuel makes a vow. To stop praying for Israel would be a sin against the Lord. Even though he is stepping aside, even though power is passing to Saul, Samuel commits to ongoing intercession. This is pastoral care at its deepest: the willingness to keep lifting others before God when you yourself have stepped back from visible leadership.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 24,
              spans: [
                t('Only fear the Lord, and serve him in truth with all your heart: for consider how great things he hath done for you.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('But if ye shall still do wickedly, ye shall be consumed, both ye and your king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's12-final-word',
          html:
            'The chapter ends not in hope alone, nor in threat alone, but in both held together. Consider what God has done. Fear Him. Serve in truth. But know that the covenant is real: faithfulness brings blessing, wickedness brings consequence. Even for the king.',
        },

        {
          kind: 'carry',
          html:
            'Samuel teaches "the good and the right way." That phrase carries weight. It means not only what is good, but what is right — what aligns with covenant, with the order of things as God has made them. You cannot learn this from the world. You must learn it from someone who walks it, who has proven it through a lifetime of integrity. And even when they step aside from visible leadership, the best teachers — the Samuels — keep praying, keep teaching, keep pointing the way back.',
        },
        {
          kind: 'reflection',
          id: 's12-good-way',
          prompt:
            'Who has taught you the good and the right way? And who are you teaching by your example, even when you step back from visible leadership?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Samuel 12',
    quote:
      'Samuel, stepping aside as judge, calls Israel back to covenant faithfulness: fear the Lord, serve Him with all your heart, and remember the great things He has done. Even as the people ask for a king, God promises not to forsake His people for His name&apos;s sake.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],
};
