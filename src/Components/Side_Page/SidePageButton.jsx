export const SidePageButton = (props) =>
{
    const buttonName = props.name;
    return(
        <div id="Side_Page_Button">
            <div id="Hover_Box">
                {buttonName}
            </div>
        </div>
    )
}