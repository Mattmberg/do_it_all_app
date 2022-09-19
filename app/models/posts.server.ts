export async function getPosts() {
    const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    ).then((res) => res.json());
  
    return res.results;
};
  
export async function getPost(title: string | undefined) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.json()
    );
  
    return res;
};

exports.createPost(req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    const post = new Post({
        title: title,
        content: content
    });

    post.save().then(postSaved => {
        res.status(201).json({message: 'Post Created successfully!',
        post: postSaved
        });
    })
    .catch(err => console.log('err', err));
}