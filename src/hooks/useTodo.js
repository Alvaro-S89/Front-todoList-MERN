

function useTodo() {
    const { REACT_APP_SERVER_URL } = process.env

    const addTodo = async ({ topic, details }) => {
      const userID = window.localStorage.getItem("userID")
        try {
            const response = await fetch(`${REACT_APP_SERVER_URL}/todo/create/${userID}`,{
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({topic, details})
            })

            const data = await response.json()

            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    const getTodosOfUser = async() => {
      const userID = window.localStorage.getItem("userID")
        try {
            const response = await fetch(`${REACT_APP_SERVER_URL}/todo/${userID}`,)

            const data = await response.json()

            return data.data

        } catch (error) {
            console.log(error)
        }
    }

    const deleteTodo = async (id) => {
      const userID = window.localStorage.getItem("userID")
      const res = await fetch(`${REACT_APP_SERVER_URL}/todo/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userID})
      });
      
      const data = await res.json();
      return data
    }


  return {
    addTodo,
    getTodosOfUser,
    deleteTodo
  }
}

export default useTodo