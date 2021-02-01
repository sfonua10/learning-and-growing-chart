import Head from "next/head";

export default function Home() {
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
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
