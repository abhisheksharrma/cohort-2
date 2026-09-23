
type ProfilePageProps = {
    params: Promise<{ name: string }>
}

const ProfilePage = async ({ params } : ProfilePageProps) => {

    const users = [
        {
            id: 1,
            name: "John",
            email: "john@test.com",
        },
        {
            id: 2,
            name: "Lisa",
            email: "lisa@test.com",
        },
        {
            id: 3,
            name: "Jacob",
            email: "jacob@test.com",
        }
    ]

    const pageParams = await params;
    const username = pageParams.name;
    // console.log(`profile of user : ${username}`);

    const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase())
    
    if(!user) {
        return (
            <div className="px-20">
                <h1>User not found</h1>
                <p>`The user with {username} does not exist.`</p>
            </div>
        )
    }

  return (
    <div className="px-20">
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
    </div>
  )
}

export default ProfilePage