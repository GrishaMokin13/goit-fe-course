/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
  
  const body = document.querySelector('body');
  
  const createPostCard = post => {
    const Post = document.createElement('div');
    const PostImage = document.createElement('img');
    const PostBody = document.createElement('div');
    const PostTitle = document.createElement('h2');
    const PostDescription = document.createElement('p');
    const PostLink = document.createElement('p');
  
    Post.classList.add('post');
    PostImage.classList.add('post__image');
    PostBody.classList.add('post__body');
    PostTitle.classList.add('post__title');
    PostDescription.classList.add('post__description');
    PostLink.classList.add('post__link');
  
    PostImage.setAttribute('src', post.img);

    PostTitle.textContent = post.title;
    PostDescription.textContent = post.text;
    PostLink.textContent = post.link;
  
    Post.append(PostImage);
    Post.append(PostBody);
    PostBody.append(PostTitle);
    PostBody.append(PostDescription);
    PostBody.append(PostLink);
    body.appendChild(Post);
  };
  
  const Cards = posts => posts.map( post => createPostCard(post) );
  
  Cards(posts);