import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hosea 1 — Hosea Marries Gomer the Harlot
 *
 * The word of the Lord came to Hosea: "Go, take unto thee a wife of whoredoms
 * and children of whoredoms." Hosea obeys and marries Gomer, who bears three
 * children. Each child is named a sign: Jezreel (God scatters), Lo-ruhamah
 * (not pitied), Lo-ammi (not my people). These names are written on Israel
 * itself — the unfaithful bride of God. Yet even here, in judgment, there is
 * the seed of restoration.
 */
export const HOSEA_1: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 1,

  estimatedMinutes: { 5: 4, 10: 6, 15: 8 },
  intros: [
    'Hosea is the prophet who loved a harlot. His marriage is not a private affair but a sign to Israel. When God commands him to take "a wife of whoredoms," Hosea does not hesitate. He marries Gomer, and in that marriage, he becomes a living word to his people.',
    'The children born to Hosea and Gomer carry names that are prophecies. Jezreel means "God scatters" — the place where Israel&apos;s dynasty would fall. Lo-ruhamah means "not pitied" — God&apos;s compassion withdrawn. Lo-ammi means "not my people" — the covenant broken. But even in these terrible names, there is hope. God is not finished with His people. His covenant love will outlast their unfaithfulness.',
  ],

  bottomShare: {
    label: 'Share Hosea 1',
    quote:
      'Hosea marries a harlot, and in that marriage becomes a sign to Israel of God&apos;s faithful love for His unfaithful people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 1 · Study Guide',
  },

  sections: [
    {
      ref: 'Hosea 1:1–3',
      title: 'The Command and the Marriage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The word of the Lord that came unto Hosea, the son of Beeri, in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah, and in the days of Jeroboam the son of Joash, king of Israel.'),
            {
              number: 2,
              spans: [
                t('The beginning of the word of the Lord by Hosea. And the Lord said to Hosea, '),
                hp('Go, take unto thee a wife of whoredoms and children of whoredoms', 'hosea1-command'),
                t(': for the land hath committed great whoredom, departing from the Lord.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('So he went and took Gomer the daughter of Diblaim; which conceived, and bare him a son.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea1-command',
          html:
            'God commands Hosea to do the unthinkable: marry a woman of whoredoms, a harlot. This is not a hidden instruction. This is the opening word of the book — God&apos;s will made public. Hosea obeys without hesitation. He does not negotiate or question. The marriage itself is the message: just as Hosea loves an unfaithful wife, so God loves an unfaithful Israel. The prophet&apos;s life becomes the sermon.',
        },
        {
          kind: 'hebrew',
          id: 'hosea1-whoredoms',
          title: 'Zanunah — "Whoredoms" or "Unfaithfulness"',
          script: 'זְנוּנִים',
          translit: '<strong>Zanunah</strong> · whoredoms; harlotry; unfaithfulness',
          description:
            'The word "zanunah" refers to harlotry — physical and spiritual unfaithfulness. It is used throughout Hosea to describe Israel&apos;s turning away from God to worship idols. When God commands Hosea to marry "a wife of whoredoms," He is commanding him to marry a woman who will become Israel&apos;s living symbol.',
        },
        {
          kind: 'carry',
          html:
            'Hosea obeys a command that makes him vulnerable, that exposes him to shame, that tells his story as a prophecy. In your own life, where is God asking you to obey in a way that costs you, that requires you to be a sign to others, that means your own story becomes a sermon to the world around you?',
        },
        {
          kind: 'reflection',
          id: 'hosea1-obedience',
          prompt: 'Hosea married a harlot because God commanded it. What has God asked you to do that feels costly, strange, or exposed?',
        },
      ],
    },

    {
      ref: 'Hosea 1:4–11',
      title: 'The Children Named as Signs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('And the Lord said unto him, Call his name '),
                hg('Jezreel', 'hosea1-jezreel'),
                t('; for yet a little while, and I will avenge the blood of Jezreel upon the house of Jehu, and will cause to cease the kingdom of the house of Israel.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it shall come to pass at that day, that I will break the bow of Israel in the valley of Jezreel.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And she conceived again, and bare a daughter. And God said unto him, Call her name '),
                hg('Lo-ruhamah', 'hosea1-loruhamah'),
                t(': for I will no more have mercy upon the house of Israel; but I will utterly take them away.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('But I will have mercy upon the house of Judah, and will save them by the Lord their God, and will not save them by bow, nor by sword, nor by battle, by horses, nor by horsemen.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Now when she had weaned Lo-ruhamah, she conceived, and bare a son. Then said God, Call his name '),
                hg('Lo-ammi', 'hosea1-loammi'),
                t(': for ye are not my people, and I will not be your God.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Yet the number of the children of Israel shall be as the sand of the sea, which cannot be measured nor numbered; and it shall come to pass, that in the place where it was said unto them, Ye are not my people, there it shall be said unto them, Ye are the sons of the living God.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Then shall the children of Judah and the children of Israel be gathered together, and appoint themselves one head, and they shall come up out of the land: for great shall be the day of Jezreel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea1-jezreel',
          html:
            'Jezreel is the valley where the house of Jehu had executed Naboth and his sons — a bloodshed that God is about to avenge. The name itself means "God scatters." It is a name of judgment: God will break the bow of Israel in that place. Yet by the end of the chapter, Jezreel becomes a name of hope. "Great shall be the day of Jezreel" — the scattering will become a sowing, the judgment a planting.',
        },
        {
          kind: 'commentary',
          id: 'hosea1-loruhamah',
          html:
            'Lo-ruhamah, "not pitied," is a daughter. Her name announces that God&apos;s mercy is withdrawn from Israel. "I will no more have mercy upon the house of Israel." This is the severest of names — not just distance, but the removal of compassion itself. Yet notice what follows: even as God says He will take Israel away, He says He will have mercy upon Judah and save them. The judgment is not absolute. The mercy is not ended — it is redirected.',
        },
        {
          kind: 'commentary',
          id: 'hosea1-loammi',
          html:
            'Lo-ammi, "not my people," is the final name. It announces the breaking of covenant: "Ye are not my people, and I will not be your God." This is the deepest severance — not just the removal of mercy, but the dissolution of the relationship itself. And yet immediately follows the most extraordinary reversal: "In the place where it was said unto them, Ye are not my people, there it shall be said unto them, Ye are the sons of the living God." The names of judgment become seeds of restoration.',
        },
        {
          kind: 'christ',
          id: 'hosea1-christ',
          title: 'Christ Connection — The Faithful Bridegroom',
          html:
            'Hosea&apos;s unfaithful marriage is a sign of God&apos;s faithful covenant. In the New Testament, Christ is revealed as the Bridegroom who loves His Bride — the church — with a love that will not let her go. Paul writes, "Husbands, love your wives, even as Christ also loved the church, and gave himself for it" (Ephesians 5:25). Christ takes on the role that Hosea plays: He loves the unfaithful. He marries the harlot and transforms her. The children born to His covenant are no longer "not my people" but "sons of the living God."',
        },
        {
          kind: 'carry',
          html:
            'The names given to Hosea&apos;s children are terrible — scattered, not pitied, not mine. But by the end of the chapter, those names are reversed. In the same place where judgment was declared, mercy is promised. In your own life, where have you been named "not mine," cast out, scattered? Where does God promise to gather you back and call you "My people"?',
        },
        {
          kind: 'reflection',
          id: 'hosea1-names',
          prompt: 'The children of Hosea are named with words of judgment. Yet God promises those names will be reversed. What judgment or shame have you carried that God promises to transform?',
        },
      ],
    },

    {
      ref: 'Hosea 1 · All',
      title: 'The Prophet&apos;s Heart',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea1-prophet-heart',
          html:
            'Hosea is a prophet who embodies his message. His marriage is not metaphor — it is lived theology. He loves a woman whom God tells him will be unfaithful. He names his children with names of judgment. He lets his own life become the sermon. This is what the prophets do. They do not merely announce the word of God; they become the word of God. Ezekiel lies on his side for years to symbolize Jerusalem&apos;s siege. Isaiah walks naked and barefoot to show Israel&apos;s captivity. Jeremiah breaks pottery. And Hosea marries a harlot. In each case, the prophet&apos;s suffering becomes a word to the people. His pain is their mirror.',
        },
        {
          kind: 'christ',
          id: 'hosea1-christ-suffering-servant',
          title: 'Christ Connection — The Suffering Servant',
          html:
            'Christ Himself is the prophet who embodies His message. He does not merely teach about suffering; He suffers. He does not merely announce redemption; He is redemption. He does not speak of love; He shows it in His flesh. And His suffering is for us — just as Hosea&apos;s marriage was a sign to Israel, Christ&apos;s death is the Word made flesh, the love of God displayed in covenant faithfulness that will not break even when His Bride is unfaithful.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
