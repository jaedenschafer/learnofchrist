import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 7 — Election grounded not in merit but in God&apos;s free love
 * and covenant faithfulness. The herem  command (devoted destruction) executed
 * through Israel foreshadows final judgment; the pace of purification—little
 * by little—speaks to God&apos;s wise pastoral care. Holiness = set apart for God.
 */
export const DEUTERONOMY_7: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 7,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 21 },
  topicTags: ['covenant', 'faithfulness', 'leadership', 'love'],
  opener: {
    topical: true,
    caption: 'Deuteronomy 7',
  },
  intros: [
    'As Israel stands at the Jordan, about to enter the land, Moses speaks a word of both commissioning and warning. God is about to drive out seven nations—Hittites, Girgashites, Amorites, Canaanites, Perizzites, Hivites, Jebusites—each greater and mightier than Israel. The Lord will deliver them into Israel&apos;s hands; the task will be ruthless, total destruction. And yet beneath this military command lies something more tender: a covenant rooted not in Israel&apos;s strength or number, but in God&apos;s free love, sworn to their fathers long ago.',
    'The chapter speaks to both the concrete history of the conquest and the perennial spiritual struggle: how to remain set apart for God in a world full of rival claims. Idols, covenants with the nations, intermarriage, and the seductive wealth of plundered gods all threaten to pull Israel away from the God who chose them. The answer Moses gives is not to accelerate the purification but to trust it—to understand that little by little, God is making them a holy people.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 7',
    quote:
      'The Lord hath chosen thee to be a special people unto himself, above all people that are upon the face of the earth. Not because thou art more in number, but because the Lord loved thee. Thou art an holy people unto the Lord thy God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 7 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-7',
      kind: 'study',
      source: 'Sefaria [res:sefaria-deuteronomy-7]',
      label: 'Deuteronomy 7 — Chosen People',
      url: 'https://www.sefaria.org/Deuteronomy.7',
      description: 'Hebrew commentaries on election grounded in covenant love, and the herem (devoted destruction) as judgment.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 7:1–2 — The Seven Nations ───────────────────────── */
    {
      ref: 'Deuteronomy 7:1–2',
      title: 'The Seven Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('When the Lord thy God shall bring thee into the land whither thou goest to possess it, and hath cast out many nations before thee, the '),
                t('Hittites, and the Girgashites, and the Amorites, and the Canaanites, and the Perizzites, and the Hivites, and the Jebusites'),
                t(', seven nations greater and mightier than thou;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And when the Lord thy God shall deliver them before thee; '),
                hg('thou shalt smite them, and utterly destroy them', 'deut7-cherem'),
                t(': thou shalt make no covenant with them, nor shew mercy unto them:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut7-cherem',
          html:
            'The Hebrew word <em>cherem</em> means &ldquo;devoted to destruction&rdquo;—sacred destruction, set apart for the Lord as an instrument of His judgment. This is not genocide in the sense of ethnic conquest for profit or pride. Genesis 15:16 reveals the frame: God promises the land to Abraham, but &ldquo;the iniquity of the Amorites is not yet full.&rdquo; By the time Israel enters, four centuries later, that iniquity has reached its measure. The Lord executes judgment <em>through</em> Israel. This was God&apos;s right as judge of all nations; it was executed then in that hour and place; and it is not a model for Christian conduct. In the New Testament, Paul tells us the warfare of the church is &ldquo;not against flesh and blood, but against principalities, against powers&rdquo; (Ephesians 6:12). The church wages war against the spiritual forces that enslave and deceive—not through the sword, but through &ldquo;the weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds&rdquo; (2 Corinthians 10:4)[res:bible-odyssey-herem-devoted-destruction][res:chosen-people-election-theology-biblical].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cherem',
          title: 'Cherem — &ldquo;devoted destruction&rdquo;',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · that which is devoted, set apart for the Lord; utter destruction',
          description:
            'In Israel&apos;s covenant framework, cherem was destruction as an act of consecration to God—not wanton killing but judgment. It appears also in the fall of Jericho and in warnings against coveting plundered things (as verse 25 will name).',
        },
        {
          kind: 'carry',
          html:
            'Spiritual warfare in your life looks like this: identify the idols and covenant compromises—the patterns, the habits, the relationships that pull you from God—and destroy them utterly. Not gradually, not with mercy toward them, not by keeping a little bit &ldquo;just in case.&rdquo; A clean break. The Lord asks for total devotion, and that means total devotion, not divided allegiance.',
        },
        {
          kind: 'reflection',
          id: 'refl-seven',
          prompt:
            'What are the &ldquo;nations&rdquo; in your life right now—the rival claims that stand between you and whole-hearted obedience to God? Name one, and what would &ldquo;utter destruction&rdquo; of its claim look like?',
        },
      ],
    },

    /* ─── Deuteronomy 7:3–5 — No Covenant, No Intermarriage ──────────── */
    {
      ref: 'Deuteronomy 7:3–5',
      title: 'No Covenant, No Intermarriage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('Neither shalt thou make '),
                hg('marriages with them', 'no-covenant-marriage'),
                t('; thy daughter thou shalt not give unto his son, nor his daughter shalt thou take unto thy son.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('For they will turn away thy son from following me, that they may serve other gods: so will the anger of the Lord be kindled against you, and destroy thee suddenly.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('But thus shall ye deal with them; ye shall '),
                hg('destroy their altars, and break down their images, and cut down their groves, and burn their graven images with fire', 'destroy-idols'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-covenant-marriage',
          html:
            'Intermarriage with the pagan  nations is forbidden not because of racial pride but because of spiritual danger. A wife who follows other gods will draw the household after her; a son married into an idolatrous family will be tutored out of covenant faithfulness. The warning is painfully practical: love for a spouse or child can become the door through which the whole family walks away from the God who called them. Throughout Israel&apos;s history this became reality—Solomon&apos;s foreign wives turned his heart toward strange gods (1 Kings 11:4), and the same pattern repeats across the generations.',
        },
        {
          kind: 'commentary',
          id: 'destroy-idols',
          html:
            'The physical destruction of altars and images is part of the larger work of purification. Idols are not merely stone—they are focal points of spiritual power and covenant compromise. By destroying them, Israel removes the visible reminders and access points of false worship from the land they are inheriting as God&apos;s sanctuary.',
        },
        {
          kind: 'carry',
          html:
            'This speaks to the choices you make about your closest relationships and your environment. If you are unequally yoked with someone in your core commitments—whether marriage, deep friendship, or daily work partnership—be honest about the cost. Some relationships strengthen your walk with God; some pull you away. And in your own space—your home, your phone, your feeds—what &ldquo;images&rdquo; are you housing that pull your attention from God? What altars are you tending to without realizing it?',
        },
        {
          kind: 'reflection',
          id: 'refl-covenant',
          prompt:
            'Are there any close relationships or daily influences in your life that subtly pull you away from God? What would it look like to &ldquo;destroy the altars&rdquo; they represent?',
        },
      ],
    },

    /* ─── Deuteronomy 7:6–8 — Chosen by Love, Not by Merit ────────────── */
    {
      ref: 'Deuteronomy 7:6–8',
      title: 'Chosen by Love, Not by Merit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('For thou art an '),
                hp('holy people unto the Lord thy God', 'christ-holy'),
                t(': the Lord thy God hath chosen thee to be a special people unto himself, above all people that are upon the face of the earth.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('The Lord did not set his love upon you, nor choose you, because ye were more in number than any people; for ye were '),
                hg('the fewest of all people', 'fewest'),
                t(':'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But because the Lord loved you, and because he would keep the '),
                hy('oath which he had sworn unto your fathers', 'covenant-fathers'),
                t(', hath the Lord brought you out with a mighty hand, and redeemed you out of the house of bondmen, from the hand of Pharaoh king of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fewest',
          html:
            'Israel is <em>not</em> chosen because of its strength or size. Quite the opposite. At the moment of entry into Canaan, Israel is numerically weak—fewer than any of the seven nations. The reason for election is not merit but grace. God&apos;s choice is free, prior, and unconditional. This is the revolutionary principle that runs through all of Scripture: salvation and covenant belong to those whom God loves, not to those who have earned it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-segullah',
          title: 'Segullah — &ldquo;treasured possession&rdquo;',
          script: 'סְגֻלָּה',
          translit: '<strong>segullah</strong> · precious possession, valued treasure',
          description:
            'Israel is God&apos;s segullah—His treasured, valued, chosen possession. The word implies both the intensity of His regard and the privilege of being set apart. Later, 1 Peter 2:9 applies it to the church: &ldquo;ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people.&rdquo;',
        },
        {
          kind: 'commentary',
          id: 'covenant-fathers',
          html:
            'Election is never arbitrary or momentary. It rests on covenant. God swore an oath to Abraham, Isaac, and Jacob—and the fulfillment of that oath in the deliverance from Egypt and the gift of the land is the proof of His faithfulness. Israel&apos;s identity is rooted in a promise made generations before they were born.',
        },
        {
          kind: 'christ',
          id: 'christ-holy',
          title: 'Christ Connection — Chosen in Him',
          html:
            'Paul writes of the church: &ldquo;he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love&rdquo; (Ephesians 1:4). Every believer is now what Israel was foreshadowing—the elect of God, chosen not for merit but for His pleasure, purchased at an infinite cost, and called to be holy. Holiness is not the condition of being chosen; it is the fruit of being chosen.',
        },
        {
          kind: 'carry',
          html:
            'You have been chosen. Not because you are strong or impressive or numerous in gifts. You were chosen because God loved you—before you knew Him, before you turned to Him, simply because He set His love upon you. That love is the only reason you belong. Let that sink in for a moment. Your standing with God is not earned; it is sworn, it is ancient, it is His gift.',
        },
        {
          kind: 'reflection',
          id: 'refl-chosen',
          prompt:
            'How does it shift your sense of your relationship with God to know you were chosen by His love, not by your merit? Where do you still live as if you have to earn His favor?',
        },
      ],
    },

    /* ─── Deuteronomy 7:9–11 — Covenant Faithfulness ───────────────────── */
    {
      ref: 'Deuteronomy 7:9–11',
      title: 'Covenant Faithfulness and Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('Know therefore that the Lord thy God, he is God, the '),
                hg('faithful God, which keepeth covenant and mercy', 'faithful-god'),
                t(' with them that love him and keep his commandments to a thousand generations;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And repayeth them that hate him to their face, to destroy them: he will not be slack to him that hateth him, he will repay him to his face.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Thou shalt therefore keep the commandments, and the statutes, and the judgments, which I command thee this day, to do them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'faithful-god',
          html:
            'God is faithful—He keeps covenant, He keeps mercy. The promise extends &ldquo;to a thousand generations&rdquo; of those who love Him. But this is not unconditional love in a modern sentimentalist sense. God&apos;s faithfulness is wedded to His holiness. To those who love Him and keep His commandments, He is merciful beyond measure. To those who hate Him, He is a consuming fire. The covenant is bilateral: God&apos;s steadfast love is conditional upon His people&apos;s response. They are to keep the commandments, not as a way to earn His favor (they already have that), but as the natural response of gratitude and love.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ahav',
          title: 'Ahav — &ldquo;love&rdquo;',
          script: 'אָהַב',
          translit: '<strong>ahav</strong> · to love, to show affection and loyalty',
          description:
            'God&apos;s ahav for Israel is not sentimental feeling but covenant commitment—a love that acts, promises, and keeps faith across generations. The love shown in deliverance from Egypt is the same love that sustains Israel through the wilderness and into the land.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s faithfulness is not dependent on your fluctuating feelings. He will keep covenant with you across a thousand generations—your children, your children&apos;s children. Your calling is to love Him and keep His commandments, not as payment but as response, as the way you say &ldquo;thank you&rdquo; to the God who chose you and will never forsake you.',
        },
      ],
    },

    /* ─── Deuteronomy 7:12–16 — The Blessings of Obedience ──────────── */
    {
      ref: 'Deuteronomy 7:12–16',
      title: 'The Blessings of Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 12,
              spans: [
                t('Wherefore it shall come to pass, if ye hearken to these judgments, and keep, and do them, that the Lord thy God shall '),
                hg('keep unto thee the covenant and the mercy which he sware unto thy fathers', 'covenant-bless'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he will '),
                t('love thee, and bless thee, and multiply thee'),
                t(': he will also bless the fruit of thy womb, and the fruit of thy land, thy corn, and thy wine, and thine oil, the increase of thy kine, and the flocks of thy sheep, in the land which he sware unto thy fathers to give thee.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Thou shalt be '),
                hg('blessed above all people', 'blessed-above'),
                t(': there shall not be male or female barren among you, or among your cattle.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the Lord will take away from thee all sickness, and will not put upon thee any of the evil diseases of Egypt, which thou knowest; but will lay them upon all them that hate thee.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And thou shalt consume all the people which the Lord thy God shall deliver thee; '),
                hg('thine eye shall not pity them', 'no-pity'),
                t(': neither shalt thou serve their gods; for that will be a snare unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-bless',
          html:
            'Obedience is not burdensome legalism; it is the pathway to blessing. When Israel hearkens to God&apos;s judgments—when they keep the covenant—they position themselves to receive the mercy and faithfulness He has sworn to give. The blessings are concrete and temporal: fertility, abundance, health, victory in battle. God is not aloof. He works through the material world, through bodies and land and crops.',
        },
        {
          kind: 'commentary',
          id: 'blessed-above',
          html:
            'Israel will be blessed &ldquo;above all people.&rdquo; None shall be barren. The diseases of Egypt—which came upon the Egyptians as judgment for their idolatry and cruelty—will not touch Israel. This is not pride but promise: a covenant people flourish when they keep covenant.',
        },
        {
          kind: 'commentary',
          id: 'no-pity',
          html:
            'The instruction to not pity the peoples of Canaan is part of the same ruthlessness we saw in verses 1–2. Mercy toward the nations would be misplaced—it would blunt the judgment God is executing and would expose Israel to the very spiritual seduction they are called to resist. The hardness Moses counsels here is the necessary clarity of war, not cruelty for cruelty&apos;s sake.',
        },
        {
          kind: 'carry',
          html:
            'When you live in obedience to God—when you choose His way over the rival claims around you—you step into His blessing. Not as payment, but as the natural consequence of alignment. A marriage lived in fidelity and mutual honoring flourishes. A life disciplined in prayer and study bears fruit. A person who guards their attention from the endless pull of distraction finds peace. The blessings God promises are not abstract spiritual states; they are real, embodied, material goods: health, family, provision, peace.',
        },
        {
          kind: 'reflection',
          id: 'refl-bless',
          prompt:
            'Where have you seen obedience to God produce tangible blessings in your life or in the lives of people you respect? What do you need to do to align yourself more fully?',
        },
      ],
    },

    /* ─── Deuteronomy 7:17–19 — Do Not Fear ───────────────────────────── */
    {
      ref: 'Deuteronomy 7:17–19',
      title: 'Do Not Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 17,
              spans: [
                t('If thou shalt say in thine heart, These nations are more than I; '),
                hy('how can I dispossess them', 'fear-question'),
                t('?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Thou shalt not be afraid of them: but shalt well remember '),
                hg('what the Lord thy God did unto Pharaoh, and unto all Egypt', 'remember-egypt'),
                t(';'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The great temptations which thine eyes saw, and the '),
                t('signs, and the wonders, and the mighty hand, and the stretched out arm'),
                t(', whereby the Lord thy God brought thee out: so shall the Lord thy God do unto all the people of whom thou art afraid.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fear-question',
          html:
            'Fear is a real temptation. Looking at the seven nations—greater and mightier, already fortified in the land—Israel naturally asks, &ldquo;How can we possibly overcome this?&rdquo; This is not faithlessness in the moment of asking; it is the human realism. But it is also the moment of decision. Will Israel trust what God has shown them, or will they trust their eyes?',
        },
        {
          kind: 'commentary',
          id: 'remember-egypt',
          html:
            'The antidote to fear is memory. Remember what God did to Egypt. Every plague, every miracle, every step of deliverance—Egypt, the world&apos;s superpower at that hour, was undone by the hand of God. The God who broke Egypt can break the seven nations. The God who parted the Red Sea can part the Jordan. Faith is simply letting your memory of God&apos;s past faithfulness inform your trust in His present power.',
        },
        {
          kind: 'carry',
          html:
            'What has God done in your life that you tend to forget? A time He came through when you were certain He wouldn&apos;t? A door He opened when all of them seemed closed? A healing, a provision, a rescue? When fear rises—and it will—remember. Not as a feeling exercise, but as a spiritual discipline. Write it down if you need to. Say it aloud. Let the God who has been faithful be the God you trust going forward.',
        },
        {
          kind: 'reflection',
          id: 'refl-fear',
          prompt:
            'What &ldquo;Goliath&rdquo; are you looking at right now that makes you afraid? What is one time in your past when God showed up in a way you didn&apos;t expect?',
        },
      ],
    },

    /* ─── Deuteronomy 7:20–24 — Little by Little ────────────────────── */
    {
      ref: 'Deuteronomy 7:20–24',
      title: 'Driven Out Little by Little',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 20,
              spans: [
                t('Moreover the Lord thy God will send the '),
                hg('hornet among them, until they that are left, and hide themselves from thee, be destroyed', 'hornets'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Thou shalt not be affrighted at them: for the Lord thy God is in the midst of thee, a mighty God and terrible.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the Lord thy God will '),
                hg('put out those nations before thee by little and little', 'little-little'),
                t(': thou mayest not consume them at once, lest the beasts of the field increase upon thee.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But the Lord thy God shall deliver them unto thee, and shall destroy them with a mighty destruction, until they be destroyed.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And he shall deliver their kings into thine hand, and thou shalt destroy their name from under heaven: '),
                hg('there shall no man be able to stand before thee', 'stand-before'),
                t(', until thou have destroyed them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'little-little',
          html:
            'This is a profound word. God <em>could</em> drive out all the nations at once—He is almighty. But He will do it &ldquo;little by little&rdquo; instead. Why? &ldquo;Lest the beasts of the field increase upon thee.&rdquo; If the land were suddenly emptied of all human inhabitants, the wild animals would multiply and become a plague. The pace of Israel&apos;s victory must match the pace of their ability to occupy and steward. God&apos;s patience with the conquest is not weakness; it is wisdom. He knows the speed at which His people can absorb what He is giving them.',
        },
        {
          kind: 'commentary',
          id: 'hornets',
          html:
            'The image of &ldquo;hornet&quot;—perhaps literal, perhaps metaphorical for terror and confusion—is a reminder that God fights for His people through many means, not always visible or dramatic. Sometimes the enemy falls to the sword; sometimes to sickness, confusion, or panic that makes them abandon their strongholds.',
        },
        {
          kind: 'commentary',
          id: 'stand-before',
          html:
            'The promise is absolute: there shall be no man able to stand before Israel in battle. This assurance rests on obedience, on faithful covenant-keeping, and on trusting that God goes before them.',
        },
        {
          kind: 'carry',
          html:
            'God does not usually deliver you from all your struggles at once. Healing often comes slowly. A habit or pattern of sin is broken little by little, not in a moment. A broken relationship is mended gradually. The wilderness wandering lasted forty years, not forty days. If God were to remove every obstacle instantly, you would not develop the strength, the faith, the character to inhabit the victory. His pace is not indifference; it is love. He is making space for you to grow into what He has called you to be.',
        },
        {
          kind: 'reflection',
          id: 'refl-little',
          prompt:
            'What has God been slowly delivering you from—gradually, not all at once? How has that slow pace actually served your growth, even though patience was hard?',
        },
      ],
    },

    /* ─── Deuteronomy 7:25–26 — The Snare of Plundered Idols ──────────── */
    {
      ref: 'Deuteronomy 7:25–26',
      title: 'The Snare of Plundered Idols',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 25,
              spans: [
                t('The graven images of their gods shall ye burn with fire: '),
                hg('thou shalt not desire the silver or the gold that is on them, nor take it unto thee', 'desire-snare'),
                t(', lest thou be snared therein: for it is an abomination to the Lord thy God.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Neither shalt thou bring an abomination into thine house, lest thou be cursed like it: but thou shalt utterly detest it, and thou shalt utterly abhor it; for it is cursed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'desire-snare',
          html:
            'This is a nearly tragic warning. Israel is called not only to destroy the idols but to <em>not desire the precious metals adorning them.</em> There is a snare hidden in every idol: beauty, wealth, artistry. A golden calf is genuinely beautiful. A carved image is genuinely skillful. If Israel covets the materials used in idol-making, they may be tempted to preserve parts of the idols, or to fashion new idols, or simply to let the veneration of beautiful objects—even if repurposed—draw their hearts back to false gods. The snare is this: the appearance of value in something God calls an abomination.',
        },
        {
          kind: 'commentary',
          id: 'utterly-detest',
          html:
            'God calls Israel to &ldquo;utterly detest&rdquo; and &ldquo;utterly abhor&rdquo; the idols. This is not grudging acceptance or polite distance. This is hatred. Because anything that turns the human heart from the living God is worthy of hatred, no matter how beautiful the wrapping.',
        },
        {
          kind: 'carry',
          html:
            'There are idols in your life dressed up in respectable clothing. A pursuit of approval, a relationship, a career goal, a screen habit—these are not obviously &ldquo;false gods&rdquo; until you notice they command more of your heart than God does. The snare is this: they often come with real benefits, real beauty, real shimmer. A promotion feels legitimate. A romance feels right. A hobby feels harmless. But if any of them—<em>any of them</em>—consistently pulls your primary allegiance away from God, it is an idol, and you are called to hate it, not with bitterness but with the clarity and finality of someone who has seen that it is snare.',
        },
        {
          kind: 'reflection',
          id: 'refl-idols',
          prompt:
            'What good things in your life might be dressed up as idols—things that have begun to command more of your heart than God? What would it look like to &ldquo;burn&rdquo; them, not by destroying the things themselves but by radically reordering your allegiance?',
        },
      ],
    },
  ],
};
