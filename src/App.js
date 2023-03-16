import './App.css';
import { useEffect, useState } from 'react';

export const App = () => {

  const [data, setData] = useState([])

  return <div>Hello World!</div>
  // const getData = async () => {
  //   await fetch(`https://anvil-fhir-vumc.uc.r.appspot.com/fhir/ResearchStudy`)
  //     .then(res => res.json())
  //     .then((d) => {
  //       setData(d)
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, []
  // )

  // return <>
  //   <div className="data-table">
  //     <table>
  //       <tr>
  //         <th>URL</th>
  //         <th>Title</th>
  //       </tr>
  //       {data.entry?.slice(0, 10).map(
  //         (d, index) => {
  //           return <tr key={index} className="table-cell">
  //             <td className='url-div'>{d.fullUrl}</td>
  //             <td className='title-div'>{d.resource?.title}</td>
  //           </tr>
  //         }
  //       )}
  //     </table>
  //   </div>
  // </>
}
