export const ListedTechs = () =>
{
    /*This function returns an object that contains all images and file names of all images in a specific folder*/ 
    function importAllImageObjects(path)
    {
        const images = path.keys().map((item) =>
        {
            const filename = item.replace('./', '');
            return {image: path(item), filename : filename}
        }
        )
        return images;
    }

    let imageFilesArray = importAllImageObjects(require.context('../../../Assets/Technology_Images', false, /\.(png|jpe?g|svg)$/)) //import all pngs, jpgs, jpegs and svgs from this path
    const imageNames = imageFilesArray.map(image => {return image.filename}) //get an array of file names
    const imageTitles = imageNames.map(name => {return name.replace(/^\d+|\..*/g, '').replace('_Sharp', '#').replaceAll('_', ' ')}) //turn filenames into titles (several niche usecases tagged on here)
    const imageArray = imageFilesArray.map(image => {return image.image}) //get an array of just the images
    return(
        <div id="Tech_Images_Display">
                            {imageArray.map((image, index) => (
                    <div id="Tech_Image_Box_Container">
                        <div id="Tech_Image_Box_Title"> 
                            {imageTitles[index]} 
                        </div>
                        <img key={index} src={image} alt={`img-${index}`}  id="Tech_Image"/>
                    </div>
                ))}
        </div>
    )
}