export const Contacts = () =>
{
    const jacePortrait = require(`../../Assets/Images/Jace_Portrait.jpg`);

    return(
        <div id="Whole_Contacts_Container_Div" className='Container_Box'>
            <div id="Contact_Information_Container">
                <p id="Contact_Details_Paragraph">
                    Email: 2350485@swansea.ac.uk<br />
                    Phone Number: 07557301204 <br />
                    LinkedIn: https://www.linkedin.com/in/jace-weerawardena-2b350a220/ <br />
                    Github: https://github.com/crypticalfish86 <br />
                </p>
            </div>
            <div id="Thankyou_Container">
                <div id="Thankyou">
                    Thanks for Visiting!
                </div>
            </div>
            <div id="Contact_Portrait_Container" className="Picture_Border">
                    <img id="Contact_Portrait" src={jacePortrait} alt="A portrait of the web developer"/>
            </div>
        </div>
    )
}