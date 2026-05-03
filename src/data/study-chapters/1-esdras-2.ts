import { RichChapterContent } from '~/types';
import { hp, hy, hg, t } from '../helpers';

const content: RichChapterContent = {
  id: '1-esdras-2',
  title: '1 Esdras 2',
  subtitle: 'The Proclamation and the Opposition',
  intros: [
    {
      title: 'The Apocrypha and 1 Esdras',
      content: 'First Esdras is an apocryphal work that expands on the events recorded in Ezra and 2 Chronicles. Written between the 3rd and 1st centuries BCE, it provides additional narrative detail about the return from Babylonian exile. While considered apocryphal by many Christian traditions, it preserves important historical context about the restoration period. This chapter covers Cyrus&apos;s decree, the preparation for return, and the beginning of opposition—themes central to understanding God&apos;s faithfulness in exile and restoration.',
    },
    {
      title: 'From Captivity to Restoration',
      content: 'The narrative arc of 1 Esdras 2 follows a pattern: divine stirring, human response, material preparation, and then the emergence of resistance. This mirrors the spiritual pattern throughout Scripture where God&apos;s work is met with opposition, yet nothing can ultimately stop His redemptive purposes. The proclamation of Cyrus demonstrates how God moves even pagan rulers to accomplish His plans. The opposition that begins to form shows that restoration was never automatic—it required faith, courage, and persistence.',
    },
  ],
  sections: [
    {
      id: 's1',
      title: 'Cyrus Stirred by the Lord',
      refs: ['1 Esdras 2:1–2'],
      blocks: [
        {
          kind: 'scripture',
          spans: [
            t('1 Esdras 2:1–2'),
            hy(' Now in the first year of King Cyrus of the Persians, that the word of the Lord might be accomplished that had been spoken by Jeremiah, the Lord stirred up the spirit of Cyrus king of the Persians, and he issued a proclamation throughout all his kingdom, and also put it in writing: '),
            t('"This is the decree of King Cyrus of the Persians: '),
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'The Royal Proclamation',
      refs: ['1 Esdras 2:3–10'],
      blocks: [
        {
          kind: 'scripture',
          spans: [
            hy('Since the Lord of Israel has chosen to establish His name in Jerusalem, '),
            t('whoever among you belongs to His people—may your God be with you, and let them go up to Jerusalem in Judah and build the house of the Lord of Israel—He is the God whose dwelling is in Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c1',
          content: 'The proclamation echoes Jeremiah&apos;s prophecy (Jer 29:10) that after seventy years God would bring Israel back. Cyrus, a pagan king, becomes an instrument of God&apos;s purpose. He recognizes the God of Israel and permits His people to rebuild. This demonstrates a crucial biblical principle: God uses all circumstances and all people to accomplish His will.',
        },
        {
          kind: 'scripture',
          spans: [
            hy('And whoever may be left in any place where they sojourn, let the people of that place assist them with gold and silver, with goods and livestock, besides the freewill offerings for the house of God in Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c2',
          content: 'Cyrus&apos;s generosity extended beyond permission—he actively supported the return. The exiles would receive aid from their neighbors, both those returning and those staying behind. This provision shows God&apos;s care for His people during transition and vulnerability.',
        },
        {
          kind: 'carry',
          content: 'Where do you see God stirring hearts and opening doors in your own life? What doors has He opened that you might not have expected?',
        },
      ],
    },
    {
      id: 's3',
      title: 'The Sacred Vessels Released',
      refs: ['1 Esdras 2:11–15'],
      blocks: [
        {
          kind: 'scripture',
          spans: [
            t('1 Esdras 2:11–12'),
            hy(' Then King Cyrus brought out the vessels of the house of the Lord that Nebuchadnezzar had carried away from Jerusalem and placed in the temple of his gods. '),
            t('When King Cyrus of the Persians brought these out, he delivered them to Mithridates, his treasurer, and by him they were given to Sheshbazzar, '),
          ],
        },
        {
          kind: 'hebrew',
          word: 'Kelim',
          transliteration: 'kelim',
          definition: 'Vessels, implements, or instruments—often used for sacred objects in the temple. The return of these vessels symbolized restoration of worship and God&apos;s presence.',
        },
        {
          kind: 'commentary',
          id: 'c3',
          content: 'The vessels were not merely objects but symbols of Israel&apos;s covenant relationship with God. They had been carried off as spoils of war (2 Kings 25:14–17), a sign of defeat and separation from God&apos;s presence. Their return signified restoration and hope. Sheshbazzar, likely a member of the Judean royal house, received them as a representative of the people.',
        },
        {
          kind: 'scripture',
          spans: [
            hy('the prince of Judah. The number of the golden and silver vessels was: gold basins thirty; silver basins four hundred thirty; other vessels a thousand.'),
          ],
        },
        {
          kind: 'reflection',
          content: 'Meditate on what it means to reclaim what was lost. The exiles couldn&apos;t return to a world untouched by exile, but they returned to rebuilding and renewed worship. What has been restored in your life that you once thought lost?',
        },
      ],
    },
    {
      id: 's4',
      title: 'The Foundation and First Song',
      refs: ['1 Esdras 2:16–30'],
      blocks: [
        {
          kind: 'scripture',
          spans: [
            t('1 Esdras 2:16'),
            hy(' All the vessels were handed over, five thousand four hundred sixty-nine in number. '),
            t('All of these Sheshbazzar brought with him when he came from Babylon to Jerusalem. And he laid the foundation of the house of God in Jerusalem; and from that time until now it is being built, and it is not yet complete.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c4',
          content: 'The foundation of the temple marks a critical moment—the beginning of restoration. Yet the narrative notes that work continues "until now" and remains unfinished. This reflects the historical reality: the return was a slow, difficult process with many setbacks. But it was begun.',
        },
        {
          kind: 'artwork',
          matchTitle: /temple|foundation|restoration/i,
          matchArtist: /(Wikimedia|anonymous|unknown)/i,
          caption: 'The foundation of restoration: what was lost is being returned.',
        },
        {
          kind: 'carry',
          content: 'God&apos;s work often takes longer than we expect. The rebuilding of the temple would take decades. What long-term work of God in your life requires patience and perseverance?',
        },
      ],
    },
    {
      id: 's5',
      title: 'Enemies of Judah and Benjamin Rise',
      refs: ['1 Esdras 2:16–30 (continued)'],
      blocks: [
        {
          kind: 'scripture',
          spans: [
            t('1 Esdras 2:24–25'),
            hy(' And the adversaries of Judah and Benjamin heard that the exiles were building a temple to the Lord, the God of Israel. '),
            t('So they approached Zerubbabel and Jeshua and the heads of families and said to them, "Let us build with you, for we worship your God as you do, and we have been sacrificing to Him ever since the days of King Esarhaddon of Assyria who brought us here."'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c5',
          content: 'The enemies present themselves as allies. They claim to worship the God of Israel and want to participate in rebuilding. This deceptive offer is dangerous: it would compromise the purity of restoration and dilute the identity of the returned exiles. The offer of partnership was an attempt to control or undermine the project.',
        },
        {
          kind: 'carry',
          content: 'Sometimes opposition comes disguised as friendship. Sometimes the greatest threat is compromise, not conflict. What compromises are you tempted toward in your own faith journey?',
        },
      ],
    },
    {
      id: 's6',
      title: 'Work Ceases Through Accusation',
      refs: ['1 Esdras 2:30–36'],
      blocks: [
        {
          kind: 'scripture',
          spans: [
            t('1 Esdras 2:30–31'),
            hy(' But Zerubbabel and Jeshua and the rest of the heads of families of Israel said to them, "You shall have nothing to do with us in building a house to the Lord our God, for we alone will build it to the Lord of Israel." '),
            t('Then the people of the land discouraged the people of Judah, and made them afraid to build.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c6',
          content: 'The rejection of the offer triggered open hostility. The "people of the land"—those who remained during exile—began active opposition. They "made them afraid to build," using social pressure and intimidation. This was the beginning of a sustained effort to stop the work.',
        },
        {
          kind: 'scripture',
          spans: [
            hy('And they prevented the building throughout the reign of King Cyrus, until Darius reigned over the Persians.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c7',
          content: 'Opposition successfully halted the work. This wasn&apos;t a single conflict but sustained resistance lasting through Cyrus&apos;s reign and beyond. The project stalled despite the initial encouragement and provision. The exiles would face years of discouragement before rebuilding resumed under Darius.',
        },
        {
          kind: 'christ',
          content: `<p>The return from exile and the rebuilding of the temple point forward to Christ and the restoration He accomplishes. Just as the <hy>vessels</hy> were restored to their proper place, so Christ restores us to covenant relationship with God. And just as opposition could not ultimately prevent the temple&apos;s completion, opposition cannot prevent God&apos;s final restoration of all things. <strong>Colossians 1:20</strong> speaks of Christ reconciling all things to Himself—the ultimate restoration after the ultimate exile from God&apos;s presence brought about by sin. The vessels being returned foreshadow our own return to wholeness in Him.</p>`,
        },
        {
          kind: 'reflection',
          content: 'The opposition didn&apos;t end the story—it delayed it. The work resumed under Darius. Have you ever experienced opposition to God&apos;s work in your life that seemed to succeed for a time, only to find God opening the way again? How does Christ&apos;s final victory over all opposition strengthen you?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
  bottomShare: {
    title: 'God uses all circumstances and all rulers to accomplish His redemptive purposes.',
  },
};

export default content;
