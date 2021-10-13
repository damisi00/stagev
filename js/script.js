let galleryOfDogs = [
    {
        name: "Fae",
        breed: "Siberian Husky",
        age: "3 - 6 months",
        gender: "Female",
        price: "#700,000",
        pet_image: 'siberian_husky'
    },
    {
        name: "Blaine",
        breed: "Golden Retriever",
        age: ">1 year",
        gender: "Female",
        price:  '#650,000',
        pet_image: 'golden_retriever'
    },
    {
        name: "Alicia",
        breed: "Chihuahua",
        age:  "6-12 months",
        gender: "Female",
        price: "#450,000",
        pet_image: 'alicia'
    },
    {
        name: "Ash",
        breed: "German Shepherd",
        age:  "1 year",
        gender: "Male",
        price:  '#60,000',
        pet_image: 'ash'
    },
    {
        name: "Marcus",
        breed: "Beagle",
        age:  '3-6 months',
        gender: "Male",
        price: '#600, 000',
        pet_image: 'marcus'
    },
    {
        name: "Matt",
        breed: "Labradoodle",
        age: "6-12 months",
        gender: "Male",
        price: '#600,000',
        pet_image: 'matthew'
    },
    {
        name: "Rocky",
        breed: "Pitbull",
        age: "6-12 months",
        gender: "Male",
        price: '#300,000',
        pet_image: 'pitbull'
    },
    {
        name: "Sven",
        breed: "Terrier",
        age: '6-12 months',
        gender: "Male",
        price: '#900,000',
        pet_image: 'sven'
    },
    {
        name: "Sandy",
        breed: "Collie",
        age: '1 year +',
        gender: "Female",
        price: '#40,000',
        pet_image: 'collie'
    },
    {
        name: "Alex",
        breed: "Golden Doodle",
        age: '1 year +',
        gender: "Male",
        price: '#65,000',
        pet_image: 'golden_doodle'
    },
    {
        name: "Adah",
        breed: "German Shepherd",
        age: '3-6 months',
        gender: "Female",
        price: '60,000',
        pet_image: 'german_shephard'
    },
    {
        name: "Lui",
        breed: "Eskimo",
        age: '6-12 months',
        gender: "Female",
        price: '#100,000',
        pet_image: 'lui'
    }
   
]
// console.log(galleryOfDogs.length)
let gallery = document.getElementById('array');
let html = "";
 galleryOfDogs.forEach(e => {
    html += `
        <div class="col">
            <div class="card h-100 g-2">
                <div class="row g-0">
                    <div class="col-md-4 ">
                        <img src="./images/${e.pet_image}.jpg"  class=" pet_image img-fluid h-100 rounded-start" width="100%">
                    </div>
                    <div class="col-md-8 ">
                        <div class="card-body fs-5 text-success">
                            <h5 class="card-title name"><span class="pe-3">Name:</span>${e.name}</h5>
                            <p class="breed "><span class="pe-3">Breed:</span>${e.breed}</p>
                            <p class=" age "><span class="pe-3">Age:</span>${e.age}</p>
                            <p class="card-text  price"><span class="pe-3 ">Price:</span>${e.price}</p>
                            <p class="card-text gender "><span class="text-muted pe-3">Gender:</span>${e.gender}</p>
                            <button type="button" class="btn btn-sm btn-outline-danger  px-3 py-2 ">Interested</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    console.log(e);
    gallery.innerHTML = html
})