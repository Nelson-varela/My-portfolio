import Layout from '../components/Layout'


const Github =({user}) => {
    return (
        <Layout>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card rounded-3 bg-secondary card-body text-center">
                    <h1>{user.name}</h1>
                    <img className="rounded-2 mb-3 " src={user.avatar_url} alt=""/>
                    <p>{user.bio}</p>
                    <a href={user.blog} target="_blank" className="btn btn-outline-dark my-2">My blog</a>
                    <a href={user.html_url} target="_blank" className="btn btn-outline-dark">
                        Go to Github
                    </a>
                </div>
            </div>

        </div>
    </Layout>
    )
}
    
   
   

export async function  getServerSideProps(){

    const res = await fetch('https://api.github.com/users/Nelson-varela')
    const data = await res.json();

    console.log(data)
    return {
        props: {
            user: data
        }
    }
}

export default Github;