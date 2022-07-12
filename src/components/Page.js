import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from 'react-helmet';

function Page(props){
  return(
    <>
      <Helmet
        defaultTitle="Chase Reynolds"
        title={props.title}
        titleTemplate="%s | Chase Reynolds"
        />
      <div className="container">
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default Page