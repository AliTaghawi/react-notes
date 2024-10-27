import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
const App = () => {
  const queryClient = useQueryClient()
  // queries
  const {data, isPending, isLoading} = useQuery({queryKey: ["todos"], queryFn: () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos")
  }})
  // isPending => isLoading v4
  // isLoading => isPending && isFetching
  console.log(data, isLoading, isPending)

  // mutation
  const { mutate } = useMutation({mutationFn : (data) => {
    return axios.post("https://jsonplaceholder.typicode.com/todos", data)
  }})

  const clickHandler = () => {
    const postData = {
      title: "my todo"
    }
    mutate(postData, {
      onSuccess: (data) => {
        console.log("data", data);
        queryClient.invalidateQueries({queryKey: ["todos"]});
      },
      onError: error => console.log("error", error)
    })
  }
  return (
    <div>
      <h1>Tanstack Query v5</h1>
      <button onClick={clickHandler}>mutate</button>
    </div>
  );
};

export default App;