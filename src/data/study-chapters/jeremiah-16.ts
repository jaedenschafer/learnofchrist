import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 16 — Jeremiah Forbidden Marriage; Coming Exile
 *
 * The Lord commands Jeremiah not to marry, not to have sons and daughters in
 * this place. The prophet is to be a living sign of judgment — he cannot participate
 * in the normal rhythms of life because those rhythms will be interrupted by exile.
 * Yet in the darkness of exile, restoration is promised. "Therefore, behold, I will
 * cause them to know, this once will I cause them to know my hand and my mighty power;
 * and they shall know that my name is The Lord."
 */
export const JEREMIAH_16: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 16,

  intros: [
    'Chapter 16 opens with a shocking command: Jeremiah is forbidden to marry. He cannot take a wife, cannot have sons and daughters "in this place." The Lord is explicit about the reason: those who are born here will die of grievous deaths, of famine, of sword. The normal blessings of life — family, children, the continuation of one&apos;s name — are denied to the prophet because he is called to be a sign. His very life, unmarried and barren, testifies to the coming judgment.',
    'Yet judgment is not the final word. In the darkness of exile, restoration glimmers. The people will be brought back. Their bones will be remembered. And in that restoration, a work of memory and return begins. The prophet who cannot marry, who cannot build a family, witnesses a God who gathers His exiled children and calls them home.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 16',
    quote:
      'Jeremiah is forbidden marriage as a sign of coming exile. Yet the Lord promises: "I will cause them to know... that my name is The Lord." Even in judgment, God makes His name and power known through restoration.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 16 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 16:1–4 — The Command Against Marriage ────────────────── */
    {
      ref: 'Jeremiah 16:1–4',
      title: 'The Sign of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [t('The word of the Lord came also unto me, saying,')],
            },
            {
              number: 2,
              spans: [
                t('Thou shalt not take thee a wife, neither shalt thou have sons or daughters '),
                hg('in this place', 'jer16-this-place'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('For thus saith the Lord concerning the sons and concerning the daughters that are born in this place, and concerning their mothers that bare them, and concerning their fathers that begat them in this land;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('They shall die of '),
                hp('grievous deaths', 'jer16-grievous'),
                t('; they shall not be lamented; neither shall they be buried; but they shall be as dung upon the face of the earth: and they shall be consumed by the sword, and by famine; and their carcases shall be meat for the fowls of heaven, and for the beasts of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer16-this-place',
          html:
            'The phrase "in this place" — meaning Jerusalem and Judah — carries an edge of finality. Jeremiah is being told that the future here belongs to death. The normal joys of life — marriage, children, the passing on of one&apos;s name — will not be possible in a land that faces exile. This is not punishment of Jeremiah himself, but a prophecy written into his life.',
        },
        {
          kind: 'commentary',
          id: 'jer16-grievous',
          html:
            '&quot;Grievous deaths&quot; — the Hebrew suggests deaths brought by plague, pestilence, the sword. The people will not merely die; they will die in ways that strip them of dignity, of memorial, of the rituals of mourning. They will become "dung upon the face of the earth." This is the language of total destruction, of a people unmourned and unmemorialized.',
        },
        {
          kind: 'carry',
          html:
            'Jeremiah is asked to bear a sign in his own flesh — the absence of family, the lack of continuity. We live in an age that often celebrates individual fulfillment. But Jeremiah&apos;s life raises a question: What if our greatest calling requires the sacrifice of what the world calls natural blessing? What if what we renounce testifies more powerfully than what we possess?',
        },
        {
          kind: 'reflection',
          id: 'jer16-forbidden',
          prompt: 'Jeremiah is forbidden the normal blessings of family. What blessings have you been asked to renounce? And what did that renunciation teach you about God&apos;s call on your life?',
        },
      ],
    },

    /* ─── Jeremiah 16:5–9 — No Mourning, No Feasting ────────────────────── */
    {
      ref: 'Jeremiah 16:5–9',
      title: 'The House of Weeping and the House of Feasting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('For thus saith the Lord, Enter not into the house of mourning, neither go to lament nor bemoan them: for I have taken away my peace from this people, saith the Lord, even lovingkindness and mercies.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Both the great and the small shall die in this land: they shall not be buried, neither shall men lament for them, nor cut themselves, nor make themselves bald for them:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Neither shall men tear themselves for them in mourning, to comfort them for the dead; neither shall men give them the cup of consolation to drink for their father or for their mother.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Thou shalt not also go into the house of feasting, to sit with them to eat and to drink.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For thus saith the Lord of hosts, the God of Israel; Behold, I will cause to cease out of this place in your eyes, and in your days, the voice of mirth, and the voice of gladness, the voice of the bridegroom, and the voice of the bride.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer16-no-mourning',
          html:
            'Jeremiah is instructed not to participate in the ordinary human rhythms of consolation — the house of mourning where friends gather, where the rituals of grief take place. This is staggering. The prophet must stand apart, bearing witness to a judgment so complete that even the normal work of grieving will be suspended. The people will be too broken to mourn one another.',
        },
        {
          kind: 'commentary',
          id: 'jer16-no-feasting',
          html:
            'Nor can Jeremiah enter the house of feasting. No weddings. No celebrations. No voice of the bridegroom, no voice of the bride. The entire emotional landscape of the people — both sorrow and joy — will be swept away. What is being promised is not merely military defeat but a silencing of the normal human voice, a stripping away of the ceremonies that mark us as a people with memory and hope.',
        },
        {
          kind: 'carry',
          html:
            'In our time, we live in communities built on shared ritual — we mourn together, we celebrate together. Jeremiah is asked to stand outside both. To witness judgment. To refuse to anesthetize the people with the comfort of normal ceremonies. Sometimes faithfulness means refusing easy comfort, means standing in the hard place so that truth can be heard.',
        },
        {
          kind: 'reflection',
          id: 'jer16-witness',
          prompt: 'Jeremiah must stand apart from both mourning and feasting. Where are you called to stand apart in order to bear witness to truth?',
        },
      ],
    },

    /* ─── Jeremiah 16:10–13 — Why? Because Your Fathers Have Forsaken Me ──────── */
    {
      ref: 'Jeremiah 16:10–13',
      title: 'The Reason for Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 10,
              spans: [
                t('And it shall come to pass, when thou shalt shew this people all these words, and they shall say unto thee, Wherefore hath the Lord pronounced all this great evil against us? or what is our iniquity? or what is our sin that we have committed against the Lord our God?'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then shalt thou say unto them, Because your fathers have forsaken me, saith the Lord, and have walked after other gods, and have served them, and have worshipped them, and have forsaken me, and have not kept my law;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And ye have done worse than your fathers; for, behold, ye walk every one after the imagination of his evil heart, and none of you giveth ear unto me:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Therefore will I cast you out of this land into a land that ye know not, neither ye nor your fathers; and there shall ye serve other gods day and night; where I will not shew you favour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer16-worse',
          html:
            'The people will ask, "Wherefore hath the Lord pronounced all this great evil?" And the answer is clear: your fathers forsook the Lord and walked after other gods. And you have done worse. Not only have you repeated their sin — you have committed it with full knowledge, with hardened hearts. Each generation compounds the rebellion of the one before.',
        },
        {
          kind: 'hebrew',
          id: 'jer16-forsaken',
          title: 'Azab — "Forsaken"',
          script: 'עָזַב',
          translit: '<strong>Azab</strong> · to abandon; to forsake; to leave behind',
          description:
            'The verb "azab" carries the weight of abandonment. When the people forsake God, they do not merely sin; they abandon their covenant. And when God warns them of judgment, it is because the covenant itself has been forsaken. The word echoes throughout Jeremiah — a people walking away from the only God who can sustain them.',
        },
        {
          kind: 'carry',
          html:
            'The cycle is clear: fathers turn away, sons inherit and deepen the turning away. Yet the invitation to return is always present. We cannot change what our ancestors did, but we can break the cycle. Where is your generation repeating the sins of the one before? Where are you called to turn back?',
        },
        {
          kind: 'reflection',
          id: 'jer16-cycle',
          prompt: 'Judah has done worse than their fathers, compounding rebellion through generations. Where do you see cycles of sin repeating in your own family or community? How can you break them?',
        },
      ],
    },

    /* ─── Jeremiah 16:14–18 — Yet Restoration Promised ────────────────────── */
    {
      ref: 'Jeremiah 16:14–18',
      title: 'From Judgment to Restoration',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 14,
              spans: [
                t('Therefore, behold, the days come, saith the Lord, that it shall no more be said, The Lord liveth, that brought up the children of Israel out of the land of Egypt;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But, The Lord liveth, that brought up the children of Israel from the land of the north, and from all the lands whither he had driven them: and I will bring them again into their land that I gave unto their fathers.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Behold, I will send for many fishers, saith the Lord, and they shall fish them: and after will I send for many hunters, and they shall hunt them from every mountain, and from every hill, and out of the holes of the rocks.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('For mine eyes are upon all their ways: they are not hid from my face, neither is their iniquity hid from before me.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And first I will recompense their iniquity and their sin double; because they have defiled my land, they have filled mine inheritance with the carcases of their detestable and abominable things.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer16-fishers-hunters',
          html:
            'After exile, there will be "fishers" and "hunters" — a reversal of the Exodus language. No longer "brought up out of the land of Egypt," but brought back from the lands where they have been scattered. The fishers suggest gentle gathering; the hunters suggest thorough searching. God will not leave His people lost in exile forever.',
        },
        {
          kind: 'christ',
          id: 'jer16-christ-fishers',
          title: 'Christ Connection — Fishers of Men',
          html:
            'Jesus uses the image of fishers when He calls Peter: "Follow me, and I will make you fishers of men" (Matthew 4:19). The fishers in Jeremiah 16 gather the exiled people. The fishers Christ appoints gather people into the kingdom. Both are images of God&apos;s mercy working through ordinary means — nets, boats, faithful hands — to bring His people home.',
        },
        {
          kind: 'carry',
          html:
            'Even in the promise of restoration, there is accountability. God will recompense iniquity double. Exile is not forgiveness; it is consequence. Yet the willingness to go after the people, to hunt them, to find them wherever they have been scattered — this is the love of God. He does not abandon; He pursues. He does not give up; He gathers.',
        },
        {
          kind: 'reflection',
          id: 'jer16-pursued',
          prompt: 'God promises to send "fishers" and "hunters" to bring His exiled people home. When have you felt pursued and gathered by God? When have you been invited to help gather others?',
        },
      ],
    },

    /* ─── Jeremiah 16:19–21 — The Nations Will Know ────────────────────── */
    {
      ref: 'Jeremiah 16:19–21',
      title: 'The Name of the Lord Made Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 19,
              spans: [
                t('O Lord, my strength, and my fortress, and my refuge in the day of affliction, the Gentiles shall come unto thee from the ends of the earth, and shall say, Surely our fathers have inherited lies, vanity, and things wherein there is no profit.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Shall a man make gods unto himself? and they are no gods.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Therefore, behold, I will this once cause them to know, I will cause them to know my hand and my mighty power; and they shall know that my name is '),
                hp('The Lord', 'jer16-name-lord'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer16-name-lord',
          html:
            'The chapter ends with a profound promise: "They shall know that my name is The Lord." Not just Israel, but the nations themselves will come to recognize the power and name of God. What exile displays — the judgment of the Lord — will become a testimony to all peoples that the God of Israel is the true God. Through judgment, the name of God is glorified.',
        },
        {
          kind: 'commentary',
          id: 'jer16-fathers-lies',
          html:
            'The Gentiles confess that "our fathers have inherited lies." There is a profound honesty here — the nations themselves recognize the bankruptcy of idolatry. They have pursued gods that are "no gods," and the experience of exile and restoration will make clear to them that the Lord alone is God.',
        },
        {
          kind: 'carry',
          html:
            'Jeremiah speaks these words in affliction. The reader hears them as words of hope — that in the very moment of judgment, God is at work making His name known. Your darkest moment may be the moment when others finally see the power and faithfulness of God. Do not despair in affliction; trust that God is revealing His name through what you endure.',
        },
        {
          kind: 'reflection',
          id: 'jer16-know-name',
          prompt: 'Through exile and judgment, God promises that the nations will know His name and power. How have your hardest seasons revealed God&apos;s character to others?',
        },
      ],
    },

    /* ─── Jeremiah 16 · Witness and Restoration ─────────────────────────── */
    {
      ref: 'Jeremiah 16 · All',
      title: 'The Prophet as Living Sign',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer16-prophet-sign',
          html:
            'Jeremiah&apos;s own life becomes the message. He cannot marry, cannot feast, cannot participate in the normal textures of human joy and sorrow. This is sacrifice, but it is also testimony. A people watching a prophet who stands apart will understand: something is coming. The normal is being suspended. The time of indulgence is ending. And yet the very one who bears this message is also the one who proclaims restoration. The judge is also the herald of hope.',
        },
        {
          kind: 'christ',
          id: 'jer16-christ-judgment-mercy',
          title: 'Christ Connection — The Judge Who Saves',
          html:
            'Jesus comes both as judge and savior. He proclaims judgment on the religious structures that have built walls between God and His people. He withdraws Himself from normal fellowship — "no one comes to the Father except through me." And yet the very One who judges is the One who dies to restore. Like Jeremiah, Christ stands apart. And like Jeremiah, Christ declares that exile will end, that restoration will come, and that the nations will know the name of the Lord.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
