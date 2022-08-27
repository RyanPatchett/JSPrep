const postlistEl = document.querySelector(".post-list")
const id = localStorage.getItem("id");

async function onSearchChange(event){
    const newId = event.target.value
    renderPosts(newId);
}

async function renderPosts(userId){
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`)
    const postsData = await posts.json()
    postlistEl.innerHTML = postsData.map(post => postHTML(post)).join("")
}

function postHTML(post){
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

renderPosts(id);

