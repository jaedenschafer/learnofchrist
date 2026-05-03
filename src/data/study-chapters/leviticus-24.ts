import { hp, hy, hg, t, type RichChapterContent } from './types';

export const LEVITICUS_24: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 24,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 15 },
  intros: [
    'Leviticus 24 sets two sacred practices before the priests and Israel: the burning of oil for light in the Holy Place, and twelve loaves of showbread set in two rows on the table. Both were meant to burn and nourish continually, witnesses to God&apos;s presence among His people.',
    'In the midst of these instructions, a man with a mixed heritage — an Egyptian father, an Israelite mother — blasphemes the Name. The chapter handles this incident plainly: the law speaks, the consequence is clear, and it is carried out. But woven through the same chapter is the principle that orders all justice: one law for all, and the measure of restitution is precisely the measure of harm. This is Israel&apos;s God — present in light and bread, jealous for His Name, and just.',
  ],

  sections: [
    /* ─── Leviticus 24:1–4 — Oil for the Lamp ──────────────────────────── */
    {
      ref: 'Leviticus 24:1–4',
      title: 'Oil for the Lamp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Command the children of Israel, that they bring unto thee '),
                hy('pure oil olive beaten', 'c-oil'),
                t(' for the light, to cause the '),
                hp('lamps to burn continually', 'christ-light'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oil',
          html:
            'The oil is <em>pure</em> — refined, not mixed. <em>Beaten</em> means hand-pressed without the heat that would damage it. Israel was commanded not merely to provide oil for the tabernacle, but to bring the finest they could make. The lamp in the Holy Place was not a luxury; it was a witness. Someone had to care for it, maintain it, keep it alive. This was priestly work, but it was also the constant responsibility of a people who had seen God&apos;s fire.',
        },
        {
          kind: 'commentary',
          id: 'c-continual-lamp',
          html:
            'The lamp burns <em>continually</em> — not by whim or festival, but every evening and every morning. It is the same word used in verse 8 for the bread that Aaron sets in order without interruption. What Israel did for the tabernacle, they did for their covenant. This is not optional work, but the rhythm of a people kept alive by God.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 3,
              spans: [
                t('Without the vail of the testimony, in the tabernacle of the congregation, shall Aaron order it from the evening unto the morning before the LORD continually: it shall be a statute for ever in your generations.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('He shall order the lamps upon the pure candlestick before the LORD continually.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tamid',
          title: 'Tamid — "continually"',
          script: 'תָּמִיד',
          translit: '<strong>tamid</strong> · perpetually, without ceasing',
          description:
            'Tamid appears five times in this chapter alone, binding the oil, the bread, and the priestly order into one word: a perpetual covenant. Not seasonal. Not occasional. The God of Israel does not withdraw His presence or His attention.',
        },
        {
          kind: 'christ',
          id: 'christ-light',
          title: 'Christ Connection — The Light of the World',
          html:
            'In the Holy Place, the lamp burned to light the table and the altar within. Jesus said, &ldquo;I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life&rdquo; (John 8:12). The oil that Israel brought was a shadow. The Light that came was Jesus — present, pure, burning continually, drawing us into the Father&apos;s own house. And in Revelation, John sees the Church as a bride dwelling in a city that needs no lamp, because the Lamb is the light thereof.',
        },
        {
          kind: 'carry',
          html:
            'There is a kind of faithfulness that looks small from the outside — showing up, tending the light, keeping the rhythm when no one watches. But it is how we honor presence. Whatever light you carry — a life lived steady, a word spoken true, a hand held out — is not wasted. The Lord sees it burn, and it is enough.',
        },
        {
          kind: 'reflection',
          id: 'oil-lamp',
          prompt:
            'What is a small, steady light you can tend in your own house or circle this week? How is tending it an act of faith?',
        },
      ],
    },

    /* ─── Leviticus 24:5–9 — Twelve Loaves of Showbread ──────────────────── */
    {
      ref: 'Leviticus 24:5–9',
      title: 'Twelve Loaves of Showbread',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 5,
              spans: [
                t('And thou shalt take fine flour, and bake '),
                hy('twelve cakes', 'c-twelve'),
                t(' thereof: two tenth deals shall be in one cake.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thou shalt set them in two rows, six on a row, upon the '),
                hy('pure table', 'c-table'),
                t(' before the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-twelve',
          html:
            'Twelve loaves — one for each of the twelve tribes. No tribe is left out of the covenant meal. Each loaf is substantial, carefully measured. The bread of the <em>panim</em> — the Presence — was not token bread. It was real sustenance, set before the Lord as a witness that He feeds His people.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 7,
              spans: [
                t('And thou shalt put pure frankincense upon each row, that it may be on the bread for a '),
                hg('memorial, even an offering made by fire unto the LORD', 'c-frankincense'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Every sabbath he shall set it in order before the LORD '),
                hp('continually', 'christ-food'),
                t(', being taken from the children of Israel by an everlasting covenant.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it shall be Aaron&apos;s and his sons&apos;; and they shall eat it in the holy place: for it is most holy unto him of the offerings of the LORD made by fire by a perpetual statute.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-frankincense',
          html:
            'Frankincense on the bread rises as a sweet memorial before God — the fragrance declares that this offering is made in remembrance of Him. The bread itself was food, real and sustaining, set in His house. And every sabbath it was replaced with fresh loaves. Nothing stale was left in the presence of the Holy One.',
        },
        {
          kind: 'commentary',
          id: 'c-table',
          html:
            'The <em>pure table</em> — the table of the Presence — stood in the Holy Place alongside the menorah (the lamp from verses 1–4) and the altar of incense. The table held bread; the candlestick held light. Both spoke of covenant provision: God feeds and lights the way for His people. No one outside the priests ate the bread, but its purpose was not secrecy — it was to declare that in the sanctuary, God&apos;s presence is always accompanied by sustenance and light.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lechem-panim',
          title: 'Lechem Panim — "bread of the Presence"',
          script: 'לֶחֶם פָּנִים',
          translit: '<strong>lechem panim</strong> · bread of the face',
          description:
            'Panim means <em>face</em>. The bread was called the bread of God&apos;s face — set continually in His sight, a meal shared in His presence. It declared that God dwells with His people and provides for them.',
        },
        {
          kind: 'christ',
          id: 'christ-food',
          title: 'Christ Connection — Bread of Life',
          html:
            'Jesus stood in a synagogue and said, &ldquo;I am the bread of life: he that cometh to me shall never hunger&rdquo; (John 6:35). He took bread at His last meal with His disciples and said, &ldquo;This is my body&rdquo; — the true bread, given not just to priests in a sanctuary, but offered to all who come. The twelve loaves belonged to twelve tribes; the Bread of Life belongs to all nations. And in His presence, we are fed.',
        },
        {
          kind: 'carry',
          html:
            'The bread of the Presence was not eaten hastily or carelessly. It was placed, remembered, replaced. There is holiness in tending the rituals of being fed — in stopping to eat, in naming gratitude, in sharing a table. When you sit to a meal — whether alone or with others — you are in a long line of people who have needed God&apos;s provision and trusted it.',
        },
        {
          kind: 'reflection',
          id: 'showbread',
          prompt:
            'What is one meal or moment of ordinary nourishment you can receive this week as a kind of bread of the Presence — something that reminds you God provides?',
        },
      ],
    },

    /* ─── Leviticus 24:10–16 — The Blasphemer & the Law ──────────────────── */
    {
      ref: 'Leviticus 24:10–16',
      title: 'The Blasphemer and the Law of the Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 10,
              spans: [
                t('And the son of an Israelitish woman, whose father was an Egyptian, went out among the children of Israel: and this son of the Israelitish woman and a man of Israel strove together in the camp;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the Israelitish woman&apos;s son '),
                hy('blasphemed the name of the LORD', 'c-blaspheme'),
                t(', and cursed. And they brought him unto Moses: (and his mother&apos;s name was Shelomith, the daughter of Dibri, of the tribe of Dan:)'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they put him in ward, that the mind of the LORD might be shewed them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blaspheme',
          html:
            'To blaspheme is to speak against, to curse, to treat as if it were contemptible. The man did not merely lose his temper — he spoke against the Name itself, the very identity God had revealed. His parentage is noted (Egyptian father, Israelite mother) not as condemnation, but as part of the account; he was in the camp, subject to the law, and the law would apply equally to him. When he cursed the Lord&apos;s name, the people themselves brought him to Moses. They understood that to leave such a transgression unaddressed was to imperil the covenant.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 13,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Bring forth him that cursed without the camp; and let all that heard him lay their hands upon his head, and '),
                hg('let all the congregation stone him', 'c-stone'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And thou shalt speak unto the children of Israel, saying, Whosoever curseth his God shall bear his sin.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he that blasphemeth the '),
                hy('name of the LORD', 'hebrew-shem'),
                t(', he shall surely be put to death, and all the congregation shall surely stone him: as well the stranger, as he that is born in the land, when he blasphemeth the name of the LORD, shall be put to death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stone',
          html:
            'The congregation carried out the judgment. This was not the private vengeance of a single judge or priest; it was the corporate responsibility of the people. The hands were laid on his head as a witness. In laying hands, each person present owned the judgment and the gravity of what had been spoken. The Name had been blasphemed; the Name had to be vindicated. That vindication came through the law and the community that held it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shem',
          title: 'Shem — "the Name"',
          script: 'שֵׁם',
          translit: '<strong>shem</strong> · name, reputation, identity',
          description:
            'The Name is not a mere label. In Hebrew thought, the name contains the identity, the character, the very power of the one named. To curse the Name of the Lord was to curse His character, His authority, His covenant. It was an assault on the foundation of everything Israel rested on.',
        },
        {
          kind: 'christ',
          id: 'christ-name',
          title: 'Christ Connection — The Name Made Holy',
          html:
            'Jesus taught His disciples to pray, &ldquo;Hallowed be thy name&rdquo; (Matthew 6:9). He knew the gravity of God&apos;s name — its holiness, its power to bless or curse. The Law of Moses defended the Name with severity. But Jesus came to fulfill the Law and to reveal the Name in its true light: &ldquo;I have declared unto them thy name, and will declare it: that the love wherewith thou hast loved me may be in them&rdquo; (John 17:26). The Name is hallowed not by fear alone, but by knowing the God whose name it is.',
        },
        {
          kind: 'carry',
          html:
            'We live after the cross, in a new covenant. The severity of this passage unsettles us — and it is meant to. It speaks to how serious the desecration of God&apos;s character is, how costly it is to name Him falsely or to treat His authority as a joke. We are not called to stone anyone, but we are called to take His name seriously: to speak it with reverence, to live it with integrity, to defend it in our words and our witness. What would it look like in your own life to <em>hallow</em> His name this week?',
        },
        {
          kind: 'reflection',
          id: 'blasphemy',
          prompt:
            'When have you been tempted to treat God&apos;s name or character carelessly — in your speech, your thought, or your life? What would it look like to take it more seriously?',
        },
      ],
    },

    /* ─── Leviticus 24:17–22 — Eye for Eye ──────────────────────────────── */
    {
      ref: 'Leviticus 24:17–22',
      title: 'Retaliation and the Justice of Measure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 17,
              spans: [
                t('And he that killeth any man shall surely be put to death.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he that killeth a beast shall make it good; beast for beast.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And if a man cause a blemish in his neighbour; as he hath done, so shall it be done to him;'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Breach for breach, '),
                hg('eye for eye, tooth for tooth', 'c-eye-eye'),
                t(': as he hath caused a blemish in a man, so shall it be done to him again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eye-eye',
          html:
            'This is the famous <em>lex talionis</em> — the law of equivalence. It looks harsh to modern ears, but in its original setting it was an act of mercy. It prescribed <em>exact</em> retaliation: no more, no less. You could not take a life for an eye, or an eye for a tooth. The measure of restitution was precisely the measure of harm. This was covenant justice — not arbitrary, not disproportionate. It said: Your harm is seen, acknowledged, and avenged in exact measure. You are not forgotten.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 21,
              spans: [
                t('And he that killeth a beast, he shall restore it: and he that killeth a man, he shall be put to death.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Ye shall have '),
                hy('one manner of law', 'c-one-law'),
                t(', as well for the stranger, as for one of your own country: for I am the LORD your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-one-law',
          html:
            'This is stunning: the law is the same for everyone. The stranger — the sojourner, the person with no blood ties to Israel — was bound by the same justice as a native-born Israelite. No caste, no hierarchy. No one was above the law or outside it. This was radical. The reason given is simple and absolute: <em>I am the Lord your God.</em> He rules all; therefore all are equal before Him.',
        },
        {
          kind: 'carry',
          html:
            'The law of eye for eye was not meant to be eternally practiced — Jesus Himself reinterpreted it toward forgiveness and restraint (Matthew 5:38–39). But the principle underneath stands: justice is real, harm is real, and it cannot be ignored or dismissed. When you have been wronged, your wound matters. When you have wronged another, you are not invisible. And the God who judges sees everyone — the insider and the outsider, the powerful and the forgotten — with one measure. That equality before God&apos;s justice is terrifying and merciful at once.',
        },
        {
          kind: 'reflection',
          id: 'eye-for-eye',
          prompt:
            'Where in your own life do you struggle to accept that God&apos;s justice applies equally to everyone — including people you would rather escape it?',
        },
      ],
    },

    /* ─── Leviticus 24:23 — The Execution ──────────────────────────────── */
    {
      ref: 'Leviticus 24:23',
      title: 'The Judgment Carried Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 23,
              spans: [
                t('And Moses spake to the children of Israel: and they brought forth him that had cursed out of the camp, and '),
                hg('stoned him with stones', 'c-stones'),
                t('. Thus the children of Israel did as the LORD commanded Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stones',
          html:
            'The chapter closes as it opened — with a command, and then the keeping of it. This is not narrative embellishment. The people carried it out. The man was brought outside the camp (making it a public act, removing defilement from the sanctuary space), and the congregation stoned him. It was the Law, and the Law was kept. This is the text as the text presents itself, without softening. The blasphemer was silenced. The Name was vindicated. The covenant held.',
        },
        {
          kind: 'carry',
          html:
            'This ending is difficult. We live after Jesus, who stood before an angry crowd ready to stone a woman taken in adultery and said, "He that is without sin among you, let him first cast a stone" (John 8:7). But we are not given permission to dismiss this account as primitive or abandoned. Rather, we see in Leviticus 24 the severity with which God guards His own name and covenant, and in Jesus, we see the mercy that fulfills and even exceeds the Law. We cannot choose between them. We must hold both: the seriousness of His name, and the grace that comes when we cannot meet the measure the Law demands.',
        },
        {
          kind: 'reflection',
          id: 'execution',
          prompt:
            'How do the light and bread at the beginning of this chapter (God&apos;s provision and presence) sit alongside its ending (God&apos;s judgment)? What does that teach you about the God of Leviticus?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'God commands pure oil to burn continually in His sanctuary, and twelve loaves of bread to be set in His presence. When His name is blasphemed, He vindicates it through the law and the people. One law for all. One Name, hallowed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 24 · Study Guide',
  },

  hasHebrew: true,
};
