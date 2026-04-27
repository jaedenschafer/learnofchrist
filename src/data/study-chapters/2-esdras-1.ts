import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_1: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 1,

  intros: [
    'Ezra stands as God&apos;s prophet in exile, chosen to announce both judgment and hope. In this opening vision, God addresses His people directly through their scribe, reproaching them for their unfaithfulness yet promising a new people drawn from the Gentiles.',
    'The chapter echoes the prophetic tradition—stern words of rebuke, but always with the possibility of restoration. Those who hear and respond will be gathered as a new covenant people, crowned with the righteousness of God.',
  ],

  sections: [
    {
      ref: '2 Esdras 1:1–11',
      title: 'God&apos;s Reproach',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The second book of the prophet Ezra. And the Lord said unto me, Go thy way, and gather together the people of Israel, that none of them may be wanting.'),
            plain(4, 'I gathered them together, and none were wanting. But the Lord said unto me, Some of them have forsaken my law, and believed not his commandments.'),
            plain(7, 'Behold, I take away from you the brightness of my countenance.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras1-reproach',
          html:
            'God&apos;s words to Ezra are direct and painful. The people have been gathered, yet many have turned away from the law. This is not distant judgment—it is the withdrawal of God&apos;s presence, the eclipse of His favor. The brightness of His countenance is the sign of covenant blessing.',
        },
        {
          kind: 'hebrew',
          id: 'esdras1-panav',
          title: 'Panim—The Face',
          script: 'פָּנִים',
          translit: '<strong>Panim</strong> · face; presence; favor',
          description: 'God&apos;s panim is His manifest presence. When His face is turned away, the blessing is withdrawn. In covenant language, God&apos;s panim shining upon a people means protection; its turning away means exposure to judgment.',
        },
        {
          kind: 'christ',
          id: 'esdras1-christ-light',
          title: 'Christ Connection—The Light Restored',
          html:
            'Jesus is called the Light of the world. In Him, the brightness of God&apos;s countenance that was withdrawn from those who reject Him is restored to all who believe. He is the face of God made visible.',
        },
        {
          kind: 'carry',
          html:
            'God withdraws His favor not arbitrarily but in response to rejection of His law. This is true justice—we reap what we sow. Yet the book of 2 Esdras holds out a persistent hope: even in judgment, a new people will emerge.',
        },
        {
          kind: 'reflection',
          id: 'esdras1-reject',
          prompt: 'Where have you turned from God&apos;s law? What would it look like to turn back and restore that relationship?',
        },
      ],
    },

    {
      ref: '2 Esdras 1:30–37',
      title: 'The New People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(30, 'Behold, I send unto you my servants the prophets; which ye will not hear, nor regard their words, saith the Lord.'),
            plain(33, 'I have called the righteous, but ye received not the prophets. Behold, I will destroy this people. But yet I will have mercy upon them.'),
            plain(35, 'I shall gather together a people that shall be called by a new name, to whom I will give the law that is glorious and holy.'),
            plain(37, 'And they shall be crowned with the righteousness of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras1-remnant',
          html:
            'Even as judgment falls, God announces His mercy. A new people will be gathered—not from Israel alone, but called by a new name. They will receive a glorious law and wear righteousness like a crown. This is the eschatological reversal: from judgment to hope.',
        },
        {
          kind: 'greek',
          id: 'esdras1-kainos',
          title: 'Kainos—New',
          script: 'καινός',
          translit: '<strong>Kainos</strong> · new; fresh; unprecedented',
          description: 'This is not merely "another" people but a fundamentally new creation. In the New Testament, Jesus offers kainos wine and writes kainos commandment. Kainos suggests transformation, not merely succession.',
        },
        {
          kind: 'christ',
          id: 'esdras1-christ-people',
          title: 'Christ Connection—The Bride Made New',
          html:
            'In Christ, the Church becomes this new people. Not drawn from one tribe or nation, but called from every language and people. His righteousness becomes their adornment—they are clothed in His justice.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s judgment is real, but His mercy is the final word. A people who reject Him will fall, yet He refuses to abandon His purpose. He gathers a new covenant community crowned with His own righteousness. This is grace beyond justice.',
        },
        {
          kind: 'reflection',
          id: 'esdras1-worthy',
          prompt: 'What does it mean to be "crowned with the righteousness of the Lord"? Can you wear that crown only through your own effort, or is it a gift?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I shall gather together a people that shall be called by a new name, to whom I will give the law that is glorious and holy. And they shall be crowned with the righteousness of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 1 · Study Guide',
  },

  hasHebrew: true,
};
