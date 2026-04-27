import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 12 — Woman, Child, and Dragon
 *
 * A woman clothed with the sun, the moon beneath her feet, gives birth to a
 * male child. A great red dragon seeks to devour the child. War breaks out in
 * heaven. Michael and his angels fight the dragon. The dragon is cast down.
 * "They overcame him by the blood of the Lamb, and by the word of their testimony."
 */
export const REVELATION_12: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 12,

  intros: [
    'The drama shifts. The woman is God&apos;s people—Israel and the church together. She brings forth a son—the Messiah. The dragon—Satan—seeks to destroy Him. Yet Christ escapes. He is caught up to God&apos;s throne. The dragon is cast down. But his time is short, and he is filled with rage.',
    'War in heaven. The heavenly reality breaks through into the visible world. Michael and his angels fight. Satan and his demons fight back. Yet the outcome is not in doubt. "They overcame him by the blood of the Lamb."',
  ],

  sections: [
    {
      ref: 'Revelation 12:1–12',
      title: 'The Woman, the Dragon, and War in Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'And there appeared a great wonder in heaven; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars:'),
            plain(2, 'And she being with child cried, travailing in birth, and pained to be delivered.'),
            plain(3, 'And there appeared another wonder in heaven; and behold a great red dragon, having seven heads and ten horns, and seven crowns upon his heads.'),
            plain(5, 'And she brought forth a man child, who was to rule all nations with a rod of iron: and her child was caught up unto God, and to his throne.'),
            plain(7, 'And there was war in heaven: Michael and his angels fought against the dragon; and the dragon fought and his angels,'),
            plain(9, 'And the great dragon was cast out, that old serpent, called the Devil, and Satan, which deceiveth the whole world: he was cast out into the earth, and his angels were cast out with him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev12-dragon',
          html:
            'The woman clothed with the sun is Israel and the church together. The male child is Christ. The dragon—Satan—seeks to devour Him. Yet Christ escapes. He is taken to God&apos;s throne. Then war breaks out in heaven itself. Michael and his angels fight. Satan and his demons fight. Yet Satan is cast down. He is no longer the accuser in heaven. He is cast to earth, his time shortened.',
        },
        {
          kind: 'greek',
          id: 'rev12-drakon',
          title: 'Drakon — Dragon',
          script: 'δράκων',
          translit: '<strong>Drakon</strong> · dragon; great serpent; symbol of Satan',
          description:
            'The dragon is explicitly identified as Satan, the Devil, the old serpent. The imagery recalls Genesis 3 and the serpent&apos;s seduction. Satan is a deceiver, seeking dominion, warring against God&apos;s people.',
        },
        {
          kind: 'christ',
          id: 'rev12-christ-child',
          title: 'Christ Connection — The Male Child Born to Rule',
          html:
            'Christ is the male child caught up to God&apos;s throne. His birth threatens Satan. Yet Christ cannot be touched by Satan&apos;s schemes. He is elevated to the throne of God. His reign is secure. Satan&apos;s power is circumscribed.',
        },
        {
          kind: 'carry',
          html:
            'You live in the time after Satan&apos;s fall. He is no longer the "accuser of the brethren" in heaven. Yet he prowls the earth, seeking whom he may devour. Do not be deceived. Do not fear. Christ is on the throne.',
        },
        {
          kind: 'reflection',
          id: 'rev12-dragon-cast',
          prompt: 'What role does Satan play in your spiritual life? How does knowing he is cast down but still roaming affect your vigilance?',
        },
      ],
    },

    {
      ref: 'Revelation 12:10–17',
      title: 'The Victory Song and Satan&apos;s Rage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(10, 'And I heard a loud voice saying in heaven, Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ: for the accuser of our brethren is cast down, which accused them before our God day and night.'),
            plain(11, 'And they overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.'),
            plain(12, 'Therefore rejoice, ye heavens, and ye that dwell in them. Woe to the inhabiters of the earth and of the sea! for the devil is come down unto you, having great wrath, because he knoweth that he hath but a short time.'),
            plain(13, 'And when the dragon saw that he was cast unto the earth, he persecuted the woman which brought forth the man child.'),
            plain(17, 'And the dragon was wroth with the woman, and went to make war with the remnant of her seed, which keep the commandments of God, and have the testimony of Jesus Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev12-victory',
          html:
            'The victory is declared. The accuser is cast down. He no longer has access to heaven. Yet he rages on earth. He persecutes the woman—God&apos;s people. But those who overcome do so by the blood of the Lamb and the word of their testimony. They do not love their lives unto death. They choose Christ over comfort.',
        },
        {
          kind: 'greek',
          id: 'rev12-kategoros',
          title: 'Kategoros — Accuser',
          script: 'κατήγορος',
          translit: '<strong>Kategoros</strong> · accuser; one who brings charges',
          description:
            'Satan is the accuser. He brings charges before God against God&apos;s people. Yet his accusations are overruled. The blood of Christ silences the accuser. Your sins are covered. Your defense is Christ.',
        },
        {
          kind: 'christ',
          id: 'rev12-christ-blood',
          title: 'Christ Connection — Overcome by Blood and Testimony',
          html:
            'The victory comes through the blood of the Lamb—Christ&apos;s sacrifice—and through the word of testimony—the proclamation of Christ&apos;s work. Not through your own strength, but through faith in Christ and faithful witness.',
        },
        {
          kind: 'carry',
          html:
            'Satan is wrathful. He knows his time is short. His persecution of believers will intensify. Yet the victory is assured. Overcome by the blood of the Lamb. Let your testimony—your life and words—proclaim His power.',
        },
        {
          kind: 'reflection',
          id: 'rev12-overcome',
          prompt: 'How do you overcome Satan? What role does the blood of the Lamb and your testimony play in your victory?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They overcame him by the blood of the Lamb, and by the word of their testimony; and they loved not their lives unto the death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 12 · Study Guide',
  },

  hasHebrew: false,
};
