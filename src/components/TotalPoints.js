import React from 'react';

const TotalPoints = ({currentWord, totalPoints, totalWords}) => {
  return (
    <div className="pa4">
  <div className="overflow-auto">
    <table className="f6 w-20 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Number of Words</th>
          <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Points</th>

        </tr>
      </thead>
      <tbody className="lh-copy">
        <tr >
          <td className="fw6 pv3 pr3 bb b--black-20 tc">{totalWords}</td>
          <td className="fw6 pv3 pr3 bb b--black-20 tc">{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  )
}

export default TotalPoints;
