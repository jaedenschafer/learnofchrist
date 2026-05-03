import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 54 — The Bride of Christ
 *
 * After the Servant\'s suffering and vindication comes the wedding feast. Zion,
 * barren and desolate, is now a joyful mother. "Sing, O barren, thou that didst
 * not bear." Her Maker is her husband. Her children will be taught of the Lord.
 * There will be no more abandonment. The everlasting covenant is renewed.
 */
export const ISAIAH_54: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 54,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'The redemption of Isaiah 53 finds its fulfillment in Isaiah 54\'s celebration. The barren woman who once bore no children will suddenly become a mother of multitudes. The woman forsaken and grieved in spirit will be exalted as the wife of her Maker. This is the wedding of Christ and the Church, foreshadowed in the Old Testament, fulfilled in the New. The theme moves from sacrifice to celebration, from the cross to the marriage supper of the Lamb.',
  ],

  sections: [
    {
      ref: 'Isaiah 54:1–8',
      title: 'The Barren Woman Made Fruitful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 54,
          lines: [
            plain(1, 'Sing, O barren, thou that didst not bear; break forth into singing, and cry aloud, thou that didst not travail with child: for more are the children of the desolate than the children of the married wife, saith the Lord.'),
            plain(2, 'Enlarge the place of thy tent, and let them stretch forth the curtains of thine habitations: spare not, lengthen thy cords, and strengthen thy stakes;'),
            plain(3, 'For thou shalt break forth on the right hand and on the left; and thy seed shall inherit the Gentiles, and make the desolate cities to be inhabited.'),
            plain(4, 'Fear not; for thou shalt not be ashamed: neither be thou confounded; for thou shalt forget the shame of thy youth, and shalt not remember the reproach of thy widowhood any more.'),
            plain(5, 'For thy Maker is thine husband; the Lord of hosts is his name; and thy Redeemer is the Holy One of Israel; The God of the whole earth shall he be called.'),
            plain(6, 'For the Lord hath called thee as a woman forsaken and grieved in spirit, and a wife of youth, when thou wast refused, saith thy God.'),
            plain(7, 'For a small moment have I forsaken thee; but with great mercies will I gather thee.'),
            plain(8, 'In a little wrath I hid my face from thee for a moment; but with everlasting kindness will I have mercy on thee, saith the Lord thy Redeemer.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa54-barren',
          html:
            'The barren woman is called to sing and cry aloud. Her shame is turned to joy. She will have more children than the married woman. This is a complete reversal: what was empty will be full, what was silent will sing, what was ashamed will be honored.',
        },
        {
          kind: 'commentary',
          id: 'isa54-tent',
          html:
            'She is told to enlarge her tent, to stretch forth curtains, to lengthen cords and strengthen stakes. This is preparation for multitudes. The desolate place will be inhabited. The curse of barrenness is broken. Children will inherit the land and make the desolate cities to be inhabited.',
        },
        {
          kind: 'hebrew',
          id: 'isa54-asah',
          title: 'Asah — "Make" (Maker)',
          script: 'עָשָׂה',
          translit: '<strong>Asah</strong> · to make; to create; to do',
          description:
            'The word asah refers to the creative act. The Maker is the one who brought all things into being. For this Maker to be the woman\'s husband is to be loved by the Creator Himself, to be bound in covenant with the very source of existence.',
        },
        {
          kind: 'christ',
          id: 'isa54-christ-bride',
          title: 'Christ Connection — The Bride of Christ',
          html:
            'In Ephesians 5, Paul quotes Genesis in describing Christ and the Church as Husband and Wife. "Husbands, love your wives, even as Christ also loved the church, and gave himself for it...that it should be holy and without blemish" (Eph. 5:25–27). The barren woman of Isaiah 54 is the Church. Her Maker is Christ, her Redeemer. She was forsaken and grieved, but He gathers her with great mercies. She was refused, but He chose her. She will be fruitful, bearing children for His kingdom.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah\'s image of the barren woman made fruitful speaks to all who have felt abandoned, shame-filled, unable to produce good fruit. The gospel says: Your Maker loves you. Your past shame is forgotten. You will be fruitful. You will bear children of the Spirit. The desolation of your life will become a place of abundance.',
        },
        {
          kind: 'reflection',
          id: 'isa54-barren',
          prompt: 'What "barrenness" in your life—places where you felt unable to bear fruit or too ashamed to hope—might be transformed by knowing that your Maker is your husband?',
        },
      ],
    },

    {
      ref: 'Isaiah 54:9–17',
      title: 'The Everlasting Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 54,
          lines: [
            plain(9, 'For this is as the waters of Noah unto me: for as I have sworn that the waters of Noah should no more go over the earth; so have I sworn that I will not be wroth with thee, nor rebuke thee.'),
            plain(10, 'For the mountains shall depart, and the hills be removed: but my kindness shall not depart from thee, neither shall the covenant of my peace be removed, saith the Lord that hath mercy on thee.'),
            plain(11, 'O thou afflicted, tossed with tempest, and not comforted, behold, I will lay thy stones with fair colours, and lay thy foundations with sapphires.'),
            plain(12, 'And I will make thy windows of agates, and thy gates of carbuncles, and all thy borders of pleasant stones.'),
            plain(13, 'And all thy children shall be taught of the Lord; and great shall be the peace of thy children.'),
            plain(14, 'In righteousness shalt thou be established: thou shalt be far from oppression; for thou shalt not fear: and from terror; for it shall not come near thee.'),
            plain(15, 'Behold, they shall surely gather together, but not by me: whosoever shall gather together against thee shall fall for thy sake.'),
            plain(16, 'Behold, I have created the smith that bloweth the coals in the fire, and that bringeth forth an instrument for his work; and I have created the waster to destroy: but no weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn. This is the heritage of the servants of the Lord, and their righteousness is of me, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa54-covenant',
          html:
            'God swears an oath: As surely as the waters of Noah will not flood the earth again, so surely will His wrath not come upon His beloved. Mountains may depart, hills may be removed, but God\'s kindness will not depart. The covenant of peace is everlasting. This is grace beyond measure—a protection rooted not in the beloved\'s performance, but in God\'s eternal commitment.',
        },
        {
          kind: 'commentary',
          id: 'isa54-stones',
          html:
            'The afflicted woman, tossed with tempest and uncomforted, will be rebuilt. Her stones will be laid with fair colors, her foundations with sapphires. She will have windows of agates, gates of carbuncles, borders of pleasant stones. This is not merely restoration; it is glorification. What was destroyed is remade more beautiful than before.',
        },
        {
          kind: 'commentary',
          id: 'isa54-children',
          html:
            'All her children will be taught of the Lord. Great will be the peace of her children. Not oppression, but freedom. Not fear, but security. No weapon formed against her will prosper. Every tongue that rises against her in judgment she will condemn. This is complete victory. The enemy\'s plots are thwarted, their words turned back.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 54 teaches that God\'s covenant with His people is not contingent on their faithfulness. It is rooted in His eternal compassion. Mountains and hills will crumble before God\'s kindness fails. In a world of changing circumstances, constant threat, and unstable security, the believer rests on a covenant that cannot be broken.',
        },
        {
          kind: 'reflection',
          id: 'isa54-covenant',
          prompt: 'What would it mean to live as if no weapon formed against you will prosper? How would your fears change if you truly believed in the permanence of God\'s covenant?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Sing, O barren, thou that didst not bear...thy Maker is thine husband...with everlasting kindness will I have mercy on thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 54 · Study Guide',
  },
};
