import Layout from '../components/Layout'
import { skills, experiences, languages, projects } from '../profile'
import Link from "next/link";

const Index = () => (

    <Layout>
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body border-info bg-secondary mb-3">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="/Nelson.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-9">
                            <h1>Nelson Varela S.</h1>
                            <h3>FullStack Developer JR</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos rem facilis, ea facere ut eligendi dolores, qui voluptatibus repudiandae illum! Eligendi numquam similique deserunt doloribus eos soluta unde asperiores.</p>
                            <a href="/hireme">HIRE ME!</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* second section */}
        <div className="row">
            <div className="col-md-4">
                <div className="card bg-light border-info">
                    <div className="card-body">
                        <h1>Skills</h1><h4>Knowledge</h4>

                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-secondary border-info">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({title, description, from, to}, index) =>(
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                   </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="card bg-secondary border-info mt-3">
                    <div className="card-body">
                        <h1>Languages</h1>
                        <ul>
                            {
                                languages.map(({language, level}, index) =>(
                                    <li key={index}>
                                        <h3>{language}</h3>
                                        <h5>{level}</h5>
                                   </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
            
      {/*  portfolio section */}
        <div className="row py-3">
            <div className="col-md-12">
                <div className="card card-body bg-info border-primary">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="mb-4 text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({name, description, image, url}, i) =>(
                                <div className="col-md-4 p2" key={i}>
                                    <div className="card h-100 rounded border-0">
                                        <div className="overflow">
                                        <img className="rounded img-fluid card-img-top" src={`/${image}`} alt=""/>
                                        </div>
                                        <div className="card-body bg-secondary">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href={url}>Visit this website now</a>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                        <div className="col-md-12">
                  <div className="text-center mt-3">
                      <Link href="/portfolio">
                      <a className="btn btn-outline-primary"><h4 className="text-light">More projects</h4></a>
                      </Link>
                  </div>
              </div>
                    </div>
                </div>

              

            </div>
        </div>



    </Layout>
)




export default Index;