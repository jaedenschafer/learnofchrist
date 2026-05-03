import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 14 — Caleb&apos;s inheritance. The tribes receive their lots in the Promised Land,
 * but the great moment belongs to Caleb: the man who wholly followed the Lord is rewarded
 * with the very mountain that still held giants. Patient faith vindicated. A life that
 * didn&apos;t waver for 45 years, and at 85, still asking for mountains instead of coasting.
 */
export const JOSHUA_14: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 14,

  estimatedMinutes: { 5: 6, 10: 11, 15: 13 },
  intros: [
    'Joshua 14 begins the distribution of the Promised Land to the twelve tribes. Nine and a half tribes hadn&apos;t yet received their inheritance; the Levites would get cities but no land; and the story quickly turns to Caleb, the one man whose name carries a single definition across the chapter: he wholly followed the Lord his God.',
    'Forty-five years earlier, Caleb had spied out Canaan alongside Joshua and ten others. While ten brought back fear, Caleb brought back confidence in God&apos;s promise. For that faithfulness, he was told his feet would own the very land he had walked. But the other spies died in the wilderness, and Israel wandered for 38 years because of their doubt. Caleb waited. At 85, he doesn&apos;t ask for easier land. He asks for the mountain where the Anakims—the giants—still lived.',
    'The chapter is about reward, yes, but more than that: it&apos;s about faithfulness that doesn&apos;t complain when promises are delayed. And about aging believers who refuse to coast.',
  ],

  sections: [
    /* ─── Joshua 14:1–5 — The Inheritance Distribution ──────────────────── */
    {
      ref: 'Joshua 14:1–5',
      title: 'The Land Divided by Lot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And these are the countries which the children of Israel inherited in the land of Canaan, which Eleazar the priest, and Joshua the son of Nun, and the heads of the fathers of the tribes of the children of Israel, distributed for inheritance to them.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('By '),
                hy('lot was their inheritance', 'joshua-lot'),
                t(', as the Lord commanded by the hand of Moses, for the nine tribes, and for the half tribe.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-lot',
          html:
            'The inheritance is distributed by <em>lot</em> — by the casting of lots, which the Old Testament views as God&apos;s decision made visible. Not by human choice or military might, but by the Lord&apos;s direction. Two and a half tribes had already received their land east of Jordan under Moses; now the other tribes receive theirs by the same orderly method. God provides land for His people with both sovereignty and fairness.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 3,
              spans: [
                t('For Moses had given the inheritance of two tribes and an half tribe on the other side Jordan: but unto the Levites he gave none inheritance among them.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('For the children of Joseph were two tribes, Manasseh and Ephraim: therefore they gave no part unto the Levites in the land, '),
                hg('save cities to dwell in', 'c-levites'),
                t(', with the suburbs thereof for their cattle and for their substance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levites',
          html:
            'The Levites, set apart for priestly service, receive no tribal territory. Instead, they receive cities scattered throughout the other tribes&apos; lands, with surrounding pasture for their flocks. They are supported by the people&apos;s tithes and offerings, freed from the work of farming to tend to the tabernacle and teach the Law. Their inheritance is the Lord Himself.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 5,
              spans: [t('As the Lord commanded Moses, so the children of Israel did, and they divided the land.')],
            },
          ],
        },

        {
          kind: 'carry',
          html:
            'Distribution, fairness, the recognition that different people have different callings—these are not weaknesses in God&apos;s design. The Levites give up land to tend the holy. Others give to support them. Your own inheritance, whatever it is, carries with it both a gift and a responsibility to others. What you&apos;ve been given is not meant to stay only with you.',
        },

        {
          kind: 'reflection',
          id: 'distribute',
          prompt: 'What inheritance—skills, resources, time, faith—has the Lord given you? Who around you might be sustained by it?',
        },
      ],
    },

    /* ─── Joshua 14:6–9 — Caleb Remembers the Promise ────────────────────── */
    {
      ref: 'Joshua 14:6–9',
      title: '"Thou Knowest the Thing the Lord Said"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 6,
              spans: [
                t('Then the children of Judah came unto Joshua in Gilgal: and Caleb the son of Jephunneh the Kenezite said unto him, '),
                hp('Thou knowest the thing that the Lord said unto Moses', 'christ-promise'),
                t(' the man of God concerning me and thee in Kadesh-barnea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'caleb-speaks',
          html:
            'Caleb steps forward to claim his inheritance. He doesn&apos;t demand. He reminds. &ldquo;Thou knowest,&rdquo; he says to Joshua—you were there. You remember the promise. The tone is not bitter, though he waited 45 years while others died in the desert. It is the tone of a man whose faith never broke.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 7,
              spans: [
                t('Forty years old was I when Moses the servant of the Lord sent me from Kadesh-barnea to '),
                hy('espy out the land', 'c-spying'),
                t('; and I brought him word again as it was in mine heart.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spying',
          html:
            'At forty, Caleb was sent to scout Canaan. The phrase &ldquo;as it was in mine heart&rdquo; is crucial—he brought back the report his heart believed, not the fear his eyes might have manufactured. He trusted God over what his senses told him about the giants.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 8,
              spans: [
                t('Nevertheless my brethren that went up with me made the heart of the people melt: but '),
                hg('I wholly followed the Lord my God', 'caleb-wholly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'caleb-wholly',
          html:
            'Caleb names the sin of the other spies—they made the people&apos;s heart melt, they spread unbelief. And he sets himself apart: &ldquo;I wholly followed the Lord my God.&rdquo; Not &ldquo;I believed more than they did&rdquo; or &ldquo;I was braver.&rdquo; <em>Wholly followed</em>. Total devotion. The phrase appears three times in this chapter and defines him entirely.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-mallea',
          title: 'Mille — "wholly followed"',
          script: 'מִלֵּא',
          translit: '<strong>mille acharei</strong> · literally, filled up after; completely devoted to',
          description:
            'The root <em>mille</em> means "to fill" or "to be full." To follow wholly is to be filled completely with devotion to the one you follow. Not partial, not hedging, not keeping one foot back. Full.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 9,
              spans: [
                t('And Moses sware on that day, saying, '),
                hp('Surely the land whereon thy feet have trodden shall be thine inheritance', 'christ-tread'),
                t(', and thy children&apos;s for ever, because thou hast wholly followed the Lord my God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'moses-oath',
          html:
            'Moses swore an oath—the land his feet walked on, he would own. Not the easy plains. The very land he had surveyed. And the promise is for his children&apos;s children: the inheritance is not temporary favor, but covenant stability across generations.',
        },

        {
          kind: 'christ',
          id: 'christ-promise',
          title: 'Christ Connection — The Faithful One Rewarded',
          html:
            'Jesus steps out of Gethsemane having wholly followed the Father—even when it meant death. Hebrews says of Him, &ldquo;who for the joy that was set before him endured the cross, despising the shame&rdquo; (Heb. 12:2). And His reward is not just a mountain—it&apos;s all mountains, all creation. &ldquo;Ask of me, and I shall give thee the heathen for thine inheritance, and the uttermost parts of the earth for thy possession&rdquo; (Psalm 2:8). Caleb&apos;s faithfulness rewarded with a promise is the foreshadow of the Faithful One given all things.',
        },

        {
          kind: 'carry',
          html:
            'Wholly followed. You know what it feels like to follow something partway—to believe most of the time, to obey when it&apos;s convenient, to keep one eye on Plan B. Caleb didn&apos;t have a Plan B. The people around him were convinced it was foolishness. But 45 years later, he was still standing. Faithfulness doesn&apos;t always bring reward on this side of the grave, but it never comes back empty. What would wholeness look like in your own following of Him right now?',
        },

        {
          kind: 'reflection',
          id: 'wholly',
          prompt: 'Where are you holding part of yourself back from following? What would it cost you to follow wholly?',
        },
      ],
    },

    /* ─── Joshua 14:10–12 — Forty-Five Years of Waiting ───────────────── */
    {
      ref: 'Joshua 14:10–12',
      title: '"As Yet I Am as Strong This Day"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 10,
              spans: [
                t('And now, behold, '),
                hy('the Lord hath kept me alive', 'c-kept-alive'),
                t(', as he said, these forty and five years, even since the Lord spake this word unto Moses, while the children of Israel wandered in the wilderness: and now, lo, '),
                hg('I am this day fourscore and five years old', 'caleb-eightyfive'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kept-alive',
          html:
            'Forty-five years. Not all of them waiting for his inheritance—thirty-eight were the penalty years of the wilderness, when Israel wandered because of the spies&apos; unbelief. Caleb spent 38 of those years in a desert he didn&apos;t deserve to be in. Yet the text doesn&apos;t say he &ldquo;survived&rdquo; or &ldquo;endured.&rdquo; It says God <em>kept him alive</em>—with intention, with preservation, with personal care.',
        },

        {
          kind: 'commentary',
          id: 'caleb-eightyfive',
          html:
            'He is now eighty-five. Not young. In that world, already well beyond the average lifespan. This is a man at the end of his life, not the beginning. And he is about to ask for the hardest part of the land.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 11,
              spans: [
                t('As yet I am '),
                hy('as strong this day as I was in the day that Moses sent me', 'c-strength'),
                t(': '),
                hg('as my strength was then, even so is my strength now', 'caleb-strength-now'),
                t(', for war, both to go out, and to come in.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-strength',
          html:
            'This is not false bravado. In that era, the claim of undiminished strength at eighty-five would have been astonishing—and told as a specific, concrete fact about God&apos;s provision, not poetic license. God kept Caleb alive. God kept him strong. The wilderness years did not wear him down.',
        },

        {
          kind: 'commentary',
          id: 'caleb-strength-now',
          html:
            'The repetition is absolute: <em>then and now, strength and strength</em>. Whatever it took to live faithfully in the desert for 38 years without complaint, God supplied it. And He did not take it away when it was time to fight.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 12,
              spans: [
                t('Now therefore '),
                hp('give me this mountain', 'christ-mountain'),
                t(', whereof the Lord spake in that day; for thou heardest in that day how the Anakims were there, and that the cities were great and fenced: '),
                hg('if so be the Lord will be with me', 'c-humble-faith'),
                t(', then I shall be able to drive them out, as the Lord said.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-humble-faith',
          html:
            'Notice the humility: &ldquo;If so be the Lord will be with me.&rdquo; This is after forty-five years of the Lord proving Himself faithful. After surviving the desert. After being kept alive and strong. Yet Caleb doesn&apos;t presume. He doesn&apos;t say &ldquo;I will drive them out.&rdquo; He says &ldquo;if the Lord is with me&rdquo;—faith that rests completely on God, not on his own strength, no matter how preserved.',
        },

        {
          kind: 'carry',
          html:
            'Eighty-five years old. Still asking for mountains. Still saying &ldquo;if the Lord will be with me.&rdquo; Not asking for an easy place to rest. Not coasting. The older saints in Scripture refuse retirement. Abraham left home at seventy-five. Moses died at 120 with his eye not dim. Caleb at eighty-five still had giants to face. There is no age at which faithfulness becomes optional, no point where God releases you from the calling. What mountain has the Lord been growing you to climb, no matter how many years you&apos;ve already walked?',
        },

        {
          kind: 'reflection',
          id: 'mountain',
          prompt: 'If God asked you to face the hardest thing tomorrow, not the easiest—if he asked for the mountain instead of the plain—would you trust that His strength is still with you?',
        },
      ],
    },

    /* ─── Joshua 14:13–15 — The Mountain Inherited ───────────────────────── */
    {
      ref: 'Joshua 14:13–15',
      title: '"Because He Wholly Followed the Lord"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 13,
              spans: [
                t('And Joshua blessed him, and gave unto Caleb the son of Jephunneh Hebron for an inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-blessed',
          html:
            'Joshua <em>blessed</em> Caleb. The same word used in Genesis 1: blessing is the act of calling good and speaking life. Joshua doesn&apos;t begrudge Caleb the hard mountain. He affirms it. The leader&apos;s blessing on the faithful.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 14,
              spans: [
                t('Hebron therefore became the inheritance of Caleb the son of Jephunneh the Kenezite '),
                hg('unto this day', 'c-unto-this-day'),
                t(', '),
                hg('because that he wholly followed the Lord God of Israel', 'caleb-wholly-again'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unto-this-day',
          html:
            'The narrator speaks from a later time: "unto this day," meaning whenever this was written, Caleb&apos;s city remained his. The promise outlasted him. His faithfulness became family property.',
        },

        {
          kind: 'commentary',
          id: 'caleb-wholly-again',
          html:
            'The second time: &ldquo;wholly followed.&rdquo; Not &ldquo;because he was strong&rdquo; or &ldquo;because he was wise.&rdquo; <em>Because he wholly followed</em>. This is the sentence that sums his whole life. This is why he gets the mountain while others sleep in easier lands.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 15,
              spans: [
                t('And the name of Hebron before was '),
                hy('Kirjath-arba', 'hebrew-kirjath'),
                t(', which was a great man among the Anakims. And '),
                hy('the land had rest from war', 'c-rest-war'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-kirjath',
          html:
            'Kirjath-arba: the city of Arba, a great man among the giants. In other words, the land Caleb inherits had belonged to the enemies. It is no symbolic victory—it is concrete. The very city the giants held, Caleb now owns. His faithfulness didn&apos;t just preserve him; it made him a conqueror.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-kalab',
          title: 'Kalab — "Caleb" (the irony of a name)',
          script: 'כָּלֵב',
          translit: '<strong>kalab</strong> · literally, &ldquo;dog&rdquo;',
          description:
            'In Hebrew culture, to call someone a dog was an insult—less than human. Yet this man named "Dog" becomes the model of faithfulness. His life redefines his name. The unlikely one becomes the faithful one.',
        },

        {
          kind: 'commentary',
          id: 'c-rest-war',
          html:
            'The chapter closes not with Caleb&apos;s moment, but with the land&apos;s rest. The wars of conquest are over. The inheritance is settled. Faithfulness has earned not just a place for one man, but peace for the whole people. This is what the promises were for: rest.',
        },

        {
          kind: 'christ',
          id: 'christ-mountain',
          title: 'Christ Connection — The Mountain Claimed',
          html:
            'Caleb asked for the mountain where giants lived and got it. Jesus looked at a mountain shaped like a skull, where death reigned, and said it would be His. &ldquo;I am he that liveth, and was dead; and, behold, I am alive for evermore&rdquo; (Rev. 1:18). The Faithful One who wholly followed the Father through death and out the other side didn&apos;t just inherit a piece of land—He inherited all things. And He gives the faithful with Him a share in His inheritance. &ldquo;To him that overcometh will I grant to sit with me in my throne&rdquo; (Rev. 3:21).',
        },

        {
          kind: 'carry',
          html:
            'The land has rest now. Caleb earned it by wholly following. You know the opposite of rest: the anxiety of hedging your bets, the weariness of living for two masters, the noise of always keeping an exit strategy. Whole-hearted devotion to God doesn&apos;t bring wealth or easy circumstances or exemption from hard mountains. But it does bring peace—the deep rest that comes from knowing you are where He put you, doing what He called you to do, and being held by His unbroken faithfulness.',
        },

        {
          kind: 'reflection',
          id: 'rest',
          prompt: 'Where would your life look different if you stopped half-following and gave your whole heart to what God has called you to?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Joshua 14',
    quote:
      'At eighty-five, Caleb asked not for an easy place, but for the mountain where the giants lived. Because he wholly followed the Lord his God, his faith was rewarded, and he became a living proof that faithfulness doesn&apos;t quit, doesn&apos;t complain, and doesn&apos;t settle for less than God promises.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 14 · Study Guide',
  },

  hasHebrew: true,
};
