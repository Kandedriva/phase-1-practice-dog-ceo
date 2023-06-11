console.log('%c HI', 'color: firebrick')




fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(images => {
    console.log(images);

    const allImages = images.message;
    const renderImage = document.getElementById("dog-image-container");
    allImages.forEach(image => {
        const newImage = document.createElement("img");
        newImage.setAttribute("src", image);
        renderImage.appendChild(newImage);
        
    });

})

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(breed =>{
    console.log(breed);
    const dogBreeds = document.getElementById("dog-breeds");
    const breedNames = Object.keys(breed.message);

    breedNames.forEach(breedName =>{
        const listOfDogBreed = document.createElement("li");
        listOfDogBreed.textContent = breedName;
        dogBreeds.appendChild(listOfDogBreed)
        console.log(listOfDogBreed)
        listOfDogBreed.addEventListener("click", () =>{
            listOfDogBreed.style.color  = "green"
            setTimeout( () =>{
                listOfDogBreed.style.color  = ""

            }, 1000)
        })
     
    })
    const dropDwonList = document.getElementById("breed-dropdown")
    dropDwonList.addEventListener("change", () =>{
        const selectedLetter = dropDwonList.value;
        const allBreeds = dogBreeds.querySelectorAll("li");
        allBreeds.forEach(breed =>{
            const breedName = breed.textContent.trim();
            if(breedName.startsWith(selectedLetter)){
                breed.style.display = ""
            }else{
                breed.style.display = "none"
            }

        })


    })


})

