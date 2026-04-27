import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 11 — The Covenant Broken
 *
 * "Cursed be the man that obeyeth not the words of this covenant which I
 * commanded your fathers in the day that I brought them forth out of the land
 * of Egypt." God recalls the covenant made at Sinai, the agreement by which
 * Israel became His people and He became their God. Yet the people have broken
 * it. They have turned to other gods. They have refused to obey. And the curse
 * declared in Deuteronomy falls upon them: the man who obeys not shall be cursed.
 * Yet Christ, in His death, became a curse for us—taking upon Himself the
 * judgment that covenant-breaking deserves.
 */
export const JEREMIAH_11: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 11,

  intros: [
    'Jeremiah 11 returns to the fundamental structure of Israel&apos;s relationship with God: the covenant. God had made a covenant with Israel at Sinai, declaring, "If ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people." This covenant bound the people to God and God to the people. It was the foundation of everything.',
    'Yet the people have broken this covenant. They have not kept it. They have turned to other gods, the gods of the surrounding nations. And because they have broken the covenant, they are under its curse. "Cursed be the man that obeyeth not the words of this covenant." The breaking of the covenant brings judgment. Yet within this judgment stands a mysterious grace: Christ would come to bear the curse that covenant-breakers deserve, opening the way to a new and eternal covenant.',
  ],

  sections: [
    {
      ref: 'Jeremiah 11:1–17',
      title: 'The Covenant Recalled and Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'The word that came to Jeremiah from the Lord, saying,'),
            plain(2, 'Hear ye the words of this covenant, and speak unto the men of Judah, and to the inhabitants of Jerusalem;'),
            plain(3, 'And say thou unto them, Thus saith the Lord God of Israel; Cursed be the man that obeyeth not the words of this covenant'),
            plain(4, 'Which I commanded your fathers in the day that I brought them forth out of the land of Egypt, from the iron furnace, saying, Obey my voice, and do them, according to all which I command you: so shall ye be my people, and I will be your God:'),
            plain(5, 'That I may perform the oath which I have sworn unto your fathers, to give them a land flowing with milk and honey, as it is this day. Then answered I, and said, So be it, O Lord.'),
            plain(8, 'But they obeyed not, nor inclined their ear, but walked every one in the imagination of their evil heart: therefore I will bring upon them all the words of this covenant, which I commanded them to do; but they did them not.'),
            plain(10, 'They are turned back to the iniquities of their forefathers, which refused to hear my words; and they went after other gods to serve them: the house of Israel and the house of Judah have broken my covenant which I made with their fathers.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer11-obey',
          html: 'The covenant was built on a simple condition: obedience. "Obey my voice, and do them, according to all which I command you." Yet the people did not obey. They did not incline their ear. Instead, each person walked according to "the imagination of their evil heart"—following their own desires rather than God&apos;s command. This is the fundamental breach.',
        },
        {
          kind: 'hebrew',
          id: 'jer11-berith',
          title: 'Berith — "Covenant" (Agreement, Bond)',
          script: 'בְרִית',
          translit: '<strong>Berith</strong> · covenant; agreement; binding contract',
          description: 'The Hebrew word berith refers to a covenant, a binding agreement, a solemn promise. A covenant is more than a contract—it establishes a relationship. God&apos;s berith with Israel was not a commercial transaction but a declaration of relationship: "Ye shall be my people, and I will be your God."',
        },
        {
          kind: 'commentary',
          id: 'jer11-curse',
          html: 'The curse attached to the covenant is stated plainly: "Cursed be the man that obeyeth not the words of this covenant." This curse was written in the law itself (Deuteronomy 27–28). To break the covenant is to come under a curse. Not an arbitrary punishment, but the natural consequence built into the covenant structure itself.',
        },
        {
          kind: 'christ',
          id: 'jer11-christ-curse',
          title: 'Christ Connection — The Curse Borne',
          html: 'In Galatians 3:13, Paul writes, "Christ hath redeemed us from the curse of the law, being made a curse for us." Christ took upon Himself the curse that the covenant-breaker deserves. He became a curse that we might be free from the curse. Through His death, He established a new covenant—not written on stone but on the human heart, not based on our obedience but on His faithfulness.',
        },
        {
          kind: 'carry',
          html: 'The covenant with Israel was built on a relationship—God as the faithful God, the people as His covenant people. Yet the people broke the covenant. We too break covenant with God—through our unfaithfulness, our turning away, our pursuit of other gods. Yet Christ offers what the people of Israel could not achieve: perfect obedience to the covenant, and the bearing of the curse that our breaking brings.',
        },
        {
          kind: 'reflection',
          id: 'jer11-covenant',
          prompt: 'Where have you broken covenant with God—through unfaithfulness, through turning to other things, through refusal to obey? What would it mean to be released from that curse through Christ?',
        },
      ],
    },

    {
      ref: 'Jeremiah 11:18–23',
      title: 'The Prophet&apos;s Persecution',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(18, 'And the Lord hath given me knowledge of it, and I know it: then thou shewedst me their doings.'),
            plain(19, 'But I was like a lamb or an ox that is brought to the slaughter; and I knew not that they had devised devices against me, saying, Let us destroy the tree with the fruit thereof, and let us cut him off from the land of the living, that his name may be no more remembered.'),
            plain(20, 'But, O Lord of hosts, that judgest righteously, that triest the reins and the heart, let me see thy vengeance on them: for unto thee have I revealed my cause.'),
            plain(21, 'Therefore thus saith the Lord of all the men of Anathoth, which seek thy life, saying, Prophesy not in the name of the Lord, that thou die not by our hand:'),
            plain(22, 'Therefore thus saith the Lord of hosts, Behold, I will punish them: the young men shall die by the sword; and their sons and their daughters shall die by famine:'),
            plain(23, 'And there shall be no remnant of them: for I will bring evil upon the men of Anathoth, even the year of their visitation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer11-lamb',
          html: 'Jeremiah compares himself to a lamb or ox brought to the slaughter, innocent and unaware of the danger. The people of his own town—Anathoth—have devised devices against him. They seek to destroy him completely: "Let us destroy the tree with the fruit thereof, and let us cut him off from the land of the living, that his name may be no more remembered." They want to erase him entirely from history.',
        },
        {
          kind: 'commentary',
          id: 'jer11-vengeance',
          html: 'Yet rather than despair, Jeremiah cries out to God. He appeals to the judge who knows the human heart, who tests the reins and the heart. He asks God to bring vengeance on those who plot against him. This is a cry for vindication, for justice against those who oppose God&apos;s word.',
        },
        {
          kind: 'carry',
          html: 'The persecution of Jeremiah foreshadows the persecution of Christ. Both spoke truth that the people did not want to hear. Both were opposed by their own countrymen. Both were treated as lambs led to slaughter. Yet both entrusted their cause to God, the righteous judge who knows all hearts.',
        },
        {
          kind: 'reflection',
          id: 'jer11-truth-cost',
          prompt: 'What truth are you hesitant to speak because of the cost it might bring? How could you trust that God knows your cause?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Cursed be the man that obeyeth not the words of this covenant which I commanded your fathers in the day that I brought them forth out of the land of Egypt.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 11 · Study Guide',
  },

  hasHebrew: true,
};
