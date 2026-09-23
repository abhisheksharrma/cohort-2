type ProfilePageAgeProps = {
    params: Promise<{name: string, age: string}>;
}

export default async function ProfilePage( {params} : ProfilePageAgeProps ) {
    const pageParams = await params

    const username = pageParams.name
    const userage = pageParams.age

    const users = [
        {
            id: 1,
            name: "John",
            email: "john@test.com",
            age: 21,
        },
        {
            id: 2,
            name: "Lisa",
            email: "lisa@test.com",
            age: 25,
        },
        {
            id: 3,
            name: "Jacob",
            email: "jacob@test.com",
            age: 27,
        }
    ]

    const user = users.find(
        user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase() && 
        user.age.toString() === userage
    )
    console.log(user)
    return (
        <>
            <div className="px-20">
                <h1>{user?.name} &apos;s Profile Page</h1>
                <p>Email: {user?.email}</p>
                <p>Age: {user?.age}</p>
            </div>
        </>
    )
}