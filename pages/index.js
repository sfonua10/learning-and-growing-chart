import Head from "next/head";

export default function Home() {
  const naturalManResponses = [
    {
      term: "Blame others",
      definition: "Assign responsibilty for a fault or wrong",
      part_of_speech: 'verb'
    },
    {
      term: "Make excuses",
      definition: "attempt to lessen the blame attaching to (a fault or offense); seek to defend or justify",
      part_of_speech: 'verb'
    },
    {
      term: "Rebel",
      definition: "rise in opposition or armed resistance to an established government or ruler",
      part_of_speech: 'verb'
    },
    {
      term: "Complain",
      definition: "Express dissatisfaction or annoyance about something",
      part_of_speech: 'verb'
    },
    {
      term: "Find fault",
      definition: "Make an adverse criticism or objection, sometimes unfairly or destructively",
      part_of_speech: 'verb'
    },
    {
      term: "Doubt",
      definition: "feel uncertain about",
      part_of_speech: 'verb'
    },
    {
      term: "Give up",
      definition: "Cease making an effort; resign oneself to failure",
      part_of_speech: 'verb'
    },
    {
      term: "Get angry",
      definition: "feeling or showing strong annoyance, displeasure, or histility; full of anger",
      part_of_speech: 'verb'
    },
    {
      term: "Indult in self-pity",
      definition: "Excessive, self-absorbed unhappiness over one's own troubles",
      part_of_speech: 'verb'
    },
    {
      term: "Allow fear to rule",
      definition: "An unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat",
      part_of_speech: 'verb'
    },
    {
      term: "Self-justification",
      definition: "The justification or excusing of oneself or one's actions",
      part_of_speech: 'noun'
    },
  ]
  const dummyData = [
    {
      situation: "Wife and I disagree if Skribbl.io is appropriate or not",
      NMR: [
        "Get angry and blame others",
        "Doubt your abilities",
        "Lose hope you'll find a good job and quit trying",
      ],
      WAR: [
        "Ask for feedback from others, Find new skills you can learn or thing that would give you more experience.",
        "Apply for other jobs",
      ],
    },
    {
      situation: "I'm feeling overwhelmed talking about duties/responsibilities, etc. I feel like I'm being constantly nagged by wife",
      NMR: [
        "Get angry and know that I'm right",
        "Doubt your abilities",
        "Lose hope you'll find a good job and quit trying",
      ],
      WAR: [
        "Ask for feedback from others.",
        "Find new skills you can learn or thing that would give you more experience.",
        "Apply for other jobs",
      ],
    },
  ];
  const todayDate = new Date().toLocaleDateString();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>{todayDate}</p>
        </div>
        <div>
          <h1>EXAMPLE NATURAL MAN RESPONSES</h1>
          <ul className="list-disc">
            {naturalManResponses.map(nmr => <li className="list-disc">{nmr.term} - {nmr.definition}</li>)}   
          </ul>
        </div>
        <table className="ml-4 mr-4">
          <thead>
            <tr>
              <th className="w-1/4 px-4 py-2 text-blue-600">Situation</th>
              <th className="w-1/4 px-4 py-2 text-blue-600">
                "Natural Man" Response (Mosiah 3:19)
              </th>
              <th className="w-1/4 px-4 py-2 text-blue-600">
                Ways to Act Responsibly (2 Nephi 2:26)
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((sit, index) => {
              console.log('index', index);
              return (
                <tr className={`${index % 2 === 1 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                  <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{sit.situation}</td>
                  <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{sit.NMR.map(x => (<p>{x}</p>))}</td>
                  <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{sit.WAR.map(x => (<p>{x}</p>))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
