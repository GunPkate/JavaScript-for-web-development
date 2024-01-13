
const blogElement = document.getElementById('blog-container')
let blogsRawData = []
let loadingTimeOut

function createBlogHtml(blogs){

    const blogContentElement = blogs.map( (blog) => 
         `
        <div class="flex flex-col md:flex-row gap-6 w-full">
            <img
            src="${blog.imageUrl}"
            alt="feature image 1"
            class="w-full md:w-auto"
            />
            <div class="flex flex-col gap-4 bg-wd-darkgrey p-6 grow">
                <h3 class="text-2xl font-semibold">
                    ${blog.title}
                </h3>
                <p class="text-xl font-light">
                    ${blog.desc}
                </p>
                <p>${blog.publishedDate}</p>
                <a href="${blog.url}">Read more</a>
            </div>
        </div>
    `).join('')
    // console.log(blogElement);
    blogElement.innerHTML = blogContentElement;
}

function searchBlogs(element){
    // console.log(element)
    blogElement.innerHTML = `
        <div class="card">
            <h>Loading ..</h>
        </div>
    `
    clearTimeout(loadingTimeOut)
    loadingTimeOut = setTimeout(() => {
        const filteredBlog = blogsRawData.filter(blog =>
            blog.title.includes(element.value)  ||  
            blog.desc.includes(element.value)  
        )
        console.log(element.value)
        console.log(filteredBlog)
        createBlogHtml(filteredBlog);
    }, 2000);

}

function sortBlogs(element){
    blogElement.innerHTML = `
        <div class="card">
            <h>Loading ..</h>
        </div>
    `
    console.log(element.value)
    const sortedBlog = blogsRawData.sort( (aBlog,bBlog) => {
        let compareDate = new Date(bBlog.publishedDate) - new Date(aBlog.publishedDate) 
        if(element.value == 'desc'){
           compareDate = new Date(aBlog.publishedDate) - new Date(bBlog.publishedDate)
        }
        console.log(compareDate);
        return compareDate
    })
    console.log(sortedBlog)
    createBlogHtml(sortedBlog);
}

// const blog = {
//     "title": "Skooldio",
//     "desc": "E-learning Platform.",
//     "publishedDate":"5/1/2024",
//     "imageUrl": "https://fastly.picsum.photos/id/330/300/200.jpg?hmac=Mgedjxr4HFkIg4070t7FVj5ItNzFR4fqj9ZvbYolFNQ"
// }



async function main () {
    const response = await axios.get('../scripts/blog.json')
    blogsRawData = response.data;

    createBlogHtml(blogsRawData);

    // let ll = document.getElementsByClassName('right-3 cursor-pointer')
    // console.log(ll)
    // setInterval(()=> { ll.click() },5000)
}

main();