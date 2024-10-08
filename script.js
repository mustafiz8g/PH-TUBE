

function getTimeString (time){
    //get hour and rest seconds
    const hour = parseInt(time/3600);
    let remaingSecond = time % 3600
    let remaingMinit = parseInt(remaingSecond / 60)
    remaingSecond  = remaingSecond  % 60;
    return `${hour} hour ${remaingMinit} minit ${remaingSecond} second ago`
}

/// fetch load and show catergoried on html
// crate loadCategoried

const loadCategories = () =>{
    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then( res => res.json())
    .then( data => displayCategories(data.
        categories))
    .catch(error => console.log(error))
}

const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))

}

const cardDemo = 
    {
        "category_id": "1001",
        "video_id": "aaad",
        "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
        "title": "Smells Like Teen Spirit",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
                "profile_name": "Oliver Harris",
                "verified": true
            }
        ],
        "others": {
            "views": "5.4K",
            "posted_date": "1672656000"
        },
        "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
    }

// create display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach(item => {
        // create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;
        categoryContainer.append(button)
    });
    
}

displayVideos = (videos) =>{
  const videosContainer = document.getElementById('videos')
  videos.forEach(video => {
    console.log(video)

    const card = document.createElement('div')
    card.classList = "card card-compact"
    card.innerHTML = `
  
 <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" /> 
      ${
        video.others.posted_date?.length == 0 ? "" : ` <span class =" absolute right-8 bottom-8 text-white bg-black rounded p-1"> ${getTimeString(video.others.posted_date)} </span>`
      }
     
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div> 
     <img class = " w-10 h-10 rounded-full object-cover" src = "${video.authors[0].profile_picture}" />
    </div>
    <div>
     <h2 class = " font-bold" >${video.title}</h2>
  
    <div class = "flex items-center gap-2">
    <p class = "text-gray-400">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified == true ? '  <img class="w-4" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : ''}
    </div>
    </div>
    <p> </p>


  </div>

    `
  videosContainer.append(card)
  })
}

loadCategories()
loadVideos()
