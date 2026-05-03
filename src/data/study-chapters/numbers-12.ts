import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 12 — Miriam and Aaron speak against Moses because of his Cushite wife.
 * The deeper issue: jealousy of Moses's unique role with God.
 * God defends Moses, Miriam becomes leprous, Moses intercedes.
 * 16 verses. Themes: meekness, intercession, humility, Christ's silence and forgiveness.
 */
export const NUMBERS_12: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 12,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 10 },
  intros: [
    'Miriam and Aaron speak against Moses because of his Cushite wife — an Ethiopian woman. But the text reveals the deeper complaint: "Hath the LORD indeed spoken only by Moses? hath he not spoken also by us?" The issue is not about race; it is about jealousy of Moses\'s unique role in God\'s plan.',
    'God calls all three to the tabernacle and defends Moses with unmistakable clarity: "With him will I speak mouth to mouth, even apparently, and not in dark speeches." Miriam is struck with leprosy, white as snow. The chapter is only 16 verses, but it teaches what happens when we resent God\'s choice of leaders — and what intercession looks like when we refuse to return that resentment.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /miriam|numbers\s*12/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Numbers 12',
    quote:
      'Miriam and Aaron complain against Moses, but God defends him. When we resent God\'s choice of leaders and are jealous of His gifts to others, the remedy is not our defense but His. And the ultimate picture is Christ, who remained silent before His accusers and prayed forgiveness for those who harmed Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 12 · Study Guide',
  },

  sections: [
    /* ─── Numbers 12:1–3 — The Complaint ───────────────────────────────── */
    {
      ref: 'Numbers 12:1–3',
      title: 'The Complaint',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('Miriam', 'miriam-instigator'),
                t(' and Aaron spake against Moses because of the '),
                hy('Cushite woman', 'c-ethiopian-wife'),
                t(' whom he had married: for he had married a Cushite woman.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'miriam-instigator',
          html:
            'Miriam is named first and will be the one God punishes — suggesting she was the instigator. The complaint is framed around Moses\' wife, but verse 2 reveals the real issue.',
        },
        {
          kind: 'commentary',
          id: 'c-ethiopian-wife',
          html:
            'A Cushite woman — a woman from Ethiopia or Nubia, likely dark-skinned and from a foreign nation. The text does not tell us she was a problem for anyone but Miriam and Aaron. We don\'t know if Moses\' marriage was controversial in the camp or if this is simply the stated grievance masking a deeper one. Either way, the next verse shows what\'s really bothering them.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 2,
              spans: [
                t('And they said, '),
                hp('Hath the LORD indeed spoken only by Moses?', 'c-jealousy-core'),
                t(' hath he not spoken also by us? And '),
                hg('the LORD heard it', 'c-god-hears'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jealousy-core',
          html:
            'This is the real sin. Not marriage to a foreigner, but jealousy that God has chosen Moses as His unique spokesman. Miriam and Aaron are prophets too (Exodus 15:20; Numbers 12:6), but Moses stands alone in his access to God — and they resent it.',
        },
        {
          kind: 'carry',
          html:
            'Jealousy of God\'s choices is a sin that often hides behind other accusations. When you find yourself criticizing a leader\'s appearance, background, family, or choices — stop and ask: Is the real issue that I resent what God gave them that He didn\'t give me? The text doesn\'t shy from calling it what it is.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('(Now the man Moses was '),
                hy('very meek', 'hebrew-anavim'),
                t(', above all the men which were upon the face of the earth.)'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-anavim',
          title: 'Anavim — "meek" / "humble"',
          script: 'עֲנָוִים',
          translit: '<strong>anavim</strong> · humble, lowly, afflicted; one who does not assert themselves',
          description:
            'Moses is called the meekest man on earth — not weak, but utterly without self-assertion. He does not defend himself against Miriam and Aaron. He does not argue. He lets God speak.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-meekness',
          html:
            'This parenthetical comment is crucial. Moses is so meek he will not defend himself. He hears Miriam and Aaron accuse him and does nothing. His silence is not weakness; it is the confidence of a man who knows God and doesn\'t need to prove himself to anyone.',
        },
        {
          kind: 'christ',
          id: 'christ-meekness',
          title: 'Christ Connection — Meekness in the Face of Accusation',
          html:
            'Paul holds up the meekness of Jesus as the model: "I beseech you by the meekness and gentleness of Christ" (2 Cor. 10:1). In the Gospel accounts, Jesus stands silent before His accusers. "He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth" (Isa. 53:7). Like Moses, Jesus did not defend Himself. He trusted the Father to speak for Him.',
        },
      ],
    },

    /* ─── Numbers 12:4–8 — God Defends Moses ───────────────────────────── */
    {
      ref: 'Numbers 12:4–8',
      title: 'God Defends Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('And the LORD spake suddenly unto Moses, and unto Aaron, and unto Miriam, '),
                hg('Come out ye three unto the tabernacle of the congregation', 'c-three-called'),
                t('. And they three came out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-called',
          html:
            'God calls all three — Miriam, Aaron, and Moses — to meet Him at the tabernacle. The complaint will not be whispered judgment; it will be addressed face to face.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('And the LORD came down in the '),
                hy('pillar of the cloud', 'c-presence'),
                t(', and stood in the door of the tabernacle, and called Aaron and Miriam: and they both came forth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-presence',
          html:
            'The pillar of cloud — God\'s visible presence that has guided Israel through the wilderness. When Miriam and Aaron step forward, they are stepping into the presence of God Himself.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('And he said, Hear now my words: If there be a prophet among you, I the LORD will make myself known unto him in a vision, and will speak unto him in a '),
                hy('dream', 'c-dreams-visions'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dreams-visions',
          html:
            'This is the normal way God speaks to prophets — through visions and dreams, with some distance, some mystery. Miriam and Aaron are prophets, and this is how God speaks to prophets. But Moses is different.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('My servant Moses is not so, who is faithful in all mine house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faithful-servant',
          html:
            'Moses is God\'s servant, faithful in all His house — trusted with everything, held in the highest regard. The language echoes what will later be said of Jesus: "faithful as a son over his house" (Hebrews 3:6).',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('With him will I speak '),
                hp('mouth to mouth', 'christ-intimacy'),
                t(', even '),
                hp('apparently', 'c-face-to-face'),
                t(', and not in dark speeches; and the '),
                hg('similitude of the LORD', 'c-similitude'),
                t(' shall he behold: wherefore then were ye not afraid to speak against my servant Moses?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-face-to-face',
          html:
            '"Apparently" — plainly, openly, without riddles or shadows. Moses doesn\'t get God in a dream. He speaks with God directly, face to face, able to see the form and character of God Himself. No prophet in Israel has this kind of access. This is why Miriam and Aaron\'s complaint is not just personal jealousy — it is rebellion against God\'s explicit choice.',
        },
        {
          kind: 'hebrew',
          id: 'c-similitude',
          title: 'The Similitude of the LORD',
          script: 'תְמוּנַת יְהוָה',
          translit: '<strong>temunah</strong> · appearance, form, likeness',
          description:
            'Moses is allowed to see God\'s form — the closest any Old Testament figure comes to direct encounter with God\'s glory and person. This is the privilege that jealous Miriam and Aaron could not bear.',
        },
        {
          kind: 'christ',
          id: 'christ-intimacy',
          title: 'Christ Connection — Face to Face',
          html:
            'Jesus speaks "mouth to mouth" with the Father in a way no one else can. He is "the brightness of his glory, and the express image of his person" (Heb. 1:3). In John 1:18, "No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him." What Moses experienced in glimpses — face-to-face communion with God — Christ lives eternally. The access we have to God now is only through Him.',
        },
        {
          kind: 'carry',
          html:
            'Jealousy of God\'s choice of leaders dies when you see what they truly have and what they truly bear. The burden that makes someone "faithful in all God\'s house" is not something to envy — it is something to honor. And when you see how much God loves someone, your job is not to resent them but to respect what He has entrusted to them.',
        },
      ],
    },

    /* ─── Numbers 12:9–13 — The Punishment and Intercession ───────────── */
    {
      ref: 'Numbers 12:9–13',
      title: 'The Punishment and Intercession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 9,
              spans: [
                t('And the anger of the LORD was kindled against them; and he departed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wrath-kindled',
          html:
            'God\'s anger is kindled — and He leaves. The pillar of cloud withdraws. This is the most terrifying thing that can happen to Israel in the wilderness: the removal of God\'s presence.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                t('And the cloud departed from off the tabernacle; and, behold, Miriam became '),
                hy('leprous, white as snow', 'c-leprosy-sign'),
                t(': and Aaron looked upon Miriam, and, behold, she was leprous.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-leprosy-sign',
          html:
            'Miriam is struck with leprosy — the ancient sign of uncleanness and separation. "White as snow" — all her skin is covered. Only she is punished, not Aaron, suggesting she was the primary instigator and bears the greater guilt.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 11,
              spans: [
                t('And Aaron said unto Moses, Alas, my lord, I beseech thee, '),
                hg('lay not the sin upon us, wherein we have done foolishly', 'c-aaron-plea'),
                t(', and wherein we have sinned.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-aaron-plea',
          html:
            'Aaron immediately understands: they have sinned. He begs Moses to intercede. Notice — he doesn\'t go to God directly. He appeals to Moses, the man they just attacked. This is how far they have fallen: they now see that Moses alone has access to God.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 12,
              spans: [
                t('Let her not be as one dead, of whom the flesh is half consumed when he cometh out of his mother\'s womb.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mercy-plea',
          html:
            'Aaron\'s plea is graphic — don\'t let her be like a stillbirth, half-formed and ruined. He is asking that Miriam be healed before the leprosy consumes her.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 13,
              spans: [
                t('And Moses cried unto the LORD, saying, '),
                hp('Heal her now, O God, I beseech thee', 'christ-forgiveness'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shortest-prayer',
          html:
            'This is the shortest prayer in the Bible — five words in Hebrew. Moses does not rebuke Miriam. He does not lecture Aaron. He hears their plea and immediately prays for the sister who attacked him. He prays for mercy on the very people who tried to humiliate him.',
        },
        {
          kind: 'christ',
          id: 'christ-forgiveness',
          title: 'Christ Connection — Intercession and Forgiveness',
          html:
            'Moses intercedes for those who harmed him. Jesus does the same at the cross: "Father, forgive them; for they know not what they do" (Luke 23:34). The ultimate fulfillment of Moses\' intercession is Christ\'s — praying forgiveness not just for Miriam and Aaron, but for all who reject and crucify Him. And like Moses\' prayer, it is answered. The offenders are forgiven.',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Numbers 12:14–16 — The Outcome ──────────────────────────────── */
    {
      ref: 'Numbers 12:14–16',
      title: 'The Outcome',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('And the LORD said unto Moses, If her father had but spit in her face, should she not be ashamed seven days? let her be shut out from the camp seven days, and after that let her be received in again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seven-days',
          html:
            'Miriam must be separated from the camp for seven days — not as execution, but as cleansing and restoration. The seven days are a period of healing and forgiveness. She is not cast out forever; she is shut out temporarily.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('And Miriam was shut out from the camp seven days: and the people journeyed not till Miriam was brought in again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-israel-waits',
          html:
            'Israel waits for Miriam. The entire camp does not move until she is healed and restored. The one who tried to bring down the leader becomes the occasion for all Israel to experience the power of God\'s protection over His chosen vessel and His patience with His people.',
        },

        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 16,
              spans: [
                t('And after that the people removed from Hazeroth, and pitched in the wilderness of Paran.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'When you resent what God has given someone else, you don\'t hurt them — you hurt yourself. Miriam\'s leprosy came not because she married outside the faith or because she held a different theology. It came because she could not bear that God chose Moses. And the cost fell on her — and on all of Israel, waiting seven days in the camp. Jealousy always costs more than the thing you\'re jealous of was ever worth.',
        },
        {
          kind: 'reflection',
          id: 'numbers-12',
          prompt:
            'Is there someone in your life — a leader, a peer, a family member — to whom God has given something you don\'t have? Can you pray for them instead of resent them? What changes if you do?',
        },
      ],
    },
  ],
};
