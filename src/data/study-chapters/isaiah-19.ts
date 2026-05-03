import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 19 — Burden of Egypt: Judgment and a Covenant of Three
 *
 * The oracle against Egypt describes judgment: the Nile will fail, crops will
 * wither, and Egypt will turn to idolatry in desperation. Yet amidst this
 * darkness, a promise emerges. The Lord will strike Egypt, and they will
 * return to Him. There will be an altar to the Lord in the midst of Egypt.
 * Most strikingly, the Lord declares: "Blessed be Egypt my people, and
 * Assyria the work of my hands, and Israel mine inheritance."
 */
export const ISAIAH_19: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 19,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    "Egypt was the ancient superpower, the civilization of the Nile, the kingdom that had once enslaved Israel and stood against God. Yet the prophecy of Isaiah 19 is not one of utter destruction. Rather, it is a vision of the transformation of enmity into covenant. The judgment on Egypt is real and severe—the failure of the Nile, civil war, the seeking of idols and mediums. But judgment is not the final word.",
    'The climax of the chapter is extraordinary: God will declare Egypt and Assyria—nations that had opposed Israel—to be His people and the work of His hands. This speaks to a future in which national divisions are overcome and all peoples are gathered into covenant with the God of Israel. It is a promise of the ultimate reconciliation of enemies through the work of God.',
  ],

  sections: [
    {
      ref: 'Isaiah 19:1–15',
      title: 'Judgment on Egypt; The Land Made Desolate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(1, 'The burden of Egypt. Behold, the Lord rideth upon a swift cloud, and shall come into Egypt: and the idols of Egypt shall be moved at his presence, and the heart of Egypt shall melt in the midst of it.'),
            plain(2, 'And I will set the Egyptians against the Egyptians: and they shall fight every one against his brother, and every one against his neighbour; city against city, and kingdom against kingdom.'),
            plain(3, 'And the spirit of Egypt shall fail in the midst thereof; and I will destroy the counsel thereof: and they shall seek to the idols, and to the charmers, and to them that have familiar spirits, and to the wizards.'),
            plain(4, 'And the Egyptians will I give over into the hand of a cruel lord; and a fierce king shall rule over them, saith the Lord, the Lord of hosts.'),
            plain(5, 'And the waters shall fail from the sea, and the river shall be wasted and dried up.'),
            plain(6, 'And they shall turn the rivers far away; and the brooks of defence shall be emptied and dried up: the reeds and flags shall wither.'),
            plain(7, 'The paper reeds by the brooks, by the mouth of the brooks, and every thing sown by the brooks, shall wither, be driven away, and be no more.'),
            plain(8, 'The fishers also shall mourn, and all they that cast angle into the brooks shall lament, and they that spread nets upon the waters shall languish.'),
            plain(9, 'Moreover they that work in fine flax, and they that weave networks, shall be confounded.'),
            plain(10, 'And they shall be broken in the purposes thereof, all that make sluices and ponds for fish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah19-judgment',
          html:
            'The judgment on Egypt begins with the Lord riding upon a swift cloud, coming into Egypt. This is not merely political consequence—this is the presence of God Himself entering the land. The idols "shall be moved at his presence," and "the heart of Egypt shall melt." The great civilization, confident in its gods and its power, experiences the terror of the holy.',
        },
        {
          kind: 'commentary',
          id: 'isaiah19-civil-war',
          html:
            '"I will set the Egyptians against the Egyptians." The judgment includes internal division—the collapse of social order, brother against brother, city against city. This is the dissolution of the bonds that hold a civilization together. Counsel fails. Fear rises. And in that fear, Egyptians turn to idols, charmers, mediums, and wizards—the very things that cannot save.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah19-nile',
          title: 'Yam — "Waters" (The Nile)',
          script: 'יָם',
          translit: '<strong>Yam</strong> · sea; waters; the Nile in context',
          description:
            'The Nile was Egypt&apos;s lifeblood, the source of its fertility and prosperity. When the waters fail, the river wastes and dries up, Egypt dies. The judgment is not merely loss of power; it is loss of the natural source of life itself. The reeds and flags wither; the fishers mourn; the weavers are confounded. An entire civilization built on the gift of water faces the withdrawal of that gift.',
        },
        {
          kind: 'commentary',
          id: 'isaiah19-wasted',
          html:
            'The prophet catalogs the consequences with the precision of an economic collapse. Fields wither because the Nile fails. Fishermen have no water to fish. The linen industry—Egypt&apos;s great export—fails because the flax cannot grow. Workers in fine flax, those who weave networks, are "confounded"—not merely out of work, but dismayed, disoriented. The collapse touches every level of society.',
        },
        {
          kind: 'carry',
          html:
            'The judgment on Egypt invites reflection on what we depend upon for security and prosperity. Egypt relied on the Nile as if it were eternal and unchanging. But the prophet shows that what we take for granted can fail, and when it does, we discover what we truly trust in.',
        },
      ],
    },

    {
      ref: 'Isaiah 19:16–25',
      title: 'Conversion of the Nations; Egypt, Assyria, and Israel Blessed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(16, 'In that day shall Egypt be like unto women: and it shall be afraid and fear because of the shaking of the hand of the Lord of hosts, which he shaketh over it.'),
            plain(17, 'And the land of Judah shall be a terror unto Egypt, every one that maketh mention of it shall be afraid in himself, because of the counsel of the Lord of hosts, which he hath determined against it.'),
            plain(18, 'In that day shall five cities in the land of Egypt speak the language of Canaan, and swear by the Lord of hosts; one shall be called, The city of destruction.'),
            plain(19, 'In that day shall there be an altar to the Lord in the midst of the land of Egypt, and a pillar at the border thereof to the Lord.'),
            plain(20, 'And it shall be for a sign and for a witness unto the Lord of hosts in the land of Egypt: for they shall cry unto the Lord because of the oppressors, and he shall send them a saviour, and a great one, and he shall deliver them.'),
            plain(21, 'And the Lord shall be known to Egypt, and the Egyptians shall know the Lord in that day, and shall do sacrifice and oblation; yea, they shall vow a vow unto the Lord, and perform it.'),
            plain(22, 'And the Lord shall smite Egypt: he shall smite and heal it: and they shall return unto the Lord, and he shall be intreated of them, and shall heal them.'),
            plain(23, 'In that day shall there be a highway from Egypt to Assyria, and the Assyrian shall come into Egypt, and the Egyptian into Assyria, and the Egyptians shall serve with the Assyrians.'),
            plain(24, 'In that day shall Israel be the third with Egypt and with Assyria, even a blessing in the midst of the land:'),
            plain(25, 'Whom the Lord of hosts shall bless, saying, Blessed be Egypt my people, and Assyria the work of my hands, and Israel mine inheritance.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah19-conversion',
          html:
            'The movement from judgment to restoration is marked by the repeated phrase "In that day." The fear that overwhelmed Egypt gives way to a turning. Cities speak the language of Canaan—the language of faith. An altar to the Lord arises in the midst of Egypt. What was the center of idolatry becomes the center of worship of the true God.',
        },
        {
          kind: 'commentary',
          id: 'isaiah19-highway',
          html:
            'One of the most extraordinary images: a highway will be built from Egypt to Assyria. The two great powers that had opposed Israel and each other will be joined in covenant. The Assyrian shall come into Egypt, and the Egyptian into Assyria. They shall serve together—not as conquerer and conquered, but as brothers in the service of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'isaiah19-three',
          html:
            '"In that day shall Israel be the third with Egypt and with Assyria, even a blessing in the midst of the land." This is stunning. Israel, once surrounded by enemies, becomes the third in a covenant of three—equal with the former oppressors, all blessed together. The reversal is complete. What once threatened now serves. What once opposed now joins in covenant.',
        },
        {
          kind: 'christ',
          id: 'isaiah19-christ-savior',
          title: 'Christ Connection — The Saviour of the Nations',
          html:
            'Verse 20 speaks of a Saviour who will be sent to Egypt: "he shall send them a saviour, and a great one, and he shall deliver them." This is Christ, the Saviour not of Israel alone but of all nations. The breaking down of barriers between Jew and Gentile, Assyrian and Egyptian, is accomplished in Christ. In Ephesians 2:14, Paul writes that Christ "is our peace, who hath made both one, and hath broken down the middle wall of partition." The highway from Egypt to Assyria is the cross, where all nations are reconciled to God and to one another.',
        },
        {
          kind: 'carry',
          html:
            'The conversion of Egypt and Assyria challenges us to consider the limits of our vision. Are there enemies we believe can never be reconciled? Nations we think must forever oppose each other? Isaiah&apos;s vision is of ultimate reconciliation, where former enemies become brothers in covenant, all blessed by the God they once opposed.',
        },
        {
          kind: 'reflection',
          id: 'isaiah19-reconciliation',
          prompt: 'Is there an enemy—personal or national—whose redemption and reconciliation seems impossible to you? What would it mean to trust that God&apos;s purposes of covenant extend even to those who seem most opposed to Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed be Egypt my people, and Assyria the work of my hands, and Israel mine inheritance.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 19 · Study Guide',
  },

  hasHebrew: true,
};
