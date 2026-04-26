import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 31 — God names Bezalel and Aholiab as master craftsmen and FILLS
 * Bezalel with the Spirit of God for craftsmanship (vv.1-11) — the first
 * explicit Spirit-filling in the Bible, and it&apos;s for an artist. Then the
 * Sabbath sign reaffirmed (vv.12-17). Then the two stone tablets written by
 * God&apos;s finger. A short chapter, but the Spirit-on-the-craftsman is the headline.
 */
export const EXODUS_31: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 31,

  intros: [
    'Exodus 31 is the moment God raises up the artisans who will build His earthly dwelling — the tabernacle where His presence will dwell with Israel. Bezalel and Aholiab are named, and the text makes something very clear: their skill is not their own achievement. God Himself fills Bezalel with the Spirit to craft.',
    'This is the first explicit Spirit-filling in the entire Bible. Not a prophet receiving a word. Not a leader receiving courage. But an artist receiving the Spirit of God for the sake of beauty, precision, and the building of a place where heaven and earth meet. God cares that His house is made well.',
    'The chapter then circles back to the Sabbath — the only day no work is done on the tabernacle — and closes with God handing Moses the two stone tablets written by His own finger. A house is being built. The law that governs it is being written. And God Himself is filling the craftsmen who make it all.',
  ],

  sections: [
    /* ─── Exodus 31:1-6 — The Master Craftsmen Named ───────────────────── */
    {
      ref: 'Exodus 31:1–6',
      title: 'Bezalel and Aholiab Called',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
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
                t('See, I have '),
                hp('called by name Bezalel', 'called-name'),
                t(' the son of Uri, the son of Hur, of the tribe of Judah:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'called-name',
          html:
            'God does not randomly select. He calls Bezalel by name — even names his father, his grandfather, his tribe. In an age of mass production and faceless work, the Bible insists on this: skill matters. The person matters. God knows your name and the particular thing He made you able to do.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 3,
              spans: [
                t('And I have '),
                hy('filled him with the spirit of God', 'ruach-elohim'),
                t(', in wisdom, and in understanding, and in knowledge, and in all manner of workmanship,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('To devise cunning works, to work in gold, and in silver, and in brass,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And in cutting of stones, to set them, and in carving of timber, to work in all manner of workmanship.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'ruach-elohim',
          title: 'Ruach Elohim — &ldquo;Spirit of God&rdquo;',
          script: 'רוּחַ אֱלֹהִים',
          translit: '<strong>ruach elohim</strong> · the breath, wind, or Spirit of God',
          description:
            'This is the first explicit moment in the Bible where a person is filled with God&apos;s Spirit. Not for preaching. Not for judgment. But for making things beautiful. God&apos;s Spirit indwells a craftsman so that his hands can do work that reflects heaven.',
        },
        {
          kind: 'commentary',
          id: 'c-skillset',
          html:
            'The list is specific: gold, silver, brass, stone, wood. Bezalel is not a generic genius — he is skilled in particular, concrete things. And those skills come directly from God filling him. The Bible never suggests that skill is something you merely inherit or acquire. It is something God gives.',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 6,
              spans: [
                t('And I, behold, I have given with him Aholiab, the son of Ahisamach, of the tribe of Dan: and in the hearts of all that are '),
                hg('wise hearted', 'c-wisehearted'),
                t(' I have put wisdom, to make all that I have commanded thee;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wisehearted',
          html:
            'Aholiab joins Bezalel — a partner in craft. And then, in a phrase repeated nowhere else in Scripture, God puts wisdom <em>in the hearts</em> of all the wise-hearted. The Spirit fills not just the chief craftsmen, but everyone whose heart is already inclined toward skill and beauty. God meets wisdom with more wisdom.',
        },
        {
          kind: 'carry',
          html:
            'You have been given something God cares about — a particular skill, a way of making or building or organizing or teaching. The temptation is to own it as your own accomplishment, or to apologize for it as &ldquo;just what I&apos;m good at.&rdquo; But Bezalel&apos;s story suggests something harder: your skill is God&apos;s Spirit at work in you. The question becomes not <em>how well can I do this?</em> but <em>what am I building this for?</em>',
        },
        {
          kind: 'reflection',
          id: 'reflect-craft',
          prompt:
            'What is the particular craft or skill God has given you? What would change if you saw it as His Spirit at work in your hands?',
        },
      ],
    },

    /* ─── Exodus 31:7-11 — The Tabernacle Inventory ────────────────────── */
    {
      ref: 'Exodus 31:7–11',
      title: 'Building the Dwelling Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 7,
              spans: [
                t('The '),
                hg('tabernacle of the congregation', 'c-tabernacle'),
                t(', and the ark of the testimony, and the mercy seat that is thereupon, and all the furniture of the tabernacle,'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the table and his furniture, and the pure candlestick with all his furniture, and the altar of incense,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the altar of burnt offering with all his furniture, and the laver and his foot,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the cloths of service, and the holy garments for Aaron the priest, and the garments of his sons, to minister in the priest&apos;s office,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the anointing oil, and sweet incense for the holy place: according to all that I have commanded thee shall '),
                hp('they make it', 'c-makegood'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tabernacle',
          html:
            'Every object is named. Every piece of furniture for the place where God will dwell. The tabernacle is not a building project — it is the installation of God&apos;s house on earth, the place where His presence literally camps with His people. And Bezalel and the wise-hearted are the ones who will make it.',
        },
        {
          kind: 'commentary',
          id: 'c-makegood',
          html:
            'Notice the instruction: <em>they shall make it.</em> God fills them with the Spirit, then trusts them to execute the plan. This is the pattern throughout Scripture: God gives the vision and the filling, then the work is yours to do. The tabernacle rises because Bezalel and Aholiab do the work.',
        },
        {
          kind: 'christ',
          id: 'christ-builder',
          title: 'Christ Connection — The True Dwelling',
          html:
            'Paul will later quote this passage when describing the Church: &ldquo;Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God; And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone; In whom all the building fitly framed together groweth unto an holy temple in the Lord: In whom ye also are builded together for an habitation of God through the Spirit&rdquo; (Eph. 2:19–22). The tabernacle was always a preview. The true dwelling of God is not a tent with gold and acacia wood. It is a people, built in Christ, indwelt by the Holy Spirit.',
        },
        {
          kind: 'carry',
          html:
            'You are part of what God is building. Not a passive resident in His house, but a living stone in it — your gifts, your work, your faithfulness contribute to the place where God dwells. The person you encouraged today, the hard thing you did well, the beauty you made — none of it is wasted or separate from what God is constructing in Christ.',
        },
        {
          kind: 'reflection',
          id: 'reflect-building',
          prompt:
            'In what way are you contributing to what God is building in the Church? What specific gift or work has He called you to offer?',
        },
      ],
    },

    /* ─── Exodus 31:12-17 — The Sabbath Covenant ──────────────────────── */
    {
      ref: 'Exodus 31:12–17',
      title: 'The Sabbath Sign',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 12,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Speak thou also unto the children of Israel, saying, Verily my '),
                hy('sabbaths ye shall keep', 'c-keep-sabbath'),
                t(': for it is a '),
                hg('sign between me and you', 'c-sign-covenant'),
                t(' throughout your generations; that ye may know that I am the LORD that doth sanctify you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-keep-sabbath',
          html:
            'Just as God is about to give Israel the tools and vision to build His house, He interrupts to speak about rest. The work matters. The building matters. But not above the rhythm of six days of work and one of rest. A house built by people who never rest is not a house God wants.',
        },
        {
          kind: 'commentary',
          id: 'c-sign-covenant',
          html:
            'The Sabbath is called a <em>sign</em> — like a marriage ring, or a seal on a letter. It is not a burden God imposes. It is a mark that Israel belongs to Him, and that He is the one who makes them holy. The seventh day is God&apos;s weekly reminder to His people: <em>you are mine, and I sanctify you.</em>',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 14,
              spans: [
                t('Ye shall keep the sabbath therefore; for it is holy unto you: every one that defileth it shall surely be put to death: for whosoever doeth any work therein, that soul shall be cut off from among his people.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Six days may work be done; but in the seventh day is the sabbath of rest, holy to the LORD: whosoever doeth any work in the sabbath day, he shall surely be put to death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sabbath-boundary',
          html:
            'The language is fierce — death for breaking the Sabbath, even during the building of the tabernacle. God is drawing a line that cannot be crossed. One day belongs to Him completely. Not for productivity. Not for catching up on work. Not even for God&apos;s own house. One day a week, <em>everything stops.</em>',
        },

        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 16,
              spans: [
                t('Wherefore the children of Israel shall keep the sabbath, to observe the sabbath throughout their generations, for a '),
                hg('perpetual covenant', 'c-perpetual'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('It is a sign between me and the children of Israel for ever: for in six days the LORD made heaven and earth, and on the seventh day he rested, and was '),
                hp('refreshed', 'c-refreshed-note'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-perpetual',
          html:
            'The Sabbath is not a temporary rule for the wilderness years. It is a <em>perpetual covenant</em> — as long as there is Israel, there is the seventh day. God ties the rhythm of rest to His own identity: <em>I made the world in six days and rested on the seventh; you are My people, and you rest with Me.</em>',
        },
        {
          kind: 'commentary',
          id: 'c-refreshed-note',
          html:
            'God is <em>refreshed</em> on the seventh day — the Hebrew word suggests a deep breath, a recovery of strength. Not because God was tired, but because His work was done and the creation stood before Him as finished and good. In that rest, He was renewed. So shall Israel be, week after week, generation after generation.',
        },
        {
          kind: 'carry',
          html:
            'You are part of a rhythm older than you, deeper than your ambition. Six days you may work — even build things for God. But the seventh day is not yours to use. It is the place where you stop producing and remember: I am not the one holding the world together. God is. And He is calling you to rest in that. One day a week, your worth is not measured by what you accomplish. It is measured by belonging to the One who rested.',
        },
        {
          kind: 'reflection',
          id: 'reflect-sabbath',
          prompt:
            'What would it look like for you to actually keep one full day a week as holy to the LORD — set apart, not for work, not even for catching up, but for rest and presence?',
        },
      ],
    },

    /* ─── Exodus 31:18 — The Stone Tables ──────────────────────────────── */
    {
      ref: 'Exodus 31:18',
      title: 'God&apos;s Written Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 18,
              spans: [
                t('And he gave unto Moses, when he had made an end of communing with him upon mount Sinai, '),
                hp('two tables of stone', 'c-tables-stone'),
                t(' '),
                hg('written with the finger of God', 'c-finger-god'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tables-stone',
          html:
            'Two tablets of stone — not papyrus, not clay, but stone. The law is not a whispered instruction or a temporary command. It is carved into the hardest medium, meant to outlast everyone who hears it. The Ten Commandments are being set in stone so Israel will never forget.',
        },
        {
          kind: 'commentary',
          id: 'c-finger-god',
          html:
            'The hand of God writes the law. Not a prophet taking dictation, not Moses climbing down the mountain with a scroll. God&apos;s own finger inscribes the covenant. It is the only law in the Bible written directly by God&apos;s hand.',
        },
        {
          kind: 'christ',
          id: 'christ-word-flesh',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'The law is written by God&apos;s finger in stone. John will later describe Jesus as &ldquo;the Word made flesh&rdquo; (John 1:14) — God&apos;s thought and intention now in a living body. Jesus is the law made human. He does not replace the law; He completes it, embodies it, and offers it not as burden but as life. What was carved in stone, Christ offers to carve on the heart (Jer. 31:33).',
        },
        {
          kind: 'carry',
          html:
            'The two tablets come down the mountain at the very moment the tabernacle is being built. God&apos;s house is being constructed, and God&apos;s law is being given. They belong together. The place where God dwells is meant to be a place where His word is kept and obeyed. In your own life, the same is true: the place where God dwells — your heart, your home, your community — is the place where His word takes shape.',
        },
        {
          kind: 'reflection',
          id: 'reflect-tables',
          prompt:
            'What would it mean for God&apos;s word to be written not on tablets of stone, but on your own heart? Where is His law still a burden, and where is it beginning to become life?',
        },
        { kind: 'divider' },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 31',
    quote:
      'God filled Bezalel with the Spirit of God, in wisdom and understanding, to devise works in gold, silver, brass, stone, and timber, to build the tabernacle where God would dwell. He commanded the Sabbath as an eternal sign, and gave Moses two tablets of stone written by the finger of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 31 · Study Guide',
  },

  hasHebrew: true,
};
