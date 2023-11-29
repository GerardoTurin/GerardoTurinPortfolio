import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Skills from "../../components/Skills";

const About = () => {
    return (
        <>
            <main className="about container">
                {/* Display the page header */}
                <PageHeader title="About me" description="Let me introduce myself" />
                <div className="row">
                    <AboutMe />
                </div>
                <div className="skill container row">
                    <Skills />
                </div>
            </main>
            <Footer />
        </>
    )
};

export default About;