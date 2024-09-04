export const Home = () =>
{
    const jacePortrait = require(`../../Assets/Images/Jace_Portrait.jpg`);
    return(
        <div id="Whole_Home_Container_Div" className='Container_Box'>
            <div id="Welcome_Div">
                WELCOME!
            </div>
            <div id="Middle_Content_Details_Container">
                <p id="Description_Div">
                    My name is Jace Weerawardena,
                    I am an aspiring software engineer.
                    Welcome to my portfolio website, to
                    get started navigate my work and details
                    via the sidebar.
                </p>
                <div id="Jace_Portrait_Container_Div" className="Picture_Border">
                    <img id="Portrait" src={jacePortrait} alt="A portrait of the web developer"/>
                </div>
            </div>
            <div id="Enjoy_Div">
                I hope you enjoy my website!
            </div>
        </div>
    )
}