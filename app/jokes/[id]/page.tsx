
import {getJoke, deleteJoke, saveJoke } from '../../services/jokeService'

// export async function generateStaticParams() {
//     return [{ id: '1' }];
// }
   
  
   

  export default async function Page({ params }) {
    const joke = await getJoke(params.id);

    return <div>
        <h1>Edit Joke {joke?.id} </h1>
        <h2>joke title = {joke?.Title}</h2> 
        <h3>joke Author = {joke?.Author}</h3> 
    </div>;
}