import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 10 — the chapter where God&apos;s holiness kills, and a father holds his peace.
 *
 * Nadab and Abihu offer "strange fire" and are consumed. Aaron&apos;s silence — "And Aaron held his peace"
 * — is one of the most profound non-responses in scripture. Moses commands no public mourning. The priests
 * are forbidden to drink wine while serving. Aaron and his sons fail to eat the sin offering as commanded;
 * Moses is angry; Aaron speaks from his grief. The chapter does not end with comfort, but with the logic
 * of a father&apos;s sorrow, which turns out to be its own kind of worship.
 */
export const LEVITICUS_10: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 10,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 18 },
  opener: {
    matchTitle: /The Two Priests Are/i,
    caption: 'Leviticus 10',
  },
  intros: [
    'Leviticus 10 opens one day after the priests have been consecrated and the fire of the Lord has come down and consumed the burnt offering at the altar. It is the moment the priesthood is supposed to begin in earnest. Instead, a man and his two sons step forward with something God did not command, and they are consumed by fire from God themselves. This is the chapter the American church has learned to skip.',
    'But read it carefully. What follows is not a sermon about the danger of carelessness. It is a study in how a family absorbs the loss of its sons when God Himself is the cause. Aaron&apos;s answer to Moses — the explanation for why he will not eat the sin offering, why the grief he holds is more important than the law — is so human, so tender, and so true that it stands as the truest word about suffering in the whole book of Leviticus. The holiness of God is real. So is the grief of a father who holds his peace.',
  ],

  bottomShare: {
    label: 'Share Leviticus 10',
    quote:
      'And Aaron held his peace. The most powerful words spoken in Leviticus are not spoken at all — they are the silence of a father who lost his sons to the holiness of God, and who somehow, in that silence, worshipped.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 10 · Study Guide',
  },

  sections: [
    /* ─── Leviticus 10:1–2 — Strange Fire ───────────────────────────────── */
    {
      ref: 'Leviticus 10:1–2',
      title: 'Strange Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hg('Nadab and Abihu', 'c-nadab-abihu'),
                t(', the sons of Aaron, took either of them his '),
                hy('censer', 'hebrew-machtah'),
                t(', and put fire therein, and laid incense thereon, and offered '),
                hy('strange fire', 'hebrew-eish-zarah'),
                t(' before the LORD, which he commanded them not.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And there went out '),
                hp('fire from the LORD', 'christ-consuming-fire'),
                t(', and devoured them, and they died before the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nadab-abihu',
          html:
            'Nadab and Abihu are Aaron&apos;s eldest sons. Just the chapter before, they were at the pinnacle of their calling — chosen among all Israel to approach the altar, to bear the people&apos;s prayers to God. They have seen the glory of God descend. Their moment has arrived. And in that moment, they reach for something God did not command. The commentaries offer guesses: they were drunk, they were presumptuous, they improvised beyond their office. Leviticus does not say. What matters is this: they did something beautiful in the wrong way, and holiness killed them for it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-machtah',
          title: 'Machtah — &ldquo;censer&rdquo;',
          script: 'מַחְתָּה',
          translit: '<strong>machtah</strong> · a firepan for carrying and burning incense',
          description:
            'The censer was sacred. Only once a year did anyone but the high priest approach the holy of holies, and he carried a machtah filled with live coals from the altar. To take it up meant to stand in the very stream of priestly privilege. The problem was not the censer. It was the fire.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-eish-zarah',
          title: 'Eish Zarah — &ldquo;strange fire&rdquo;',
          script: 'אֵשׁ זָרָה',
          translit: '<strong>eish zarah</strong> · fire that is foreign, unauthorized, not commanded',
          description:
            'Not evil fire. Not even forbidden fire. Only unauthorized fire — fire that did not come from the altar where God had commanded. The difference between the holy and the common, in God&apos;s presence, is a difference of obedience, not morality.',
        },
        {
          kind: 'christ',
          id: 'christ-consuming-fire',
          title: 'Christ Connection — The Consuming Fire',
          html:
            'Hebrews 12:28–29 holds this text up like a mirror: &ldquo;let us have grace, whereby we may serve God acceptably with reverence and godly fear: For our God is a consuming fire.&rdquo; The writer is not saying God is angry. He is saying God is holy — holiness so real, so particular, that it has weight. It consumes what should not stand in its presence. But read the next verse: &ldquo;Now Jesus Christ is the same yesterday, and to day, and for ever&rdquo; (13:8). Christ is the face and the body of that consuming fire. And He alone can stand in it and live. He went into the fire for us. He is the only strange fire God ever loved.',
        },
        {
          kind: 'carry',
          html:
            'The priests are not careless here. They are devoted. They see the holy place open before them and they want to bring their best. They just bring it in the wrong way. How many times does devotion itself become a kind of presumptuousness in your own life — a certainty that your offering, your effort, your way of serving, is exactly what the moment calls for? The text does not give much comfort here. It simply says: check your fire. Ask whether what you are bringing is what He commanded.',
        },
        {
          kind: 'reflection',
          id: 'lev10-fire',
          prompt:
            'Is there a place where you are offering something beautiful but unauthorized in your walk with God? Where might you need to lay down your own fire and wait for His?',
        },
      ],
    },

    /* ─── Leviticus 10:3 — And Aaron Held His Peace ───────────────────── */
    {
      ref: 'Leviticus 10:3',
      title: 'And Aaron Held His Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('Then Moses said unto Aaron, This is it that the LORD spake, saying, '),
                hp('I will be sanctified', 'c-sanctified'),
                t(' in them that come nigh me, and '),
                hg('before all the people', 'c-before-people'),
                t(' I will be '),
                hy('glorified', 'hebrew-kavod'),
                t('. '),
                hp('And Aaron held his peace', 'christ-aaron-silence'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sanctified',
          html:
            'God is saying: I will be made holy — <em>separated, set apart</em> — in those who are closest to me. Not by their perfection, but by their acknowledgment of my holiness. The way those near the altar live tells the world what God is. Their obedience, their carefulness, their willingness to let God be God — that is how God&apos;s holiness gets a face in the world.',
        },
        {
          kind: 'commentary',
          id: 'c-before-people',
          html:
            'Notice: this is happening in front of everyone. The whole assembly is watching. God&apos;s holiness is not private business. When God acts to protect the holiness of His presence, He is teaching the entire people something about what He is. Do not domesticate Him. Do not assume the comfort you have known will shield you from His nature.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kavod',
          title: 'Kavod — &ldquo;glory, weight&rdquo;',
          script: 'כָּבוֹד',
          translit: '<strong>kavod</strong> · glory, heaviness, the weighty presence of God',
          description:
            'Kavod means both the glory and the weight of God. To glorify Him means to acknowledge that weight — to give God His full seriousness, His gravity, His reality. It is the opposite of diminishing Him.',
        },
        {
          kind: 'christ',
          id: 'christ-aaron-silence',
          title: 'Christ Connection — The Mother at the Cross',
          html:
            '[res:sbl-holiness-divine-judgment] Aaron&apos;s silence is echoed in one other moment in the Gospels. At the foot of the cross, Mary stands and says nothing. John 19:25 names her there: &ldquo;Now there stood by the cross of Jesus his mother&rdquo; — present, witnessing, <em>silent.</em> Not because she understood the theology. Not because she had accepted it. But because in the presence of something so grievous and so holy at once, what can a mother say? [res:intertextual-hebrews-12] Christ&apos;s death is the ultimate strange fire — God&apos;s own Son, in God&apos;s own temple, doing something that looks wrong until you see it is exactly right. And the ones who stand closest do not rage or explain. They hold their peace.',
        },
        {
          kind: 'carry',
          html:
            'There may be a season in your life right now where the right thing to do is to say nothing. Not to defend what happened, not to explain it, not to spiritualize it too quickly. Just to stand there and let God be right even when the cost is written on your face. That silence is not defeat. It is the deepest form of faith — the knowledge that God is God even when it costs everything, and that His holiness is still beautiful even when it breaks your heart.',
        },
        {
          kind: 'reflection',
          id: 'lev10-silence',
          prompt:
            'Is there something God has asked of you that you still don&apos;t understand — that cost you something and still doesn&apos;t make sense? What would it mean to hold your peace about it, and let God be right?',
        },
      ],
    },

    /* ─── Leviticus 10:4–7 — No Public Mourning ──────────────────────── */
    {
      ref: 'Leviticus 10:4–7',
      title: 'No Weeping Before the People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 4,
              spans: [
                t('And Moses called Mishael and Elzaphan, the sons of Uzziel the uncle of Aaron, and said unto them, Come near, carry your brethren from before the sanctuary out of the camp.'),
              ],
            },
            {
              number: 5,
              spans: [t('So they went near, and carried them in their coats out of the camp; as Moses had said.')],
            },
            {
              number: 6,
              spans: [
                t('And Moses said unto Aaron, and unto Eleazar and unto Ithamar, his sons, '),
                hg('Uncover not your heads', 'c-mourn-not'),
                t(', neither rend your clothes; lest ye die, and lest wrath come upon all the people: but '),
                hg('let your brethren', 'c-brethren-mourn'),
                t(', the whole house of Israel, bewail the burning which the LORD hath kindled.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And ye shall not go out from the door of the tabernacle of the congregation, lest ye die: for the anointing oil of the LORD is upon you. And they did according to the word of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mourn-not',
          html:
            'Aaron is told: do not tear your robes. Do not uncover your head in the sign of mourning. Stay at your post. Keep the priesthood moving. There is no rest here for the father who has just lost his sons. The work does not pause. The people still need the altar. And the priest must be the one to tend it — the very priest whose hands are still warm from the bodies of his sons, whose eyes have just seen the fire take them.',
        },
        {
          kind: 'commentary',
          id: 'c-brethren-mourn',
          html:
            'But notice: someone gets to mourn. Moses commands the whole assembly to bewail what happened. The people will hold the grief that Aaron cannot hold in front of them. There is a mercy in this, even if it is hidden. Aaron cannot weep, but he will not weep alone. All Israel will weep for his sons. His sorrow is not erased — it is witnessed.',
        },
        {
          kind: 'carry',
          html:
            'There are seasons in life when you are called to keep functioning while broken. To show up to work while grieving. To pray for others while your own prayers feel hollow. To lead while lost. The priesthood does not stop because a priest has suffered. If anything, the priest is more necessary then. If you find yourself in that season, know: the people can grieve what you must hold privately. Their tears can honor what you cannot openly name. You do not have to do your sorrow alone, even if you have to do your job alone.',
        },
        {
          kind: 'reflection',
          id: 'lev10-function',
          prompt:
            'When have you had to keep doing what you were called to do while grieving? Who held the tears you couldn&apos;t cry? Who might need you to do that for them now?',
        },
      ],
    },

    /* ─── Leviticus 10:8–11 — No Wine on Duty ────────────────────────── */
    {
      ref: 'Leviticus 10:8–11',
      title: 'Sober and Clear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 8,
              spans: [
                t('And the LORD spake unto Aaron, saying,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Do not drink '),
                hg('wine nor strong drink', 'c-wine-strong'),
                t(', thou, nor thy sons with thee, when ye go into the tabernacle of the congregation, lest ye die: it shall be a statute for ever throughout your generations:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And that ye may '),
                hg('put difference between holy and unholy', 'c-put-diff'),
                t(', and between unclean and clean;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And that ye may '),
                hg('teach the children of Israel', 'c-teach-israel'),
                t(' all the statutes which the LORD hath spoken unto them by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wine-strong',
          html:
            'The first law of sobriety in scripture is given to priests. Not because drinking is the real problem, but because a priest near the altar must have a mind clear enough to know the difference between the holy and the common. One moment of confusion, one second of haze, and the work at the altar becomes dangerous not only to the priest, but to the people. What happened to Nadab and Abihu is not named as a cause here — the text does not say they were drunk. But the law that follows suggests that the priests are now being called to a kind of radical clarity that has no room for even the smallest cloud on the mind.',
        },
        {
          kind: 'commentary',
          id: 'c-put-diff',
          html:
            'The whole role of a priest is to stand in the doorway between two worlds. To distinguish what is set apart for God from what is common. To teach the people what that boundary looks like. But you cannot teach what you do not see clearly. A fuzzy priest teaches a fuzzy people.',
        },
        {
          kind: 'commentary',
          id: 'c-teach-israel',
          html:
            'This is the priest&apos;s actual job. Not to mediate. Not to perform rituals. To teach. To show the people the architecture of holiness. To say, again and again: this is different. This matters differently. God is in this moment in a way He is not in that one. The people cannot learn that from someone who is not paying attention.',
        },
        {
          kind: 'carry',
          html:
            'If you hold any kind of spiritual responsibility — teaching, leading, parenting, pastoring — this law applies to you in your idiom. Something is fogging your clarity. Not necessarily wine, but — distraction, fear, anger, the drone of the world, the scroll. The priest&apos;s sobriety was not about virtue. It was about the people. You cannot teach the difference between holy and common, between what actually matters and what is noise, if your own mind is not clear. What would it take for you to show up with the attention the people around you deserve?',
        },
        {
          kind: 'reflection',
          id: 'lev10-sober',
          prompt:
            'What is fogging your clarity right now — keeping you from seeing what is truly different about God and His presence? What one thing could you lay down this week to show up clearer?',
        },
      ],
    },

    /* ─── Leviticus 10:12–15 — The Sin Offering ────────────────────────── */
    {
      ref: 'Leviticus 10:12–15',
      title: 'Eat the Sin Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 12,
              spans: [
                t('And Moses spake unto Aaron, and unto Eleazar and unto Ithamar, his sons that were left, Take the '),
                hy('meat offering', 'hebrew-minchah'),
                t(' that remaineth of the offerings of the LORD made by fire, and eat it without leaven beside the altar: for it is most holy:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And ye shall eat it in the holy place, because it is thy due, and thy sons&apos; due, of the offerings of the LORD made by fire: for so I am commanded.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the wave breast and heave shoulder shall ye eat in a clean place, thou, and thy sons, and thy daughters with thee: for they be thy due, and thy sons&apos; due, which are given out of the sacrifices of peace offerings of the people.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('The '),
                hg('heave shoulder and the wave breast', 'c-heave-wave'),
                t(' shall they bring with the offerings made by fire of the fat, to wave it for a wave offering before the LORD; and it shall be thine, and thy sons&apos; with thee, by a statute for ever; as the LORD hath commanded.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heave-wave',
          html:
            'The priests are given a portion of the sacrifice to eat — the breast and the shoulder. It is not a luxury; it is their inheritance, the way they are sustained. They are commanded to eat. But Aaron does not eat. The reader knows this from verse 19 — he will explain why. For now, Moses gives the command, and Aaron will refuse it. Watch what happens when obedience itself becomes an obstacle to sorrow.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-minchah',
          title: 'Minchah — &ldquo;meal offering, grain offering&rdquo;',
          script: 'מִנְחָה',
          translit: '<strong>minchah</strong> · an offering of grain, the work of human hands, the fruit of the earth',
          description:
            'Minchah is the offering of the work of human hands — grain made into bread, oil, incense. It is not the animal sacrifice; it is the produce of the earth, the fruit of human toil. The priests are to eat of what human hands have brought to God.',
        },
        {
          kind: 'carry',
          html:
            'Moses is telling Aaron: you are still a priest. Take what belongs to you. Do not try to fast yourself out of what happened. Do not deny your own need for sustenance. Grief does not exist outside the body&apos;s reality — you still need to eat, to be cared for, to let the people sustain you even as you hold what broke you. It is a strange mercy, to be commanded to receive even while you are reeling.',
        },
      ],
    },

    /* ─── Leviticus 10:16–20 — Aaron's Answer ───────────────────────── */
    {
      ref: 'Leviticus 10:16–20',
      title: 'Aaron&apos;s Answer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 16,
              spans: [
                t('And Moses diligently sought the goat of the sin offering, and, behold, it was '),
                hg('burnt', 'c-burnt-goat'),
                t(': and Aaron was angry with Eleazar and Ithamar, the sons of Aaron which were left alive, saying,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Wherefore have ye not eaten the sin offering in the holy place, seeing it is most holy, and God hath given it you to bear the iniquity of the congregation, to make atonement for them before the LORD?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Behold, the blood of it was not brought in within the holy place: '),
                hg('ye should indeed have eaten it in the holy place', 'c-should-eaten'),
                t(', as I commanded.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Aaron said unto Moses, '),
                hp('Behold, this day have they offered', 'c-aaron-behold'),
                t(' their sin offering and their burnt offering before the LORD; and such things have befallen me: and if I had eaten the sin offering to day, should it have been accepted in the sight of the LORD?'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And when Moses heard that, '),
                hp('he was content', 'christ-aaron-right'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-burnt-goat',
          html:
            'The goat has been burned instead of eaten. Aaron&apos;s surviving sons have failed to do what the law commanded. Moses is angry — not that they are grieving, but that they have not followed the law. It is a collision between obedience and sorrow, and both are real. Both demand a response.',
        },
        {
          kind: 'commentary',
          id: 'c-should-eaten',
          html:
            'Moses is right. The law is clear. Aaron knows the law. He wrote it. But knowledge of what is right is not the same as the power to do it when your hands are still shaking and your eyes are still full.',
        },
        {
          kind: 'commentary',
          id: 'c-aaron-behold',
          html:
            'Aaron&apos;s answer is not a defense. It is a question: <em>should it have been accepted?</em> He is asking: if I had eaten this offering while grieving like this, would it have been a true offering? Would God have received it as whole and holy? Or would it have been rotten from the inside, a performance of obedience over a grave? Aaron is saying: I know the rule. But I also know my heart. And my heart cannot make a holy offering right now. So I have let the offering burn.',
        },
        {
          kind: 'christ',
          id: 'christ-aaron-right',
          title: 'Christ Connection — The Lord Sees the Heart',
          html:
            '[res:sefaria-strange-fire-judgment] Moses hears Aaron&apos;s answer and his anger ceases. &ldquo;He was content.&rdquo; Sometimes the greater obedience is to know when you are not ready, and to step back rather than proceed with a hollow shell. David will say to God, &ldquo;Thou desirest not sacrifice; else would I give it: thou delightest not in burnt offering. The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise&rdquo; (Psalm 51:16–17). Aaron could not bring a whole offering. His heart was broken. And God honored the breaking.',
        },
        {
          kind: 'carry',
          html:
            'You may be keeping a rule while grieving. Showing up, performing, going through the motions while something inside you is still burning on the pyre. There are seasons when the braver thing is not to push harder, but to name what is true: <em>I cannot make a whole offering right now. My heart is not here.</em> God does not want your hollow obedience. He wants your honest sorrow. Step back. Grieve. Let the offering burn. He sees. And He will be content.',
        },
        {
          kind: 'reflection',
          id: 'lev10-aaron-answer',
          prompt:
            'Where are you keeping a rule while broken? What would it look like to tell God the truth instead — that you cannot make a whole offering right now, but you are still His?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-strange-fire-judgment',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Strange Fire and Divine Judgment',
      url: 'https://www.sefaria.org/Leviticus.10',
      description: 'Rabbinic interpretation of the strange fire incident and lessons about the boundaries of worship.',
    },
    {
      id: 'intertextual-hebrews-12',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hebrews 12:28-29 — Our God is a Consuming Fire',
      url: 'https://intertextual.bible/',
      description: 'Connection between the consuming fire in Leviticus and the holiness that requires appropriate reverence in worship.',
    },
  ],

  hasHebrew: true,
};
