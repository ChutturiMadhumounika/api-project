let allPosts = [];

function loadData() {

document.getElementById("data").innerHTML = `
<div class="text-center">
<div class="spinner-border text-primary"></div>
<p>Loading posts...</p>
</div>
`;

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
allPosts = data;
display(data);
});
}

function display(posts) {

let output = "";

posts.slice(0,12).forEach(p => {
output += `
<div class="col-md-4">
<div class="card p-3 mb-4 bg-white">

<h5 class="fw-bold">${p.title}</h5>
<p class="text-muted">${p.body.substring(0,90)}...</p>

</div>
</div>
`;
});

document.getElementById("data").innerHTML = output;
}

document.getElementById("search").addEventListener("input", function() {

let value = this.value.toLowerCase();

let filtered = allPosts.filter(p =>
p.title.toLowerCase().includes(value)
);

display(filtered);

});