import  {GroupsSelectQuery}  from '../querries/PublicationGroupQuery';
import { useDispatch } from 'react-redux'; //umožňuje komponentě odesílat akce do Reduxového úložiště
import { loadData } from 'features/PublicationSlice';
import { useState } from 'react'; //umožňuje komponentě spravovat svůj stav

export const PublicationLoad= () => {

  const dispatch = useDispatch()  //odesílání akcí do Reduxového úložiště
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        dispatch(loadData(data.data.publicationPage));
        console.log(data.data.publicationPage)
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
    <div>
      <button class="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Load</button>
    </div>
  )
}