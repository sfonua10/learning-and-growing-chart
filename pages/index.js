import { useState } from 'react';
import Head from "next/head";
import { naturalManResponses, dummyData } from '../data/data';

export default function Home() {
  const [showList, setShowList] = useState(false);
  const [situations, setSituations] = useState(dummyData);
  const todayDate = new Date().toLocaleDateString();

  const hideList = () => {
    setShowList(!showList)
  }

  const addSituation = () => {
    let newSituation = {
      situation: 'test',
      NMR: [
        'test',
        'test',
        'test'
      ],
      WAR: [
        'test',
        'test',
        'test'
      ]
    }
    setSituations([...situations, newSituation])
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="ml-4 mr-4">
        <div>
          <p>{todayDate}</p>
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={hideList}>{showList ? 'Hide List' : 'Show List'}</button>
        {
          showList &&
          <div>
            <h1>EXAMPLE NATURAL MAN RESPONSES</h1>
            <ul className="list-disc">
              {naturalManResponses.map(nmr => <li className="list-disc">{nmr.term} - {nmr.definition}</li>)}
            </ul>
          </div>
        }
        <table >
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
            {situations?.map((sit, index) => {
              return (
                <tr className={`${index % 2 === 1 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                  <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{sit?.situation}</td>
                  <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{sit?.NMR?.map(x => (<p>{x}</p>))}</td>
                  <td className="border border-blue-500 px-4 py-2 text-blue-600 font-medium">{sit?.WAR?.map(x => (<p>{x}</p>))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
          <button onClick={addSituation}>Add New</button>
      </main>
    </div>
  );
}
