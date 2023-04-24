import { useAuth0 } from "@auth0/auth0-react"

function useUser() {

    const { user } = useAuth0()
    const { REACT_APP_SERVER_URL } = process.env

    const checkUser = async () => {
        try {
            
            const response = await fetch(`${REACT_APP_SERVER_URL}/user/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: user.name, email: user.email, picture: user.picture})
            })

            const data = await response.json()
            console.log(data);
            window.localStorage.setItem("userID", data.id)

        } catch (error) {
            console.log(error)
        }
    }

  return {
    checkUser
  }
}

export default useUser