let dataInject = document.getElementById("dataInject")
apiUrl = 'https://api.nasa.gov'
apiEndpoint = '/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-3&page=1'
apiKey = '&api_key=Demo_Key'


fetchFunction(apiUrl + apiEndpoint + apiKey)

async function fetchFunction(url) {
    const response = await fetch(url);
    if (response.ok) {
        let jsonData = await response.json();

        if (Array.isArray(jsonData.photos)) {
            jsonData.photos.forEach(photo => displayData(photo))
        }
    } else {
        doesNotExist()
    }
}








// These funcitons below will generate our elements
function displayData(data) {

    //Image
    let imgCol = document.createElement("div")
    imgCol.className = "col-12 text-center"

    let img = document.createElement("img")
    img.setAttribute('src', data.img_src)
    img.className = "img-fluid maxHeigth";

    imgCol.appendChild(img)


    //Text
    let textCol = document.createElement('div');
    textCol.className = "col-12 text-center";

    let cameraType = document.createElement('h2')
    cameraType.innerText = "View: " + data.camera.full_name

    let roverName = document.createElement('h3')
    roverName.innerText = "Rover: " + data.rover.name

    let roverStatus = document.createElement('h3')
    roverStatus.innerText = "Status: " + data.rover.status

    textCol.appendChild(cameraType);
    textCol.appendChild(roverName);
    textCol.appendChild(roverStatus);

    //putting the pieces together

    dataInject.appendChild(imgCol);
    dataInject.appendChild(textCol);
    dataInject.appendChild(document.createElement('hr'));

}

function doesNotExist()
{
    let textCol = document.createElement('div');
    textCol.className = "col-12 text-center";

    let text = document.createElement('h2')
    text.innerText = "No Data Found"
    textCol.appendChild(text);
    dataInject.appendChild(textCol);
}
