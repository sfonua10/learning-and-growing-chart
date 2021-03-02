import { useState } from "react"

export default function Anger() {
  const [canEdit, setCanEdit] = useState(false);
  const [value, setValue] = useState('asdf');

  const editField = () => {
    setCanEdit(true);
  }

  const handleValue = (e) => {
    setValue(e.target.value);
  }
    return (
        <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-red-50 to-yellow-100 p-10">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2 text-red-600">Incident</th>
              <th class="px-4 py-2 text-red-600">Why</th>
              <th class="px-4 py-2 text-red-600">Enraged</th>
              <th class="px-4 py-2 text-red-600">Time</th>
              <th class="px-4 py-2 text-red-600">OSS</th>
              <th class="px-4 py-2 text-red-600">Outlet</th>
              <th class="px-4 py-2 text-red-600">Downward Cycle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Angry towards wife because Via fell off counters</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Express how I didn't feel comfortable with Via on kitchen/bathroom counters</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Yes</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Afternoon/Midday</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">New Job, Home Searching</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Kicked bumblebee and it hit wall, screamed in car</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Yes</td>
            </tr>
            <tr class="bg-red-200">
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Intense because Hong didn't cater to me the way I want/expecteed her to when explaining benefits</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Express how I didn't feel comfortable with Via on kitchen/bathroom counters</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Yes</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Afternoon/Midday</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">New Job, Home Searching</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Kicked bumblebee and it hit wall, screamed in car</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Yes</td>
            </tr>
            <tr>
              <td onDoubleClick={editField} class="border border-red-500 px-4 py-2 text-red-600 font-medium">
                {canEdit ? <input type="text" value={value} onChange={handleValue} /> : value}
              </td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Express how I didn't feel comfortable with Via on kitchen/bathroom counters</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Yes</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Afternoon/Midday</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">New Job, Home Searching</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Kicked bumblebee and it hit wall, screamed in car</td>
              <td class="border border-red-500 px-4 py-2 text-red-600 font-medium">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}