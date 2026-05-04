import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 20 — Israel&apos;s History of Rebellion
 *
 * A chronicle of faithlessness. From Egypt to the wilderness to Canaan,
 * Israel has repeatedly rejected God and chosen idols. Yet at every point,
 * God sustained them "for my name&apos;s sake"—not because they deserved it,
 * but because His covenant was written in His own nature. The refrain echoes:
 * "I wrought for my name&apos;s sake, that it should not be polluted before
 * the heathen." The history is one of accumulated failure. Yet it is also one
 * of unbreakable grace. God acts not because His people are faithful, but
 * because He is faithful. And He will call all Israel to account—and also to
 * repentance.
 */
export const EZEKIEL_20: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 20,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  topicTags: ['judgment', 'glory', 'hope', 'second-coming'],
  opener: {
    topical: true,
    caption: 'Ezekiel 20',
  },
  intros: [
    'Ezekiel 20 is a recitation—a long, painful recounting of Israel&apos;s religious history. God walks through the stages of the covenant: the revelation in Egypt, the wilderness wandering, the entry into the land. At each stage, Israel rebels. They worship idols. They turn away. They profane God&apos;s name by their behavior. Yet at each stage, God acts not because Israel has earned redemption, but "for my name&apos;s sake"—to preserve the honor of His own name among the nations.',
    'This chapter teaches something crucial: God&apos;s faithfulness does not depend on ours. We can be faithless. God remains faithful. But that faithfulness is not soft. It includes judgment. It includes the conviction of sin. The goal is not to minimize our failure, but to break us of our idolatry and turn us back to covenant fidelity.',
  ],

  sections: [
    {
      ref: 'Ezekiel 20:1–9',
      title: 'Egypt and Rejection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(5, 'And say unto them, Thus saith the Lord God; In the day when I chose Israel, and lifted up the oath of my hand unto the seed of the house of Jacob, and made myself known unto them in the land of Egypt, saying, I am the Lord your God;'),
            plain(6, 'In that day I lifted up mine hand unto them, to bring them forth of the land of Egypt into a land that I had espied for them, flowing with milk and honey, which is the glory of all lands:'),
            plain(8, 'But they rebelled against me, and would not hearken unto me: they did not every man cast away the abominations of their eyes, neither did they forsake the idols of Egypt: then I said, I will pour out my fury upon them, to accomplish my anger against them in the midst of the land of Egypt.'),
            plain(9, 'But I wrought for my name&apos;s sake, that it should not be polluted before the heathen, among whom they were; for I made myself known unto them, in their sight, to bring them forth out of the land of Egypt.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek20-chose',
          html: 'God begins by recounting the choosing. "In the day when I chose Israel"—not because of Israel&apos;s merit, but by free election. He swore an oath, made Himself known, declared His intention: to bring them out of Egypt to a land of blessing. He was faithful. He revealed Himself. He kept His word[res:babylonian-exile-context].',
        },
        {
          kind: 'commentary',
          id: 'ezek20-rebelled',
          html: 'But Israel "rebelled against me, and would not hearken unto me." They did not cast away the idols of Egypt. They clung to the abominations they had seen. Even after God broke the chains of slavery and showed Himself mighty in plague and parting of the sea, Israel held onto false gods. God&apos;s just response would be to pour out fury and accomplish His anger. But He did not. Why? "I wrought for my name&apos;s sake, that it should not be polluted before the heathen."[res:sefaria-ezekiel]',
        },
        {
          kind: 'hebrew',
          id: 'ezek20-wrought',
          title: 'Asah — "Wrought" (Did, Made, Acted)',
          script: 'עָשָׂה',
          translit: '<strong>Asah</strong> · to make, to do, to act; foundational verb for creation and divine action',
          description:
            'Asah is the word used for God&apos;s creative acts. Here it means that God acted—He took the action of restraining His just judgment in order to preserve His own name. God acts not only out of love for Israel, but out of fidelity to His own nature and reputation.',
        },
        {
          kind: 'reflection',
          id: 'ezek20-idols',
          prompt: 'What spiritual "idols of Egypt" do you carry with you—practices, attitudes, or dependencies you have not cast away?',
        },
      ],
    },

    {
      ref: 'Ezekiel 20:10–26',
      title: 'Wilderness and Repeated Rebellion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(10, 'Wherefore I caused them to go forth out of the land of Egypt, and brought them into the wilderness.'),
            plain(12, 'Moreover also I gave them my sabbaths, to be a sign between me and them, that they might know that I am the Lord that sanctify them.'),
            plain(13, 'But the house of Israel rebelled against me in the wilderness: they walked not in my statutes, and they despised my judgments, which if a man do, he shall even live in them; and my sabbaths they greatly polluted: then I said, I would pour out my fury upon them in the wilderness, to consume them.'),
            plain(14, 'But I wrought for my name&apos;s sake, that it should not be polluted before the heathen, in whose sight I brought them out.'),
            plain(15, 'Yet also I lifted up my hand unto them in the wilderness, that I would not bring them into the land which I had given them, flowing with milk and honey, which is the glory of all lands;'),
            plain(16, 'Because they despised my judgments, and walked not in my statutes, but polluted my sabbaths: for their heart went after their idols.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek20-wilderness',
          html: 'Israel comes into the wilderness—a place of stripping down, where there are no resources but what God provides. In this place of dependence, God gives them the Sabbath as a sign of covenant. And in this place, they rebel again. They despise God&apos;s judgments. They pollute His Sabbaths. "Their heart went after their idols." Again, God would be just to pour out His fury. Again, He restrains Himself—for His name&apos;s sake[res:tyre-archaeology].',
        },
        {
          kind: 'commentary',
          id: 'ezek20-but-wrought',
          html: 'The refrain becomes almost unbearable: "But I wrought for my name&apos;s sake, that it should not be polluted." How many times will this happen? How many times will Israel rebel, and how many times will God stay His hand? Yet that hand falls. "I lifted up my hand...that I would not bring them into the land." A generation dies in the wilderness. God&apos;s patience and God&apos;s judgment are the same thing—both aimed at keeping His people from destroying themselves.',
        },
        {
          kind: 'carry',
          html: 'God does not minimize Israel&apos;s sin or pretend it has no consequence. But His primary motivation is not their destruction. It is His own faithfulness. He acts "for my name&apos;s sake." This is strange comfort: you matter to God not because you are good, but because His own reputation is bound up with your redemption. He cannot lose you without losing Himself.',
        },
        {
          kind: 'reflection',
          id: 'ezek20-cycles',
          prompt: 'Do you see patterns of rebellion and grace in your own life—places where you have strayed and God has called you back?',
        },
      ],
    },

    {
      ref: 'Ezekiel 20:40–44',
      title: 'Restoration and Worship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(40, 'For in mine holy mountain, in the mountain of the height of Israel, saith the Lord God, there shall all the house of Israel, all of them in the land, serve me: there will I accept them, and there will I require your offerings, and the firstfruits of your oblations, with all your holy things.'),
            plain(41, 'I will accept you with your sweet savour, when I bring you out from the people, and gather you out of the countries wherein ye have been scattered, and I will be sanctified in you before the heathen.'),
            plain(42, 'And ye shall know that I am the Lord, when I shall bring you into the land of Israel, into the country for the which I lifted up the hand of my oath to give it to your fathers.'),
            plain(43, 'And there shall ye remember your ways, and all your doings, wherein ye have been defiled; and ye shall lothe yourselves in your own sight for all your evils that ye have committed.'),
            plain(44, 'And ye shall know that I am the Lord, when I have wrought with you for my name&apos;s sake, not according to your wicked ways, nor according to your corrupt doings, O ye house of Israel, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek20-restore',
          html: 'Yet the chronicle does not end in exile. God speaks of gathering, of bringing Israel back to their own land. In that restoration, they will serve Him in His holy mountain. Not as slaves, but as a people returned. God will "accept them"—will accept their offerings and firstfruits, will delight in the aroma of their worship. This is not because they have earned it. It is because God has acted "for my name&apos;s sake."',
        },
        {
          kind: 'commentary',
          id: 'ezek20-remember',
          html:
            'And in that day, Israel will remember. "Ye shall remember your ways, and all your doings, wherein ye have been defiled; and ye shall lothe yourselves in your own sight for all your evils." Repentance is not primarily feeling bad. It is seeing clearly what you have done, turning away from it, and recognizing the grace that has sustained you despite your failure.',
        },
        {
          kind: 'christ',
          id: 'ezek20-christ-name',
          title: 'Christ Connection — Acting for His Name&apos;s Sake',
          html:
            'Christ embodies the principle Ezekiel articulates: God acts for His name&apos;s sake. Jesus came not because we earned redemption, but because the Father&apos;s nature is love and faithfulness. At the Cross, Christ bore the judgment that should have fallen on us. Why? "For the glory of the Father&apos;s name." As Jesus prayed: "Father, glorify thy name." The work of redemption is God&apos;s way of being true to Himself—true to His own character of covenantal love.',
        },
        {
          kind: 'carry',
          html:
            'You do not stand alone before God, balanced on your own righteousness. You stand wrapped in His covenantal faithfulness. He will not abandon you because you are worth abandoning. But neither will He soften the message of judgment—judgment that is meant to break you of idolatry and return you to the life you were made for.',
        },
        {
          kind: 'reflection',
          id: 'ezek20-faithfulness',
          prompt: 'What does it mean to you that God acts "for His name&apos;s sake" rather than for your merit? Does that free you or unsettle you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I wrought for my name&apos;s sake, that it should not be polluted before the heathen, among whom they were.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 20 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    }
  ],

  hasHebrew: true,
};
