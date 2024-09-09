export const SidePageButton = (props) =>
{
    const buttonName = props.name;
    const setViewedComponentString = props.setViewedComponentString


    function switchComponent(event)
    {
        event.preventDefault()
        setViewedComponentString(props.name)
    }
    return(
        <div id="Side_Page_Button" onClick={(event) => {switchComponent(event)}}>
            <div id="Hover_Box">
                {buttonName}
            </div>
        </div>
    )
}